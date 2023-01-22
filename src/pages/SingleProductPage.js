import React, { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";

const SingleProductPage = () => {
  const [cartAdded, setCartAdd] = useState(false);
  const navigate = useNavigate();
  const addToCart = (productId) => {
    setCartAdd(true);
    if (cartAdded) {
      navigate("/cart");
    }
  };
  // const gotoCart = () => {
  //   if(cartAdded){
  //     navigate("/cart");
  //   }
  // }
  const data = [
    {
      name: "mi watch",
      displayPicture:
        "https://gadgetcraze.ug/wp-content/uploads/2021/02/AppWatchSE40-black-min.jpg",
      ratings: 4.3,
      id: 4,
    },
  ];

  return (
    <div className="pageMainSec">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="row product-img-container">
              <div className="col-lg-9 col-md-12">
                <div className="mainProductImage">
                  <img src={data[0].displayPicture} alt="" />
                  <div className="saveProduct">
                    <BsHeartFill />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="productImgBox">
                  <div className="productImg">
                    <img src={data[0].displayPicture} alt="" />
                  </div>
                  <div className="productImg">
                    <img src={data[0].displayPicture} alt="" />
                  </div>
                  <div className="productImg">
                    <img src={data[0].displayPicture} alt="" />
                  </div>
                  <div className="productImg">
                    <img src={data[0].displayPicture} alt="" />
                  </div>
                </div>
              </div>
              <div className="buttonsGroup">
                <button
                  className=" button1"
                  onClick={() => addToCart(data[0].id)}
                >
                  <span>
                    <HiShoppingCart />
                  </span>
                  {cartAdded ? "Go to cart" : "Add to cart"}
                </button>
                <button className="bgBuyNow" onClick={() => navigate("/cart")}>
                  <span className="charge">
                    <BsFillLightningChargeFill />
                  </span>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="mainProductDescription">
              <div className="productHeading">
                <h6 className="text-muted">FASHION TRACK </h6>
                <h4>
                  FT-4429 Sports Casual & Formal Watch Analog Watch - For Men
                </h4>
              </div>
              <div className="productPrice">
                <span className="spanText">spacialPriece</span>
                <h3>
                  $178 <span className="spanText textGrey">$699</span>
                  {"  "}
                  <span className="spanText">74% off</span>
                </h3>
              </div>
              <div className="productsRatings">
                <div className="starRating">
                  <p>
                    3.9 <span>⭐</span>
                  </p>
                </div>
                <p className="text-muted reviewes">
                  10,147 ratings and 677 reviews
                </p>
              </div>
              <hr />
              <div className="productsReviewesSec">
                {/* <div className="align-center">
                  <h4>Ratings & Reviews</h4>
                  <div className="starRating">
                    <p>
                      3.9 <span>⭐</span>
                    </p>
                  </div>
                </div>
                <p className="text-muted reviewes">
                  10,147 ratings and 677 reviews
                </p> */}
                <button className="btnRate">Rate Product</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
