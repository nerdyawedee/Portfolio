import React from "react";
import experience from "./Data/experience.json";

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h1 className="text-center mb-5 text-warning">EXPERIENCE</h1>
        <div className="row">
          {experience.map((data) => (
            <div
              key={data.id}
              className="col-lg-6 mb-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div
                className="d-flex flex-column flex-md-row align-items-center p-4 shadow-lg rounded"
                style={{
                  backgroundColor: "black", // Black background for the card
                  border: "2px solid red", // Red border
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "100%",
                }}
              >
                {/* Left Section: Image */}
                <div className="mb-3 mb-md-0 me-md-4 text-center">
                  <img
                    src={`/assets/${data.imageSrc}`}
                    alt=""
                    className="img-fluid rounded-circle border border-warning"
                    style={{
                      width: "120px",
                      height: "120px",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
                {/* Right Section: Details */}
                <div className="text-center text-md-start">
                  <h2 className="mb-2 text-danger">{data.role}</h2>
                  <h4 className="mb-2">
                    <span className="text-warning">
                      {data.startDate} - {data.endDate}
                    </span>{" "}
                    |{" "}
                    <span className="text-warning">{data.location}</span>
                  </h4>
                  {data.experiences.map((exp, index) => (
                    <h5 key={index} className="text-warning mb-1">
                      {exp}
                    </h5>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
