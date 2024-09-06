/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Sphere (props) {

  const { nodes, materials } = useGLTF("models-3d/Sphere.glb");
  console.log(materials);
  const sphereRef = useRef(null);

  useFrame((state, delta) =>{
    
    if(sphereRef.current){
      const elapsedTime= state.clock.getElapsedTime();
      sphereRef.current.position.y = Math.sin(elapsedTime)*2
      sphereRef.current.position.x = Math.cos(elapsedTime)*2
      sphereRef.current.rotation.y += 0.5 *delta;
    }
  }
  
  )
  return (
    <group {...props} dispose={null} ref={sphereRef}>
    <group name="Scene">
      <group name="Sphere" rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          name="Sphere_1"
          geometry={nodes.Sphere_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          name="Sphere_2"
          geometry={nodes.Sphere_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  </group>
  )
}


export default Sphere;

useGLTF.preload("models-3d/Sphere.glb");
