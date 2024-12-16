import { Canvas } from "@react-three/fiber";
import Beach from "../../../components/beach/Beach";
import { Html, OrbitControls } from "@react-three/drei";
import LightBeach from "../../../components/ligths/LightBeach";
import { useNavigate } from "react-router-dom";
import StadingNight from "../../../components/stading/StadingNight";
import VideoPollution from "../../../components/video/VideoPollution";


const BeachScenary = () => {
  const navigate = useNavigate();

  const goToScenaryShark = () => {
    navigate("/pollution");
  };
  return (
    <Canvas
      shadows
      camera={{ position: [-1,1.5,-2.5], fov: 50}}
    >
      <VideoPollution />
      <Html
      center
      distanceFactor={0.9}
      transform
      position={[0,1,0]}
      rotation={[-Math.PI / -0.2, -0.4, 9.43]} >
        
        <button class="button-continue" onClick={goToScenaryShark}>
            <p>Volver</p>
          </button>
      </Html>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <LightBeach />
      <StadingNight />
      <Beach />
      
    </Canvas>
  );
};

const ScenaryPollution = () => {
  return (
    <>
      <BeachScenary />
    </>
  );
};
export default ScenaryPollution;
