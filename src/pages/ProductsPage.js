import React from "react";
import SingleProductCard from "../components/SingleProductCard";

const ProductsPage = () => {
  const data = [
    {
      name: "mi watch",
      displayPicture:
        "https://gadgetcraze.ug/wp-content/uploads/2021/02/AppWatchSE40-black-min.jpg",
      ratings: 4.3,
      price: 178,
      id: 1,
    },
    {
      name: "mi watch",
      displayPicture:
        "https://gadgetcraze.ug/wp-content/uploads/2021/02/AppWatchSE40-black-min.jpg",
      ratings: 4.3,
      price: 178,
      id: 2,
    },
    {
      name: "mi watch",
      displayPicture:
        "https://gadgetcraze.ug/wp-content/uploads/2021/02/AppWatchSE40-black-min.jpg",
      ratings: 4.3,
      price: 178,
      id: 3,
    },
    {
      name: "mi watch",
      displayPicture:
        "https://gadgetcraze.ug/wp-content/uploads/2021/02/AppWatchSE40-black-min.jpg",
      ratings: 4.3,
      price: 178,
      id: 4,
    },
    {
      name: "mi watch",
      displayPicture:
        "https://gadgetcraze.ug/wp-content/uploads/2021/02/AppWatchSE40-black-min.jpg",
      ratings: 4.3,
      price: 178,
      id: 5,
    },
    {
      name: "mi watch",
      displayPicture:
        "https://gadgetcraze.ug/wp-content/uploads/2021/02/AppWatchSE40-black-min.jpg",
      ratings: 4.3,
      price: 178,
      id: 6,
    },
    {
      name: "mi watch",
      displayPicture:
        "https://gadgetcraze.ug/wp-content/uploads/2021/02/AppWatchSE40-black-min.jpg",
      ratings: 4.3,
      price: 178,
      id: 7,
    },
  ];
  return (
    <div className="productsPage">
      <div className="container products-container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="products_leftBox">
              <div className="leftBox_heading">
                <h4>Filters</h4>
              </div>
              <div className="products-category">
                <h6>Categories</h6>
                <ul>
                  <li>Watches</li>
                  <li>Mobile</li>
                  <li>Laptops</li>
                  <li>Television</li>
                  <li>Shoes</li>
                </ul>
              </div>
              <div className="priceRange-box">
                <div className="priceRange-box-heading">
                  <h6>Price</h6>
                  <p>
                    <a href="#">Clear</a>
                  </p>
                </div>
                <div className="pricerange-indicator">
                  <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="5"
                    step="0.5"
                    id="customRange3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="products_rightBox">
              <div className="row">
                {data.map((el, i) => {
                  return (
                    <div
                      key={i}
                      className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
                    >
                      <SingleProductCard data={el} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
