import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiCarShiftPattern } from "@mdi/js";
import { useNavigate } from "react-router-dom";
import baseService from "../service/baseService";

function Models() {
  const navigate = useNavigate();

  const handleCarReservation = (model, brand, param) => {
    navigate("/bookcar", { 
      state: { 
        brandData: model,
        modelData: brand,
        paramData: param
       } });
  }

  const [carList, setCarList] = useState([]);

  useEffect(() => {
    baseService
      .get("list")
      .then(({ data }) => {
        setCarList(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching car data", error);
        if (error.response) {
          console.error("Error response:", error.response)
        }
      });
  }, []);

  console.log(carList)

  return (
    <section id="models-section" className="models-section">
      <div className="container">
        <div className="models-div">
          {carList.map((brand) => (
            brand.models.map((model) => (
              model.parametrs.map((param) => (
                <div key={param.plate} className="models-div__box">
                  <div className="models-div__box__img">
                    <img src={param.link} alt="car_img" />
                    <div className="models-div__box__descr">
                      <div className="models-div__box__descr__name-price">
                        <div className="models-div__box__descr__name-price__name">
                          <p>{brand.brandName} - {model.modelName}</p>
                        </div>
                        <div className="models-div__box__descr__name-price__price">
                          <h4>₼ {param.dailyPrise}</h4>
                          <p>günlük</p>
                        </div>
                      </div>
                      <div className="models-div__box__descr__name-price__details">
                        <div className="models-div__box__descr__name-price__details-item">
                          <span>
                            <i className="fa-solid fa-car-side"></i> &nbsp;{" "}
                            {param.bodyType}
                          </span>
                          <span style={{ textAlign: "right" }}>
                            <i className="fa-solid fa-door-closed"></i>
                            {param.doors} &nbsp;{" "}
                          </span>
                        </div>
                        <div className="models-div__box__descr__name-price__details-item">
                          <span>
                            <Icon path={mdiCarShiftPattern} size={2} />
                            {param.transmission}
                          </span>
                          <span style={{ textAlign: "right" }}>
                            <i className="fa-solid fa-gas-pump"></i>
                            {param.fuelType}
                          </span>
                        </div>
                      </div>
                      <div
                        onClick={() => handleCarReservation(brand,model,param)}
                        className="models-div__box__descr__name-price__btn"
                      >
                        İcarə et
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ))
          ))}
        </div>
      </div>
    </section>
  );
}

export default Models;
