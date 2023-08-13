import logo from "./logo.svg";
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
        {/* day 1 */}
        <div className="album bg-body-tertiary mb-5">
          <div className="container">
            <div className="row row-cols-12 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main className="px-3">
                  <Day1 />
                </main>
              </div>
            </div>
          </div>
        </div>
        {/* day 2 */}
        <div className="album bg-body-tertiary mb-5">
          <div className="container">
            <div className="row row-cols-12 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main className="px-3">
                  <Day2 />
                </main>
              </div>
            </div>
          </div>
        </div>
        {/* day 3 */}
        <div className="album bg-body-tertiary mb-5">
          <div className="container">
            <div className="row row-cols-12 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main className="px-3">
                  <Day3 />
                </main>
              </div>
            </div>
          </div>
        </div>
        {/* day 4 */}
        <div className="album bg-body-tertiary mb-5">
          <div className="container">
            <div className="row row-cols-12 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main className="px-3">
                  <Day4 />
                </main>
              </div>
            </div>
          </div>
        </div>
        {/* day 5 */}
        <div className="album bg-body-tertiary mb-5">
          <div className="container">
            <div className="row row-cols-12 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main className="px-3">
                  <Day5 />
                </main>
              </div>
            </div>
          </div>
        </div>
        {/* day 6 */}
        <div className="album bg-body-tertiary mb-5">
          <div className="container">
            <div className="row row-cols-12 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <p className="d-flex align-items-center link-body-emphasis text-decoration-none mb-3">
                  <span className="fs-4">Day 6: Social Media Card 📇</span>
                </p>
                <main className="px-3">
                  <Day6 />
                </main>
              </div>
            </div>
          </div>
        </div>
        {/* day 7 */}
        <div className="album bg-body-tertiary mb-5">
          <div className="container">
            <div className="row row-cols-12 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column ">
                <p className="d-flex align-items-center link-body-emphasis text-decoration-none mb-3">
                  <span className="fs-4">Day 7: Countdown Timer ⏳</span>
                </p>
                <main className="px-3">
                  <Day7 />
                </main>
              </div>
            </div>
          </div>
        </div>
        {/* day 8 */}
        <div className="album bg-body-tertiary mb-5">
          <div className="container">
            <div className="row row-cols-12 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column ">
                <p className="d-flex align-items-center link-body-emphasis text-decoration-none mb-3">
                  <span className="fs-4">
                    Day 8: Infinite Scroll Image Gallery 📜{" "}
                  </span>
                </p>
                <main className="px-3">
                  <Day8 />
                </main>
              </div>
            </div>
          </div>
        </div>
        {/* day 9 */}
        <div className="album bg-body-tertiary mb-5">
          <div className="container">
            <div className="row row-cols-12 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column ">
                <p className="d-flex align-items-center link-body-emphasis text-decoration-none mb-3">
                  <span className="fs-4">Day 9: GitHub User Finder 🔍</span>
                </p>
                <main className="px-3">
                  <Day9 />
                </main>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default App;
