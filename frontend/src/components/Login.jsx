import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [inputValues, setInputValues] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(login(inputValues))
      .unwrap()
      .then((response) => {
        if (response.success == true) {
          toast.success(response.message, { autoClose: 2000 });
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          toast.error(response.message, { autoClose: 2000 });
        }
      })
      .catch((error) => {
        toast.error("Something went wrong! Please try again", {
          autoClose: 2000,
        });
        console.log(error);
      });
    setInputValues({});
  };

  return (
    <>
      <div className="container p-3">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <h1 className="fw-semibold text-center py-md-4 py-3">Login</h1>
              <div className="card shadow border-0 p-5">
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    value={inputValues.email || ""}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                    value={inputValues.password || ""}
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
