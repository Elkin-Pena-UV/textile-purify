/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useCallback, useEffect, useRef } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas } from "@react-three/fiber";
import { getDocs, query, where } from "firebase/firestore";
import UserDao from "../../daos/UserDao";
import { OrbitControls, PositionalAudio } from "@react-three/drei";
import Fish from "../../components/Fish/Fish";
import ligthFish  from "../../components/Fish/Fish";
import Header from "../../components/header/Header";
import Shark from "../../components/Shark/Shark";
import Beach from "../../components/Beach/Beach";
import LightFish from "../../components/ligths/LigthFish";
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


  return (
    <>
      <div className="container">
        <Header />
        <Canvas camera={{ position: [0, 1, 8] }}>
          <OrbitControls makeDefault />
          <LightFish/>
          <Fish/>
        </Canvas>
      </div>
    </>
  );
};
export default Home;
