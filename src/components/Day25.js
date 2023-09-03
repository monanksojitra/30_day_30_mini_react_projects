import { useEffect, useState } from "react";

function Day25() {
  const BLANK_CARD =
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Icon-round-Question_mark.svg";
  const [imagesArray, setImagesArray] = useState([]);
  const [cardsChosen, setCardsChosen] = useState([]);
  const [cardsChosenIds, setCardsChosenIds] = useState([]);
  const [points, setPoints] = useState(0);

  const [openCards, setOpenCards] = useState([]);
  const images = [
    {
      type: "php",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
      id: 1,
    },
    {
      type: "css3",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
      id: 2,
    },
    {
      type: "html5",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
      id: 3,
    },
    {
      type: "jquery",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
      id: 4,
    },
    {
      type: "javascript",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
      id: 5,
    },
    {
      type: "node",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
      id: 6,
    },
    {
      type: "photoshop",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
      id: 7,
    },
    {
      type: "python",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
      id: 8,
    },
    {
      type: "rails",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
      id: 9,
    },
    {
      type: "sass",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
      id: 10,
    },
    {
      type: "sublime",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
      id: 11,
    },
    {
      type: "wordpress",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
      id: 12,
    },
  ];
  function createCardBoard() {
    const imagesGenerated = images?.concat(...images);
    console.log(imagesGenerated);
    const shuffledArray = shuffleArray(imagesGenerated);
    setImagesArray(shuffledArray);
  }

  function flipImage(image, index) {
    // CHECK IF IMAGE IS SELECTED
    console.log(image, index);

    if (cardsChosenIds?.length === 1 && cardsChosenIds[0] === index) {
      return;
    }

    // Check if
    if (cardsChosen?.length < 2) {
      setCardsChosen((cardsChosen) => cardsChosen?.concat(image));
      setCardsChosenIds((cardsChosenIds) => cardsChosenIds?.concat(index));

      if (cardsChosen?.length === 1) {
        // Check if images are the same
        if (cardsChosen[0] === image) {
          setPoints((points) => points + 2);
          setOpenCards((openCards) =>
            openCards?.concat([cardsChosen[0], image])
          );
        }
        setTimeout(() => {
          setCardsChosenIds([]);
          setCardsChosen([]);
        }, 700);
      }
    }
  }

  function isCardChosen(image, index) {
    return cardsChosenIds?.includes(index) || openCards?.includes(image);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;
  }

  function startOver() {
    setCardsChosenIds([]);
    setCardsChosen([]);
    setPoints(0);
    setOpenCards([]);
  }

  useEffect(() => {
    createCardBoard();
  }, []);

  return (
    <div>
      <div className="d-flex">
        <h3 className="mx-3">Points: {points}</h3>
        <button onClick={startOver}>Start over</button>
      </div>
      <div className="row no-gutters">
        {imagesArray?.map((image, index) => {
          return (
            <div
              className="col-4 col-lg-2 my-2"
              key={index}
              onClick={() => flipImage(image, index)}
            >
              <img
                src={isCardChosen(image, index) ? image.image : BLANK_CARD}
                alt=""
                className={`img-fluid img-fixed`}
                style={{ width: "100px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Day25;
