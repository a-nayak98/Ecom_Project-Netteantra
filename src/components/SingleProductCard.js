import React from "react";
import { useNavigate } from "react-router-dom";

const SingleProduct_card = (props) => {
  const navigate = useNavigate();

  return (
    <div className="product_card">
      <div
        className="product-wrapper cursor-pointer"
        onClick={() => navigate("/product")}
      >
        <div className="productImg">
          <img src={props.data.displayPicture} alt="" />
        </div>
        <div className="productDescription cursor-pointer">
          <h3>{props.data.name}</h3>
          <p className="prdt-desc-ratings">
            {props.data.ratings}
            <span>⭐</span>
          </p>
          <p className="prdt-desc-price">
            {props.data.price}.00$
            {/* <span className="mrp">379.00</span> */}
          </p>
          {/* <small>30% off</small> */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct_card;
