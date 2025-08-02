import axios from 'axios';
import React, { useState,useEffect,createContext } from 'react'
export const ProductContext = createContext();

const Context = (props) => {
   const [products,setProducts] = useState([]);

   const getProducts = async () => {
    try{
        const {data} = await axios("https://fakestoreapi.com/products");
        setProducts(data);
    }catch(err){
        console.error("Error fetching products:", err);
    }
};

    useEffect(() => {
     getProducts();
    },[]);
    

  return (
    <ProductContext.Provider value={[products,setProducts]}>
      {props.children}
   </ProductContext.Provider>
  )
}

export default Context
