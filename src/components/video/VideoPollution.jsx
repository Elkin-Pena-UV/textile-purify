import { useVideoTexture } from "@react-three/drei";
import { useCallback, useState } from "react";

const VideoPollution = (props) => {
  const texture = useVideoTexture("/videos/video_pollution.mp4", {
    muted: false,
    loop: true,
    start: false,
  });

  const [pause, setPause] = useState(false);

  const handleVideo = useCallback(
    (e) => {
      e.stopPropagation();
      pause ? texture.image.play() : texture.image.pause();
      setPause(!pause);
    },
    [pause, setPause, texture]
  );

  return (
    <mesh
      {...props}
      position={[0.7, 0.35, 0]}
      scale={0.2}
      rotation={[-Math.PI / -0.2, -0.4, 9.43]}
      onClick={handleVideo}
    >
      <planeGeometry args={[2, 1]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

export default VideoPollution;
