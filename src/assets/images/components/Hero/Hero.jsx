import "aos/dist/aos.css";
import React from "react";
import TypeAnimation from "react-type-animation";
import HeroSvg from "../../hero.svg";
import "./Hero.scss";

const Hero = () => {
  return (
    <main
      className="app__hero"
      id="home"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__hero-container">
        <div className="app__hero-container_text">
          <TypeAnimation
            cursor={false}
            sequence={[1000, "Hi, my name is"]}
            wrapper="p"
            repeat={1}
            speed={60} // Moderate speed for a natural effect
            className="app__hero-title"
          />
          <TypeAnimation
            cursor={false}
            sequence={[2000, "ABHISHEK"]} // Delay increased to ensure sequence
            wrapper="h1"
            repeat={1}
            speed={50}
            className="app__hero-container_text-name"
          />

          <TypeAnimation
            cursor={false}
            sequence={[2000, "I enjoy creating stuff."]} // Appears after 'JATIN BHATI'
            wrapper="h2"
            repeat={1}
            speed={50}
            className="app__hero-container_text-title"
          />
          <TypeAnimation
            cursor={true} // Enables blinking cursor for a natural feel
             sequence={[2000,
              "I am a MERN Developer, Problem Solver, and AI/ML Enthusiast.",  // First message
              2000,  // Delay before next transition
              "I enjoy learning about new Technologies",  // Second message
              2000,
              "Let's learn from each other.",  // Third message
              ,
            ]}
            wrapper="h3"
            repeat={Infinity}
            speed={50} // Smooth and controlled typing speed
            deletionSpeed={30} // Slow deletion for a better effect
            className="app__hero-container_text-subtitle"
          />


        </div>
        <div className="app__hero-container_image">
          <img src={HeroSvg} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
