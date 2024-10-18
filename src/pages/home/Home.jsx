/* eslint-disable react/no-unknown-property */
/* eslint-disable no-irregular-whitespace */
import { useCallback, useEffect, useRef } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas} from "@react-three/fiber";
import Sphere from "../../components/Sphere/Sphere";
import { getDocs, query, where } from "firebase/firestore";
import UserDao from "../../daos/UserDao";
import { FirstPersonControls, PositionalAudio } from "@react-three/drei";

const Home = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  useEffect( ()  => {
    const getEmail = async () => {
      const queryEmail = query(UserDao.collectionRef, where("email", "==", user.email));
      const email =  await getDocs(queryEmail);
    
    if (user && email.empty) {
      
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      UserDao.createUser(newUser);
    }

  }
  getEmail()
  }, [user]);

 const audioRef = useRef();

// const handleAudio= useCallback(() => {

//   audioRef.current.play();
//   audioRef.current.setVolumen(10);


// })


  return (
    <>
      <button className="btnform" onClick={handleLogout}>Logout</button>

      <div className="container">
        <Canvas >
        <FirstPersonControls/>
          <directionalLight position={[10, 10, 10]} intensity={7} />
          <Sphere/>
          <group position={[0, 5, 0]}>
            <PositionalAudio autoplay ref={audioRef} loop url="/sounds/lazy.mp3" />
          </group>
        </Canvas>
      </div>
    </>
  );
};
export default Home;
