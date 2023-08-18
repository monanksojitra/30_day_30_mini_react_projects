import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createClient } from "pexels";

const Day14 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [postImages, setPostImages] = useState([]);
  const sliderRef = useRef(null); // Reference to the Slider component

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment active index and move the slider to the next slide
      setActiveIndex((prevIndex) => (prevIndex + 1) % postImages.length);
      sliderRef.current.slickNext(); // Move to the next slide smoothly
    }, 1000);

    const client = createClient(
      "oij718qHxezOXleUpOgckQOkuNl0jlGkUGhrWs7f8v12QZx0o6NYKCnD"
    );

    const queries = ["cars", "nature", "architecture", "animals"]; // Different topics

    const fetchImages = async () => {
      const images = [];
      for (const query of queries) {
        const photos = await client.photos.search({ query, per_page: 3 }); // Fetch 3 images for each topic
        images.push(...photos.photos.map((photo) => photo.src.medium));
      }
      setPostImages(images);
    };

    fetchImages();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500, // Control slide transition speed
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {postImages.map((image, index) => (
        <div
          key={index}
          className={`mx-2 ${index === activeIndex ? "active" : ""}`}
          style={{ width: "400px", transition: "0.5s" }}
        >
          <div className="card mx-2 p-3">
            <img
              src={image}
              className="card-img-bottem"
              alt={`Slide ${index}`}
              height={270}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Day14;
