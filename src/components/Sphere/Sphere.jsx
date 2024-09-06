/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

const Sphere = (props) => {
  const { nodes, materials } = useGLTF("models-3d/Sphere.glb");
  console.log(materials);
  return (
    <group {...props} dispose={null}>
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
  );
};

export default Sphere;

useGLTF.preload("models-3d/Sphere.glb");
