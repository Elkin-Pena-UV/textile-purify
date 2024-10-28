/* eslint-disable react/no-unknown-property */
import { useRef, useEffect, useMemo } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

const Fish = (props) => {
  const group = useRef();
  const { nodes, animations } = useGLTF("models-3d/fish.glb");
  const { actions } = useAnimations(animations, group);

  const PATH = useMemo(() => "/materials/fish/", []);

  const fishTexture = useTexture({
    map: PATH + "Basecolor_color.jpeg",
    normalMap: PATH + "koifishnormal_(1).jpg",
  });

  console.log(fishTexture.map, fishTexture.normalMap);

  const fishMaterial = useMemo(() => {
    return new MeshStandardMaterial({
      map: fishTexture.map,
      normalMap: fishTexture.normalMap,
      metalness: 0.8,
      roughness: 1.8,
    });
  }, [fishTexture]);

  useEffect(() => {
    if (actions && actions["swim"]) {
      actions["swim"].reset().fadeIn(0.5).play();
    }
    if (actions && actions["tailWiggle"]) {
      actions["tailWiggle"].reset().fadeIn(0.5).play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Fish"
          geometry={nodes.Fish.geometry}
          material={fishMaterial} 
          rotation={[Math.PI, 0, Math.PI]}
          castShadow
          
        />
      </group>
    </group>
  );
};

export default Fish;
