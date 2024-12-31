import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Debasmita_Patnaik.pdf";
import hero from "./Data/img.jpg";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hi, I'm Debasmita Patnaik,",
        "A passionate Full Stack (MERN) Developer",
        "Pursuing B.Tech CSE from Arka Jain University ,Jharkhand ",
        "I have worked on both frontend and backend aspects in projects"
      ],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home py-5 text-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="p-4 rounded shadow bg-black text-center border border-warning">
              <h1
                ref={typedRef}
                className="mb-4 text-warning display-6 fw-bold"
              ></h1>
              <a
                href={pdf}
                download="Debasmita_Patnaik.pdf"
                className="btn btn-warning btn-lg"
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* Right Section */}
          <div
            className="col-lg-6 d-flex justify-content-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src={hero}
              alt="hero"
              className="img-fluid rounded-circle shadow"
              style={{
                width: "270px",
                height: "270px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
