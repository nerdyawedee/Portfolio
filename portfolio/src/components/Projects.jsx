import React from "react";
import project from "./Data/projects.json";

const Projects = () => {
  return (
    <section id="projects" >
      <div className="container"> {/* Changed to container-fluid for full width */}
        <h1 className="text-center mb-5 text-warning">PROJECTS</h1>
        <div className="row g-4 mx-0"> {/* mx-0 removes extra margin on row */}
          {project.map((data) => (
            <div
              key={data.id}
              className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div
                className="card project-card"
                style={{
                  backgroundColor: "#2E2E2E", // Light black background for the card
                  color: "#EAEAEA", // Light text for readability
                  border: "2px solid #FFA500", // Warning yellow border
                  boxShadow: "0px 4px 8px rgba(101, 175, 10, 0.6)", // Light green shadow
                  minHeight: "380px", // Ensures all cards have the same height
                  borderRadius: "10px",
                  display: "flex", // To allow flexible content
                  flexDirection: "column", // Aligns content vertically
                }}
              >
                {/* Image Section */}
                <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt={data.title}
                    style={{
                      width: "100%",
                      height: "200px", // Fixed height for consistent layout
                      objectFit: "cover",
                      border: "2px solid #FFA500", // Warning yellow border
                      borderRadius: "10px",
                    }}
                  />
                </div>
                {/* Card Body */}
                <div className="card-body text-center flex-grow-">
                  <h5 className="card-title text-warning">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <div className="justify-content-center">
                    <a
                      href={data.source}
                      className="btn"
                      style={{
                        backgroundColor: "#65AF0A", // Light green button background
                        color: "#FFF", // White text for button
                        border: "none",
                      }}
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
