import React from "react";
import { TfiGallery } from "react-icons/tfi";
import "./NewsSection.css";
import Gallery1 from "../../../assets/Images/Gallery1.png";
import Gallery2 from "../../../assets/Images/Gallery2.png";
import Gallery3 from "../../../assets/Images/Gallery3.png";
import Gallery4 from "../../../assets/Images/Gallery4.png";

const galleryImages = [
  Gallery3,
  Gallery1,
  Gallery1,
  Gallery1,
  Gallery2,
  Gallery4,
  Gallery1,
  Gallery1,
  Gallery1,
  Gallery1,
  Gallery2,
  Gallery2,
  Gallery3,
  Gallery1,
  Gallery1,
  Gallery1,
  Gallery1,
  Gallery1,
];

const NewsSection = () => {
  return (
    <div className="Angry-grid">
      {galleryImages.map((image, index) => (
        <div key={index} id={`Item-${index}`} className="omagu">
          <img
            src={image}
            alt={`gallery-${index + 1}`}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            className="gal_img"
          />
          <div className="overlay">
            <TfiGallery color="#f45f02" className="text" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
