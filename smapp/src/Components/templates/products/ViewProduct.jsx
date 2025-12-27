import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ViewProduct() {
  const [products, setProducts] = useState([]);

  const getProduct = () => {
    axios.get(`http://localhost:4000/products`).then((res) => {
      console.log(res.data);
      if (res.status == 200) {
        setProducts(res.data);
      }
    });
  };

  useEffect(getProduct, []);

  function deleteProduct(id) {
    axios
      .delete(`http://localhost:4000/products/${id}`)
      .then((response) => {
        if (response.status == 200) {
          alert("Product deleteted successfully!");
          getProduct();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="p-5">
      <table className="table table-bordered table-striped text-center align-middle ">
        <thead className="table-dark">
          <tr>
            <th>Product ID</th>
            <th>Product name</th>
            <th>Product price</th>
            <th>Product category</th>
            <th>Product is available</th>
            <th>Product Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={index}>
              <td>{p.id}</td>
              <td>{p.productName}</td>
              <td>{p.productPrice}</td>
              <td>{p.productCategory}</td>
              <td>
                <input type="checkbox" checked={p.isAvailable} />
              </td>

              <td>
                <img
                  src={`data:image/jpg;base64,${p.productImage}`}
                  alt={p.productName}
                  style={{ width: "100px", height: "100px" }}
                ></img>
              </td>

              <td className="d-flex justify-content-center flex-row gap-4 p-5">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProduct(p.id)}
                >
                  {" "}
                  <i className="bi bi-trash"></i>{" "}
                </button>
                <Link className="btn btn-primary" to={`/editProduct/${p.id}`}>
                  {" "}
                  <i class="bi bi-pencil-square"></i>{" "}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
