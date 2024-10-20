/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
const Turtle = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/turtle.glb");
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        >
          <group
            name="65da75f46dd245e49f6cb513d196054ffbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.pasted__tortugaRetopo1_blinn}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="Object_6" />
                  <group name="group">
                    <group name="pasted__tortugaRetopo1" />
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

export default Turtle;
useGLTF.preload("models-3d/turtle.glb");
