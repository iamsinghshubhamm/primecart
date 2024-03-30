import React, { useContext, useEffect } from "react";
import ContextAPI from "../../Context/Data/ContextApi";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../../../Redux/cartSlice";

const ProductCard = () => {
  const context = useContext(ContextAPI);
  const { mode, productStore } = context;

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)

  const addToCartHandler = (product) => {
    dispatch(addToCart(product))
    toast.success('Add to cart')
  
  }
  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

 

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        <div className="flex flex-wrap gap-10 justify-center">
          {productStore.slice(0, 4).map((item, index) => (
            <div key={index} className="p-4 md:w-1/5 h-max drop-shadow-lg">
              <div
                className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex justify-center cursor-pointer">
                  <img
                    className="rounded-2xl w-full h-[300px] object-cover p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                    src={item.imageUrl}
                    alt="product"
                  />
                </div>
                <div className="p-5 border-t-1">
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    PrimeCart
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-1"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {item.title}
                  </h1>
                  <p
                    className="leading-relaxed mb-1"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    ₹{item.price}
                  </p>
                  <p
                    className="leading-relaxed mb-1 h-[50px] overflow-hidden"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {item.description.split(' ').slice(0, 20).join(' ')}
                  </p>
                  <div className="flex justify-center">
                    <button
                    onClick={()  =>  addToCartHandler(item)}
                      type="button"
                      className="focus:outline-none mt-3 text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
