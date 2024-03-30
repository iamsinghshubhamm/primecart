import React from "react";
import Layout from "../Components/Layout/Layout";
import HeroSection from "./HeroSection";
import Filter from "../Components/Filter/Filter";
import ProductCard from "../Components/ProductCard/ProductCard";
import Track from "../Components/Track/Track";
import Testimonial from "../Components/Testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../Redux/cartSlice";
import ScrollToTopButton from "../Components/ScrollToTopButton";


const Home = () => {
     const dispatch = useDispatch()
     const cartItem = useSelector((state) => state.cart)
     const addCart = () => {
      dispatch(addToCart('Tshirt'))
     }
     const deleteCart = () => {
      dispatch(deleteFromCart('Tshirt'))
     }

     console.log(cartItem)

  return (
    <>
      <Layout>
     
        <HeroSection />
        <Filter />
        <ProductCard />
        <Track />
        <Testimonial/>
       
      </Layout>
    </>
  );
};

export default Home;
