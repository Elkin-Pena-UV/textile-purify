/* eslint-disable no-irregular-whitespace */
import { useCallback, useRef } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas, useFrame } from "@react-three/fiber";
import Sphere from "../../components/Sphere/Sphere";
import { OrbitControls } from "@react-three/drei";
const Home = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

 
  return (
    <>
      <button onClick={handleLogout}>Logout</button>

      <div className="container">
        <Canvas>
          <OrbitControls  />
          <ambientLight />
          <directionalLight position={[10, 10, 10]} intensity={7} />
          <Sphere />
        </Canvas>
      </div>
    </>
  );
};
export default Home;
