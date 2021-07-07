import React from "react";

const Card = (props) => {
  const { name, image, price } = props;
  return (
    <div className="card">
      <a href="product.html">
        <img className="medium" src={image} alt="product" />
      </a>
      <div className="card-body">
        <a href="product.html">
          <h2>{name}</h2>
        </a>
        <div className="rating">
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star-half-o"></i>
          </span>
        </div>
        <div className="price">${price}</div>
      </div>
    </div>
  );
};

export default Card;
