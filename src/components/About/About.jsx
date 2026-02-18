import "./about.css";
import boot from "../../assets/boot.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
import mongo from "../../assets/mongo.png";

export default function About() {
  return (
    <div id="about">
      {/* Skill Section */}
      <div className="skills">
        <h1 className="skills-heading">Skill Set</h1>

        <p className="skills-description">
          Skilled Full Stack Developer with expertise in building scalable, responsive, and user-friendly web applications using modern frontend technologies like HTML, CSS, JavaScript, React, and robust backend technologies including Node.js, Express, and databases.
        </p>

        {/* Skill Boxes */}
        <div className="skills-grid">

          <div className="skill-box">
            <span className="skill-icon">&lt;/&gt;</span>
            <p>HTML</p>
            <img src={html} alt="HTML" />
          </div>

          <div className="skill-box">
            <span className="skill-icon">&lt;/&gt;</span>
            <p>CSS</p>
            <img src={css} alt="CSS" />
          </div>

          <div className="skill-box">
            <span className="skill-icon">&lt;/&gt;</span>
            <p>JavaScript</p>
            <img src={js} alt="JavaScript" />
          </div>

          <div className="skill-box">
            <span className="skill-icon">&lt;/&gt;</span>
            <p>React</p>
            <img src={react} alt="React" />
          </div>

          <div className="skill-box">
            <span className="skill-icon">&lt;/&gt;</span>
            <p>Bootstrap</p>
            <img src={boot} alt="Bootstrap" />
          </div>

          <div className="skill-box">
            <span className="skill-icon">&lt;/&gt;</span>
            <p>MongoDB</p>
            <img src={mongo} alt="Bootstrap" />
          </div>

          <div className="skill-box">
            <span className="skill-icon">&lt;/&gt;</span>
            <p>Express JS</p>
            <img src={express} alt="Bootstrap" />
          </div>

          <div className="skill-box">
            <span className="skill-icon">&lt;/&gt;</span>
            <p>Node JS</p>
            <img src={node} alt="Bootstrap" />
          </div>


        </div>
      </div>
    </div>
  );
}
