import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "Innerve Summer Of Code",
      description: "Became Top 15 Contributor",
      image: "/assets/hero/2.png",
    },
    {
    title: "Women Coding Championship",
    description: "Ranked 1224 in the Contest",
    image: "/assets/hero/6.png",
    link: "https://www.example.com/certificate6",
  },
  {
    title: "Google Jam Certification",
    description: "Completed Google Cloud Study Jam",
    image: "/assets/hero/3.png",
  },
  {
    title: "Technology Virtual Experience By Deloitte",
    description: "Completed the course.",
    image: "/assets/hero/5.png",
  },
    {
      title: "Speech Competition",
      description: "Won First Prize",
      image: "/assets/hero/1.png",
    },
    {
      title: "Group Discussion",
      description: "Won First Prize in GD",
      image: "/assets/hero/4.png",
    },
    
  ];

  return (
    <section id="certifications" className="py-5">
      <div className="container">
        <h1 className="text-center mb-5 text-warning">Certifications</h1>
        <div
          id="certificationCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="text-center">
                  <img
                    className="d-block mx-auto "
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      backgroundColor:"white",
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                    }}
                  />
                  <h3 className="mt-3 text-warning">{cert.title}</h3>
                  <p className="text-white">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#certificationCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#certificationCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
