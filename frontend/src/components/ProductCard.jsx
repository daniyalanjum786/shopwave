import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <>
      <Link className="text-decoration-none" to={`/product/${product._id}`}>
        <div className="card">
          <img
            src="/images/products/airbuds1.png"
            className="card-img-top"
            alt="..."
            height="250"
            style={{ objectFit: "contain" }}
          />
          <div className="card-body">
            <p className="card-text">{product.category}</p>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
