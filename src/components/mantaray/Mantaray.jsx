import React, { useCallback, useEffect, useRef } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

const Mantaray = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/Mantaray.glb");
  const { actions } = useAnimations(animations, group);
  const [sub] = useKeyboardControls();
  const rbMantarayRef = useRef();

  useEffect(() => {
    if (actions) {
      const swimAnimation = actions["swim"];
      if (swimAnimation) {
        swimAnimation.play();
      }
    }
  }, [actions]);

  const movement = useRef({
    forward: false,
    back: false,
    left: false,
    right: false,
  });

  useEffect(() => {
    const unsubForward = sub(
      (state) => state.forward,
      (pressed) => {
        movement.current.forward = pressed;
      }
    );
    const unsubBack = sub(
      (state) => state.back,
      (pressed) => {
        movement.current.back = pressed;
      }
    );
    const unsubLeft = sub(
      (state) => state.left,
      (pressed) => {
        movement.current.left = pressed;
      }
    );
    const unsubRight = sub(
      (state) => state.right,
      (pressed) => {
        movement.current.right = pressed;
      }
    );

    return () => {
      unsubForward();
      unsubBack();
      unsubLeft();
      unsubRight();
    };
  }, [sub]);

  useFrame((state, delta) => {
    if (group.current) {
      const position = group.current.position;

      if (movement.current.forward) position.z -= 0.1;
      if (movement.current.back) position.z += 0.1;
      if (movement.current.left) position.x -= 0.1;
      if (movement.current.right) position.x += 0.1;

      const movementVector = { x: 0, z: 0 };
      if (movement.current.forward) movementVector.z -= 0.1;
      if (movement.current.back) movementVector.z += 0.1;
      if (movement.current.left) movementVector.x -= 0.1;
      if (movement.current.right) movementVector.x += 0.1;

      const length = Math.sqrt(movementVector.x ** 2 + movementVector.z ** 2);
      if (length > 0) {
        movementVector.x /= length;
        movementVector.z /= length;
      }

      if (length > 0) {
        const targetRotation = Math.atan2(movementVector.x, movementVector.z);
        group.current.rotation.y +=
          (targetRotation - group.current.rotation.y) * 0.1;
      }
    }
  });

  const handleMantaray = useCallback(() => {

    rbMantarayRef.current.applyImpulse({ x: 0, y: 6, z: -5 }, true);



  }, []);
  return (
    <RigidBody ref={rbMantarayRef} type="dynamic">
      <group
        ref={group}
        {...props}
        dispose={null}
        scale={[0.2, 0.2, 0.2]}
        rotation={[0, 0, 0]}
        position={[0, 3, 3]}
        onClick={handleMantaray}
      >
        <group name="Scene">
          <group name="Sketchfab_model">
            <group name="0856c91715a543628323a9341837db4afbx">
              <group name="Object_2">
                <group name="RootNode">
                  <group name="back">
                    <group name="Object_22" />
                  </group>
                  <group name="mantaback">
                    <group name="Object_17" />
                  </group>
                  <group name="mantabottom">
                    <group name="Object_19" />
                  </group>
                  <group name="mantapolySurface3">
                    <group name="mantapolySurface4">
                      <group name="mantatransform5" />
                    </group>
                    <group name="mantapolySurface5">
                      <group name="mantatransform6" />
                    </group>
                    <group name="mantatransform4" />
                  </group>
                  <group name="mantapPlane2">
                    <group name="mantapolySurface1">
                      <group name="mantatransform3" />
                    </group>
                    <group name="mantapolySurface2">
                      <group name="mantatransform2" />
                    </group>
                    <group name="mantatransform1" />
                  </group>
                  <group name="mantapPlane3" />
                  <group name="vesmanta">
                    <group name="Object_24">
                      <group name="cluster10Handle" />
                      <group name="cluster11Handle" />
                      <group name="cluster12Handle" />
                      <group name="cluster13Handle" />
                      <group name="cluster15Handle" />
                      <group name="cluster17Handle" />
                      <group name="cluster18Handle" />
                      <group name="cluster22Handle" />
                      <group name="cluster24Handle" />
                      <group name="cluster25Handle" />
                      <group name="cluster27Handle" />
                      <group name="cluster30Handle" />
                      <group name="cluster31Handle" />
                      <group name="cluster33Handle" />
                      <group name="cluster35Handle" />
                      <group name="cluster7Handle" />
                      <group name="cluster8Handle" />
                      <group name="cluster9Handle" />
                      <group
                        name="hvost"
                        position={[5.557, -4.436, -102.499]}
                        rotation={[1.657, 0, 0]}
                      >
                        <group name="cluster2Handle" />
                      </group>
                      <group name="ikHandle1" />
                      <group name="ikHandle10" />
                      <group name="ikHandle11" />
                      <group name="ikHandle12" />
                      <group name="ikHandle13" />
                      <group name="ikHandle2" />
                      <group name="ikHandle3" />
                      <group name="ikHandle4" />
                      <group name="ikHandle5" />
                      <group name="ikHandle6" />
                      <group name="ikHandle7" />
                      <group name="ikHandle8" />
                      <group name="ikHandle9" />
                      <group name="levii_us" position={[0.942, 0, -0.581]}>
                        <group name="cluster6Handle" />
                      </group>
                      <group name="levoekrilo" position={[-49.854, 13.278, 0]}>
                        <group name="cluster3Handle" />
                      </group>
                      <group name="nurbsCircle1" position={[2.247, 0, -13.415]}>
                        <group name="cluster20Handle" />
                      </group>
                      <group name="nurbsCircle2" position={[9.349, 0, -11.493]}>
                        <group name="cluster19Handle" />
                      </group>
                      <group
                        name="nurbsCircle3"
                        position={[9.301, -124.597, 11.681]}
                      >
                        <group name="cluster16Handle" />
                      </group>
                      <group
                        name="nurbsCircle4"
                        position={[-8.882, -129.008, 17.824]}
                      >
                        <group name="cluster14Handle" />
                      </group>
                      <group name="Object_26" />
                      <skinnedMesh
                        name="Object_27"
                        geometry={nodes.Object_27.geometry}
                        material={materials.lambert1}
                        skeleton={nodes.Object_27.skeleton}
                        castShadow
                        receiveShadow
                      />
                      <group
                        name="popa"
                        position={[4.925, -2.13, -58.912]}
                        rotation={[1.539, 0, 0]}
                      >
                        <group name="cluster1Handle" />
                        <group
                          name="nurbsCircle10"
                          position={[-4.607, -36.787, -5.031]}
                          rotation={[-2.066, 0.352, 0.2]}
                        >
                          <group name="cluster21Handle" />
                        </group>
                        <group name="nurbsCircle11">
                          <group name="cluster26Handle" />
                        </group>
                        <group name="nurbsCircle12">
                          <group name="cluster23Handle" />
                        </group>
                        <group name="nurbsCircle5">
                          <group name="cluster32Handle" />
                        </group>
                        <group name="nurbsCircle6">
                          <group name="cluster36Handle" />
                        </group>
                        <group name="nurbsCircle7">
                          <group name="cluster29Handle" />
                        </group>
                        <group name="nurbsCircle8">
                          <group name="cluster34Handle" />
                        </group>
                        <group
                          name="nurbsCircle9"
                          position={[5.911, -37.562, -5.729]}
                          rotation={[-2.055, 0.137, -0.2]}
                        >
                          <group name="cluster28Handle" />
                        </group>
                      </group>
                      <group name="pravii_us" position={[1.581, 0, 2.467]}>
                        <group name="cluster5Handle" />
                      </group>
                      <group name="pravoekrilo" position={[54.808, 14.169, 0]}>
                        <group name="cluster4Handle" />
                      </group>
                      <primitive object={nodes._rootJoint} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

export default Mantaray;

useGLTF.preload("models-3d/Mantaray.glb");
