import { useVideoTexture } from "@react-three/drei"

const VideoPollution = (props) => {
    const texture = useVideoTexture("/videos/video_pollution.mp4", {
        loop: true,
        start: true
    });

    return (
        <mesh {...props} position={[0.7, 0.35 ,0]} scale={0.2} rotation={[-Math.PI / -0.2, -0.4, 9.43]}>
            <planeGeometry args={[2,1]}/>
            <meshBasicMaterial map={texture} toneMapped={false}/>
        </mesh>
    );
};

export default VideoPollution;