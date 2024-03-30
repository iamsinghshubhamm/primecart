import React, { useContext } from "react";
import ContextAPI from "../../Context/Data/ContextApi";

function UpdateProduct() {
  const Context = useContext(ContextAPI);
  const { product, setProduct, updateProduct } = Context;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
        <div className="bg-gray-800 px-10 py-10 rounded-xl">
          <div>
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Update Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={product.title  || ""}
              onChange={handleChange}
              className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              value={product.price  || ""}
              onChange={handleChange }
              className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="text"
              name="imageUrl"
              value={product.imageUrl  || ""}
              onChange={handleChange}
              className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              value={product.category  || ""}
              onChange={handleChange}
              className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              name="description"
              value={product.description  || ""}
              onChange={handleChange}
              className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product description"
            ></textarea>
          </div>
          <div className="flex justify-center mb-3">
            <button
              className="bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg"
              onClick={updateProduct}
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
