import React, { useContext, useEffect, useState } from 'react';
import ContextAPI from '../Context/Data/ContextApi';
import Layout from '../Components/Layout/Layout';
import Modal from '../Components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../Redux/cartSlice';
import { MdOutlineDeleteOutline } from "react-icons/md";

function Cart() {
  const context = useContext(ContextAPI);
  const { mode } = context;
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price)
    })
    setTotalAmount(temp);
  }, [cartItems])
 
  const handleDeleteFromCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  return (
    <Layout>
      <div className="h-max bg-gray-100 pt-5" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '' }}>
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="md:w-2/3">
            {cartItems.map((item) => (
              <div key={item.id} className="mb-6">
                <div className="rounded-lg border drop-shadow-xl bg-white p-6 sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '' }}>
                  <img src={item.imageUrl} alt="product-image" className="w-full h-44 rounded-lg sm:w-40 object-contain " />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                      <h2 className="text-sm text-gray-900">{item.description}</h2>
                      <p className="mt-1 text-xs font-semibold text-green-600">₹{item.price}</p>
                    </div>
                    <div className="mt-4 mr-2 flex justify-between sm:space-y-6 sm:mt-0 sm:block cursor-pointer sm:space-x-6" onClick={() => handleDeleteFromCart(item)}>
                     <MdOutlineDeleteOutline className='text-3xl text-gray-600 hover:translate-x-4 hover:text-red-600 duration-150'/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 md:mt-0 md:w-1/3">
            <div className="h-max rounded-lg border bg-white p-6 shadow-md">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">₹{totalAmount}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                {totalAmount === 0 ? <p className="text-gray-700">₹0</p> : <p className="text-gray-700">₹20</p>}

              </div>
              <hr className="my-4" />
              <div className="flex justify-between mb-3">
                <p className="text-lg font-bold">Total</p>
                <div>
                {totalAmount === 0 ? <p className="mb-1 text-lg font-bold">₹{totalAmount + 0}</p> : <p className="mb-1 text-lg font-bold">₹{totalAmount + 20}</p>}
                </div>
              </div>
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
