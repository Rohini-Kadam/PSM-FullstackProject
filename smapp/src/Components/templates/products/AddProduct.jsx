import { useForm } from "react-hook-form";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function AddProduct() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const navigate = useNavigate();

  function savedata(p) {
    console.log(p);

    const formData = new FormData();

    formData.append("productName", p.productName);
    formData.append("productPrice", p.productPrice);
    formData.append("productCategory", p.productCategory);
    formData.append("isAvailable", p.isAvailable);
    formData.append("productImage", p.productImage[0]);

    axios
      .post(`http://localhost:4000/products`, formData)
      .then((Response) => {
        if (Response.status == 201) {
          alert("Product added successfully!");
          reset();
          navigate("/viewproduct");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container w-50 p-5">
      <div className="'card">
        <div className="card-heading bg-warning p-2">
          <div className="card-title p-3">
            <h3 className="card-title text-center p-3">Product Details</h3>
          </div>
          <div className="card-body">
            <form
              onSubmit={handleSubmit(savedata)}
              className="border p-3 rounded bg-light"
            >
              <div className="mb-3">
                <label className="form-label">Product name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("productName")}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Product price</label>
                <input
                  type="number"
                  className="form-control"
                  {...register("productPrice")}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Product category</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("productCategory")}
                />
              </div>

              <div className="mb-3">
                <label className="form-check-label">Is available</label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  {...register("isAvailable")}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">ProductImage</label>
                <input
                  type="file"
                  className="form-control"
                  {...register("productImage")}
                ></input>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
