/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useCallback, useEffect, useRef } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas } from "@react-three/fiber";
import { getDocs, query, where } from "firebase/firestore";
import UserDao from "../../daos/UserDao";
import { OrbitControls, PositionalAudio } from "@react-three/drei";
import Header from "../../components/header/Header";
import "./Home.css";
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
    
      <div className="container">
        <Header />
        <div className="container-content">
          <h1>Introducción a la Problemática del Agua</h1>
          <div className="team-description">
            <p>
            El agua es vital para la vida, pero enfrenta una crisis global.
             Más de 2 mil millones de personas carecen de acceso a agua potable segura,
              lo que provoca enfermedades y muertes. La contaminación, el crecimiento 
              poblacional y el cambio climático agravan la escasez de agua en muchas 
              regiones. Además, la sobreexplotación de recursos hídricos pone en riesgo 
              la sostenibilidad de ecosistemas y comunidades. Sin acciones urgentes, la 
              lucha por el acceso equitativo al agua se intensificará, afectando el 
              desarrollo humano y ambiental.
            </p>

          </div>
        </div>
      </div>
  );
};
export default Home;
