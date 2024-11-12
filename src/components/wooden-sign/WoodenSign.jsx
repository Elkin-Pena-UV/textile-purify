import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const WoodenSign = (props) => {
  const signRef = useRef();
  const { nodes, materials } = useGLTF("models-3d/wooden-sign.glb");
  return (
    <group {...props} dispose={null} ref={signRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.714} position={[5,-1.2,-10]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sign.geometry}
            material={materials.lambert1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stick.geometry}
            material={materials.lambert1}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/wooden-sign.glb");
export default WoodenSign;
