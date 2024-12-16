import { Suspense, useEffect, useRef, useState } from "react";
import StadingNight from "../../components/stading/StadingNight";
import Controls from "../../components/controls/Controls";
import River from "../../components/river/River";
import { Loader, OrbitControls, PositionalAudio } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LightFish from "../../components/ligths/LightFish";
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
    <Suspense fallback={<Loader />}>
      <Canvas>
        <River scale={[4, 4, 4]} />
        <StadingNight />
        <LightFish />
        <Controls />
        <mesh position={[0, 1, 0]}>
        <PositionalAudio
          url="/sounds/river.mp3"
          loop
          distance={10}
          ref={audioRef}
        />
      </mesh>
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
