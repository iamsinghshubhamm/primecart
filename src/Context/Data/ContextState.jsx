import React, { useEffect, useState } from "react";
import {
  QuerySnapshot,
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  deleteDoc,
  doc, 
  setDoc
} from "firebase/firestore";
import ContextAPI from "./ContextApi";
import toast from "react-hot-toast";
import { fireDB } from "../../Firebase/FirebaseConfig";

const ContextState = (props) => {
  const [mode, setMode] = useState("Light");
  const [loading, SetLoading] = useState(false);
  const toggleMode = () => {
    if (mode == "Light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("Light");
      document.body.style.backgroundColor = "#fff";
    }
  };

  const [product, setProduct] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-us", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addProduct = async () => {
    if (
      !product.title ||
      !product.price ||
      !product.imageUrl ||
      !product.category ||
      !product.description
    ) {
      return toast.error("All fields are required");
    }
    SetLoading(true);
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, product);
      toast.success("Product added successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 200);
      getProductData();
      SetLoading(false);
    } catch (error) {
      console.log(error);
      SetLoading(false);
    }
  };

  const [productStore, setProductStore] = useState([]);

  const getProductData = async () => {
    SetLoading(true);
    try {
      const q = query(collection(fireDB, "products"));
      orderBy("time");
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProductStore(productArray);
        SetLoading(false);
      });

      return () => data;
    } catch (error) {
      toast.error("Getting error while fetching product");
      SetLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);


  const editHandle = (item) => {
    setProduct(item);
  };
  const updateProduct = async () => {
    SetLoading(true);
    try {
      await setDoc(doc(fireDB, "products", product.id), product);
      toast.success("Product Updated successfully");
      getProductData();
      SetLoading(false);
      window.location.href = "/dashboard";
    } catch (error) {
      SetLoading(false);
      toast.error(error);
    }
    setProduct("");
    
  };
  const deleteProduct = async (item) => {
    try {
      SetLoading(true);
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted successfully");
      SetLoading(false);
      getProductData();
    } catch (error) {
      toast.error("Product Deleted Falied");
      console.log(error)
      SetLoading(false);
    }
  };
  return (
    <ContextAPI.Provider
      value={{
        mode,
        toggleMode,
        loading,
        SetLoading,
        product,
        setProduct,
        addProduct,
        productStore,
        deleteProduct,
         updateProduct, 
         editHandle
      }}
    >
      {props.children}
    </ContextAPI.Provider>
  );
};

export default ContextState;
