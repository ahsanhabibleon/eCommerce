import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import ProductSingle from "../../components/ProductSingle";
import LoadingBox from "../../elements/LoadingBox";
import MessageBox from "../../elements/MessageBox";
function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  console.log(productList);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger" error={error} />
      ) : (
        <div className="row center">
          {products.map((product, index) => {
            return <ProductSingle key={index} product={product} />;
          })}
        </div>
      )}
    </>
  );
}

export default HomeScreen;
