import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { AmbientLight, DirectionalLightHelper, SpotLightHelper } from "three";

const LightBigShark = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper);

  const spotLightRef = useRef();
  useHelper(spotLightRef, SpotLightHelper);

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        castShadow
        // ref={spotLightRef} 
        color={"white"}
        intensity={10}
        position={[0, 3.5, 2]}
      />
    </>
  );
};
export default LightBigShark;
