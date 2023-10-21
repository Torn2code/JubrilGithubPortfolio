import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const navigate = useNavigate();
  const titleRef = useRef(null);

  const navigateToMyPortfolio = () => {
    navigate('/my-portfolio');
  };

  var words = ["Hey, I'm Jubril Adebiyi"];
  var part, i = 0, offset = 0, len = words.length, forwards = true, skip_count = 0, skip_delay = 15, speed = 70;

  const wordflick = () => {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count === skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset === 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count === 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    titleRef.current.textContent = part;
  };

  useEffect(() => {
    const interval = setInterval(wordflick, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">
            <span ref={titleRef} className="word"></span>
          </p>
          <h1 className="hero--section--title">
            <span className="hero-section-title-color">Front-end</span> <br />
            Engineer
          </h1>
          <p className="hero--section-description">
            I'm a Front-end Engineer from Lagos, Nigeria.
            <br /> I have a serious passion for UI effects, animations, and creating intuitive, dynamic user experiences.
          </p>
        </div>
        <button className="btn btn-primary" onClick={navigateToMyPortfolio}>
          GitHub Repo List
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/Subject 3.png" alt="Hero Section" />
      </div>
    </section>
  );
}
