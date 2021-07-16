import React from "react";
import { Link } from "react-router-dom";
import Ratings from "../../components/Ratings";
import { data } from "../../data";

function ProductScreen(props) {
  const product = data.products.find((p) => p._id === props.match.params.id);
  if (!product) return <div>No products found!</div>;
  return (
    <>
      <Link to="/">Go back to Home</Link>
      <div className="row">
        <div className="col-2">
          <img src={product.image} alt={product.name} className="large" />
        </div>
        <div className="col-1">
          <h3>Name: {product.name}</h3>
          <Ratings rating={product.rating} numbReviews={product.numReviews} />
          <h5>Price: {product.price}</h5>
          <p>Product Description: {product.description}</p>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul className="no-list-style">
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status: </div>
                  <div className="status">
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Out of Stock</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductScreen;
