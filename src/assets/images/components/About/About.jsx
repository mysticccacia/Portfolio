import React from "react";
import AboutSVG from "../../about.svg";
import "./About.scss";

const About = () => {
  return (
    <section
      className="app__about"
      id="about"
      data-aos="fade-right"
      data-aos-offset="230"
      data-aos-delay="450"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About</h2>
          <p>
           Hello! MY name is ABHISHEK and  I am a MERN Stack Developer and Machine Learning Enthusiast with a passion for building high-performance, intuitive web applications. With expertise in React.js, Next.js, TypeScript, and Tailwind CSS, I bring designs to life by creating seamless, responsive, and efficient user experiences.

            I have a strong problem-solving mindset, continuously improving my skills in data structures, algorithms, and backend development. Beyond coding, I stay updated on the latest industry trends and technologies, always seeking new challenges to expand my expertise.

          </p>

          <p>
            I spend my time exploring technology, with a strong focus on Frontend Development, Competitive Programming, and Machine Learning. I consistently learn new concepts, tools, and best practices while applying them through hands-on projects. Additionally, I actively participate in coding contests to sharpen my problem-solving skills and enhance my understanding of data structures and algorithms.
          </p>

          <p>
          I'm currently studying at IMS Engineering College as a B.Tech Computer Science and Engineering student{" "}
            <a
              href="http://www.imsec.ac.in/"
              target="_blank"
              className="app__links"
            >
              IMSEC
            </a>
          </p>
        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;
