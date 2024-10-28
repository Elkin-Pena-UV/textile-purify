/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'; 

const LightFish = () => {
  const directionalLightRef = useRef();

  return (
    <>
      <directionalLight 
        ref={directionalLightRef}
        position={[10, 10, 5]} 
        intensity={12} 
        castShadow 
        shadow-mapSize={{ width: 1024, height: 1024 }} 
        shadow-camera={{ near: 0.5, far: 50, left: -5, right: 5, top: 5, bottom: -5 }} 
      />
    </>
  );
};

export default LightFish;
