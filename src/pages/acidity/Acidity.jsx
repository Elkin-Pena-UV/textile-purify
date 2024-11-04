import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Fish from "../../components/Fish/Fish";
import "./Acidity.css";
import Header from "../../components/header/Header";
import { OrbitControls } from "@react-three/drei";
import FloorFish from "../../components/floorFish/FloorFish";
import LightFish from "../../components/ligths/LightFish";

const Acidity = () => {
  const canvasRef = useRef(null);

  return (
    <div className="container-header">
      <Header />
      <div className="acidity-container">
        <h1 className="acidity-title">Introducción</h1>
        <p className="acidity-description">
          La acidez del agua, medida por su pH, es un factor crucial que influye
          en la vida de los organismos acuáticos y en el equilibrio de los
          ecosistemas. Un nivel de acidez adecuado es esencial para la salud de
          especies como los peces y las plantas acuáticas, ya que un pH
          equilibrado permite procesos vitales como la fotosíntesis y la
          reproducción. Sin embargo, la contaminación y otras actividades
          humanas han incrementado la acidez del agua, lo que puede tener
          consecuencias perjudiciales, como la reducción de la biodiversidad y
          la alteración de las cadenas alimenticias. Por ello, es fundamental
          monitorear y gestionar los niveles de acidez para proteger la salud de
          los ecosistemas acuáticos.
        </p>

        <div ref={canvasRef} className="canvas-wrapper">
          <>
            <Canvas shadows camera={{ position: [0, 3, 10] }}>
              <OrbitControls />
              <FloorFish />
              <Fish />
              <LightFish />
            </Canvas>
          </>
        </div>
      </div>
    </div>
  );
};

export default Acidity;
