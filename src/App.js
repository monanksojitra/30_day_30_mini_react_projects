import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Day1 from "./components/Day1.js";
import Day2 from "./components/Day2";
import Day3 from "./components/Day3";
import Day4 from "./components/Day4";
import Day5 from "./components/Day5";
import Day6 from "./components/Day6";
import Day7 from "./components/Day7";
import Day8 from "./components/Day8";
import Day9 from "./components/Day9";
import Day10 from "./components/Day10";
import Day11 from "./components/Day11";
import Day12 from "./components/Day12";
import Day13 from "./components/Day13";
import Day14 from "./components/Day14";
import Day15 from "./components/Day15";
import Day16 from "./components/Day16";
import Day17 from "./components/Day17";
import Day18 from "./components/Day18";
import Day19 from "./components/Day19";
import Day20 from "./components/Day20";
import Day21 from "./components/Day21";
import Day22 from "./components/Day22";
import Day23 from "./components/Day23";

const componentList = [
  { component: Day1, name: "Calculator with Result History 🧮" },
  { component: Day2, name: "Interactive Form Validation 📝" },
  { component: Day3, name: "Todo List with LocalStorage 📅" },
  { component: Day4, name: "Animated Image Gallery 🖼️" },
  { component: Day5, name: "Weather App with API Integration 🌦️" },
  { component: Day6, name: "Social Media Card 📇" },
  { component: Day7, name: "Countdown Timer ⏳" },
  { component: Day8, name: "Infinite Scroll Image Gallery 📜" },
  { component: Day9, name: "GitHub User Finder 🔍" },
  { component: Day10, name: "Quiz App 📝" },
  { component: Day11, name: "Drag and Drop Todo List 📝" },
  { component: Day12, name: "Movie Recommendation App 🎬" },
  { component: Day13, name: "Emoji Picker 😃" },
  { component: Day14, name: "Auto Slider Image Carousel 🎠" },
  { component: Day15, name: "Random Quote Generator 📜" },
  { component: Day16, name: "Currency Converter 💱" },
  { component: Day17, name: "Pomodoro Timer ⏲️" },
  { component: Day18, name: "Image Carousel 🎠" },
  { component: Day19, name: "Product Cards 🛍️" },
  { component: Day20, name: "Virtual Keyboard ⌨️" },
  { component: Day21, name: "Music Player 🎵" },
  { component: Day22, name: "Chat Application 💬" },
  { component: Day23, name: "Animated Login Form 🚪" },
  // Add more components here if needed
];

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-10 col-md-8 mx-auto">
              <h1 className="fw-light">
                🚀Starting My 30-Day React MiniProject Challenge!🚀
              </h1>
              <p className="lead text-body-secondary mt-2">
                Hello everyone! 👋 I've decided to take up a 30-day challenge
                where I'll be building 30 mini projects using React.js. Each
                day, I'll be working on a new project, aiming to enhance my
                skills and creativity as a React developer. 🚀
              </p>
            </div>
          </div>
        </section>
        {componentList.map(({ component: Component, name }, index) => (
          <div className="album bg-body-tertiary mb-5" key={index}>
            <div className="container">
              <div className="row row-cols-12 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                  <p className="d-flex align-items-center link-body-emphasis text-decoration-none mb-3">
                    <span className="fs-4">
                      Day {index + 1}: {name}
                    </span>
                  </p>
                  <main className="px-3">
                    <Component />
                  </main>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
