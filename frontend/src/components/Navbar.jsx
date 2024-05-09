import { NavLink, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3 me-md-5" to="/">
            Shop<span className="text-warning">Wave</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <button
                className="btn btn-outline-dark me-2"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>
              {/* Login Modal */}
              <Login />
              <button
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
              >
                Register
              </button>
              {/* Register Modal */}
              <Register />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
