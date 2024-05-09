import { useState } from "react";

function Login() {
  const [inputValues, setInputValues] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValues);
    setInputValues({});
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
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
