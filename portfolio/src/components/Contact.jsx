import React from "react";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <h1 className="text-center my-5 text-white">CONTACT ME</h1>
      <div className="d-flex justify-content-center align-items-center">
        <a
          href="https://www.linkedin.com/in/deb-p-183585229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          className="mx-3"
        >
          <i className="fab fa-linkedin-in text-white" style={{ fontSize: "2rem" }}></i>
        </a>
        <a
          href="https://github.com/nerdyawedee?tab=repositories"
          target="_blank"
          className="mx-3"
        >
          <i className="fab fa-github-square text-white" style={{ fontSize: "2rem" }}></i>
        </a>
        <a
          href="mailto:patnaikdebasmita2@gmail.com"
          target="_blank"
          className="mx-3"
        >
          <i className="fas fa-envelope text-white" style={{ fontSize: "2rem" }}></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
