import { useAnimations, useGLTF } from '@react-three/drei'
import { useCallback, useEffect, useRef, useState } from 'react'

const Pirate2 = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('models-3d/pirate2.glb')
    const { actions } = useAnimations(animations, group)

    const [currentAction, setCurrentAction] = useState("Walking_");
    
      const handlepPirate = useCallback(() => {
        setCurrentAction("Scratch");
      }, []);
      
      useEffect(() => {
        if (actions) {
          console.log(Object.keys(actions));
          const action = actions[Object.keys(actions)[0]];
          if (action) {
            action.play();
          }
        }
      }, [actions]);

  return (
    <group ref={group} {...props} dispose={null} position={[0, 0.3, 0]} rotation={[-Math.PI / -0.2, -0.4, 9.43]}>
    <group name="Scene">
      <group name="Pirate" rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <skinnedMesh
          name="Arm"
          geometry={nodes.Arm.geometry}
          material={materials['M_Pirate.001']}
          skeleton={nodes.Arm.skeleton}
        />
        <skinnedMesh
          name="BeltBase"
          geometry={nodes.BeltBase.geometry}
          material={materials['M_Pirate.001']}
          skeleton={nodes.BeltBase.skeleton}
        />
        <skinnedMesh
          name="Body"
          geometry={nodes.Body.geometry}
          material={materials['M_Pirate.001']}
          skeleton={nodes.Body.skeleton}
        />
        <skinnedMesh
          name="Hand"
          geometry={nodes.Hand.geometry}
          material={materials['M_Pirate.001']}
          skeleton={nodes.Hand.skeleton}
        />
        <skinnedMesh
          name="Head_1"
          geometry={nodes.Head_1.geometry}
          material={materials['M_Pirate.001']}
          skeleton={nodes.Head_1.skeleton}
        />
        <skinnedMesh
          name="Hook"
          geometry={nodes.Hook.geometry}
          material={materials['M_Pirate.001']}
          skeleton={nodes.Hook.skeleton}
        />
        <skinnedMesh
          name="Leg"
          geometry={nodes.Leg.geometry}
          material={materials['M_Pirate.001']}
          skeleton={nodes.Leg.skeleton}
        />
        <primitive object={nodes.Hips} />
      </group>
    </group>
  </group>
  )
}

export default Pirate2
useGLTF.preload('models-3d/pirate2.glb')