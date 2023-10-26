import React, { useEffect, useState } from "react";
import "./slideshow.scss";

export function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      let i;
      const slides = document.querySelectorAll(".mySlides");
      const dots = document.querySelectorAll(".dot");

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      setSlideIndex((prevIndex) =>
        prevIndex >= slides.length - 1 ? 0 : prevIndex + 1
      );

      for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }

      slides[slideIndex].style.display = "block";
      dots[slideIndex].classList.add("active");
    };

    const interval = setInterval(showSlides, 2000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <img
          src="src\assets\img\slide2.jpg"
          style={{ width: "100%" }}
          alt="Slide 1"
        />
      </div>
      <div className="mySlides fade">
        <img
          src="src\assets\img\company.jpg"
          style={{ width: "100%" }}
          alt="Slide 2"
        />
      </div>
      <div className="mySlides fade">
        <img
          src="src\assets\img\slide1.jpg"
          style={{ width: "100%" }}
          alt="Slide 3"
        />
      </div>
      <br />

      <div style={{ textAlign: "center" }} className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}
