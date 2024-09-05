/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Sphere = () => {
  const cameraSettings = {
    position: [2, 0, 5],
  };

  return (
    <>
      <Canvas camera={cameraSettings}>
        <mesh name="roof">
          <OrbitControls
            autoRotate={true} // Enables automatic rotation of the camera around the target.
            autoRotateSpeed={19} // Sets the speed of the automatic rotation. Higher values rotate faster.
            minDistance={8} // Defines the minimum allowed distance between the camera and the target.
            maxDistance={16} // Defines the maximum allowed distance between the camera and the target.
          />

          <ambientLight intensity={2.5} />
          <directionalLight position={[0, 10, 10]} intensity={3} />

          <sphereGeometry args={[2, 12, 12]} />
          <meshPhongMaterial color={"red"} />
        </mesh>
      </Canvas>
    </>
  );
};

export default Sphere;
