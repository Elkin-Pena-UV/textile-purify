import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const BigShark = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/big-shark.glb");
  const { actions } = useAnimations(animations, group);
  console.log(actions);
  useEffect(()=> {
    if(actions){
        console.log(Object.keys(actions));
        const action = actions[Object.keys(actions)[0]];
        if(action){
            action.play();
        }
    }
  },[actions]);
  return (
     <group ref={group} {...props} dispose={null} castShadow>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.947}
          castShadow
          receiveShadow
        >
          <group name="Root" castShadow receiveShadow>
            <group
              name="Armature"
              position={[-0.22, -0.554, -0.068]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.646}
              castShadow
              receiveShadow
            >
              <group
                name="Group17928"
                position={[0.34, 0.105, -0.857]}
                scale={1.548}
                castShadow
                receiveShadow
              />
              <skinnedMesh
                name="Group17928_0"
                geometry={nodes.Group17928_0.geometry}
                material={materials["Material.001"]}
                skeleton={nodes.Group17928_0.skeleton}
                castShadow
                receiveShadow
              />
              <group
                name="Group18738"
                position={[0.34, 0.105, -0.857]}
                scale={1.548}
                castShadow
                receiveShadow
              />
              <skinnedMesh
                name="Group18738_0"
                geometry={nodes.Group18738_0.geometry}
                material={materials["defaultMat.011"]}
                skeleton={nodes.Group18738_0.skeleton}
                castShadow
                receiveShadow
              />
              <group
                name="Group24597"
                position={[0.34, 0.105, -0.857]}
                scale={1.548}
                castShadow
                receiveShadow
              />
              <skinnedMesh
                name="Group24597_0"
                geometry={nodes.Group24597_0.geometry}
                material={materials["defaultMat.008"]}
                skeleton={nodes.Group24597_0.skeleton}
                castShadow
                receiveShadow
              />
              <group
                name="Group45008"
                position={[-0.352, 0.435, 0.138]}
                scale={0.374}
                castShadow
                receiveShadow
              />
              <skinnedMesh
                name="Group45008_0"
                geometry={nodes.Group45008_0.geometry}
                material={materials["defaultMat.004"]}
                skeleton={nodes.Group45008_0.skeleton}
                castShadow
                receiveShadow
              />
              <primitive object={nodes.Armature_rootJoint} />
            </group>
            <group name="Hemi" position={[0.001, -0.866, 0.383]} castShadow receiveShadow>
              <group name="Hemi001" />
            </group>
            <group
              name="Lamp"
              position={[4.076, 1.005, 5.904]}
              rotation={[-0.268, 0.602, 1.931]}
              castShadow
              receiveShadow
            >
              <group name="Lamp001" />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default BigShark;
