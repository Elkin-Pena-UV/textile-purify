import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const TurtleSkeleton = (props) => {
  const { nodes, materials } = useGLTF("models-3d/TurtleSkeleton.glb");

  return (
    <group {...props} dispose={null}>
    <group name="Sketchfab_Scene">
      <group
        name="Sketchfab_model"
>
        <group name="tortuga3objcleanermaterialmergergles">
          <mesh
            name="Object_2"
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.texture}
          />
          <mesh
            name="Object_3"
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.texture}
          />
          <mesh
            name="Object_4"
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.texture}
          />
          <mesh
            name="Object_5"
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.texture}
          />
          <mesh
            name="Object_6"
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.texture}
          />
          <mesh
            name="Object_7"
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.texture}
          />
          <mesh
            name="Object_8"
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.texture}
          />
          <mesh
            name="Object_9"
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.texture}
          />
          <mesh
            name="Object_10"
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.texture}
          />
        </group>
      </group>
    </group>
  </group>
  );
};

export default TurtleSkeleton;
useGLTF.preload("models-3d/TurtleSkeleton.glb");
