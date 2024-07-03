import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to Peter Tom, where passion for food meets the art of hospitality. Nestled in the heart of Calcutta, 
              Peter Tom is more than just a dining experience — it's a journey of flavors crafted with love and creativity. 
              Our chefs, driven by a dedication to excellence, curate each dish with locally-sourced ingredients, ensuring every bite tells a story of freshness and quality. 
              Whether you're here for a casual lunch or a special evening, our warm ambiance and attentive service promise to make every visit memorable. Join us at Peter Tom, 
              where every meal is an invitation to savor life's simple pleasures.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
