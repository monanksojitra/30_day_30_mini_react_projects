import React from 'react'

const Header = () => {
  return (
    <header data-bs-theme="dark">
      <div className="collapse text-bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4>About</h4>
              <p className="text-body-secondary">
                I am a dedicated computer engineering student from GEC Rajkot.
                This project is my avenue for personal skill development and
                gaining industrial exposure. My goal is to think creatively,
                innovate, and become a better developer. Through this journey, I
                aim to embrace challenges, learn, and grow. I look forward to
                meeting industry professionals and making a positive impact with
                my work. This project is my stepping stone to success in the
                tech world.
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4>Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.instagram.com/your_instagram_handle"
                    target="_blank"
                    className="text-white"
                  >
                    Follow on Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/your_github_username"
                    target="_blank"
                    className="text-white"
                  >
                    Check out on GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/your_facebook_page"
                    target="_blank"
                    className="text-white"
                  >
                    Like on Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:your_email@example.com"
                    className="text-white"
                  >
                    Email me
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/your_linkedin_profile"
                    target="_blank"
                    className="text-white"
                  >
                    Connect on LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              aria-hidden="true"
              className="me-2"
              viewBox="0 0 24 24"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx={12} cy={13} r={4} />
            </svg>
            <strong>Home</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header
