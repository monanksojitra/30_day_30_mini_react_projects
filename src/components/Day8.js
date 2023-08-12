import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Day8.css";
import { createClient } from "pexels";
import InfiniteScroll from "react-infinite-scroll-component"; // Import the Infinite Scroll library

const API_KEY = "oij718qHxezOXleUpOgckQOkuNl0jlGkUGhrWs7f8v12QZx0o6NYKCnD";
const client = createClient(API_KEY);

const Day8 = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1); // Current page for pagination
  const categoryList = ["Nature", "Animals", "Travel"];

  useEffect(() => {
    setCategories(categoryList);
    setSelectedCategory(categoryList[0]);
  }, []);

  useEffect(() => {
    // Fetch photos based on the selected category and page
    const query = selectedCategory ? selectedCategory : "";
    client.photos
      .search({ query, per_page: 10, page })
      .then((result) => {
        const newPhotos = result.photos.map((photo) => {
          const width = 200;
          const height = 300;
          return {
            ...photo,
            src: {
              ...photo.src,
              small: `${photo.src.small}?w=${width}&h=${height}`,
            },
          };
        });

        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]); // Append new photos
      })
      .catch((error) => console.error(error));
  }, [selectedCategory, page]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPhotos([]); // Clear the current photos when category changes
    setPage(1); // Reset page to 1
  };

  const fetchMoreData = () => {
    setPage(page + 1); // Load more photos for the next page
  };

  return (
    <>
      <div className="container py-3 infinite-scroll-container" id="ph">
        <InfiniteScroll
          dataLength={photos.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center infinite-scroll-content">
            {photos.map((photo, i) => {
              return (
                <div className="col " key={i}>
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
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Day8;
