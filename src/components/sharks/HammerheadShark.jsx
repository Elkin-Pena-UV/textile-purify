import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Text } from "@react-three/drei";

const HammerheadShark = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models-3d/hammerHeadshark.glb"
  );

  const { actions } = useAnimations(animations, group);



  //  Name of the animations in the gltf file
  // 'Attacking'
  // 'Attacking_shake'
  //  'Attacking_Shake_Loop'
  //  'AttackingFromLeft',
  //   'AttackingFromLeft'
  //    'AttackingFromLeft'
  //    'Idle'
  //    'Swimming'
  //     'Swimming_D'
  //      'Swimming_L'
  //      'Swimming_R'
  //      'Swimming_U'

  useEffect(() => {
    if (actions) {
      console.log(animations);
      const animation = actions["Swimming"];
      if (animation) {
        animation.play();
      }
    }
  }, [actions]);

  const [showMessages, setShowMessages] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showIntroText, setShowIntroText] = useState(true);
  const messages = [
    "¡Hola! Soy Sharky, un tiburón martillo, y hoy te hablaré sobre un problema importante: la acidificación del agua.",
    "Este problema ocurre cuando el dióxido de carbono (CO2) que liberamos al ambiente se disuelve en el océano.",
    "Esto hace que el agua se vuelva más ácida, lo que cambia su equilibrio natural y afecta a muchos organismos marinos.",
    "Corales, moluscos y otros animales marinos luchan para sobrevivir en estas condiciones, lo que pone en riesgo toda la vida en el océano.",
    "Es crucial entender este problema, ya que nuestros océanos son vitales para la vida en el planeta. ¡Mis amigos y yo te contaremos más!",
  ];

  const handleClick = () => {
    if (showMessages) {
      setShowMessages(false);
      setMessageIndex(0);
    } else {
      setShowMessages(true);
      setShowIntroText(false);
    }
  };

  useEffect(() => {
    if (showMessages && messageIndex < messages.length) {
      const timer = setTimeout(() => {
        setMessageIndex(messageIndex + 1);
      }, 5000);
      return () => clearTimeout(timer);
    } else if (messageIndex === messages.length) {
      setShowIntroText(true);
    }
  }, [showMessages, messageIndex]);

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[0.3, 0.3, 0.3]}
      castShadow
      receiveShadow
      onClick={handleClick}
      position={[0 - 3, 2, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      {showIntroText && (
        <group position={[0, 3, 0]}>
          <Text
            fontSize={0.5}
            anchorX="center"
            anchorY="middle"
            strokeWidth={0.1}
            strokeColor="black"
          >
            ¡Hazme clic, tengo algo importante que decirte!
          </Text>
        </group>
      )}

      <group name="Scene" castShadow receiveShadow>
        <group name="HeadHammerSharkRig" castShadow receiveShadow>
          <skinnedMesh
            name="HeadHammerShark"
            geometry={nodes.HeadHammerShark.geometry}
            material={materials.SharkHeadHammer}
            skeleton={nodes.HeadHammerShark.skeleton}
            castShadow
            receiveShadow
          />
          <primitive object={nodes.CO} castShadow receiveShadow />
          <primitive object={nodes["ORG-torso"]} castShadow receiveShadow />
        </group>
      </group>

      {showMessages && messageIndex < messages.length && (
        <group position={[6, 1, 0]}>
          <mesh position={[0, 0, -0.1]}>
            <boxGeometry args={[7, 5, 0.1]} />
            <meshStandardMaterial color="black" />
          </mesh>
          <Text
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
            emissive="black"
            strokeWidth={0}
            strokeColor="black"
            maxWidth={6}
            emissiveIntensity={1}
          >
            {messages[messageIndex]}
          </Text>
        </group>
      )}
    </group>
  );
};

useGLTF.preload("models-3d/hammerHeadshark.glb");

export default HammerheadShark;
