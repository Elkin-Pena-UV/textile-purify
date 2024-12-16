import React from "react";
import { Text3D } from "@react-three/drei";


const Title = () => {
  return (
    <Text3D
      font="../../../../public/fonts/Poppins-Medium.ttf"
      scale={[0.5, 0.5, 0.5]}
      position={[-4, 4, 0]}
    >
      <meshBasicMaterial attach="material" color="#38A3A5" />
      Acidificación del Agua
    </Text3D>
  );
};

export default Title;
