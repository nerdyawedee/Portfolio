import React from "react";

const Achievements = () => {
  const achievements = [
    {
      title: "GeekForGeek Profile",
      description: "2 star Coder with coding rating and score visit Link",
      image: "/assets/hero/img9.png",
      link: "https://www.geeksforgeeks.org/user/patnaikdebn63k/",
    },
    {
      title: "Leetcode Profile",
      description: "Solved 200+ questions",
      image: "/assets/hero/img10.png",
      link: "https://leetcode.com/u/DP0307/",
    },
    {
      title: "GeekForGeeks Contest",
      description: "Secured 812 rank in rated contest",
      image: "/assets/hero/img11.png",
      link: "https://practice.geeksforgeeks.org/contest/gfg-weekly-181-rated-contest/summary",
    },
    {
      title: "LeetCode Contest",
      description: "Secured 7239/26808 rank in Biweekly Contest 142",
      image: "/assets/hero/img13.png",
      link: "https://leetcode.com/contest/",
    },
    {
      title: "Codolio Profile",
      description: "Solved 400+ questions",
      image: "/assets/hero/img16.png",
      link: "https://codolio.com/profile/Debas",
    },
  ];

  return (
    <section id="achievements" className="py-5">
      <div className="container">
        <h1 className="text-center mb-5 text-warning">Achievements</h1>
        <div className="row">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" // Adjusting for better responsiveness
            >
              <div
                className="card bg-dark text-light shadow-lg d-flex flex-column"
                style={{
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.4)",
                  height: "100%", // Ensures all cards have the same height
                  transition: "transform 0.3s ease", // Simple hover transition for scaling
                }}
              >
                <div className="card-img-top d-flex justify-content-center align-items-center p-3">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                    }}
                  />
                </div>
                <div
                  className="card-body text-center d-flex flex-column justify-content-between"
                  style={{ flex: 1 }}
                >
                  <h5 className="card-title text-warning">{achievement.title}</h5>
                  <p className="text-white">{achievement.description}</p>
                  <a
                    href={achievement.link}
                    className="btn btn-warning"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
