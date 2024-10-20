/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const Fish = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/fish.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions["swim"]) {
      actions["swim"].reset().fadeIn(0.5).play();
    }
  }, [actions]);

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
                  material={materials.SimplygonCastMaterial}
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
