import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import baseService from "../service/baseService";
import { useEffect, useState } from "react";

function Contact() {
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    baseService
      .get("/contact/all")
      .then((info) => {
        setContactInfo(info.data[0])
        console.log(info.data)
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Əlaqə" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Əlaqə vasitələri</h2>
              <p>
                Sizə daha yaxşı xidmət göstərmək üçün daima 7/24 
                suallarınıza cavab verməyə hazırıq.Təkliflərinizi gözləyirik.
              </p>
              {contactInfo.phoneNumbers && contactInfo.phoneNumbers.map((phoneNumber, index) => (
                <a key={index} href="/">
                  <i className="fa-solid fa-phone"></i>&nbsp; {phoneNumber}
                </a>
              ))}
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                {contactInfo.email}
              </a>

            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Bizimlə əlaqə saxlayın</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(077) 313-63-06</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
