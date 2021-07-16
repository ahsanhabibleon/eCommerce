import React, { useEffect, useState } from "react";
import ProductSingle from "../../components/ProductSingle";
import axios from "axios";
function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetcheData = async () => {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    };
    fetcheData();
  }, []);
  return (
    <div>
      <div>
        <div className="row center">
          {products.map((product, index) => {
            return <ProductSingle key={index} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
