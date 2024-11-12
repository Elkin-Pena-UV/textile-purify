import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Cloud, Environment } from "@react-three/drei";
import * as THREE from "three";

const Stading = () => {
  const rainRef = useRef();
  const cloudPosition = [0, 8, 0]; 
  const rainCount = 1500; 

  const rainPositions = useMemo(() => {
    const positions = new Float32Array(rainCount * 3);
    const velocities = new Float32Array(rainCount * 3); 

    for (let i = 0; i < rainCount; i++) {
      positions[i * 3] = cloudPosition[0] + Math.random() * 3 - 1.5; 
      positions[i * 3 + 1] = cloudPosition[1] + Math.random() * 2 - 1; 
      positions[i * 3 + 2] = cloudPosition[2] + Math.random() * 3 - 1.5; 

      velocities[i * 3 + 1] = Math.random() * -0.2 - 0.1; 
    }

    return { positions, velocities };
  }, [rainCount, cloudPosition]);

  useFrame(() => {
    const positions = rainRef.current.geometry.attributes.position.array;
    const velocities = rainRef.current.userData.velocities;

    for (let i = 1; i < positions.length; i += 3) {
      positions[i] += velocities[i]; 

      if (positions[i] < -10) {
        positions[i] = cloudPosition[1] + Math.random() * 2 - 1;
        positions[i - 1] = cloudPosition[0] + Math.random() * 3 - 1.5;
        positions[i + 1] = cloudPosition[2] + Math.random() * 3 - 1.5;
        velocities[i] = Math.random() * -0.2 - 0.1; 
      }
    }
    rainRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <Cloud
        position={cloudPosition}
        speed={2}
        scale={0.5}
        color="#d3d3d3"
        opacity={0.5}
      />

      <Environment
        ground={{
          height: 20,
          radius: 60,
          scale: 100,
        }}
        files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
        path="/cubemap/sky/"
        background={true}
      />

      {/* Efecto de lluvia */}
      <points ref={rainRef} userData={{ velocities: rainPositions.velocities }}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={rainPositions.positions}
            count={rainCount}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#a0a0a0" size={0.1} transparent opacity={0.6} />
      </points>
    </>
  );
};

export default Stading;