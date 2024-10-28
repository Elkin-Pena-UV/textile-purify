import { Canvas } from "@react-three/fiber";
import BigShark from "../../components/big-shark/BigShark";
import { OrbitControls, Text } from "@react-three/drei";
import React from "react";
import "./Pollution.css";
import Floor from "../../components/floor/Floor";

//Este componente es el que se encarga de mostrar la escena del tiburón y el texto
const SharkScene = () => {
  return (
    <Canvas
    camera={{ position: [0, 5, 10], fov: 50 }}
    fog={{ color: '#0b3d91', near: 5, far: 20 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls />
      <BigShark />
      <Floor />
      <Text
      position={[0, 2, 0]}       // Posición del texto en el canvas
      fontSize={0.2}              // Tamaño del texto
      color="lightblue"           // Color del texto
      maxWidth={5}                // Ancho máximo antes de envolver
      lineHeight={1.2}            // Altura de línea
      anchorX="center"            // Ancla del texto en X
      anchorY="middle"            // Ancla del texto en Y
      font="./fonts/Poppins-Medium.ttf" // Fuente del texto
      >
        Actualmente, hay más de 5 billones de fragmentos de plástico en el océano.
      </Text>
    </Canvas>
  );
};

//Este componente es el que se encarga de mostrar la información de la contaminación del agua
const Pollution = () => {
  return (
    <div className="container-pollution" style={{ padding: "20px", textAlign: "center" }}>
      <h1>Contaminación del Agua</h1>
      <div className="text-container">
        <p>
          La contaminación del agua es uno de los mayores problemas ambientales
          del mundo actual. Cada día, millones de toneladas de desechos y
          sustancias químicas dañinas son arrojadas a ríos, lagos y océanos,
          poniendo en riesgo la vida acuática y la salud humana. Factores como
          la industria textil contribuyen significativamente a este problema al
          liberar contaminantes tóxicos que afectan la calidad del agua y dañan
          los ecosistemas.
        </p>
      </div>
      <div style={{ width: '100%', height: '500px', marginTop: '20px' }}>
        <SharkScene />
      </div>
      <div style={{ marginTop: '20px' }}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque delectus aliquam eos, dolorum animi corrupti minus porro consequatur provident impedit neque numquam cum deserunt veritatis eveniet vero, perferendis corporis a.</p>
      </div>
    </div>
    // <div className="container">
    //   <div className="title-pollution">
    //     <h1>Contaminación del agua</h1>
    //     <div className="content">
    //       <h2>energia</h2>
    //     </div>
    //   </div>
    //   <SharkScene />
    //   <div className="content">
    //     <h2>Hola</h2>
    //   </div>
    // </div>
  );
};
export default Pollution;
