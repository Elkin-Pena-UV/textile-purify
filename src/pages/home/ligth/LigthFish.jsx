/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useHelper } from '@react-three/drei';
import React, { useRef } from 'react'; 
import { AmbientLight, DirectionalLightHelper } from 'three';

const LightFish = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper);

  return (
   
    <>
      <directionalLight
       ref={directionalLightRef} 
       color="white" 
       intensity={2} 
       position={[0, 2, 10]} 
      />
    
    </>
  );
};

export default LightFish;
