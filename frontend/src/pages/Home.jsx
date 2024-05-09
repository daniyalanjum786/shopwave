import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
function Home() {
  return (
    <>
      <Carousel />
      <h2 className="text-center py-3 py-md-5 fw-bold">Our Latest Products</h2>
      <main>
        <div className="container">
          <div className="row justify-content-evenly">
            <div className="col-xl-3 col-lg-4 col-6 mb-3">
              <ProductCard />
            </div>
            <div className="col-xl-3 col-lg-4 col-6 mb-3">
              <ProductCard />
            </div>
            <div className="col-xl-3 col-lg-4 col-6 mb-3">
              <ProductCard />
            </div>
            <div className="col-xl-3 col-lg-4 col-6 mb-3">
              <ProductCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
