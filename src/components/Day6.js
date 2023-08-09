import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createClient } from "pexels"; // Import the Pexels client

const Day6 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [postImages, setPostImages] = useState([]); // State to hold post images

  const carouselItems = [
    {
      imageSrc: "https://i.pravatar.cc/150?img=",
      description: "Some days start better than others. ☀️",
      name: "John Doe",
      occupation: "Photographer 📸",
      address: "123 Main St",
    },
    {
      imageSrc: "https://i.pravatar.cc/150?img=",
      description: "Today I will be as useless as the ‘g’ in lasagna. 🍝",
      name: "Jane Smith",
      occupation: "Writer ✍️",
      address: "456 Elm St",
    },
    {
      imageSrc: "https://i.pravatar.cc/150?img=",
      description:
        "Life is like a box of chocolates; sometimes you just dig out the good center parts and leave all the undesirable rest to waste. 🍫",
      name: "David Johnson",
      occupation: "Chocolatier 🍬",
      address: "789 Oak Ave",
    },
    {
      imageSrc: "https://i.pravatar.cc/150?img=",
      description:
        "There is no such thing as a perfect person, but someone’s heart can have a perfect intention. ❤️",
      name: "Emily Williams",
      occupation: "Heart Surgeon 🩺",
      address: "321 Pine St",
    },
    {
      imageSrc: "https://i.pravatar.cc/150?img=",
      description: "Throw sass around like confetti. 🎉",
      name: "Michael Brown",
      occupation: "Party Planner 🎈",
      address: "456 Maple Ave",
    },
    {
      imageSrc: "https://i.pravatar.cc/150?img=",
      description: "Hella heart eyes for you. 😍",
      name: "Olivia Davis",
      occupation: "Romance Novelist 📖",
      address: "987 Cedar St",
    },
    {
      imageSrc: "https://i.pravatar.cc/150?img=",
      description: "Decluttering my life like Marie Kondo. 🧹",
      name: "Daniel Taylor",
      occupation: "Organizer 🗃️",
      address: "555 Oak St",
    },
    {
      imageSrc: "https://i.pravatar.cc/150?img=",
      description: "Life is simple. It’s just not easy. 🌟",
      name: "Sophia Anderson",
      occupation: "Philosopher 🧘‍♀️",
      address: "111 Elm St",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);

    // Initialize Pexels client and fetch images
    const client = createClient(
      "oij718qHxezOXleUpOgckQOkuNl0jlGkUGhrWs7f8v12QZx0o6NYKCnD"
    );
    const query = "people";

    client.photos
      .search({ query, per_page: carouselItems.length })
      .then((photos) => {
        const images = photos["photos"].map((photo) => photo.src.medium);
        setPostImages(images);
      });

    return () => {
      clearInterval(interval);
    };
  }, [carouselItems.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={` mx-2 ${index === activeIndex ? "active" : ""}`}
            style={{ width: "400px", transition: "0.5s" }}
          >
            <div className="card mx-2">
              <div className="d-flex align-items-center justify-content-between m-3 ">
                <div className="ms-1 d-flex align-items-center">
                  <img
                    src={item.imageSrc + index}
                    alt=""
                    width={45}
                    height={45}
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h6 className="fw-bold mb-0">{item.name}</h6>
                    <small className="fw-light ">{item.occupation}</small>
                  </div>
                </div>
                <a
                  class="btn btn-link btn-rounded btn-sm"
                  href="#"
                  role="button"
                >
                  <i class="fa-solid fa-ellipsis-vertical fa-xl"></i>
                </a>
              </div>
              <img
                src={postImages[index]} // Use Pexels image for the post
                className="card-img-bottem"
                alt="Fissure in Sandstone"
                height={270}
              />
              <div className="card-body">
                <p className="card-text">{item.description}</p>
                <i class="fa-regular fa-xl fa-heart m-1"></i>
                <i class="fa-regular fa-xl fa-comment m-1"></i>
                <i class="fa-solid fa-retweet fa-xl m-1"></i>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Day6;
