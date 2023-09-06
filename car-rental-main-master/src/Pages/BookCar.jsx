import React, { useState } from "react";
import HeroPages from "../components/HeroPages";
import { useEffect } from "react";

const BookCar = ({ location }) => {
  const [modal, setModal] = useState(false); //  class - active-modal
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  // modal infos
  const {brandData, modelData, paramData} = location.state || {};
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [selectedCarInfo, setSelectedCarInfo] = useState({
    brandName: "",
    modelName: "",
    parametrs: {},
  });

  useEffect(() => {
    if (location.state) {
      const { brandData, modelData, paramData } = location.state;

      setSelectedCarInfo({
        brandName: brandData.brandName,
        modelName: modelData.modelName,
        parametrs: paramData
      });
    }
  }, [location.state]);
 


  
    const openModal = (e) => {
      e.preventDefault();
      const errorMsg = document.querySelector(".error-message");
      
      if (pickTime === "" || dropTime === "") {
        errorMsg.textContent = "Boş xanaları doldurun!";
        errorMsg.style.display = "flex";
      } else {
        const currentDate = new Date();
        const pickDate = new Date(pickTime);
        const dropDate = new Date(dropTime);
  
        if (pickDate < currentDate  || pickDate >= dropDate) {
          errorMsg.textContent = "Zəhmət olmasa tarixi düz seçin";
          errorMsg.style.display = "flex";
        } else {
          setModal(!modal);
          const modalDiv = document.querySelector(".booking-modal");
          modalDiv.scroll(0, 0);
          errorMsg.style.display = "none";
          // invalidDateMsg.style.display = "none";
        }
      }
    };


  const confirmBooking = (e) => {
    e.preventDefault();
    if(!username.trim()){
      setUsernameError(true);
    }else{
      setModal(false);
      setUsernameError(false);
      const doneMsg = document.querySelector(".booking-done");
      doneMsg.style.display = "flex";

    }
  };

  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
    setUsernameError(false);
  };

 

  return (
    <>
      <section id="booking-section" className="book-section">
        <HeroPages name="İcarə et" />
        <form className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Maşın icarə et</h2>

              <p className="error-message">
                {" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>
              <p className="booking-done">
                Müraciətiniz qeydə alındı{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>
              <div className="box-form">
                <div className="box-form__car-type">
                  <label htmlFor="car-select">Select Car</label>
                  <select id="car-select" value={modelData.modelName} readOnly >
                    <option value={""}>Maşını seç</option>
                      <option
                        key={paramData.plate}
                        value={modelData.modelName}
                      >
                       {brandData.brandName} - {modelData.modelName} 
                      </option>
                  </select>
                </div>
                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Götürmə tarixi
                    <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Qaytarma tarixi
                    <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>
              </div>


                <div className="info">

                  <div className="info-form__2col">
                    <span>
                      <label>
                        Qeydiyyat nömrəsi <b>*</b>
                      </label>
                    
                  <input type="text" value={paramData  && paramData.plate} readOnly />
                    </span>
                    <span>
                      <label>
                        İl <b>*</b>
                      </label>
                      <input type="text" value={paramData.modelYear} readOnly />
                    </span>
                  </div>
                </div>
              
              <button onClick={openModal} type="submit">
                Rezerv et
              </button>
            </div>
          </div>
        </form>
      </section>
      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Rezervasiyanı tamamla</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Bu rezervasiya sorğusunu
            yerinə yetirdikdən sonra siz nese nese
          </h4>
          <p>burada nese yazaciq</p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">

            <div className="booking-modal__car-info__dates">
              <h5>Rezerv məlumatları</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Götürmə Tarix</h6>
                  <p>
                    {pickTime}
                  </p>
                </div>
              </span>
            </div>


            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Qaytarma tarixi</h6>
                  <p>
                    {dropTime}
                  </p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
          <h5>
              <span>Avtomobil -</span> {selectedCarInfo.brandName}-{selectedCarInfo.modelName} 
            </h5>
            <h5>
              <span>Mühərrik -</span> {selectedCarInfo.parametrs.engine} 
            </h5>
            <h5>
              <span>Yanacaq -</span>  {selectedCarInfo.parametrs.fuelType} 
            </h5>
            <h5>
              <span>Ban növü -</span>  {selectedCarInfo.parametrs.bodyType} 
            </h5>
            <h5>
              <span>Qapı sayı -</span>  {selectedCarInfo.parametrs.doors} 
            </h5>
            <h5>
              <span>Sürətlər qutusu -</span>  {selectedCarInfo.parametrs.transmission} 
            </h5>
            <h5>
              <span>Ötürücü -</span> {selectedCarInfo.parametrs.driveTrain}
            </h5>
          </div>

        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Şəxsi məlumatlar</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  Username <b>*</b>
                </label>
                <input
                  value={username}
                  onChange={handleUsername}
                  type="text"
                  placeholder="Username daxil edin"
                ></input>
                {usernameError &&(
                  <p className="error-modal">Boş xanaları doldurun.</p>
                )}
              </span>

           
            </div>
            <div className="reserve-button">
              <button onClick={confirmBooking}>Rezerv et</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookCar;
