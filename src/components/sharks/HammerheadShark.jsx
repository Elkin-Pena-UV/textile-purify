import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const HammerheadShark = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models-3d/hammerHeadshark.glb"
  );

  const { actions } = useAnimations(animations, group);

  //name of the animations in the gltf file, change the name of the animation to the one you want to use, you must change it in const animation = actions[""];
  // 1.Attacking
  // 2.Attacking_shake
  // 3.Attacking_Shake_Loop
  // 4.AttackingFromLeft
  // 5.AttackingFromRight
  // 6.Idle
  // 7.Swimming
  // 8.Swimming_D
  // 9.Swimming_L
  // 10.Swimming_U
  // 11.Swimming_R

  useEffect(() => {
    if (actions) {
      const animation = actions["Swimming"];
      if (animation) {
        animation.play();
      }
    }
  }, [actions]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[0.1, 0.1, 0.1]}
      castShadow
      receiveShadow
    >
      <group name="Scene" castShadow receiveShadow>
        <group name="HeadHammerSharkRig" castShadow receiveShadow>
          <skinnedMesh
            name="HeadHammerShark"
            geometry={nodes.HeadHammerShark.geometry}
            material={materials.SharkHeadHammer}
            skeleton={nodes.HeadHammerShark.skeleton}
            castShadow
            receiveShadow
          />
          <primitive object={nodes.CO} castShadow receiveShadow />
          <primitive object={nodes["ORG-torso"]} castShadow receiveShadow />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("models-3d/hammerHeadshark.glb");

export default HammerheadShark;
