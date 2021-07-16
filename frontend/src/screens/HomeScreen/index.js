import React from "react";
import { data } from "../../data";
import ProductSingle from "../../components/ProductSingle";
function HomeScreen() {
  return (
    <div>
      <div>
        <div className="row center">
          {data.products.map((product, index) => {
            return <ProductSingle key={index} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
