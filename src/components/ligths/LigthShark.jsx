import { useRef } from "react";

const LigthShark = () => {
    const directionalLightRef = useRef();
    return (
        <>
        <directionalLight
       ref={directionalLightRef} 
       color="white" 
       intensity={2} 
       position={[10, 2, 20]} 
      />
        </>
    );
}
export default LigthShark;