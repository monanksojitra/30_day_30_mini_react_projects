import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import s1 from "../song/1.mp3";
import s2 from "../song/2.mp3";
import s3 from "../song/3.mp3";
import s4 from "../song/4.mp3";
import s5 from "../song/5.mp3";
import s6 from "../song/6.mp3";
import s7 from "../song/7.mp3";

function Day21() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playlist = [
    {
      title: "WOH - Ikka x Dino James x Badshah",
      url: "https://i3.ytimg.com/vi/EbyAoYaUcVo/hqdefault.jpg",
      song: s1,
    },
    {
      title: "Hasti Rahe Tu - Paradox",
      url: "https://i3.ytimg.com/vi/UyoDdroSXXs/hqdefault.jpg",
      song: s2,
    },
    {
      title: "Lil Nas X - Old Town Road ",
      url: "https://i3.ytimg.com/vi/r7qovpFAGrQ/hqdefault.jpg",
      song: s3,
    },
    {
      title: "KSHMR & Lost Stories - Bombay Dreams ",
      url: "https://i3.ytimg.com/vi/EW4pNzAbVao/hqdefault.jpg",
      song: s4,
    },
    {
      title: "BILLO || J STAR ",
      url: "https://i3.ytimg.com/vi/wEqifG8ATBI/hqdefault.jpg",
      song: s5,
    },
    {
      title: "Obsessed - Riar Saab,AbhijaySharma",
      url: "https://i3.ytimg.com/vi/ZAp3xJ7GsY8/hqdefault.jpg",
      song: s6,
    },
    {
      title: "Badshah, J Balvin, Tainy - Voodoo",
      url: "https://i3.ytimg.com/vi/sPn2HP8cAbo/hqdefault.jpg",
      song: s7,
    },
  ];

  const currentSong = playlist[currentSongIndex];

  const [play, { stop, pause }] = useSound(currentSong.song, {
    interrupt: true,
  });

  const playPause = () => {
    if (!isPlaying) {
      play();
      setIsPlaying(true);
    } else {
      pause();
      setIsPlaying(false);
    }
  };

  const playNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    stop();
    setIsPlaying(false);
  };

  const playPrevious = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length
    );
    stop();
    setIsPlaying(false);
  };

  return (
    <div className="card w-50 m-auto">
      <div
        className="bg-image hover-overlay ripple mx-auto"
        data-mdb-ripple-color="light"
      >
        <img
          src={currentSong.url}
          className="img-fluid mt-4"
          alt={currentSong.title}
        />
      </div>
      <div className="mx-auto mt-4">
        <h5 className="card-title">{currentSong.title}</h5>
      </div>
      <div className="card-body mx-auto">
        <button className="btn btn-primary mx-1" onClick={playPrevious}>
          Previous
        </button>
        <button className="btn btn-primary mx-1" onClick={playPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button className="btn btn-primary mx-1" onClick={playNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Day21;
