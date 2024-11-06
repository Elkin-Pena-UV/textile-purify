import { Canvas } from "@react-three/fiber";
import Beach from "../../../components/beach/Beach";
import { OrbitControls } from "@react-three/drei";

const BeachScenary = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [2,2,5], fov: 50}}
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
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
