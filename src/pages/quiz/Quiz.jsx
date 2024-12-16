import { Suspense } from "react";
import StadingNight from "../../components/stading/StadingNight";
import Controls from "../../components/controls/Controls"
import River from "../../components/river/River";
import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LightFish from "../../components/ligths/LightFish";
im
const Quiz = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas>
        <River scale={[4,4,4]}/>
        <StadingNight/>
        <LightFish/>
        <Controls/>
      </Canvas>
    </Suspense>
  );
};

export default Quiz;
