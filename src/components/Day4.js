import React, { useState, useEffect } from "react";
import axios from "axios";
import { createClient } from "pexels";

const API_KEY = "oij718qHxezOXleUpOgckQOkuNl0jlGkUGhrWs7f8v12QZx0o6NYKCnD";
const client = createClient(API_KEY);

const Day4 = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const categoryList = ["Nature", "Animals", "Travel"];

  useEffect(() => {
    // Define the categories you want to display

    setCategories(categoryList);
    setSelectedCategory(categoryList[0]); // Set the default selected category
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="container" id="ph">
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center mb-2 border-bottom">
            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
              {categories.map((category) => (
                <a
                  key={category}
                  className={`me-3 py-2 link-body-emphasis text-decoration-none ${
                    selectedCategory === category ? "text-dark" : ""
                  }`}
                  onClick={() => handleCategoryChange(category)}
                  href="#ph"
                >
                  {category}
                </a>
              ))}
            </nav>
          </div>
          <div className="image-gallery-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal text-body-emphasis">
              Versatile Image Gallery
            </h1>
            <p className="fs-5 text-body-secondary">
              Explore a diverse collection of stunning images with this
              versatile image gallery. You can filter images by categories or
              search for specific images using the search bar. It's built with
              default Bootstrap components and utilities with little
              customization.
            </p>
          </div>
        </header>
        {selectedCategory && <ImageCard category={selectedCategory} />}
      </div>
    </>
  );
};
const ImageCard = ({ category }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch photos based on the selected category and search term
    const query = category ? category : ""; // If category is empty, it will return photos for the search term
    client.photos
      .search({ query, per_page: Math.floor(Math.random() * 20) })
      .then((result) => {
        // Modify the photo URLs to include the desired height and width
        const photosWithSize = result.photos.map((photo) => {
          const width = 200; // Set your desired width
          const height = 300; // Set your desired height
          return {
            ...photo,
            src: {
              ...photo.src,
              small: `${photo.src.small}?w=${width}&h=${height}`, // Modify the URL with the desired height and width
            },
          };
        });

        setPhotos(photosWithSize);
      })
      .catch((error) => console.error(error));
  }, [category]);

  return (
    <main>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {photos.map((photo, i) => {
          return (
            <div className="col" key={i}>
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-body">
                  <div className="card">
                    <div
                      className="bg-image hover-overlay ripple"
                      data-mdb-ripple-color="light"
                    >
                      <a className="ripple" href="#!">
                        <img
                          alt={photo.photographer}
                          className="card-img-top img-fluid rounded"
                          src={photo.src.medium}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header py-3">
                  <h6 className="my-0 fw-normal">{photo.alt}</h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Day4;
