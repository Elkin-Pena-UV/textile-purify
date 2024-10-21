/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const Beach = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/beach.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions["swim"]) {
      actions["swim"].play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-1.566, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Mesh_0_0"
                position={[-0.058, 0.029, -0.347]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials["598f6ea1"]}
                />
              </group>
              <group
                name="Mesh_1_1"
                position={[-0.058, -0.058, -0.09]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[4.681, 4.66, 4.66]}
              >
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials["598f6ea1_1"]}
                />
              </group>
              <group
                name="RootNode0_36"
                position={[-0.137, 0.063, 0.017]}
                rotation={[-Math.PI, 1.321, -Math.PI]}
                scale={0.007}
              >
                <group name="skeletal3_35" scale={0.004}>
                  <group name="GLTF_created_0">
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials["Material.002"]}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <group name="shark2_34" />
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Beach;
useGLTF.preload("models-3d/Beach.glb");
