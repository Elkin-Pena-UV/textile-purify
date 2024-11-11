import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, SpotLightHelper } from "three";

const LightBeach = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper);

  const spotLightRef = useRef();
  useHelper(spotLightRef, SpotLightHelper);
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        ref={directionalLightRef}
        intensity={0.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};

export default LightBeach;
