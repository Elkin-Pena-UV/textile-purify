import { useCursor, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const PileOfCloths = (props) => {
  const clothesRef = useRef();
  const [hovered, set] = useState()
  useCursor(hovered, 'pointer');

  const navigate = useNavigate();

  const goToScenaryPollution = () => {
    navigate("/scenary-pollution");
  };

  const { nodes, materials } = useGLTF("models-3d/pile-of-clothsglb.glb");
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          ref={clothesRef}
          name="Dress_pile_Dress_pile_u1_v1_0"
          castShadow
          receiveShadow
          geometry={nodes.Dress_pile_Dress_pile_u1_v1_0.geometry}
          material={materials.Dress_pile_u1_v1}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.081}
          position={[9, -1, 0]}
          onPointerOver={() => set(true)} onPointerOut={() => set(false)}
          onClick={goToScenaryPollution}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/pile-of-clothsglb.glb");
export default PileOfCloths;
