import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Fish from "../../components/Fish/Fish";
import LightFish from "../../components/ligths/LigthFish";
import { OrbitControls } from "@react-three/drei";
import "./Acidity.css";

const Acidity = () => {
  const canvasRef = useRef(null);
  const scrollToCanvas = () => {
    canvasRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="acidity-container">
      <h1 className="acidity-title">Introducción</h1>
      <p className="acidity-description">
        La acidez del agua, medida por su pH, es un factor crucial que influye
        en la vida de los organismos acuáticos y en el equilibrio de los
        ecosistemas. Un nivel de acidez adecuado es esencial para la salud de
        especies como los peces y las plantas acuáticas, ya que un pH
        equilibrado permite procesos vitales como la fotosíntesis y la
        reproducción. Sin embargo, la contaminación y otras actividades humanas
        han incrementado la acidez del agua, lo que puede tener consecuencias
        perjudiciales, como la reducción de la biodiversidad y la alteración de
        las cadenas alimenticias. Por ello, es fundamental monitorear y
        gestionar los niveles de acidez para proteger la salud de los
        ecosistemas acuáticos.
      </p>

      <button className="acidity-button" onClick={scrollToCanvas}>
        Ver Modelo 3D
      </button>

      <div ref={canvasRef} className="canvas-wrapper">
        <Canvas
          className="acidity-canvas"
          shadows={true}
          camera={{ position: [0, 5, 10], fov: 75 }}
        >
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
          />
          <LightFish />
          <mesh receiveShadow>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>

          <Fish position={[0, 0, 0]} />
        </Canvas>
      </div>
    </div>
  );
};

export default Acidity;
