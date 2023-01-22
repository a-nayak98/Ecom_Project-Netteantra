import React, { useState } from "react";
import CartCard from "../components/CartCard";

let initialState = [
  {
    name: "mi watch",
    displayPicture:
      "https://gadgetcraze.ug/wp-content/uploads/2021/02/AppWatchSE40-black-min.jpg",
    ratings: 4.3,
    id: 1,
    price: 285.0,
  },
  {
    name: "mi watch",
    displayPicture:
      "https://gadgetcraze.ug/wp-content/uploads/2021/02/AppWatchSE40-black-min.jpg",
    ratings: 4.3,
    id: 2,
    price: 285.0,
  },
  {
    name: "mi watch",
    displayPicture:
      "https://gadgetcraze.ug/wp-content/uploads/2021/02/AppWatchSE40-black-min.jpg",
    ratings: 4.3,
    id: 2,
    price: 285.0,
  },
  {
    name: "mi watch",
    displayPicture:
      "https://gadgetcraze.ug/wp-content/uploads/2021/02/AppWatchSE40-black-min.jpg",
    ratings: 4.3,
    id: 2,
    price: 285.0,
  },
  {
    name: "mi watch",
    displayPicture:
      "https://gadgetcraze.ug/wp-content/uploads/2021/02/AppWatchSE40-black-min.jpg",
    ratings: 4.3,
    id: 2,
    price: 285.0,
  },
  {
    name: "mi watch",
    displayPicture:
      "https://gadgetcraze.ug/wp-content/uploads/2021/02/AppWatchSE40-black-min.jpg",
    ratings: 4.3,
    id: 2,
    price: 285.0,
  },
];

const Cart = () => {
  const [data, setdata] = useState(initialState);

  const removeItem = (index) => {
    let newData = [...data];
    newData.splice(index, 1);
    setdata(newData);
  };
  return (
    <div className="cartPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="cartPageLeftSec">
              <div className="cartProducts">
                {data.map((e, i) => {
                  return (
                    <CartCard data={e} index={i} removeItem={removeItem} />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cartPageRightSec">
              <div className="card">
                <div className="card-body">
                  <div className="checkout-desktop">
                    <h5 className="card-title text-muted">PRICE DETAILS</h5>
                    <hr />
                    <div className="priceDetailsBox">
                      <p>
                        Price $<span>{300}</span>
                      </p>
                      <hr />
                    </div>
                    <div className="placeOrder">
                      <button className="btn_placeOrder">PLACE ORDER</button>
                    </div>
                  </div>
                  <div className="checkout-mob">
                    <div className="placeOrder">
                      <p>
                        {300}
                      </p>
                      <button className="btn_placeOrder">PLACE ORDER</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
