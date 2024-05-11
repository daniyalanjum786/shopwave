import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Loader() {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 && navigate("/");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <div
      style={{
        minHeight: "80vh",
        minWidth: "80vw",
        backgroundColor: "white",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="fs-1">Redirecting to you in {count} seconds &nbsp;</div>
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
