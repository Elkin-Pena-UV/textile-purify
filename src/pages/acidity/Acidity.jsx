import { Canvas } from "@react-three/fiber";
import "./Acidity.css";
import Fish from "../../components/Fish/Fish";
import FloorFish from "../../components/floorFish/FloorFish";
import LightFish from "../../components/ligths/LightFish";
import Controls from "../../components/controls/Controls";
import River from "../../components/river/River";
import Stading from "../../components/stading/Stading";
import Header from "../../components/header/Header";
import { Html, KeyboardControls } from "@react-three/drei";
import Information from "./information/Information";
import { useMemo } from "react";
import { Physics } from "@react-three/rapier";
import { useRef } from "react";
import { Cloud } from "@react-three/drei";

const Acidity = () => {
  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "back", keys: ["ArrowDown", "KeyS"] },
      { name: "left", keys: ["ArrowLeft", "KeyA"] },
      { name: "right", keys: ["ArrowRight", "KeyD"] },
    ],
    []
  );

  return (
    <section className="container-acidity">
      <Header />
      <main className="acidity-main">
        <h1 className="acidity-title">Acidificación del Agua</h1>

        <section className="acidity-introduction">
          <h2 className="acidity-subtitle">Introducción</h2>
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

        <section className="acidity-fish-scene">
          <Canvas shadows camera={{ position: [0, 6, 28] }}>
            <Physics>
              <FloorFish
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -3, 0]}
                receiveShadow
                name="floor"
              />
            </Physics>

            <KeyboardControls map={map}>
              <Fish position={[-1, 1, 0]} receiveShadow />
            </KeyboardControls>
            <Stading />
            <LightFish />
            <Controls />
            <Html
              position={[-9, 6, 5]}
              transform="screen"
              rotation={[0, 0, 0]}
              occlude
            >
              <p>
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
              <p>
                La industria textil es responsable de aproximadamente el 20% de
                la contaminación del agua a nivel mundial.
              </p>
            </Html>
          </Canvas>
        </section>

        <section className="acidity-river-scene">
          <Canvas camera={{ position: [0, 5, 12] }}>
            <River />
            <directionalLight position={[0, 10, 0]} intensity={1} castShadow />
            <Cloud
              position={[0, 7, 0]}
              speed={2}
              scale={0.5}
              color="#d3d3d3"
              opacity={0.5}
            />

            <Stading />
            <Controls />
          </Canvas>
        </section>

        {/* Sección de Información sobre la Contaminación Textil */}
        <section className="acidity-information">
          <h2 className="acidity-subtitle">
            La contaminación generada por la industria textil y sus residuos
          </h2>

          <div className="acidity-information-container">
            {/* Tarjeta 1 */}
            <article className="acidity-information-item">
              <Information
                title="Sobreconsumo de Recursos Naturales"
                description={
                  <>
                    <p>
                      La producción textil utiliza mucha agua, además de tierras
                      para cultivar algodón y otras fibras. Para elaborar una
                      sola camiseta de algodón, las estimaciones indican que se
                      necesitan 2.700 litros de agua dulce: la cantidad de agua
                      que una persona bebe en dos años y medio.
                    </p>
                    <p>
                      El sector textil fue la tercera fuente de degradación del
                      agua y del uso del suelo en 2020. Ese año también, se
                      necesitó una media de nueve metros cúbicos de agua, el uso
                      de 400 metros cuadrados de tierra y 391 kilogramos (kg) de
                      materias primas para proporcionar ropa y calzado a cada
                      ciudadano de la UE.
                    </p>
                  </>
                }
                urlImage="https://www.europarl.europa.eu/resources/library/images/20230613PHT98337/20230613PHT98337-cl.png"
              />
            </article>

            {/* Tarjeta 2 */}
            <article className="acidity-information-item">
              <Information
                title="Sólo el 1% de la ropa usada se recicla en ropa nueva"
                description={
                  <>
                    <p>
                      Los europeos consumen de media casi 26 kg y se desprenden
                      de unos 11 kg de textiles cada año. La ropa usada puede
                      exportarse fuera de la UE, pero la mayoría (87 %) es
                      incinerada o depositada en vertederos.
                    </p>
                    <p>
                      El auge de la moda rápida ha sido crucial en el aumento
                      del consumo, impulsado también en parte por las redes
                      sociales y la industria, que impulsa que las tendencias de
                      la moda lleguen a más consumidores y a un ritmo más rápido
                      que en el pasado.
                    </p>
                    
                  </>
                }
                urlImage="https://www.europarl.europa.eu/resources/library/images/20230613PHT98338/20230613PHT98338_original.png"
              />
            </article>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Acidity;
