import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";
import { useEffect, useState } from "react";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const scrollToModels = () => {
    const modelsSection = document.querySelector("#models-section");
    if (modelsSection) {
      modelsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bookBtn = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    scrollToModels();
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          {/* <img className="bg-shape" src={BgShape} alt="bg-shape" /> */}
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>İndi rezerv et!</h4>
              <h1>
                Cur <span>Rent</span> ilə daha rahat icarə et
              </h1>
              <p>
                  Sürətli və güvənilir icarə üçün xidmətinizdəyik. 
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  type="button"
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  İcarə et &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="hero-content__text__btns__learn-more" to="/">
                  Əlavə Məlumat &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>

            {/* img */}
            <img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}

export default Hero;
