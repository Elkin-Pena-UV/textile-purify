import { Canvas } from "@react-three/fiber";
import Fish from "../../components/Fish/Fish";
import "./Acidity.css";
import Header from "../../components/header/Header";
import FloorFish from "../../components/floorFish/FloorFish";
import LightFish from "../../components/ligths/LightFish";
import Controls from "../../components/controls/Controls";
import { Float, Html, Text } from "@react-three/drei";
import River from "../../components/river/River";
import Stading from "../../components/stading/Stading";

const Acidity = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="acidity-container">
        <h1 className="acidity-title">Acidificación del Agua</h1>

        <section className="acidity-introduction">
          <h2 className="acidity-introduction-title">Introducción</h2>
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

        <section className="Fish">
          <Canvas shadows camera={{ position: [0, 2, 22] }}>
            <FloorFish />
            <Fish />
            <LightFish />
            <Controls />
            <Html
              position={[-9, 6, 5]}
              transform="screen"
              rotation={[0, 0, 0]}
              occlude
            >
              <p
                style={{
                  color: "white",
                  fontSize: "2rem",
                  textAlign: "justify",
                  maxWidth: "none",
                  width: "70%",
                }}
              >
                La industria textil es responsable de aproximadamente el 20% de
                la contaminación del agua a nivel mundial.
              </p>
            </Html>

            <Html
              position={[26, 6, 5]}
              transform="screen"
              rotation={[0, 0, 0]}
              occlude
            >
              <p
                style={{
                  color: "white",
                  fontSize: "2rem",
                  textAlign: "justify",
                  maxWidth: "none",
                  width: "70%",
                }}
              >
                La industria textil es responsable de aproximadamente el 20% de
                la contaminación del agua a nivel mundial.
              </p>
            </Html>
          </Canvas>
        </section>

        <h2 className="Scene-title">Puesta en Escena</h2>
        <section className="River-Scene">
          <Canvas camera={{ position: [0, 5, 12] }}>
            <River />
            <directionalLight position={[0, 10, 0]} intensity={1} castShadow />
            <Stading />
            <Controls />
          </Canvas>
        </section>

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
      </main>
    </>
  );
};

export default Acidity;
