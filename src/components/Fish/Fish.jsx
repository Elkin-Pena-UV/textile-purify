/* eslint-disable react/no-unknown-property */
import {useRef, useEffect,useMemo } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";


const Fish = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/fish.glb");
  const { actions } = useAnimations(animations, group);

  const PATH = useMemo(() => "/materials/fish/", []);

  const fishTexutre = useTexture({
     map: PATH + "Basecolor_color.jpeg",
     normalMap: PATH + "koifishnormal_(1).jpg"
  });
  
 

  console.log(fishTexutre)

  useEffect(() => {
    if (actions && actions["swim"]) {
      actions["swim"].reset().fadeIn(0.5).play();
    }
    if (actions && actions["tailWiggle"]) {
      actions["tailWiggle"].reset().fadeIn(0.5).play();
    }
  }, [actions]);

  return (
    <>
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Fish"
          geometry={nodes.Fish.geometry}
          material={materials.SimplygonCasatMaterial}
          position={[-0.268, 0, 0]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </group>
    </group>
    
</>
  );
};

export default Fish;
