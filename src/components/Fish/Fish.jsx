/* eslint-disable react/no-unknown-property */
import { useRef, useMemo, useEffect } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { MeshStandardMaterial, LoopRepeat } from "three";

const Fish = (props) => {
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
  }, [actions, animations]);

  const PATH = useMemo(() => "/materials/fish/", []);
  const fishTexture = useTexture({
    map: PATH + "basecolorFish.jpg",
    normalMap: PATH + "normalFIsh.jpg",
  });

  const fishMaterial = useMemo(() => {
    return new MeshStandardMaterial({
      map: fishTexture.map,
      normalMap: fishTexture.normalMap,
      metalness: 0.8,
      roughness: 1.0,
    });
  }, [fishTexture]);

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
        />
      </group>
    </group>
  );
};

export default Fish;
