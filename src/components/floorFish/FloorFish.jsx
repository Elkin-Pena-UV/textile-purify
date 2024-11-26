/* eslint-disable react/no-unknown-property */
import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useMemo } from "react";

const FloorFish = (props) => {
  const PATH = useMemo(() => "materials/floorFish/cliff_side_", []);


  const floorTexture = useTexture({
    normalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    ambientOcclusionMap: PATH + "ao_1k.jpg",
    map: PATH + "diff_1k.jpg",
    displacementMap: PATH + "disp_1k.png",
  });

  return (
    <RigidBody type="Static" friction={2}>
      <mesh {...props} >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          map={floorTexture.map}
          normalMap={floorTexture.normalMap}
          roughnessMap={floorTexture.roughnessMap}
          aoMap={floorTexture.ambientOcclusionMap}
          displacementMap={floorTexture.displace}
        />
      </mesh>
      </RigidBody>
  );
};

export default FloorFish;
