/* eslint-disable react/no-unknown-property */
import { useCallback, useEffect, useRef } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas } from "@react-three/fiber";
import { getDocs, query, where } from "firebase/firestore";
import UserDao from "../../daos/UserDao";
import { OrbitControls, PositionalAudio } from "@react-three/drei";
import Beach from "../../components/Beach/Beach";
import Turtle from "../../components/Turtle/Turtle";
import Fish from "../../components/Fish/Fish";

const Home = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  useEffect(() => {
    const getEmail = async () => {
      const queryEmail = query(
        UserDao.collectionRef,
        where("email", "==", user.email)
      );
      const email = await getDocs(queryEmail);

      if (user && email.empty) {
        const newUser = {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
        };
        UserDao.createUser(newUser);
      }
    };
    getEmail();
  }, [user]);

  const audioRef = useRef();

  // const handleAudio= useCallback(() => {

  //   audioRef.current.play();
  //   audioRef.current.setVolumen(10);

  // })

  return (
    <>
      <button className="btnform" onClick={handleLogout}>
        Logout
      </button>

      <div className="container">
        <Canvas camera={{ position: [4, 5, 5], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={.2} />
          <spotLight
            position={[-10, 10, 5]}
            intensity={0.5}
            angle={0.2}
            penumbra={0.3}
          />
          <directionalLight position={[10, 10, 10]} intensity={2.7} />
          <OrbitControls />
          <Beach/>
          <group position={[0, 5, 0]}>
            <PositionalAudio
              autoplay
              ref={audioRef}
              loop
              url="/sounds/lazy.mp3"
            />
          </group>
        </Canvas>
      </div>
    </>
  );
};
export default Home;
