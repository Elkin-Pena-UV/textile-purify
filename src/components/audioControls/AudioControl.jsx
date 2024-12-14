// src/components/AudioControl/AudioControl.js
import React, { useRef, useState, useCallback } from "react";

const AudioControl = ({ audioUrl, loop = true }) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  const handleAudio = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pausar el audio si ya está reproduciéndose
      } else {
        audioRef.current.play(); // Reproducir el audio si está pausado
      }
      setIsPlaying(!isPlaying); // Cambiar el estado del audio (de reproducir a pausar y viceversa)
    }
  }, [isPlaying]);

  return (
    <div>
      {/* Botón para pausar/reproducir el audio */}
      <button
        onClick={handleAudio}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 20px",
          backgroundColor: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isPlaying ? "Pausar Audio" : "Reproducir Audio"}
      </button>

      {/* El audio */}
      <audio ref={audioRef} loop={loop} src={audioUrl} />
    </div>
  );
};

export default AudioControl;
