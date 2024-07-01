import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-content">
          <h1>About Us</h1>
        </div>
      </div>
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>Study Resource Platform</h1>
            <p>
              "StudyResource.com offers a vast collection of educational
              materials, from textbooks to video tutorials, making it a one-stop
              destination for students. Our platform provides easy access to
              study aids and resources, enhancing the learning experience.
              Explore our website for comprehensive study materials and academic
              assistance."
            </p>
            <a href="#" className="hero-btn red-btn">
              EXPLORE NOW
            </a>
          </div>
          <div className="about-col">
            <img
              src="https://talibilm.pk/wp-content/uploads/2020/02/9-Most-useful-Courses-in-2020-for-professional-Life.png"
              alt="Educational Resources"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
