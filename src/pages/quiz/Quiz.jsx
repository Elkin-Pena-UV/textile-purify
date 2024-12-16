import { Suspense, useEffect, useRef, useState } from "react";
import StadingNight from "../../components/stading/StadingNight";
import Controls from "../../components/controls/Controls";
import River from "../../components/river/River";
import { Loader, OrbitControls, PositionalAudio } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LightFish from "../../components/ligths/LightFish";
import { Physics } from "@react-three/rapier";
import Header from "../../components/header/Header";
import Stading from "../../components/stading/Stading";
const Quiz = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      if (!isMuted) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted]);

  const toggleSound = () => {
    setIsMuted((prev) => !prev);
  };
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Canvas camera={{ position: [0, 5, 60] }}>
          <Physics>
            <River scale={[4, 4, 4]} />
          </Physics>
          <Stading />
          <LightFish />
          <mesh position={[0, 1, 0]}>
            <PositionalAudio
              url="/sounds/river.mp3"
              loop
              distance={10}
              ref={audioRef}
            />
          </mesh>
          <Controls />
        </Canvas>
      </Suspense>
      <button onClick={toggleSound} className="sound-toggle">
        <img
          src={isMuted ? "/icons/mute.svg" : "/icons/sound.svg"}
          alt="sound toggle"
        />
      </button>
    </>
  );
};

export default Quiz;
