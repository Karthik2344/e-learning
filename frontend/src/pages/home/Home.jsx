import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to our E-learning Platform</h1>
          <p>Learn, Grow, Excel</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>
      <section className="course">
        <h1>Courses We Offer</h1>
        <p>
          Explore our diverse range of courses, tailored to ignite your passion
          for learning. Discover your path to knowledge with our "Courses We
          Offer."
        </p>

        <div className="row">
          <div className="course-col">
            <h3>B.Tech</h3>
            <p>
              Our B.Tech program empowers students with cutting-edge technical
              skills and knowledge, preparing them for a dynamic career in
              engineering and technology. Join us to embark on a journey of
              innovation and problem-solving in our B.Tech course.
            </p>
          </div>
          <div className="course-col">
            <h3>Techonlogy Based</h3>
            <p>
              Embrace the digital age with our technology-based courses,
              designed to equip you with the skills and expertise needed to
              thrive in a tech-driven world. Explore the endless possibilities
              of innovation and advancement through our technology-focused
              programs.
            </p>
          </div>
          <div className="course-col">
            <h3>Dominating Courses</h3>
            <p>
              Our dominating courses lead the way in providing comprehensive
              knowledge and expertise in their respective fields, ensuring you
              stay ahead of the competition and excel in your chosen career
              path. Enroll today to conquer new horizons with our dominating
              courses.
            </p>
          </div>
        </div>
      </section>

      <div className="features">
        <div className="feature-item">
          <i className="fas fa-laptop-code"></i>
          <h3>Interactive Courses</h3>
          <p>
            Engage in hands-on learning with interactive coding exercises and
            real-time feedback.
          </p>
        </div>
        <div className="feature-item">
          <i className="fas fa-chalkboard-teacher"></i>
          <h3>Expert Instructors</h3>
          <p>
            Learn from industry experts who bring real-world experience to the
            classroom.
          </p>
        </div>
        <div className="feature-item">
          <i className="fas fa-graduation-cap"></i>
          <h3>Certifications</h3>
          <p>
            Earn certificates to showcase your new skills and advance your
            career.
          </p>
        </div>
      </div>

      <div className="courses-preview">
        <div className="course-item">
          <img src="../../assets/course1.jpg" alt="Course 1" />
          <h3>Introduction to Python</h3>
          <p>
            Start your programming journey with Python, a versatile and popular
            language.
          </p>
        </div>
        <div className="course-item">
          <img src="../../assets/course2.jpg" alt="Course 2" />
          <h3>Web Development Bootcamp</h3>
          <p>
            Learn to build responsive websites using HTML, CSS, JavaScript, and
            more.
          </p>
        </div>
      </div>

      <div className="newsletter-signup">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest courses and updates.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>

      <Testimonials />
    </div>
  );
};

export default Home;
