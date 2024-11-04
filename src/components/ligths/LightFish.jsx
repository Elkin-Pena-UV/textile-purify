/* eslint-disable react/no-unknown-property */

const LightFish = () => {

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight
        position={[0, 10, 0]}
        intensity={1.5}
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
