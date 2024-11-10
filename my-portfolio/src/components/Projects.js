import React from 'react';
import './Projects.css';

const Projects = () => (
  <div className="projects">
    <h2>Projects</h2>
    <p className="intro-text">Here are some of the projects I've worked on that showcase my skills in design and development.</p>
    <div className="project-list">
      <div className="project-item">
        <h3>Project 1: Wanderwisdom</h3>
        <p>A sentiment analysis tool that gives suggestions based on budget. Built with HTML, CSS, JavaScript, and MongoDB.</p>
      </div>
      <div className="project-item">
        <h3>Project 2: Drive Rate</h3>
        <p>A platform where people can rate and get rated individually. Developed using Java and MySQL.</p>
      </div>
      <div className="project-item">
        <h3>Project 3: House Prediction</h3>
        <p>A machine learning project for predicting house prices, utilizing ML techniques and Excel.</p>
      </div>
    </div>
  </div>
);

export default Projects;
