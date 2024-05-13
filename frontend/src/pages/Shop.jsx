import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../store/features/product/productSlice";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
function Shop() {
  const products = useSelector((state) => state?.products?.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);
  return (
    <>
      <h2 className="text-center py-3 py-md-5 fw-bold">Our Latest Products</h2>
      <main>
        <div className="container">
          <div className="row justify-content-evenly">
            {products &&
              products.productsArr.map((product) => {
                return (
                  <div
                    key={product._id}
                    className="col-xl-3 col-lg-4 col-6 mb-3"
                  >
                    <ProductCard product={product} />
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
}

export default Shop;
