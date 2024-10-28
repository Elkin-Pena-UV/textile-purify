import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Fish from "../../components/Fish/Fish";
import LightFish from "../../components/ligths/LigthFish";
import { BakeShadows, OrbitControls } from "@react-three/drei";
import "./Acidity.css";

const Acidity = () => {
  const canvasRef = useRef(null);
  const [showModel, setShowModel] = useState(false);

  const scrollToCanvas = () => {
    canvasRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleShowModel = () => {
    setShowModel(true); 
    scrollToCanvas(); 
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

      <button className="acidity-button" onClick={handleShowModel} aria-label="Desplazarse al modelo 3D">
        Ver Modelo 3D
      </button>

      <div ref={canvasRef} className="canvas-wrapper">
        {showModel ? ( 
          <Canvas className="acidity-canvas" camera={{ position: [0, 5, 10] }}>
            <OrbitControls makeDefault />
            <LightFish />
            <Fish/>
            <LightFish />
            <BakeShadows/>
          </Canvas>
        ) : (
          <div className="loading">Haz clic en el botón para cargar el modelo...</div>
        )}
      </div>
    </div>
  );
};

export default Acidity;
