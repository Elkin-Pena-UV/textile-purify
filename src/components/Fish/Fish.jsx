/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { MeshStandardMaterial, LoopRepeat } from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { RigidBody } from "@react-three/rapier";
import { useCallback } from "react";
const Fish = (props) => {
  const group = useRef();
  const { nodes, animations } = useGLTF("models-3d/fish.glb");
  const { actions } = useAnimations(animations, group);
  const position = useRef([0, 1, 0]);
  const keysPressed = useRef({});
  const rbFisfRef = useRef();
  useEffect(() => {
    const handleKeyDown = (event) => {
      keysPressed.current[event.code] = true;
    };

    const handleKeyUp = (event) => {
      keysPressed.current[event.code] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame((state, delta) => {
    const movement = { x: 0, z: 0 };
    if (keysPressed.current["ArrowUp"] || keysPressed.current["KeyW"]) {
      movement.z -= 1;
    }
    if (keysPressed.current["ArrowDown"] || keysPressed.current["KeyS"]) {
      movement.z += 1;
    }
    if (keysPressed.current["ArrowLeft"] || keysPressed.current["KeyA"]) {
      movement.x -= 1;
    }
    if (keysPressed.current["ArrowRight"] || keysPressed.current["KeyD"]) {
      movement.x += 1;
    }

    const length = Math.sqrt(movement.x ** 2 + movement.z ** 2);
    if (length > 0) {
      movement.x /= length;
      movement.z /= length;
    }

    const speed = 15;
    position.current[0] += movement.x * delta * speed;
    position.current[2] += movement.z * delta * speed;

    if (length > 0) {
      const targetRotation = Math.atan2(movement.x, movement.z);
      if (group.current) {
        group.current.rotation.y =
          group.current.rotation.y +
          (targetRotation - group.current.rotation.y) * 0.1;
      }
    }

    if (group.current) {
      group.current.position.set(...position.current);
    }
  });

  useEffect(() => {
    if (actions && animations.length > 0) {
      const action = actions["KeyAction"];
      action.setLoop(LoopRepeat, Infinity);
      action.clampWhenFinished = true;
      action.timeScale = 2.0;
      action.play();
    }
    return () => {
      actions?.["KeyAction"]?.stop();
    };
  }, [actions, animations]);

  const fishTexture = useTexture("/materials/fish/basecolorFish.jpg");
  const normalMap = useTexture("/materials/fish/normalFIsh.jpg");

  const fishMaterial = useMemo(() => {
    return new MeshStandardMaterial({
      map: fishTexture,
      normalMap: normalMap,
      metalness: 0.8,
      roughness: 1.0,
    });
  }, [fishTexture, normalMap]);

  // const handleFish = () => {
  //   alert(
  //     "Detrás de cada prenda hay un impacto: elige marcas que respeten el agua y el medio ambiente."
  //   );
  // };

  const handleSFish = useCallback(() => {
    rbFisfRef.current.applyImpulse({ x: 0, y: 20, z: -5 }, true);
  }, []);

  return (
    <RigidBody colliders="cuboid" type="kinematicVelocity" ref={rbFisfRef}>
      <group ref={group} {...props} dispose={null} onClick={handleSFish}>
        <group name="Scene">
          <mesh
            name="fish"
            castShadow
            receiveShadow
            geometry={nodes.fish.geometry}
            material={fishMaterial}
            morphTargetDictionary={nodes.fish.morphTargetDictionary}
            morphTargetInfluences={nodes.fish.morphTargetInfluences}
            position={[-1, 0.1, 0]}
            rotation={[Math.PI, 1.5, Math.PI]}
            
          />
        </group>
      </group>
    </RigidBody>
  );
};

export default Fish;
useGLTF.preload("models-3d/fish.glb");
