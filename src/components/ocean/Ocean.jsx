import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Ocean = (props) => {
  const { nodes, materials} = useGLTF("models-3d/Ocean.glb");
  const refOcean = useRef();

  return (
    <>
      <RigidBody ref={refOcean} type="fixed" colliders={"trimesh"}>
        <group {...props} dispose={null}>
          <group name="Scene">
            <group name="WorldOcean">
              <group name="Ocean">
                <group name="Floor">
                  <mesh
                    name="Floor001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Floor001.geometry}
                    material={materials.material}
                  />
                </group>

                <group name="Water">
                  <mesh
                    name="Water1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Water1.geometry}
                    material={materials.surface}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </RigidBody>
    </>
  );
};

export default Ocean;

useGLTF.preload("models-3d/Ocean.glb");
