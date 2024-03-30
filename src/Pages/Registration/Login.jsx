import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/FirebaseConfig";
import ContextAPI from "../../Context/Data/ContextApi";;
import Loader from "../../Loader/LoaderPage";
import { toast } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const context = useContext(ContextAPI);
  const { loading, SetLoading } = context;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const loginBtn = async () => {
    if (validateForm()) {
      SetLoading(true); 
      try {
        const result = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/");
      } catch (error) {
        toast.error('Login failed ')
      } finally {
        SetLoading(false); 
      }
    }
  };

  return (
    <div>
      {loading && <Loader />} 
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
        <div className="bg-gray-700 px-10 py-10 rounded-xl">
          <div className="">
            <h1 className="text-center text-white text-3xl mb-7 font-bold">
              Login
            </h1>
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-600 mb-2 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-600 mb-2 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mb-1">{errors.password}</p>
            )}
          </div>
          <div className="flex justify-center mb-3">
            <button
              onClick={loginBtn}
              className="bg-amber-500 hover:bg-amber-600 w-full text-white font-bold px-2 py-2 rounded-lg"
            >
              Login
            </button>
          </div>
          <div>
            <h2 className="text-white mt-7">
              Don't have an account{" "}
              <Link className="text-yellow-500 font-bold" to={"/signup"}>
                Signup
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
