import React from "react";
import { Text3D } from "@react-three/drei";

const Title = () => {
  return (
    <Text3D
      scale={[0.5, 0.5, 0.5]}
      position={[-5, 4, 0]}
      font="/fonts/Poppins-Medium_Regular.json"
      color="#38A3A5"
      maxWidth={20}
      lineHeight={1.2}
      letterSpacing={0.05}
      textAlign="center"
    >
      <meshBasicMaterial attach="material" color="#38A3A5" />
      Acidificación del Agua
    </Text3D>
  );
};

export default Title;
