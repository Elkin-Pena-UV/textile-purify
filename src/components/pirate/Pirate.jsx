import { useAnimations, useGLTF } from "@react-three/drei";
import { useCallback, useEffect, useRef, useState } from "react";

const Pirate = (props) => {
  const pirateRef = useRef();
  const { nodes, materials } = useGLTF("models-3d/pirate.glb");
 
  return (
    <group {...props} dispose={null} ref={pirateRef} scale={0.01} rotation={[-Math.PI / -0.2, -0.4, 9.43]}>
    <group name="Sketchfab_Scene">
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
        <group name="JackSparrowfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="RootNode">
            <group name="jack_sparrow_lod0" rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                name="jack_sparrow_lod0_jack_sparrow_mat_0"
                castShadow
                receiveShadow
                geometry={nodes.jack_sparrow_lod0_jack_sparrow_mat_0.geometry}
                material={materials.jack_sparrow_mat}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  </group>
  );
};

export default Pirate;
useGLTF.preload("models-3d/pirate.glb");
