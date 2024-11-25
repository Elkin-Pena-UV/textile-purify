import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
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
        <RigidBody type="Static" friction={1.5}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial
            map={floorTexture.map}
            normalMap={floorTexture.normalMap}
            roughnessMap={floorTexture.roughnessMap}
            ambientOcclusionMap={floorTexture.ambientOcclusionMap}
            /> {/* Cambia color según prefieras */}
        </mesh>
        </RigidBody>
    )
}
export default Floor;