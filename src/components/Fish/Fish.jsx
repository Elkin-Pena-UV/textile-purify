/* eslint-disable react/no-unknown-property */
import { useRef, useMemo, useEffect } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { MeshStandardMaterial, LoopRepeat } from "three";

const Fish = (props) => {
  const group = useRef();
  const { nodes, animations } = useGLTF("models-3d/fish.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animations.length > 0) {
      const action = actions[animations[0].name];
      action.setLoop(LoopRepeat, Infinity);
      action.clampWhenFinished = false; 
      action.timeScale = 1.3;
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
    <group ref={group} {...props} dispose={null} >
      <group name="Scene">
        <mesh
          name="Fish"
          castShadow
          receiveShadow={false}
          geometry={nodes.Fish.geometry}
          material={fishMaterial}
          morphTargetDictionary={nodes.Fish.morphTargetDictionary}
          morphTargetInfluences={nodes.Fish.morphTargetInfluences}
          position={[-0.268, -1, 0]}
          rotation={[Math.PI, 5, Math.PI]}
        />
      </group>
    </group>
  );
};

export default Fish;
