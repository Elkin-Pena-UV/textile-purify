const LightFish = () => {
  return (
    <>
      <directionalLight
        position={[0, 9, 0]}
        intensity={5}  
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};

export default LightFish;
