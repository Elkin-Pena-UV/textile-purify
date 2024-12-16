import { useVideoTexture } from "@react-three/drei"

const MutedVideo = (props) => {
    const texture = useVideoTexture("/videos/muted_video.mp4", {
        muted: false,
        loop: true,
        start: true
    });

    

    return (
        <mesh {...props} position={[-3, 1, 3]} name="muted-video" scale={1.3}>
            <planeGeometry args={[2,1]}/>
            <meshBasicMaterial map={texture} toneMapped={false}/>
        </mesh>
    );
};

export default MutedVideo;