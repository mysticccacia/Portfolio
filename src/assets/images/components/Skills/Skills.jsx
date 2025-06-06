import React from "react";
import MultiDevice from "../../multi-device.svg";
import skills from "./imports";
import "./Skills.scss";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section
      className="app__skills"
      id="skills"
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="400"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__skills-title">
        <h2 className="app__skills-title_title">Skills</h2>
        <p className="app__skills-title_content">
          I translate UI/UX design into successful responsive websites that are
          fast, easy to use, and built with best practices. The main area of my
          expertise is front-end development, HTML, CSS, JS, & React. As an
          aspirant MERN developer most of my skills are heavily focused on
          different frontend/backend technologies.
        </p>

        {/* <p className="app__skills-title_content">
          Despite knowing these frontend technologies I also have experience in
          server side languanges such as PHP and MYSQL and basic knowledge in
          Python and Java.
        </p> */}

        <p className="app__skills-title_content">
          As of this moment I'm currently learning best coding principle and
          exploring new fields and open Source such as{" "}
          <a href="#" target="_blank" className="app__links">
            Artificial Intelligence & Machine Learning
          </a>{" "}
          and{" "}
          <a
            href="#"
            target="_blank"
            className="app__links"
          >
           Gsoc2025
          </a>
          {/* <p>
           
          </p> */}
        </p>

        <p className="app__skills-title_content">
          These are the Tech Stack Tools I use as a developer in designing,
          creating and establishing development projects.
        </p>
      </div>

      <div className="app__skills-container">
        <div
          className="app__skills-container_skills"
          data-aos="zoom-out"
          data-aos-offset="300"
          data-aos-delay="700"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          {skills.map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
          ))}
        </div>
      </div>
      <div className="app__skills-container_image multidevice">
        <img src={MultiDevice} alt="MultiDevice" />
      </div>
    </section>
  );
};

export default Skills;
