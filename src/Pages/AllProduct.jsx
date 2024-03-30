import React, { useContext, useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import ContextAPI from "../Context/Data/ContextApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import { toast } from 'react-toastify'; 

function AllProducts() {
  const context = useContext(ContextAPI);
  const { mode, productStore } = context;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart'); 
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const categories = [
    { name: "electronics" },
    { name: "food" },
    { name: "clothing" },
    { name: "books" },
    { name: "home appliances" },
  ];

  const brands = [
    { name: "Roadster" },
    { name: "HIGHLANDER" },
    { name: "Louis Philippe" },
    { name: "Indian Terrain" },
    { name: "Allen Solly" },
    { name: "Arrow" },
    { name: "Van Heusen" },
    { name: "SHOWOFF" },
  ];

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
  });

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    const filterText = e.target.nextSibling.textContent.toLowerCase() 
    setSelectedFilters((prevState) => ({
      ...prevState,
      [name]: checked
        ? [...prevState[name], filterText]
        : prevState[name].filter((item) => item !== filterText),
    }));
  };

  const filteredProducts = productStore.filter((product) => {
    return (
      (selectedFilters.categories.length === 0 ||
        selectedFilters.categories.includes(product.category)) &&
      (selectedFilters.brands.length === 0 ||
        selectedFilters.brands.includes(product.brand))
    );
  });

  return (
    <>
      <Navbar />
      <div className="flex justify-between p-8">
        <div className="flex flex-col sm:w-1/4 md:w-1/3 fixed left-[30px] ">
          <h2 className="text-sm font-semibold mb-4">Filters</h2>
          <div>
            <h3 className="text-sm font-semibold mb-2">Categories</h3>
            {categories.map((category, index) => (
              <div key={index} className="mb-2 text-sm">
                <input
                  type="checkbox"
                  id={`category-${index}`}
                  name="categories"
                  onChange={handleFilterChange}
                />
                <label htmlFor={`category-${index}`} className="ml-2">
                  {category.name}
                </label>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Brands</h3>
            {brands.map((brand, index) => (
              <div key={index} className="mb-2 text-sm">
                <input
                  type="checkbox"
                  id={`brand-${index}`}
                  name="brands"
                  onChange={handleFilterChange}
                />
                <label htmlFor={`brand-${index}`} className="ml-2">
                  {brand.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-3/2 ml-[20px] fixed left-[150px] h-screen sm:left-[250px]">
          <h2 className="text-lg font-semibold mb-4">All Products</h2>
          <div className="flex flex-wrap justify-start gap-6 ">
            {filteredProducts.map((item, index) => (
              <div key={index} className=" md:w-[300px] h-max drop-shadow-lg">
                <div
                  className="h-full border-2 p-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
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
                  <div className="px-5 border-t-1">
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
                      {item.description.split(' ').slice(0, 20).join(' ')}<br/>
                    </p>
                    <div className="flex justify-center">
                      <button
                        onClick={() => addToCartHandler(item)}
                        type="button"
                        className="focus:outline-none mt-3 mb-3 text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
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
      </div>
    </>
  );
}

export default AllProducts;
