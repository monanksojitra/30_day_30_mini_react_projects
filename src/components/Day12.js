import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Day12 = () => {
  const [movies, setMovies] = useState([]);
  const options = {
    method: "GET",

    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzVmYjExNjQ1NzgyYzE4MTA4ZWM2ZTU5MzEwNTkwNSIsInN1YiI6IjY0ZGM2ZDczYTNiNWU2MDEzOWZmZWM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g97rBsyYOy09saDk9-zuIFecU1AC-DJ3dwTYZIAJdCs",
    },
  };

  const apiEndpoints = [
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",

    "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",

    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",

    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",

    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  ];
  const sectionNames = [
    "Discover Movies",
    "Discover TV Shows",
    "Popular Movies",
    "Top Rated Movies",
    "Upcoming Movies",
  ];
  useEffect(() => {
    const fetchData = async () => {
      const allData = [];

      for (const endpoint of apiEndpoints) {
        try {
          const response = await axios.get(endpoint, options);
          allData.push(response.data);
        } catch (error) {
          console.error(error);
        }
      }

      setMovies(allData);
    };
    fetchData();
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
   
      <div className="movie-container">
        {movies.map((data, index) => (
          <div key={index} className="data-section">
            <h3>{sectionNames[index]}</h3>
            {Array.isArray(data.results) && (
              <Slider {...sliderSettings}>
                {data.results.map((item) => (
                  <div className=" col-sm-3 m-2" key={item.id}>
                    <div className="card col-sm-11 ">
                      <div
                        className="bg-image hover-overlay"
                        key={item.id}
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
                          alt={item.title || item.name}
                          width={350}
                          className="img-fluid"
                        />
                        
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">
                          {item.title || item.name}
                        </h5>
                        <p
                          className="card-text"
                          style={{
                            height: "150px",
                            white_space: "nowrap",
                            overflow: "hidden",
                            text_overflow: "ellipsis",
                          }}
                        >
                          {item.overview}
                        </p>
                        <div className="additional-info">
                          <p>
                            <strong>
                              <i className="fas fa-calendar-alt"></i> Release
                              Date:
                            </strong>{" "}
                            {item.release_date}
                          </p>
                          <p>
                            <strong>
                              <i className="fas fa-fire"></i> Popularity:
                            </strong>{" "}
                            {item.popularity}
                          </p>
                          <p>
                            <strong>
                              <i className="fas fa-star"></i> Vote Average:
                            </strong>{" "}
                            {item.vote_average}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        ))}
      </div>
    
  );
};

export default Day12;
