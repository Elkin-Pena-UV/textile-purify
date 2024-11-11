import { Canvas } from "@react-three/fiber";
import BigShark from "../../components/big-shark/BigShark";
import { KeyboardControls, OrbitControls, Text } from "@react-three/drei";
import React, { useMemo } from "react";
import "./Pollution.css";
import Floor from "../../components/floor/Floor";
import LightBigShark from "../../components/ligths/LightBigShark";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import Controls from "../../components/controls/Controls";
//Este componente es el que se encarga de mostrar la escena del tiburón y el texto
const SharkScene = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2.5, 6], fov: 50 }}
      fog={{ color: "#0b3d91", near: 5, far: 20 }}
    >
      <LightBigShark />
      <Controls />
      <BigShark />
      <Floor />
      <Text
        position={[0, 2, 0]} // Posición del texto en el canvas
        fontSize={0.2} // Tamaño del texto
        color="white" // Color del texto
        maxWidth={5} // Ancho máximo antes de envolver
        lineHeight={1.2} // Altura de línea
        anchorX="center" // Ancla del texto en X
        anchorY="middle" // Ancla del texto en Y
        font="./fonts/Poppins-Medium.ttf" // Fuente del texto
      >
        Actualmente, hay más de 5 billones de fragmentos de plástico en el
        océano.
      </Text>
    </Canvas>
  );
};

//Este componente es el que se encarga de mostrar la información de la contaminación del agua
const Pollution = () => {
  const navigate = useNavigate();

  const goToScenaryPollution = () => {
    navigate("#scene-shark");
  };

  const handleScroll = () => {
    const element = document.getElementById("scene-shark");
    element.scrollIntoView({ behavior: "smooth" });
  }

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
    <div className="container-header">
      <Header />
      <section className="container-pollution">
        <h1 className="container-pollution-title">Contaminación del Agua</h1>
        <section className="text-container">
          <p>
            La contaminación del agua es uno de los mayores problemas
            ambientales del mundo actual. Cada día, millones de toneladas de
            desechos y sustancias químicas dañinas son arrojadas a ríos, lagos y
            océanos, poniendo en riesgo la vida acuática y la salud humana.
            Factores como la industria textil contribuyen significativamente a
            este problema al liberar contaminantes tóxicos que afectan la
            calidad del agua y dañan los ecosistemas.
          </p>
        </section>
        <div className="container-button">
          <button class="button-continue"  onClick={handleScroll}>
            <p>Descubre más</p>
          </button>
        </div>
        <div className="scrolldown">
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
        <div id="scene-shark" style={{ width: "100%", height: "450px", marginTop: "130px" }}>
          <KeyboardControls map={map}>
            <SharkScene />
          </KeyboardControls>
        </div>
      </section>
    </div>
  );
};
export default Pollution;
