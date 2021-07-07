import React from "react";
import Ratings from "../Ratings";

const ProductSingle = ({ product }) => {
  const { name, image, price, rating, numReviews } = product;
  return (
    <div className="card">
      <a href="product.html">
        <img className="medium" src={image} alt="product" />
      </a>
      <div className="card-body">
        <a href="product.html">
          <h2>{name}</h2>
        </a>
        <Ratings rating={rating} numReviews={numReviews} />
        <div className="price">${price}</div>
      </div>
    </div>
  );
};

export default ProductSingle;
