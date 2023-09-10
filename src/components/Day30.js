import React, { useEffect, useState } from "react";
import "./css/style.css";
import "./css/utilities.css";
import logo from "./assets/logo.jpg";
import img1 from "./assets/challenges/img_1.png";
import fb from "./assets/fb.svg";
import git from "./assets/git.svg";
import lin from "./assets/link.svg";
import moon from "./assets/moon.svg";
import sun from "./assets/sun.svg";
import profile_lg from "./assets/profile.jpg";
import cv from "./assets/cv.pdf";

function Day30() {
 const [isDarkMode, setIsDarkMode] = useState(false);

 // Function to toggle the theme
 const switchTheme = () => {
   setIsDarkMode(!isDarkMode);
 };

 // Use useEffect to add or remove a class on the body element based on the theme
 useEffect(() => {
   if (isDarkMode) {
     document.body.classList.add("dark-theme");
   } else {
     document.body.classList.remove("dark-theme");
   }
 }, [isDarkMode]);

  return (
    <section>
      <section id="hero">
        {/* Navbar */}
        <nav className="navbar px-3">
          <div className="container1">
            {/* Logo */}
            <h1 id="logo">
              <a href="https://github.com/monanksojitra" target="_blank">
                <img src={logo} alt="Your Logo" />
              </a>
            </h1>
            {/* Navbar links */}
            <ul className="nav-menu">
              <li>
                <a className="nav-link" href="#projects">
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="mailto:monaksojitra4444@gmail.com"
                >
                  CONTACT
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  className="nav-link btn btn-primary"
                  target="_blank"
                  href={cv}
                >
                  RESUME <i className="fas fa-arrow-right" />
                </a>
              </li>
              {/* Toggle switch */}
              <div className="theme-switch">
                <input type="checkbox" id="switch" onClick={switchTheme} />
                <label className="toggle-icons" htmlFor="switch">
                  <img className="moon" src={moon} />
                  <img className="sun" src={sun} />
                </label>
              </div>
              {/* Hamburger menu */}
            </ul>
            <div className="hamburger">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>
          </div>
        </nav>
        <section className="header-container">
          <img className="profile-image" src={profile_lg} alt="" />
          <h1>Hi I'm Monank</h1>
          <div className="content-text">
            <h2>Building Website</h2>
            <h2>products, brands, and experience.</h2>
            <p>Crafting user experiences through code and design.</p>
          </div>
          <a
            href="https://in.linkedin.com/in/mjpatel4444"
            className="btn btn-secondary"
            target="_blank"
          >
            Connect With Me
          </a>
        </section>
      </section>

      {/* Projects */}
      <section id="projects" className="project-container container">
        <div className="division" />
        <div className="content-text">
          <h2>Works</h2>
          <p>Check out some of my personal works</p>
        </div>
        <article className="project">
          {/* Project 1 */}
          <div href="" className="card">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project One</h3>
                <p>React, Bootstrap</p>
              </div>
              <div className="project-link">
                <a href="https://github.com/monanksojitra" target="_blank">
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div href="" className="card">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project Two</h3>
                <p>React, Bootstrap</p>
              </div>
              <div className="project-link">
                <a href="https://github.com/monanksojitra" target="_blank">
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          {/* Porject 3 */}
          <div href="" className="card">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project Three</h3>
                <p>Html, Bootstrap, js</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/QuantumLab"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href="https://monanksojitra.github.io/Quantumlab/"
                  target="_blank"
                >
                  <i className="fas fa-globe" />
                </a>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div href="" className="card">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project Four</h3>
                <p>Html, Bootstrap, js</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/TODO-LIST"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href="https://monanksojitra.github.io/TODO-LIST/"
                  target="_blank"
                >
                  <i className="fas fa-globe" />
                </a>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div href="" className="card">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project Five</h3>
                <p>Html, Bootstrap, js</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/Calculator"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href="https://monanksojitra.github.io/Calculator/"
                  target="_blank"
                >
                  <i className="fas fa-globe" />
                </a>
              </div>
            </div>
          </div>
          {/* Project 6 */}
          <div href="" className="card">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project Six</h3>
                <p>Html, Bootstrap, js</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/portfolio-website"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href="https://monanksojitra.github.io/portfolio-website/"
                  target="_blank"
                >
                  <i className="fas fa-globe" />
                </a>
              </div>
            </div>
          </div>
        </article>
        <a
          href="https://github.com/monanksojitra?tab=repositories"
          className="btn btn-secondary"
          target="_blank"
        >
          See More <i className="fas fa-arrow-right" />
        </a>
      </section>

      <section id="projects" className="project-container container">
        <div className="division" />
        <div className="content-text">
          <h2>Challenges</h2>
          <p>Check out some of my personal works</p>
        </div>
        <article className="project">
          {/* Project 1 */}
          <div href="" className="card card1">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project 1</h3>
                <p>Calculator with Result History 🧮</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/30_day_30_mini_react_projects"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div href="" className="card card1">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project 2</h3>
                <p>Interactive Form Validation 📝</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/30_day_30_mini_react_projects"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          {/* Porject 3 */}
          <div href="" className="card card1">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project 3</h3>
                <p>Todo List with LocalStorage 📅</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/30_day_30_mini_react_projects"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div href="" className="card card1">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project 4</h3>
                <p>Animated Image Gallery 🖼️</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/30_day_30_mini_react_projects"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div href="" className="card card1">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project 5</h3>
                <p>Weather App with API Integration 🌦️</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/30_day_30_mini_react_projects"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          {/* Project 6 */}
          <div href="" className="card card1">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project 6</h3>
                <p>Social Media Card 📇</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/30_day_30_mini_react_projects"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          <div href="" className="card card1">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project 7</h3>
                <p>Infinite Scroll Image Gallery 📜</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/30_day_30_mini_react_projects"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          <div href="" className="card card1">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project 8</h3>
                <p>Countdown Timer ⏳</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/30_day_30_mini_react_projects"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          <div href="" className="card card1">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project 9</h3>
                <p>GitHub User Finder 🔍</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/30_day_30_mini_react_projects"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          <div href="" className="card card1">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project 10</h3>
                <p>Quiz App 📝</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/30_day_30_mini_react_projects"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          <div href="" className="card card1">
            <div className="project-info">
              <div className="project-bio">
                <h3>Project 11</h3>
                <p>Drag and Drop Todo List 📝</p>
              </div>
              <div className="project-link">
                <a
                  href="https://github.com/monanksojitra/30_day_30_mini_react_projects"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
        </article>
        <a
          href="https://github.com/monanksojitra?tab=repositories"
          className="btn btn-secondary"
          target="_blank"
        >
          See More <i className="fas fa-arrow-right" />
        </a>
      </section>

      {/* Footer */}
      <footer id="footer">
        <div className="container">
          <a href="mailto:monaksojitra4444@gmail.com">
            monaksojitra4444@gmail.com
          </a>
          {/* Social links */}
          <div className="social">
            <a href="https://www.facebook.com/monaksojitra01/" target="_blank">
              <img src={fb} alt="Facebook" />
            </a>
            <a href="https://in.linkedin.com/in/mjpatel4444" target="_blank">
              <img src={lin} alt="Linkedin" />
            </a>
            <a href="https://github.com/monanksojitra" target="_blank">
              <img src={git} alt="GitHub" />
            </a>
          </div>
          <p>
            Copyright &copy; Monank Sojitra{" "}
            <span id="datee">{new Date().getFullYear()}</span>, All rights
            reserved
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Day30;
