import { useAnimations, useGLTF, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useCallback, useEffect, useRef} from "react";
import * as THREE from "three";

const BigShark = (props) => {
  const sharkRef = useRef();
  const rbSharkRef = useRef();

  const { nodes, materials, animations } = useGLTF("models-3d/big-shark.glb");

  const { actions } = useAnimations(animations, sharkRef);

  useEffect(() => {
    if (actions) {
      console.log(Object.keys(actions));
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.play();
      }
    }
  }, [actions]);

  const [sub, get] = useKeyboardControls();

  useEffect(() => {
    return sub(
      (state) => state.forward,
      (state) => state.back,
      (state) => state.left,
      (state) => state.right
    );
  });

  const handleSharkMovement = useCallback(() => {
    const { forward, back, left, right } = get();

    if (forward){
      rbSharkRef.current.applyImpulse({x:0, y:0, z:-0.5}, true);
      sharkRef.current.rotation.y = -3
    }
    if(back){
      rbSharkRef.current.applyImpulse({x:0, y:0, z:0.5}, true);
      sharkRef.current.rotation.y = 0
    }
    if(left){
      rbSharkRef.current.applyImpulse({x:-0.5, y:0, z:0}, true);
      sharkRef.current.rotation.y = -Math.PI / 2
    }
    if(right){
      rbSharkRef.current.applyImpulse({x:0.5, y:0, z:0}, true);
      sharkRef.current.rotation.y = Math.PI / 2
    }
    
  });
  
  useFrame((_state) => {  
    handleSharkMovement();
  })
  
  const handleShark = useCallback(()=>{
      rbSharkRef.current.applyImpulse({x:0, y:20, z:-5}, true);
  },[])


  return (
    <RigidBody name="rbShark" ref={rbSharkRef} type="dynamic" onCollisionEnter={({manifold, target, other})=>{
      if(other.rigidBodyObject.name === "rbWoodenSign"){
        console.log("Shark collided with wooden sign");}
    }}>
    <group ref={sharkRef} {...props} dispose={null} onClick={handleShark} castShadow>
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
            <group
              name="Hemi"
              position={[0.001, -0.866, 0.383]}
              castShadow
              receiveShadow
            >
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
    </RigidBody>
  );
};

export default BigShark;
