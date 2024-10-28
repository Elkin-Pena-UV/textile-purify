import { useTexture } from "@react-three/drei";
import { useMemo } from "react";

const Floor = () => {
    const PATH = useMemo(() => "/materials/floor/gravelly_sand_", []);
    const floorTexture = useTexture({
        map: PATH + "diff_1k.jpg",
        normalMap: PATH + "nor_gl_1k.jpg",
        roughnessMap: PATH + "rough_1k.jpg",
        ambientOcclusionMap: PATH + "ao_1k.jpg",
    })
    
    return(
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial
            map={floorTexture.map}
            normalMap={floorTexture.normalMap}
            roughnessMap={floorTexture.roughnessMap}
            ambientOcclusionMap={floorTexture.ambientOcclusionMap}
            /> {/* Cambia color según prefieras */}
        </mesh>
    )
}
export default Floor;