import { Canvas } from "@react-three/fiber";
import Beach from "../../../components/beach/Beach";
import { Html, OrbitControls, PositionalAudio, Text } from "@react-three/drei";
import LightBeach from "../../../components/ligths/LightBeach";
import { useNavigate } from "react-router-dom";
import StadingNight from "../../../components/stading/StadingNight";
import VideoPollution from "../../../components/video/VideoPollution";
import Pirate from "../../../components/pirate/Pirate";
import React, { useEffect, useRef, useState } from "react";

const BeachScenary = () => {
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

  const navigate = useNavigate();

  const goToScenaryShark = () => {
    navigate("/pollution");
  };

  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const texts = [
    "La industria textil puede reducir su impacto ambiental adoptando nuevas tecnologías y materiales.",
    "Por ejemplo, se pueden sustituir las fibras tradicionales como el algodón convencional por alternativas más sostenibles",
    "como el algodón orgánico, reciclado o fibras hechas a partir de residuos agrícolas, como las creadas por Orange Fiber o Vegea",
    "También hay que tener en cuenta la economía circular es una de las soluciones más prometedoras. \nConsiste en reutilizar y reciclar textiles para darles una nueva vida, reduciendo así la necesidad \nde producir ropa nueva.",
    "El modelo de moda lenta o slow fashion promueve la creación de ropa de calidad y sostenible, \ndisminuyendo la producción masiva que caracteriza a la moda rápida.",
    "La educación es clave para combatir los problemas de la industria textil.",
    "Es necesario concienciar a los consumidores sobre el impacto ambiental",
  ];

  const handlePirateClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    } else if (clickCount < texts.length - 1) {
      setClickCount((prevCount) => prevCount + 1);
    } else {
      setClickCount(-1);
    }
  };

  return (
    <>
    <Canvas shadows camera={{ position: [-1, 1.5, -2.5], fov: 50 }}>
      <Pirate position={[0, 0.29, 0]} onClick={handlePirateClick} />
      <VideoPollution />
      <Html
        center
        distanceFactor={0.9}
        transform
        position={[0, 1, 0]}
        rotation={[-Math.PI / -0.2, -0.4, 9.43]}
      >
        <button class="button-continue" onClick={goToScenaryShark}>
          <p>Volver</p>
        </button>
      </Html>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <LightBeach />
      <StadingNight />
      <Beach />
      {isClicked && (
        <Text
          position={[0, 0.5, 0]}
          color="Black"
          fontSize={0.5}
          outlineWidth={0.9}
          outlineColor="White"
          scale={0.035}
          rotation={[-Math.PI / -0.2, -0.4, 9.43]}
        >
          {texts[clickCount]}
        </Text>
      )}
      <mesh position={[0, 1, 0]}>
        <PositionalAudio
          url="/sounds/wind.mp3"
          loop
          distance={10}
          ref={audioRef}
        />
      </mesh>
    </Canvas>
    <button onClick={toggleSound} className="sound-toggle">
      <img
        src={isMuted ? "/icons/mute.svg" : "/icons/sound.svg"}
        alt="sound toggle"
      />
    </button>
    </>
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
