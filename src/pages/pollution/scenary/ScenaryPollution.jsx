import { Canvas } from "@react-three/fiber";
import Beach from "../../../components/beach/Beach";
import { OrbitControls } from "@react-three/drei";
import LightBeach from "../../../components/ligths/LightBeach";
import Controls from "../../../components/controls/Controls";


const BeachScenary = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [-1,0.68,-2.5], fov: 40}}
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <LightBeach />
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
