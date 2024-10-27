import { Canvas } from "@react-three/fiber";
import Fish from "../../components/Fish/Fish";
import LightFish from "../home/ligths/LigthFish";

const Acidity = () => {
  return (
    <Canvas>
      <LightFish />
      <Fish />
    </Canvas>
  );
};

export default Acidity;
