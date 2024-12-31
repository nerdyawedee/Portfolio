import React from "react";
import skills from "./Data/skills.json";

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container ">
        <h1 className="text-center mb-5">SKILLS</h1>
        <div className="row">
          {skills.map((data) => (
            <div
              className="col-6 col-md-4 col-lg-3 mb-4 text-center "
              key={data.id}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div
                className="p-3 shadow-lg rounded bg-black transition-transform transform hover:scale-105 hover:shadow-xl"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease ",
                }}
              >
                <img
                  src={`/assets/${data.imageSrc}`}
                  alt={data.title}
                  className="img-fluid mb-3"
                  style={{
                    background:"black",
                    width: "70px",
                    height: "70px",
                    transition: "transform 0.3s ease",
                  }}
                />
                <h3 className="h5">{data.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
