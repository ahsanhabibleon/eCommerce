import React from "react";
import { Link } from "react-router-dom";
import Ratings from "../Ratings";

const ProductSingle = ({ product }) => {
  const { _id, name, image, price, rating, numReviews } = product;
  return (
    <div className="card">
      <Link to={"product/" + _id}>
        <img className="medium" src={image} alt="product" />
      </Link>
      <div className="card-body">
        <Link to={"product/" + _id}>
          <h2>{name}</h2>
        </Link>
        <Ratings rating={rating} numReviews={numReviews} />
        <div className="price">${price}</div>
      </div>
    </div>
  );
};

export default ProductSingle;
