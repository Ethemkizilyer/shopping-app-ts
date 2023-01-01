import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/Data';
import { FoodItems } from '../../globalInterface';
import "./foodDetails.css"

export interface IFoodDetailsProps<T> {
    hash: string;
  key: string;
  pathname: string;
  search: string;
  state: T;
}

export function FoodDetails() {
  const { state } = useLocation() as IFoodDetailsProps<FoodItems>;
   const { sil, ekle } = React.useContext(DataContext);
  const navigate=useNavigate()
  const goCart = () => {
    navigate("/card");
  };

  const eklem = () => {
    ekle(state);
  };
  const sile = () => {
    sil(state);
  }; 
  return (
    <div className="d-flex food-details-outer">
      <div className="food-details">
        <div className="container mb-5">
          <div className="container mb-5">
            <h4 className="my-4 fw-600">Sepete Ürün Ekle</h4>
            <div className="row">
              <div className="col-md-4" style={{ cursor: "pointer" }}>
                <img
                  src={state.url}
                  width="300px"
                  height="300px"
                  style={{ borderRadius: 15 }}
                  alt="icon"
                />
              </div>
              <div className="col-md-4" style={{ cursor: "pointer" }}>
                <h5 className="my-4 fw-600">Ürün Adı: {state.name}</h5>
                <h5 className="my-4 fw-600">Fiyatı: {state.price}</h5>
                <h5 className="my-4 fw-600">Açıklama: {state.desc}</h5>
                <h5 className="my-4 fw-600">Değerlendirme: {state.rate} *</h5>
                <div>
                  <button className="btn btn-primary" onClick={goCart}>
                    Sepete Git
                  </button>
                  <button
                    className="mx-3 btn btn-success"
                    onClick={eklem}
                  >
                    Ekle
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={sile}
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}
