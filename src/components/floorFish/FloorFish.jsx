/* eslint-disable react/no-unknown-property */
import { useTexture } from "@react-three/drei";
import { useMemo } from "react";

const FloorFish = () => {
    const PATH = useMemo(() => "materials/floorFish/cliff_side_", []);
    const floorTexture = useTexture({
        normalMap: PATH + "nor_gl_1k.jpg",
        roughnessMap: PATH + "rough_1k.jpg",
        ambientOcclusionMap: PATH + "ao_1k.jpg",
        map:PATH + "diff_1k.jpg",
        displacementMap: PATH + "disp_1k.png"

    });

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
            <planeGeometry args={[100,100]} />
            <meshStandardMaterial
                map={floorTexture.map}
                normalMap={floorTexture.normalMap}
                roughnessMap={floorTexture.roughnessMap}
                aoMap={floorTexture.ambientOcclusionMap}
                displacementMap={floorTexture.displace}
                receiveShadow
            /> 
        </mesh>
    );
}

export default FloorFish;
