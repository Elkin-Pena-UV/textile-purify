/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useRef, useEffect, useMemo } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { MeshStandardMaterial, DoubleSide } from "three";
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
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="koifish_0"
                position={[-0.268, 0, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              >
                <mesh
                  name="mesh_0"
                  geometry={nodes.mesh_0.geometry}
                  material={fishMaterial}
                  morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Fish;
