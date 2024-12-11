import { Cloud } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Controls from "../../../components/controls/Controls";
import River from "../../../components/river/River";
import Standing from "../../../components/stading/Stading";
import "./RiverScene.css";

const RiverScene = () => {
  return (
    <>
      <section className="river-scene">
        <div className="river-text">
          <h2 className="river-title">
            Impacto de la Industria Textil en los Ríos
          </h2>
          <p className="river-description">
            La industria textil es una de las principales fuentes de
            contaminación en los ríos. Los procesos de fabricación y teñido
            utilizan grandes cantidades de agua y productos químicos, que a
            menudo son vertidos sin un tratamiento adecuado, afectando la
            calidad del agua y la biodiversidad acuática. Además, las
            microfibras de plásticos y residuos sólidos de la producción textil
            contaminan los ecosistemas acuáticos, alterando el equilibrio de los
            ríos y afectando a las especies locales.
          </p>

          
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XnQFLQbs-vM?si=F3F1AOwpuBMxsWcW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="container-canvas">
          <Canvas camera={{ position: [0, 5, 12] }}>
            <River />
            <Cloud
              position={[0, 7, 0]}
              speed={2}
              scale={0.5}
              color="#d3d3d3"
              opacity={0.5}
            />
            <directionalLight position={[0, 10, 0]} intensity={2} castShadow />
            <Standing />
            <Controls />
          </Canvas>
        </div>

      </section>
    </>
  );
};

export default RiverScene;
