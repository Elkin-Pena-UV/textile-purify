/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

const LightFish = () => {
  // Crea una referencia para el SpotLight
  const spotLightRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    spotLightRef.current.position.x=MathUtils.lerp(-1,3, Math.tan(elapsedTime));

  });

  return (
    <>
      <ambientLight intensity={2.1} />
      <SpotLight
        ref={spotLightRef} // Referencia al SpotLight
        position={[0, 0, 2]}
        angle={Math.PI / 4} // Ángulo del cono de luz
        penumbra={1} // Suaviza los bordes de la luz
        intensity={2}
        shadow-mapSize={[1024, 1024]} // Tamaño de la textura de la sombra
        shadow-camera-far={50} // Distancia a la que la sombra es visible
        shadow-camera-left={-1} // Ajusta el área de sombra
        shadow-camera-right={1}
        shadow-camera-top={10}
        shadow-camera-bottom={-10} // Intensidad de la luz
        castShadow
      />
      
    </>
  );
};

export default LightFish;
