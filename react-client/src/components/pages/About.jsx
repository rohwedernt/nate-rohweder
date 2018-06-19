import React from "react";

import "./about.css";

const About = () => {
  return (
    <div className="about">
      <h1>about</h1>
      <p className="text">{`I started my career at NoveList with an internship in Quality Assurance working on a web-based service used to promote library services, databases, collections, and programs. I officially joined the team there in 2016 as a Quality Assurance Engineer where I helped develop test suites, perform exploratory testing and facilitate deployments across a series of products. In 2018 I transitioned into the role of Software Engineer, where I continue to help develop elegant solutions to complex problems. 
      
      In my free time I love playing guitar, hiking with my dogs Matilda and Lola, cooking, travelling with my wonderful companion and continuing to feed my fascination with everything technology.`}</p>
      <div style={{height:"400px", margin:"20px", overflow:"hidden"}}>
        <img
          className="profile-img"
          src="https://www.dropbox.com/s/3iw02vjap6hx12a/FullSizeRender.JPG?raw=1"
        />
      </div>
    </div>
  );
};

export default About;
