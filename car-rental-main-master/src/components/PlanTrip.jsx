import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Səyahətinizi indidən planlayın</h3>
              <h2>Sürətli & asan maşın icarəsi</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Maşın seçimi</h3>
                <p>
                 Rahat,sürətli və asan seçim 
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Asan əlaqə</h3>
                <p>
                  Birdən çox əlaqə nömrəsi və email adresslərimizlə 7/24 xidmətinizdəyik 
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Yola düş</h3>
                <p>
                  Seçimini rahat,sürətli həyata keçir və yoluna davam et 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
