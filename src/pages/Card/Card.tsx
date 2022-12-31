import { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { DataContext } from "../../context/Data";

import { FoodItems } from "../../globalInterface";
import "./Card.css";

function Card() {
  const { cartItems, ekle, sil } = useContext(DataContext);

  const totalPrice = () => {
    let price = 0;
    cartItems.forEach((el) => {
      price += el.quantity! * el.price;
    });
    return price;
  };

  return (
    <div className="d-flex cart-outer-div">
      <div className="cart-body">
        {totalPrice() ? (
          <CartWithItems
            cartItems={cartItems}
            ekle={ekle}
            sil={sil}
            totalPrice={totalPrice()}
          />
        ) : (
          <div className="container my-5" style={{ textAlign: "center" }}>
            <img src="/assets/shopping-cart.png" width="200px" alt="icon" />
            <div className="mt-4">
              <h4 className="orange-red fw-600">Sepet Boş🤷‍♂️</h4>
              <h5 className="darkblue fw-600">
                Sizi bekleyen lezzetler {<Link to={"/"}>Ana Sayfada</Link>}
              </h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const CartWithItems = ({
  cartItems,
  ekle,
  sil,
  totalPrice,
}: {
  cartItems: FoodItems[];
  ekle: (item: FoodItems) => void;
  sil: (item: FoodItems) => void;
  totalPrice: number;
}) => {
  const checkout = () => {
    swal("Tebrikler!", "Şiparişiniz Başarıyla Verildi!", "success").then(
      () => {
        window.location.href = "/card";
      }
    );
  };
  return (
    <div className="container mb-5">
      <h4 className="my-4 my-cart">Sepetim</h4>
      <div className="d-flex my-3" style={{ justifyContent: "space-between" }}>
        <h4 className="fw-600">Güncel</h4>
        <h4 className="fw-600" style={{ marginRight: "49%" }}>
          Ürün
        </h4>
      </div>
   
      <div className="d-flex">
        <div className="row" style={{ width: "50%" }}>
          <div className="col-md-4">
            <h6>Fiyat:</h6>
            <h6>Promosyon Kodu:</h6>
            <h6>Kargo Ücreti:</h6>
            <div className="my-3 line w-120"></div>
            <h6>Toplam:</h6>
          </div>
          <div className="col-md-4">
            <h6>TL {totalPrice}</h6>
            <h6>BAKARLARMİ</h6>
            <h6>TL 50</h6>
            <div className="my-3 line w-60"></div>
            <h6>TL {totalPrice + 50}</h6>
          </div>
        </div>
      
        <div className="row" style={{ width: "50%" }}>
          <div style={{ maxWidth: "70%" }} className="col-md-12">
            <ul style={{ padding: 0 }}>
              {cartItems?.map((item: FoodItems, idx: number) => (
                <li key={idx} style={{ listStyle: "none" }}>
                  <div className="cart-items">
                    <img
                      src={item.url}
                      width="50px"
                      height="50px"
                      style={{ borderRadius: "50%" }}
                      alt="icon"
                    />
                    <h6 className="mt-15">{"Cake"}</h6>
                    <div className="d-flex mt-10">
                      <button
                        className="remove"
                        type="button"
                        onClick={() => sil(item)}
                      >
                        -
                      </button>
                      <span className="cart-quantity">{item.quantity}</span>
                      <button
                        className="add"
                        type="button"
                        onClick={() => ekle(item)}
                      >
                        +
                      </button>
                    </div>
                    <h6 className="mt-15">{item.quantity! * item.price}</h6>
                  </div>
                  <div className="line"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      <div
        className="d-flex justify-content-end"
        style={{ width: "80%", marginTop: "2%" }}
      >
        <button onClick={checkout} className="btn btn-primary" type="button">
          Sipariş Ver
        </button>
      </div>
    </div>
  );
};

export default Card;
