import { OrbitControls } from "@react-three/drei";

const Controls = () => {
  return (
    <OrbitControls
      minPolarAngle={0} 
      maxPolarAngle={Math.PI / 2}
      enableZoom={false}
      enablePan={false}
    />
  );
};

export default Controls;
