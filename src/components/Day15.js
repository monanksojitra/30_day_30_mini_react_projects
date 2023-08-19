import React, { useState, useEffect } from "react";
import axios from "axios";

const Day15 = () => {
  const [quote, setQuote] = useState([]);
  const [categories, setCategories] = useState([
    "age",
    "alone",
    "amazing",
    "anger",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "business",
    "car",
    "change",
    "communications",
    "computers",
    "cool",
    "courage",
    "dad",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const apiKey = "d38/yKZQ3ov/YjaNSx7qzw==MPe2EP15caTWYJfR";

  const getRandomQuote = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=${selectedCategory}`,
        {
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Request failed:", response.statusText);
      }

      const data = response.data;
      setQuote(data[0]["quote"]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleNewQuoteClick = () => {
    getRandomQuote(selectedCategory);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <select
              className="form-select mb-3"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-outline-success btn-sm"
              onClick={handleNewQuoteClick}
            >
              Get New
            </button>
          </div>
        </div>
        {quote && (
          <div className="card">
            <h5 className="card-header">Quote</h5>
            <div className="card-body">
              <p className="card-text">{quote}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Day15;
