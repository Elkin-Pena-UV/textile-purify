import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const River = (props) => {
  const { nodes, materials } = useGLTF("models-3d/River.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.Material}
        position={[0.148, -3.378, 0.723]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.907}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.TERRE}
        position={[-0.797, -1.525, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube068.geometry}
        material={materials["roso feauille"]}
        position={[-5.824, -0.002, -0.824]}
        rotation={[-Math.PI, 0.884, -Math.PI]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube061.geometry}
        material={materials["roso feauille"]}
        position={[-5.287, 0.009, 0.771]}
        rotation={[-Math.PI, 0.159, -Math.PI]}
        scale={0.009}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube058.geometry}
        material={materials["roso feauille"]}
        position={[1.457, 0.015, -1.82]}
        rotation={[-Math.PI, 0.153, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder044.geometry}
        material={materials.herbes}
        position={[-2.56, 0.216, 4.052]}
        rotation={[-Math.PI, 0.712, -Math.PI]}
        scale={[0.018, 0.055, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder043.geometry}
        material={materials["Material.006"]}
        position={[0.313, 0.914, -2.211]}
        rotation={[-0.067, -0.01, -0.071]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder038.geometry}
        material={materials["Material.006"]}
        position={[5.008, 0.794, -4.145]}
        rotation={[-0.004, 0.003, 0.047]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder046.geometry}
        material={materials["Material.006"]}
        position={[-5.897, 1.053, 4.729]}
        rotation={[0.206, -0.032, -0.062]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder045.geometry}
        material={materials["Material.006"]}
        position={[-2.521, 0.244, 3.969]}
        rotation={[-0.016, -0.038, -0.124]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder037.geometry}
        material={materials["Material.006"]}
        position={[2.504, 0.572, 1.713]}
        rotation={[3.08, 0.201, 3.138]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder033.geometry}
        material={materials.pierre}
        position={[5.047, -0.136, -2.492]}
        rotation={[Math.PI, -1.242, Math.PI]}
        scale={0.185}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder032.geometry}
        material={materials.pierre}
        position={[4.822, -0.136, -1.822]}
        rotation={[0, -1.104, 0]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder031.geometry}
        material={materials.pierre}
        position={[5.481, -0.104, -1.539]}
        rotation={[0, -0.123, 0]}
        scale={0.121}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder030.geometry}
        material={materials.pierre}
        position={[4.727, -0.14, -2.211]}
        rotation={[0, 1.364, 0]}
        scale={0.22}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder029.geometry}
        material={materials.pierre}
        position={[5.031, -0.134, -1.52]}
        rotation={[0, 1.364, 0]}
        scale={0.213}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder028.geometry}
        material={materials.pieree02}
        position={[5.17, -0.136, -2.036]}
        rotation={[0, 1.364, 0]}
        scale={0.212}
      />
      <group
        position={[-0.553, 0.298, -5.961]}
        rotation={[-3.122, -0.531, -2.943]}
        scale={0.035}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027_1.geometry}
          material={materials["champi rouge tige"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027_2.geometry}
          material={materials["champi rouge chapeau"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027_3.geometry}
          material={materials["champi rouge sous chapeau"]}
        />
      </group>
      <group
        position={[2.49, 0.461, 6.054]}
        rotation={[0.023, 0.023, 0.184]}
        scale={0.023}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026_1.geometry}
          material={materials["champi rouge tige"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026_2.geometry}
          material={materials["champi rouge sous chapeau"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026_3.geometry}
          material={materials["champi rouge chapeau"]}
        />
      </group>
      <group
        position={[2.651, 0.492, 6.116]}
        rotation={[0.015, 0.76, 0.024]}
        scale={0.019}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025_1.geometry}
          material={materials["champi marro tige"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025_2.geometry}
          material={materials["champi marron chapeau"]}
        />
      </group>
      <group position={[2.569, 0.527, 5.838]} scale={0.028}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024_1.geometry}
          material={materials["champi marro tige"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024_2.geometry}
          material={materials["champi marron chapeau"]}
        />
      </group>
      <group
        position={[-4.106, 0.826, -4.91]}
        rotation={[-0.059, 0.182, 0.16]}
        scale={0.061}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023_1.geometry}
          material={materials["champi rouge tige"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023_2.geometry}
          material={materials["champi rouge chapeau"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023_3.geometry}
          material={materials["champi rouge sous chapeau"]}
        />
      </group>
      <group
        position={[-3.958, 0.853, -4.726]}
        rotation={[0.086, 0.135, 0.068]}
        scale={0.044}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_1.geometry}
          material={materials["champi rouge tige"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_2.geometry}
          material={materials["champi rouge chapeau"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_3.geometry}
          material={materials["champi rouge sous chapeau"]}
        />
      </group>
      <group
        position={[-0.218, 0.54, -4.4]}
        rotation={[0.03, -0.207, -0.053]}
        scale={0.024}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_1.geometry}
          material={materials["champi marro tige"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_2.geometry}
          material={materials["champi marron chapeau"]}
        />
      </group>
      <group
        position={[-0.065, 0.476, -4.249]}
        rotation={[0.078, 0, -0.212]}
        scale={0.031}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_1.geometry}
          material={materials["champi rouge tige"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_2.geometry}
          material={materials["champi rouge chapeau"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_3.geometry}
          material={materials["champi rouge sous chapeau"]}
        />
      </group>
      <group
        position={[-0.013, 0.439, -4.535]}
        rotation={[-0.032, -0.013, -0.268]}
        scale={0.054}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_1.geometry}
          material={materials["champi rouge tige"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_2.geometry}
          material={materials["champi rouge chapeau"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_3.geometry}
          material={materials["champi rouge sous chapeau"]}
        />
      </group>
      <group position={[-6.6, 0.692, -4.476]} scale={1.091}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041_1.geometry}
          material={materials["arbre tronc p"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041_2.geometry}
          material={materials["arbre p03"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041_3.geometry}
          material={materials["arbre p02"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={materials.herbes}
        position={[2.684, 0.46, 5.888]}
        rotation={[0.02, -0.192, 0.279]}
        scale={[0.049, 0.053, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials.herbes}
        position={[-5.477, 0.247, -5.773]}
        rotation={[-0.051, -0.304, 0.095]}
        scale={[0.049, 0.053, 0.025]}
      />
      <group
        position={[2.218, 0.232, 0.392]}
        rotation={[-0.086, 0.792, 0.305]}
        scale={0.451}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere023_1.geometry}
          material={materials["arbre p03"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere023_2.geometry}
          material={materials["arbre tronc p"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials.herbes}
        position={[-4.617, 0.57, 3.781]}
        rotation={[-0.044, -0.485, -0.182]}
        scale={[0.049, 0.053, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials.herbes}
        position={[5.514, 0.95, 2.554]}
        rotation={[-2.897, 0.135, -3.031]}
        scale={[0.018, 0.055, 0.035]}
      />
      <group position={[5.727, 0.523, -3.298]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_1.geometry}
          material={materials["arbre tronc p"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_2.geometry}
          material={materials["arbre p03"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_3.geometry}
          material={materials["arbre p02"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials.pierre}
        position={[-3.196, 0.739, -5.45]}
        rotation={[2.367, -0.27, -1.92]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials.pierre}
        position={[-3.135, 0.646, -5.264]}
        rotation={[-1.225, -0.542, 0.987]}
        scale={0.15}
      />
      <group position={[0.366, 0.952, 5.015]} scale={0.759}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere019_1.geometry}
          material={materials["arbre p01"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere019_2.geometry}
          material={materials["arbre tronc p"]}
        />
      </group>
      <group
        position={[-4.761, 1.703, 3.555]}
        rotation={[0.023, 0.786, -0.105]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035_1.geometry}
          material={materials["arbre tronc p"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035_2.geometry}
          material={materials["arbre p01"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035_3.geometry}
          material={materials["arbre p02"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials.pierre}
        position={[1.568, -0.316, -0.777]}
        rotation={[-1.401, 0.039, -2.741]}
        scale={0.287}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials.pierre}
        position={[1.179, -0.348, -0.759]}
        rotation={[-0.129, 1.416, -0.03]}
        scale={0.287}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials.pierre}
        position={[-2.891, -0.372, 2.146]}
        rotation={[-0.917, -0.568, -3.108]}
        scale={0.287}
      />
      <group position={[-2.602, 0.519, 0.373]} scale={2.395}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031_1.geometry}
          material={materials["arbre tronc p"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031_2.geometry}
          material={materials["arbre p02"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031_3.geometry}
          material={materials["arbre p03"]}
        />
      </group>
      <group position={[5.434, 2.467, 2.308]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030_1.geometry}
          material={materials["arbre tronc p"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030_2.geometry}
          material={materials["arbre p02"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030_3.geometry}
          material={materials["arbre p01"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials.herbes}
        position={[4.49, 0.172, -5.694]}
        rotation={[0, -Math.PI / 8, 0]}
        scale={[0.049, 0.072, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials.herbes}
        position={[-4.316, 0.591, 6.035]}
        rotation={[0, -0.594, 0]}
        scale={[0.018, 0.062, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials.herbes}
        position={[-3.316, 0.544, 6.954]}
        rotation={[0, -Math.PI / 8, 0]}
        scale={[0.049, 0.079, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials.herbes}
        position={[4.858, 1.028, 3.662]}
        rotation={[-Math.PI, 0.712, -Math.PI]}
        scale={[0.018, 0.055, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials.herbes}
        position={[-3.198, 0.828, -4.839]}
        rotation={[-0.093, -0.576, -0.088]}
        scale={[0.049, 0.06, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials.herbes}
        position={[-3.152, 0.819, -4.708]}
        rotation={[-Math.PI, 0.712, -Math.PI]}
        scale={[0.018, 0.043, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.herbes}
        position={[-0.317, 0.411, -1.72]}
        rotation={[0.084, -0.369, 0.076]}
        scale={[0.049, 0.061, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.herbes}
        position={[-4.491, -0.027, 0.211]}
        rotation={[0.316, -0.193, 0.298]}
        scale={[0.05, 0.07, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.eau}
        position={[0, -0.172, -0.452]}
        scale={[8, 8, 3.337]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials.pierre}
        position={[-0.487, 0.259, -4.847]}
        rotation={[2.24, 0.83, 0.701]}
        scale={0.199}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials.pierre}
        position={[-0.717, 0.231, -5.267]}
        rotation={[-2.056, 0.984, 1.902]}
        scale={0.312}
      />
      <group
        position={[-0.337, 2.577, -5.055]}
        rotation={[-0.146, 0.004, 0.084]}
        scale={[0.532, 0.285, 0.532]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials["feuille grand arbre"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials["Bois grand arbre"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials.pierre}
        position={[-6.618, 0.054, 1.03]}
        rotation={[1.765, -1.253, 0.294]}
        scale={0.197}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials.pierre}
        position={[-5.987, -0.1, 0.284]}
        rotation={[0.063, 0.077, -0.219]}
        scale={0.099}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials.pierre}
        position={[-6.034, -0.088, 0.988]}
        rotation={[1.134, 0.243, 0.379]}
        scale={0.603}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials.pierre}
        position={[-5.702, 0.156, -2.94]}
        rotation={[0.794, -0.238, 0.208]}
        scale={0.617}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials.pierre}
        position={[3.185, 0.614, 5.704]}
        rotation={[-1.003, 0.007, -2.052]}
        scale={0.506}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere012.geometry}
        material={materials.pierre}
        position={[4.105, 0.163, -6.224]}
        rotation={[-0.101, -0.01, -0.215]}
        scale={0.674}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials.pierre}
        position={[-5.311, 0.045, -0.999]}
        rotation={[2.329, -0.492, -0.374]}
        scale={0.121}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials.pierre}
        position={[-4.729, 0.068, -1.238]}
        rotation={[-1.999, -0.228, 2.324]}
        scale={0.617}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere011.geometry}
        material={materials.pieree02}
        position={[-4.949, -0.148, -0.507]}
        rotation={[3.009, -1.404, 1.677]}
        scale={0.829}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere010.geometry}
        material={materials.pierre}
        position={[-3.931, 0.635, 5.474]}
        rotation={[-0.949, 0.564, 2.861]}
        scale={0.352}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere009.geometry}
        material={materials.pierre}
        position={[-4.14, 0.687, 5.815]}
        scale={0.237}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials.pierre}
        position={[-3.638, 0.491, 6.157]}
        rotation={[1.6, -0.011, 2.052]}
        scale={0.519}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere008.geometry}
        material={materials.pieree02}
        position={[-2.511, 0.075, 6.156]}
        rotation={[-0.454, 0.437, -1.295]}
        scale={1.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere007.geometry}
        material={materials.pierre}
        position={[5.571, 0.486, 4.993]}
        scale={0.485}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials.pierre}
        position={[6.919, 0.263, 4.898]}
        scale={0.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials.pierre}
        position={[6.23, 0.291, 5.191]}
        rotation={[2.012, -0.805, 2.791]}
        scale={0.539}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials.pierre}
        position={[0.546, -0.112, -5.258]}
        rotation={[-1.66, -0.948, -1.093]}
        scale={0.199}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials.pierre}
        position={[0.787, -0.025, -5.221]}
        scale={0.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials.pierre}
        position={[-1.209, 0.025, -5.857]}
        rotation={[2.355, 0.372, -2.049]}
        scale={0.617}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials.pieree02}
        position={[6.807, 0.102, 4.373]}
        rotation={[0.815, -0.159, 0.247]}
        scale={0.539}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.pierre}
        position={[0.416, -0.374, -4.811]}
        rotation={[-1.976, -0.292, -0.324]}
        scale={0.617}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.pierre}
        position={[-0.567, -0.2, -0.401]}
        scale={0.312}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.pierre}
        position={[-1.099, -0.068, 0.082]}
        rotation={[-1.703, -0.381, -1.88]}
        scale={0.674}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.pierre}
        position={[-1.804, -0.428, 0.769]}
        scale={0.528}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere005.geometry}
        material={materials.pierre}
        position={[3.636, -0.319, -0.5]}
        rotation={[-0.165, 0.443, -2.96]}
        scale={0.546}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere004.geometry}
        material={materials.pierre}
        position={[4.177, -0.214, -0.551]}
        rotation={[0.186, -0.742, -0.003]}
        scale={0.829}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.pierre}
        position={[-3.564, 2.057, -4.431]}
        scale={0.389}
      />
      <group position={[0.199, 0.015, -0.237]} scale={8}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials["herbe ground"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials.sable}
        />
      </group>
    </group>
  );
};
export default River;
useGLTF.preload("models-3d/River.glb");
