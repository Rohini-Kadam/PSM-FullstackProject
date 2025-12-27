import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Header } from "./Components/Templates/Header";
import { AddProduct } from "./Components/Templates/products/AddProduct";
import { ViewProduct } from "./Components/templates/products/ViewProduct";
import { EditProduct } from "./Components/templates/products/EditProduct";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/viewproduct"
            element={
              <ProtectedRoute>
                <ViewProduct />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/editproduct/:id"
            element={<EditProduct></EditProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
