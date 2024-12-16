import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import River from "../../components/River/River";
const Quiz = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas>
        <River />
      </Canvas>
    </Suspense>
  );
};

export default Quiz;
