import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

function Navbar() {
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    await axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        withCredentials: true, // Axios automatically sends cookies when using withCredentials
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        window.localStorage.removeItem("user");
        toast.success(response.data.message, { autoClose: 2000 });
        window.location.reload();
      })
      .catch((error) => error.response.data);
  };
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
              {user && user.success == true ? (
                <>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-display="static"
                      aria-expanded="false"
                    >
                      Profile
                    </button>
                    <ul className="dropdown-menu dropdown-menu-lg-end">
                      <li>
                        <button className="dropdown-item" type="button">
                          profile
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="dropdown-item"
                          type="button"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-dark me-3">
                    Login
                  </Link>
                  <Link to="/register" className="btn btn-warning">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
