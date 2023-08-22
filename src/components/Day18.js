import React, { useState, useEffect } from "react";
import axios from "axios";

const Day18 = () => {
  const [photos, setPhotos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const API_URL =
    "https://api.unsplash.com/photos?page=1&fit=crop&q=80&fit=max";
  const CLIENT_ID = "ML5kLhYPsumIRVuK2xdwgWXHKy768P641Lh7147c7KM";

  useEffect(() => {
    axios
      .get(API_URL, {
        headers: {
          Authorization: `Client-ID ${CLIENT_ID}`,
        },
      })
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="carouselExampleControls"
      className="d-flex justify-content-between"
      data-mdb-ride="carousel"
    >
      <div className="my-auto">
        <button
          type="button"
          class="btn btn-dark"
          data-mdb-ripple-color="dark"
          onClick={goToPrevious}
        >
          Previous
        </button>
      </div>

      <div>
        {photos.map((photo, index) => (
          <div
            className={` carousel-item ${
              index === activeIndex ? "active" : ""
            }`}
            key={photo.id}
          >
            <img src={photo.urls.small} alt={photo.title} />
          </div>
        ))}
      </div>
      <div className="my-auto">
        <button type="button" class="btn btn-dark" onClick={goToNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Day18;
