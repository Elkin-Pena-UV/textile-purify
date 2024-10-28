/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

const LightFish = () => {
  const spotLightRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    spotLightRef.current.position.x=MathUtils.lerp(-1,3, Math.tan(elapsedTime));

  });

  return (
    <>
      <ambientLight intensity={2.1} />
      <SpotLight
        ref={spotLightRef} 
        position={[0, 0, 2]}
        angle={Math.PI / 4} 
        penumbra={1} 
        shadow-mapSize={[1024, 1024]} 
        shadow-camera-far={50} 
        shadow-camera-left={-1} 
        shadow-camera-right={1}
        shadow-camera-top={10}
        shadow-camera-bottom={-10} 
        castShadow
      />
      
    </>
  );
};

export default LightFish;
