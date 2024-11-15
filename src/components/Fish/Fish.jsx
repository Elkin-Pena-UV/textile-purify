/* eslint-disable react/no-unknown-property */
import React, { useRef, useMemo, useEffect, Suspense } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { MeshStandardMaterial, LoopRepeat } from "three";

const Fish = React.memo((props) => {
  const group = useRef();
  const { nodes, animations } = useGLTF("models-3d/fish.glb", true);
  const { actions } = useAnimations(animations, group);

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

  const handleFish = () => {
    alert(
      "Detrás de cada prenda hay un impacto: elige marcas que respeten el agua y el medio ambiente."
    );
  };

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="fish"
          castShadow
          receiveShadow
          geometry={nodes.fish.geometry}
          material={fishMaterial}
          morphTargetDictionary={nodes.fish.morphTargetDictionary}
          morphTargetInfluences={nodes.fish.morphTargetInfluences}
          position={[-1, -1, 0]}
          rotation={[Math.PI, 1.5, Math.PI]}
          onClick={handleFish}
        />
      </group>
    </group>
  );
});

export default (props) => (
  <Suspense >
    <Fish {...props} />
  </Suspense>
);
