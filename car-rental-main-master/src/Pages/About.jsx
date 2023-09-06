import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroPages from "../components/HeroPages";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box3 from "../images/about/icon3.png";
import baseService from "../service/baseService";

function About() {
  const [aboutData, setAboutData] = useState({ content: "" });

  useEffect(() => {
    baseService
      .get("/about-us/read")
      .then((response) => {
        if (response.data.length > 0) {
          setAboutData(response.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <>
      <section className="about-page">
        <HeroPages name="Haqqımızda" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <p>{aboutData.content}</p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>30+</h4>
                    <p>Avtomobil sayı</p>
                  </span>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
