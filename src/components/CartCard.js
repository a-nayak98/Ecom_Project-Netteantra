import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

const CartCard = ({ data, index, removeItem }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="card-container">
      <div className="cart-card">
        <div className="cartProductsImage">
          <img src={data.displayPicture} alt="" />
        </div>
        <div className="cartProductDetails">
          <h5 className="cartprdt_heading">{data.name}</h5>
          <p className="text-muted ">Product Details</p>
          <p>
            <span className="cart-prdt-price">$ {data.price}</span>
          </p>
        </div>
        <div className="btn-remove-item" onClick={() => removeItem(index)}>
          <GrFormClose />
        </div>
      </div>
      <div className="productCounter">
        <AiOutlineMinus
          className="counterBtn"
          onClick={(i) => (counter > 0 ? setCounter(counter - 1) : null)}
        />
        <p>{counter}</p>
        <AiOutlinePlus
          className="counterBtn"
          onClick={(i) => setCounter(counter + 1)}
        />
      </div>
    </div>
  );
};

export default CartCard;
