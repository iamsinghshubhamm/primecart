import React from "react";
import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ContextAPI from "../../Context/Data/ContextApi";
import { MdOutlineDarkMode } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { SiPicartodottv } from "react-icons/si";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const context = useContext(ContextAPI);
  const { toggleMode, mode } = context;
  const logout = () => {
    localStorage.clear('user')
    window.location.href = '/login'
  }
  const cartItems = useSelector((state) => state.cart)
  const user = JSON.parse(localStorage.getItem("user"));
  

  return (
    <div className="bg-white sticky top-0 z-50  ">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-900 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  <div className="flow-root">
                    <Link
                      to={"/order"}
                      style={{ color: mode === "dark" ? "white" : "" }}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Order
                    </Link>
                  </div>
                  {user.user.email === "iamsinghshubhamm@gmail.com" && (
                    <div className="flow-root">
                      <Link
                        to={"/dashboard"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        admin
                      </Link>
                    </div>
                  )}

                 {user && ( <div className="flow-root">
                    <a
                    onClick={logout}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </a>
                  </div> )}
                  <div className="flow-root">
                    <Link
                      to={"/"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                    >
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                        alt="Dan_Abromov"
                      />{" "}
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-base font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <header className="relative bg-white">
        <p
          className="w-full flex h-10 items-center justify-center bg-amber-400 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "#09090b" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Get free delivery on orders over ₹200
        </p>

        <nav
          aria-label="Top"
          className="bg-amber-500  px-4 sm:px-6 lg:px-8 shadow-md "
          style={{
            backgroundColor: mode === "dark" ? "#18181b" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <HiMiniBars3BottomLeft />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex items-center ">
                    <SiPicartodottv
                      className="text-2xl"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    />
                    <h1
                      className=" text-2xl font-bold text-black  px-2 py-1 rounded"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      PrimeCart
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  <Link
                    to={"/order"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Order
                  </Link>
                  {user.user.email === "iamsinghshubhamm@gmail.com" && (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </Link>
                  )}

                 { user && (  <a
                   onClick={logout}
                    className="text-sm font-medium text-gray-700 cursor-pointer  "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Logout
                  </a> )}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-sm font-medium"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="data:image/jpeg;base64,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"
                      alt="Dan_Abromov"
                    />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {mode === "light" ? (
                      <MdOutlineDarkMode size={20} />
                    ) : "dark" ? (
                      <MdOutlineDarkMode size={20} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <IoCartOutline size={25} />

                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
