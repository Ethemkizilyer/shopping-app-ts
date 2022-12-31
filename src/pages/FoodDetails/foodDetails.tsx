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
            <h4 className="my-4 fw-600">Add Item to cart</h4>
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
                <h5 className="my-4 fw-600">Name: {state.name}</h5>
                <h5 className="my-4 fw-600">Price: {state.price}</h5>
                <h5 className="my-4 fw-600">Description: {state.desc}</h5>
                <h5 className="my-4 fw-600">Rating: {state.rate} *</h5>
                <div>
                  <button className="btn btn-primary" onClick={goCart}>
                    Go to Cart
                  </button>
                  <button
                    className="mx-3 btn btn-success"
                    onClick={eklem}
                  >
                    Add Item
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={sile}
                  >
                    Remove Item
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
