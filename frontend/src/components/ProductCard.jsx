import { Link } from "react-router-dom";
function ProductCard() {
  return (
    <>
      <Link className="text-decoration-none">
        <div className="card">
          <img
            src="/images/products/airbuds1.png"
            className="card-img-top"
            alt="..."
            height="250"
            style={{ objectFit: "contain" }}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
