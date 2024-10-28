/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { MeshStandardMaterial, DoubleSide, Vector3 } from "three";
const Fish = (props) => {
  const group = useRef();
  const { nodes, animations } = useGLTF("models-3d/fish.glb");
  const { actions } = useAnimations(animations, group);

  const PATH = useMemo(() => "/materials/fish/", []);

  const fishTexture = useTexture({
    map: PATH + "Basecolor_color.jpeg",
    normalMap: PATH + "koifishnormal_(1).jpg",
  });

  const fishMaterial = useMemo(() => {
    return new MeshStandardMaterial({
      map: fishTexture.map,
      normalMap: fishTexture.normalMap,
      metalness: 0.8,
      roughness: 1.8,
      side: DoubleSide,
    });
  }, [fishTexture]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Fish"
          geometry={nodes.Fish.geometry}
          scale={[1, 1, 1]}
          material={fishMaterial}
          position={[0, 0, 0]}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  );
};

export default Fish;
