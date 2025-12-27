import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("auth");
    navigate("/");
  }
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <h3 className="text-warning m-0">Product Storage App</h3>
      <div className="ms-auto d-flex gap-3">
        <Link className="btn btn-warning" to={"/addproduct"}>
          Add Product
        </Link>
        <Link className="btn btn-warning" to={"/viewproduct"}>
          View Product
        </Link>
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
