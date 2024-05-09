import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
function Home() {
  return (
    <>
      <Carousel />
      <h2 className="text-center py-3 py-md-5 fw-bold">Our Latest Products</h2>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-2 mb-3">
              <ProductCard />
            </div>
            <div className="col-lg-3 col-md-2 mb-3">
              <ProductCard />
            </div>
            <div className="col-lg-3 col-md-2 mb-3">
              <ProductCard />
            </div>
            <div className="col-lg-3 col-md-2 mb-3">
              <ProductCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
