import React from "react";

const Footer = () => {
  return (
    <footer className="text-body-secondary py-4">
      <div className="container">
        <p className="float-end mb-1">
          <a href="#top">Back to top</a>
        </p>
        <p className="mb-1">&copy; Monank Sojitra - All rights reserved.</p>
        <p className="mb-0">
          Connect with me:
          <a
            href="https://www.instagram.com/your_instagram_handle"
            target="_blank"
            rel="noopener noreferrer"
            className="m-1"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://github.com/your_github_username"
            target="_blank"
            rel="noopener noreferrer"
            className="m-1"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/your_facebook_page"
            target="_blank"
            rel="noopener noreferrer"
            className="m-1"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="mailto:your_email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="m-1"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/your_linkedin_profile"
            target="_blank"
            className="m-1"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
