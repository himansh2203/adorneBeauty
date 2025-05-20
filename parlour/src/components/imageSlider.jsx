import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import img4 from "../images/pexels-cottonbro-3993447.jpg";
import img3 from "../images/pexels-cottonbro-3993449.jpg";
import img2 from "../images/pexels-cottonbro-3993467.jpg";
import img1 from "../images/pexels-enginakyurt-3065209.jpg";

const images = [img1, img2, img3, img4, img1, img2, img3, img4];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}>
        {images.map((each, index) => (
          <img
            key={index}
            style={{ width: "100%", height: "40rem" }}
            src={each}
          />
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
