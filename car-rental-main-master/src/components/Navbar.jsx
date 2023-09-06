import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
   
        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Ana səhifə
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                Haqqımızda
              </Link>
            </li>
            <li>
              {" "}
              <Link className="bookCar-link" to="/bookCar">
                İcarə
              </Link>
            </li>
            <li>
              {" "}
              <Link className="feed-link" to="/feedback">
                Feedback
              </Link>
            </li>
            {/* <li>
              {" "}
              <Link className="team-link" to="/team">
                Our Team
              </Link>
            </li> */}
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Əlaqə
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/">
              Daxil ol
            </Link>
            <Link className="navbar__buttons__register" to="/">
            Qeydiyyatdan keç
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
