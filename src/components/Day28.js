import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

function Day28() {
  const [nowShowingMovies, setNowShowingMovies] = useState([]);
  const [comingSoonMovies, setComingSoonMovies] = useState([]);
  const [liveSearchMovies, setLiveSearchMovies] = useState([]);
  const [cinemaSearchResults, setCinemaSearchResults] = useState([]);
  const now = new Date(); // Get the current date and time
  const dynamicISODate = now.toISOString();
  const req_hader = {
    "api-version": "v200",
    Authorization: "Basic QkdRSzp1dlN2bFlpTjJTYUI=",
    client: "ABCDxf",
    "x-api-key": "UMQutt5GeF19QId2kf84Z8otL7j0po6g8uabL0ed",
    "device-datetime": dynamicISODate,
    territory: "IN",
  };
  const apiEndpoints = {
    nowShowing: "https://api-gate2.movieglu.com/filmsNowShowing/?n=10",
    comingSoon: "https://api-gate2.movieglu.com/filmsComingSoon/?n=10",
    purchaseConfirmation:
      "https://api-gate2.movieglu.com/purchaseConfirmation/",
    filmDetails: "https://api-gate2.movieglu.com/filmDetails/",
  };

  // async function cenamasearch(input) {
  //   const cinemaSearchResponse = await axios.get(
  //     `https://api-gate2.movieglu.com/cinemaLiveSearch/?query=${input}`,
  //     {
  //       headers: req_hader,
  //     }
  //   );
  // }
  // async function moreabovefile(input) {
  //   const cinemaSearchResponse = await axios.get(
  //     `https://api-gate2.movieglu.com/filmDetails/?film_id=${input}`,
  //     {
  //       headers: req_hader,
  //     }
  //   );
  // }
  // async function fetchPurchaseConfirmation(cinemaId, filmId, date, time) {
  //   try {
  //     const purchaseConfirmationResponse = await axios.get(
  //       `${apiEndpoints.purchaseConfirmation}?cinema_id=${cinemaId}&film_id=${filmId}&date=${date}&time=${time}`,
  //       {
  //         headers: req_hader,
  //       }
  //     );
  //     // Handle the purchaseConfirmationResponse data as needed
  //     console.log(purchaseConfirmationResponse.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // // New function to fetch film details
  // async function fetchFilmDetails(filmId) {
  //   try {
  //     const filmDetailsResponse = await axios.get(
  //       `${apiEndpoints.filmDetails}?film_id=${filmId}`,
  //       {
  //         headers: req_hader,
  //       }
  //     );
  //     // Handle the filmDetailsResponse data as needed
  //     console.log(filmDetailsResponse.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const nowShowingResponse = await axios.get(apiEndpoints.nowShowing, {
          headers: req_hader,
        });

        const comingSoonResponse = await axios.get(apiEndpoints.comingSoon, {
          headers: req_hader,
        });
        console.log(nowShowingResponse)
        setNowShowingMovies(nowShowingResponse.data["films"]);
        setComingSoonMovies(comingSoonResponse.data["films"]);
      } catch (error) {
        console.error(error);
      }
    };
    // async function searchdata(input) {
    //   const liveSearchMovieResponse = await axios.get(
    //     `https://api-gate2.movieglu.com/filmLiveSearch/?query=${input}&n=6`,
    //     { headers: req_hader }
    //   );
    //   console.log(liveSearchMovieResponse.data);
    // }
    // searchdata("jawaan");
    fetchData();
  }, []); // The empty dependency array means this effect will run once when the component mounts.

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 2,
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
      <h3>Now Showing :</h3>
      <div className="data-section">
        <Slider {...sliderSettings}>
          {nowShowingMovies.map((data) => (
            <div className=" col-sm-3 m-2" key={data.film_id}>
              <div className="card col-sm-11 ">
                <div
                  className="bg-image hover-overlay"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={
                      data.images.poster[1]?.medium.film_image ||
                      "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=996&t=st=1694179733~exp=1694180333~hmac=5ae1afc6e8d506159467096a864e97942df6423cefe4f2ec7c0a3ee5e539aca7"
                    }
                    alt={data.title || data.name}
                    className="img-fluid w-100"
                    style={{
                      height: "22rem",
                      object_fit: "fit",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      height: "27px",
                      white_space: "nowrap",
                      overflow: "hidden",
                      text_overflow: "ellipsis",
                    }}
                  >
                    {data.film_name || data.name}
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
                    {data.synopsis_long}
                  </p>
                  <div className="additional-info">
                    <p>
                      <strong>
                        <i className="fas fa-calendar-alt"></i> Release Date:
                      </strong>{" "}
                      {data.release_dates[0].release_date}
                    </p>
                  </div>{" "}
                  <div className="d-flex my-2">
                    <button type="button" className="btn btn-primary m-1">
                      Info
                    </button>
                    <button type="button" className="btn btn-secondary m-1">
                      Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <h3 className="mt-4">Coming SoonMovies :</h3>
      <div className="data-section">
        <Slider {...sliderSettings}>
          {console.log(comingSoonMovies)}
          {comingSoonMovies.map((data) => (
            <div className=" col-sm-3 m-2" key={data.film_id}>
              <div className="card col-sm-11 ">
                <div
                  className="bg-image hover-overlay"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={
                      data.images.poster[1]?.medium.film_image ||
                      "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=996&t=st=1694179733~exp=1694180333~hmac=5ae1afc6e8d506159467096a864e97942df6423cefe4f2ec7c0a3ee5e539aca7"
                    }
                    alt={data.title || data.name}
                    className="img-fluid w-100"
                    style={{
                      height: "22rem",
                      object_fit: "fit",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{data.film_name || data.name}</h5>
                  <p
                    className="card-text"
                    style={{
                      height: "180px",
                      white_space: "nowrap",
                      overflow: "hidden",
                      text_overflow: "ellipsis",
                    }}
                  >
                    {data.synopsis_long
                      ? data.synopsis_long
                      : "coming soon....."}
                  </p>
                  <div className="additional-info">
                    <p>
                      <strong>
                        <i className="fas fa-calendar-alt"></i> Release Date:
                      </strong>{" "}
                      {data.release_dates[0].release_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Day28;
