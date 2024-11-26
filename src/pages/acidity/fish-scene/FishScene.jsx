import React from "react";
import "./FishScene.css";
import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { KeyboardControls, Html } from "@react-three/drei";
import FloorFish from "../../../components/floorFish/FloorFish";
import Fish from "../../../components/Fish/Fish"; ///MIRA AL MOMENTO DE SIBIRLO A LA WEB
import Stading from "../../../components/stading/Stading";
import LightFish from "../../../components/ligths/LightFish";
import Controls from "../../../components/controls/Controls";
const FishScene = () => {
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
    <>
      <section className="fish-scene">
        <div className="instructions-container">
          <ul className="instructions">
            <li>Usa W para avanzar</li>
            <li>Usa S para retroceder</li>
            <li>Usa A para moverte a la izquierda</li>
            <li>Usa D para moverte a la derecha</li>
          </ul>
        </div>
        <div className="container-canvas">
          <Canvas shadows camera={{ position: [0, 6, 28] }}>
            <Physics >
              <FloorFish
                rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow name="floor" />
              <KeyboardControls map={map}>
                <Fish position={[-1, 1, 0]} receiveShadow />
              </KeyboardControls>
            </Physics>

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
        </div>
      </section>
    </>
  );
};

export default FishScene;
