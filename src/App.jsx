import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaDownload,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiBootstrap,
  SiGit,
} from "react-icons/si";

import "./App.css";

function App() {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Hibernate", icon: <SiHibernate /> },
    { name: "JDBC", icon: <FaDatabase /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React JS", icon: <FaReact /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Maven", icon: <FaCode /> },
  ];

  const projects = [
    {
      title: "Bank Management System",
      description:
        "A full-stack banking application with account management, deposits, withdrawals, transaction history and user authentication.",
      technologies: "Java • Spring Boot • JPA • MySQL • React JS",
    },
    {
      title: "Student Management System",
      description:
        "A student management application for adding, updating, deleting and viewing student records with a React frontend and backend APIs.",
      technologies: "React JS • Axios • Spring Boot • MySQL",
    },
    {
      title: "MyHabit - Habit Tracker",
      description:
        "A modern habit tracking application that helps users monitor daily habits, streaks and progress through an interactive dashboard.",
      technologies: "HTML • CSS • JavaScript • React JS • Chart.js",
    },
  ];

  return (
    <div>

      {/* NAVBAR */}

      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">

          <a className="navbar-brand" href="#home">
            Nishant<span>.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#education">Education</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>

              <li className="nav-item">
                <a className="nav-link contact-btn" href="#contact">
                  Contact
                </a>
              </li>

            </ul>

          </div>
        </div>
      </nav>


      {/* HERO */}

      <section id="home" className="hero">

        <div className="container">

          <div className="row align-items-center min-vh-100">

            <div className="col-lg-7">

              <p className="hero-small">
                Hello, I'm
              </p>

              <h1>
                Nishant <span>Rathod</span>
              </h1>

              <h2>
                Java Full Stack Developer
              </h2>

              <p className="hero-description">
                I am a Computer Engineering student passionate about
                developing scalable, user-friendly and efficient web
                applications using Java and modern web technologies.
              </p>

              <div className="hero-buttons">

                <a href="#projects" className="btn-main">
                  View Projects <FaArrowRight />
                </a>

                <a
                  href="/Nishant_Rathod_Resume.pdf"
                  download
                  className="btn-outline"
                >
                  Download Resume <FaDownload />
                </a>

              </div>

              <div className="social-icons">

                <a
                  href="https://github.com/rathodnishant957-oss"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/nishant-rathod-05965b37a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rathodnishant957@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope />
                </a>

              </div>

            </div>


            <div className="col-lg-5">

              <div className="hero-card">

                <div className="code-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <pre>
{`public class Developer {

    String name = "Nishant";
    String role = "Java Developer";

    void develop() {
        System.out.println(
            "Building the future..."
        );
    }
}`}
                </pre>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section id="about" className="section">

        <div className="container">

          <div className="section-title">
            <p>GET TO KNOW ME</p>
            <h2>About Me</h2>
          </div>

          <div className="row align-items-center">

            <div className="col-lg-5">

              <div className="about-box">

                <FaCode className="about-icon" />

                <h3>Java Full Stack Developer</h3>

                <p>
                  Passionate about creating clean and efficient
                  applications.
                </p>

              </div>

            </div>

            <div className="col-lg-7">

              <p className="about-text">

                I am <strong>Nishant Rathod</strong>, a Computer Engineering
                student pursuing my B.Tech at PVPIT, Bavdhan under SPPU.

              </p>

              <p className="about-text">

                I have a strong interest in Java Full Stack Development.
                I have worked with Core Java, JDBC, Hibernate, MySQL,
                Spring Boot, HTML, CSS, JavaScript and React JS.

              </p>

              <p className="about-text">

                My goal is to start my career as a Java Developer and
                contribute to real-world software projects while continuously
                improving my technical and problem-solving skills.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SKILLS */}

      <section id="skills" className="section skills-section">

        <div className="container">

          <div className="section-title">
            <p>MY EXPERTISE</p>
            <h2>Technical Skills</h2>
          </div>

          <div className="row g-4">

            {skills.map((skill, index) => (

              <div className="col-6 col-md-4 col-lg-3" key={index}>

                <div className="skill-card">

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <h5>{skill.name}</h5>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* EDUCATION */}

      <section id="education" className="section">

        <div className="container">

          <div className="section-title">
            <p>MY JOURNEY</p>
            <h2>Education</h2>
          </div>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span>2023 - 2027</span>

                <h3>
                  B.Tech - Computer Engineering
                </h3>

                <h5>
                  PVPIT, Bavdhan • SPPU
                </h5>

                <p>
                  Currently pursuing Bachelor of Technology in
                  Computer Engineering.
                </p>

              </div>

            </div>

          </div>

        </div>
        

      </section>


      {/* PROJECTS */}

      <section id="projects" className="section projects-section">

        <div className="container">

          <div className="section-title">
            <p>MY WORK</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="row g-4">

            {projects.map((project, index) => (

              <div className="col-lg-4" key={index}>

                <div className="project-card">

                  <div className="project-number">
                    0{index + 1}
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tech">
                    {project.technologies}
                  </div>

                  <a href="#contact" className="project-link">
                    View Project <FaArrowRight />
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section id="contact" className="section contact-section">

        <div className="container">

          <div className="section-title">

            <p>GET IN TOUCH</p>

            <h2>Contact Me</h2>

          </div>

          <div className="row g-5">

            <div className="col-lg-5">

              <h3>
                Let's work together.
              </h3>

              <p className="contact-description">

                I'm currently looking for opportunities as a Java
                Full Stack Developer. Feel free to contact me for
                internships, projects or job opportunities.

              </p>


              <div className="contact-info">

                <div>
                  <FaEnvelope />
                  <span>
                    rathodnishant957@gmail.com
                  </span>
                </div>

                <div>
                  <FaPhone />
                  <span>
                    +91 9209048153
                  </span>
                </div>

                <div>
                  <FaMapMarkerAlt />
                  <span>
                    Pune, Maharashtra, India
                  </span>
                </div>

              </div>

            </div>


            <div className="col-lg-7">

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your message has been submitted.");
                }}
              >

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />

                  </div>

                </div>


                <div className="mb-3">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />

                </div>


                <div className="mb-3">

                  <textarea
                    className="form-control"
                    rows="6"
                    placeholder="Your Message"
                    required
                  ></textarea>

                </div>


                <button type="submit" className="btn-main">

                  Send Message <FaArrowRight />

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <div className="container">

          <div className="footer-content">

            <h3>
              Nishant<span>.</span>
            </h3>

            <p>
              Java Full Stack Developer
            </p>

            <div className="social-icons">

              <a
                href="https://github.com/rathodnishant957-oss"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/nishant-rathod-05965b37a/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          <hr />

          <p className="copyright">
            © 2026 Nishant Rathod. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;