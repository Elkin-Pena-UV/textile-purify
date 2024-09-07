/* eslint-disable no-irregular-whitespace */
import { useCallback, useEffect, useRef } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas, useFrame } from "@react-three/fiber";
import Sphere from "../../components/Sphere/Sphere";
import { OrbitControls } from "@react-three/drei";
import { getDocs, query, where } from "firebase/firestore";
import UserDAO from "../../daos/UserDao";

const Home = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  useEffect( ()  => {
    const getEmail = async () => {
      const queryEmail = query(UserDAO.collectionRef, where("email", "==", user.email));
      const email =  await getDocs(queryEmail);
    
    if (user && email.empty) {
      
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      UserDAO.createUser(newUser);
    }

  }
  getEmail()
  }, [user]);

 
  return (
    <>
      <button className="btnform" onClick={handleLogout}>Logout</button>

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
