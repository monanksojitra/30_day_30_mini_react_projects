import React, { useState, useEffect } from "react";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const cuisinesList = [
  "African",
  "Asian",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];

const RecipeBook = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const apiKey = "6b5c380337ce49b8a6dabc633d920d8e";

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  useEffect(() => {
    // Fetch recipes based on selected category and search query
    const url = selectedCategory
      ? `https://api.spoonacular.com/recipes/complexSearch?cuisine=${selectedCategory}&apiKey=${apiKey}`
      : `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        const fetchedRecipes = response.data.results;
        // Fetch individual recipe summaries and update the state
        const updatedRecipes = fetchedRecipes.map((recipe) => {
          const summaryUrl = `https://api.spoonacular.com/recipes/${recipe.id}/summary?apiKey=${apiKey}`;
          return axios.get(summaryUrl).then((summaryResponse) => {
            return {
              ...recipe,
              summary: summaryResponse.data.summary,
            };
          });
        });

        Promise.all(updatedRecipes).then((updatedRecipesWithSummary) => {
          setRecipes(updatedRecipesWithSummary);
        });
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div className="mb-4 w-25 mx-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {cuisinesList.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4 w-25 ">
          <input
            type="text"
            className="form-control"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        {console.log(recipes)}
        <Slider {...settings}>
          {recipes.map((recipe) => (
            <div key={recipe.id} className="col-md-3 mb-4">
              <div className="card mx-2">
                <img
                  src={recipe.image}
                  className="card-img-top"
                  alt={recipe.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: recipe.summary }}
                  />
                  <a href={recipe.sourceUrl} className="btn btn-primary">
                    View Recipe
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecipeBook;
