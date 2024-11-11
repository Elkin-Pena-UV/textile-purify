import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Fish from "../../components/Fish/Fish";
import "./Acidity.css";
import Header from "../../components/header/Header";
import FloorFish from "../../components/floorFish/FloorFish";
import LightFish from "../../components/ligths/LightFish";
import Controls from "../../components/controls/Controls";
import { Text } from "@react-three/drei";
import River from "../../components/river/River";

const Acidity = () => {
  return (
    <div className="container-header">
      <Header />

      <section className="acidity-container">
        <h1 className="acidity-title">Acidificación del Agua</h1>

        {/* Introduction  */}
        <section className="acidity-introduction">
          <h2 className="Introduction"> Introducción</h2>
          <p className="acidity-description">
            La acidez del agua, medida por su pH, es un factor crucial que
            influye en la vida de los organismos acuáticos y en el equilibrio de
            los ecosistemas. Un nivel de acidez adecuado es esencial para la
            salud de especies como los peces y las plantas acuáticas, ya que un
            pH equilibrado permite procesos vitales como la fotosíntesis y la
            reproducción. Sin embargo, la contaminación y otras actividades
            humanas han incrementado la acidez del agua, lo que puede tener
            consecuencias perjudiciales, como la reducción de la biodiversidad y
            la alteración de las cadenas alimenticias. Por ello, es fundamental
            monitorear y gestionar los niveles de acidez para proteger la salud
            de los ecosistemas acuáticos.
          </p>
        </section>

        {/*3D fish scene section*/}
        <section className="Fish">
          <Canvas shadows camera={{ position: [0, 5, 15] }}>
            <FloorFish />
            <Fish />
            <LightFish />
            <Controls />

            <Text
              position={[-15, 3, -2]}
              fontSize={1}
              color="white"
              anchorX="center"
              anchorY="middle"
              maxWidth={16}
              textAlign="justify"
            >
              La industria textil es responsable de aproximadamente el 20% de la
              contaminación del agua a nivel mundial.
            </Text>

            <Text
              position={[15, 3, -2]}
              fontSize={1}
              color="white"
              anchorX="center"
              anchorY="middle"
              maxWidth={16}
              textAlign="justify"
            >
              Tu estilo puede ser sostenible: elige moda que cuide nuestros
              recursos hídricos.
            </Text>
          </Canvas>
        </section>

        {/* 3D river scene section */}
        {/* Título de la sección del río */}
        <h2 className="Scene-title">Puesta en Escena</h2>

        {/* Contenedor de la escena en 3D */}
        <section className="River-Scene">
          <Canvas camera={{ position: [0, 5, 15] }}>
            <River />
            <ambientLight intensity={1.5} />
            <Controls />
          </Canvas>
        </section>

        {/* What is water acidification?*/}
        <section className="acidity-explanation">
          <h2>¿Qué es la acidificación?</h2>
          <p>
            La acidificación del agua se refiere al proceso mediante el cual el
            pH del agua disminuye, lo que hace que se vuelva más ácida. Este
            fenómeno puede ser causado por diversos factores, como la
            contaminación industrial, la quema de combustibles fósiles y las
            actividades agrícolas. Un pH bajo puede afectar negativamente la
            vida acuática y alterar los ecosistemas acuáticos.
          </p>
        </section>
      </section>
    </div>
  );
};

export default Acidity;
