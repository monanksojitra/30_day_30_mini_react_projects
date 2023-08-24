import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Day19 = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("jewelery");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container" id="prodc">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h4 className="navbar-brand" href="#prodc">
            Product Slider
          </h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {categories.map((category) => (
                <li key={category} className="nav-item">
                  <a
                    className={`nav-link text-uppercase ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => handleCategoryChange(category)}
                    href="#prodc"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="data-section">
        <Slider {...sliderSettings}>
          {products.map((item) => (
            <div className="col-sm-3 mx-4 my-2" key={item.id}>
              <div className="card col-sm-11 ">
                <div className="bg-image hover-overlay m-3">
                  <img
                    src={item.image}
                    alt={item.title || item.name}
                    className="img-fluid mx-auto"
                    style={{
                      height: "200px",
                      object_fit: "cover",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h6
                    className="card-title"
                    style={{
                      height: "20px",
                      white_space: "nowrap",
                      overflow: "hidden",
                      text_overflow: "ellipsis",
                    }}
                  >
                    {item.title}
                  </h6>
                  <p
                    className="card-text"
                    style={{
                      height: "16vh",
                      white_space: "nowrap",
                      overflow: "hidden",
                      text_overflow: "ellipsis",
                    }}
                  >
                    {item.description}
                  </p>
                  <p className="card-text">
                    <strong>
                      Price: <i className="fas fa-dollar-sign"></i>
                    </strong>{" "}
                    {item.price}
                  </p>
                  <button className="btn btn-primary btn-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Day19;
