import React, { useState, useCallback } from "react";
import "./Information.css";

const Information = ({ title, description, urlImage }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleImageClick = useCallback(() => {
    setIsImageOpen((prev) => !prev); 
  }, []);

  return (
    <div className="information">
      <h2>{title}</h2>
      <div className="information-content">
        <div className="content">{description}</div>
        <img
          src={urlImage}
          className={`image ${isImageOpen ? "large" : ""}`}
          alt={`Image representing ${title}`}
          onClick={handleImageClick}
          loading="lazy"
          aria-label={`Click to enlarge image of ${title}`}
        />
      </div>

      {isImageOpen && (
        <section className="modal open" onClick={handleImageClick}>
          <img
            src={urlImage}
            className="modal-image"
            alt={`Enlarged view of ${title}`}
          />
        </section>
      )}
    </div>
  );
};

export default Information;
