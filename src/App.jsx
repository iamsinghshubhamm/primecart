import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Dashboard from "./Pages/Admin/Dashboard";
import NoPage from "./Pages/NoPage";
import ContextState from "./Context/Data/ContextState";
import Login from "./Pages/Registration/Login";
import Signup from "./Pages/Registration/Signup";
import ProductInfo from "./Pages/ProductInfo";
import Cart from "./Pages/Cart";
import AddProduct from "./Pages/Admin/AddProduct";
import UpdateProduct from "./Pages/Admin/UpdateProduct";
import { ToastContainer, toast } from "react-toastify";
import ProductCard from "./Components/ProductCard/ProductCard";
import AllProducts from "./Pages/AllProduct";

function App() {
  return (
    <>
      <ContextState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <Dashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="productcard" element={<ProductCard/>}/>
            <Route path="/allproducts" element={<AllProducts/>}/>
            <Route
              path="/addproduct"
              element={
                <ProtectedRouteForAdmin>
                  <AddProduct />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/updateproduct"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProduct />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </Router>
      </ContextState>
    </>
  );
}

export default App;

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "iamsinghshubhamm@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
