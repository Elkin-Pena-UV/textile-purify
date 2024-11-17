import { Cloud, Environment } from "@react-three/drei";

const Stading = () => {
  const cloudPosition = [0, 8, 0];
  const rainCount = 1500;

  return (
    <>
      <Cloud
        position={cloudPosition}
        speed={2}
        scale={0.5}
        color="#d3d3d3"
        opacity={0.5}
      />

      <Environment
        ground={{
          height: 20,
          radius: 60,
          scale: 100,
        }}
        files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
        path="/cubemap/sky/"
        background={true}
      />

    </>
  );
};

export default Stading;
