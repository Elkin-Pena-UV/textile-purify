import React, {
  Suspense,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

import {
  Html,
  KeyboardControls,
  Loader,
  PositionalAudio,
} from "@react-three/drei";

import "./Acidity.css";
import Header from "../../components/header/Header";
import { Canvas } from "@react-three/fiber";
import Title from "../../pages/acidity/title/Title";
import LightFish from "../../components/ligths/LightFish";
import Corals from "../../components/Corals/Corals";
import HammerheadShark from "../../components/sharks/HammerheadShark";
import { Physics } from "@react-three/rapier";
import Stading from "../../components/stading/Stading";
import Video from "../../components/video/Video";
import PostProcessing from "../../components/postprocessing/PostProcessing";
import Mantaray from "../../components/mantaray/Mantaray";
import Whale from "../../components/whale/Whale";
import { Text } from "@react-three/drei";
import Ocean from "../../components/ocean/Ocean";
import Controls from "../../components/controls/Controls";
const Acidity = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPostProcessingEnabled, setIsPostProcessingEnabled] = useState(true); 

  useEffect(() => {
    if (audioRef.current) {
      if (!isMuted) {
        audioRef.current.play(); 
      } else {
        audioRef.current.pause(); 
      }
    }
  }, [isMuted]);
  const messages = [
    "¡Hola! Soy Wally, la ballena, y hoy te hablaré sobre un problema grave: la contaminación del agua por la industria textil.",
    "La industria textil es una de las mayores responsables de la contaminación de nuestros océanos. Cada año, toneladas de desechos químicos y tintes se vierten en el agua.",
    "Estos productos químicos no solo afectan al agua, sino que también dañan a los organismos marinos que dependen de ella para sobrevivir.",
    "Los corales, los peces y otros animales marinos están en grave peligro debido a los residuos tóxicos de la industria textil.",
    "Es crucial que entendamos este problema y actuemos, porque la salud de nuestros océanos es fundamental para la vida en el planeta. ¡Juntos podemos marcar la diferencia!",
  ];

  const [showMessages, setShowMessages] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (showMessages && messageIndex < messages.length) {
      const intervalId = setInterval(() => {
        setMessageIndex((prevIndex) => {
          if (prevIndex < messages.length - 1) {
            return prevIndex + 1;
          }
          clearInterval(intervalId); 
          setShowMessages(false); 
          return prevIndex;
        });
      }, 3000); 

      return () => clearInterval(intervalId); 
    }
  }, [showMessages, messageIndex, messages.length]);

  const keyboardMap = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "back", keys: ["ArrowDown", "KeyS"] },
      { name: "left", keys: ["ArrowLeft", "KeyA"] },
      { name: "right", keys: ["ArrowRight", "KeyD"] },
      { name: "jump", keys: ["Space"] },
    ],
    []
  );

  const handleWhaleClick = () => {
    if (messageIndex === messages.length - 1) {
      setMessageIndex(0); 
    }
    setShowMessages(true); 
  };

  const toggleSound = () => {
    setIsMuted((prev) => !prev);
  };

  const togglePostProcessing = () => {
    setIsPostProcessingEnabled((prev) => !prev);
  };
  return (
    <div className="container-page">
      <Header />
      <Suspense fallback={<Loader />}>
        <Canvas
          shadows
          camera={{ position: [0, 5, 15], fov: 39 }}
          style={{ width: "100%", height: "100%" }}
        >

          <Title />

          <Physics
            broadphase="SAP"
            gravity={[0, -9.81, 0]}
            defaultContactMaterial={{ restitution: 0.5 }}
          >
            <Ocean scale={[2, 2, 2]} />
            <KeyboardControls map={keyboardMap}>
              <Mantaray />
            </KeyboardControls>
          </Physics>
          <HammerheadShark />
          <Corals />
          <Stading />
          <LightFish />
          <Video name="screen" position={[-8, 1.5, -2]} scale={2} />
          <PostProcessing isEnabled={isPostProcessingEnabled} />
          <Controls/>

          <Whale
            onClick={handleWhaleClick}
            scale={[0.1, 0.1, 0.1]}
            position={[6, 1.5, 1]}
          />

          <Text
            position={[6, 3, 2]}
            fontSize={0.2}
            anchorX="center"
            strokeWidth={0.6}
            strokeColor="black"
            emissive="true"
            emissiveIntensity={1}
            maxWidth={3}
          >
            ¡Haz clic aquí y descubre cómo la industria textil está afectando
            nuestros océanos!
          </Text>

          {showMessages && (
            <group position={[8, 1, 3]}>
              <mesh position={[0, 1, -0.1]} castShadow>
                <boxGeometry args={[2.2, 1, 0.1]} />
                <meshStandardMaterial color="black" />
              </mesh>
              <Text
                fontSize={0.1}
                color="white"
                anchorX="center"
                anchorY="middle"
                emissive="black"
                strokeWidth={0}
                strokeColor="black"
                maxWidth={2}
                emissiveIntensity={1}
                position={[0, 1, 0]}
              >
                {messages[messageIndex]}
              </Text>
            </group>
          )}
          <mesh position={[0, 1, 0]}>
            <PositionalAudio
              url="/sounds/underWater.mp3"
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
      <button onClick={togglePostProcessing} className="post-processing-toggle">
        {isPostProcessingEnabled ? "Desactivar efectos" : "Activar efectos"}
      </button>
    </div>
  );
};

export default Acidity;
