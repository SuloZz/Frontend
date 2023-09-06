import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
// import Testimonials from "../components/Testimonials";

function Feedback() {
  return (
    <>
      <section className="feedback-page">
        <HeroPages name="Feedback" />
        {/* <Testimonials /> */}
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

export default Feedback;
