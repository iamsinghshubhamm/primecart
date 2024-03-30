import React, { useState } from 'react';
import { IoMdArrowRoundUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

 
  const handleScroll = () => {
  
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="fixed bottom-16 right-10 w-11 h-11 rounded-full bg-opacity-75 bg-pink-600 text-white flex justify-center items-center text-2xl" onClick={scrollToTop}>
         <IoMdArrowRoundUp/>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
