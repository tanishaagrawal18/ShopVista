import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav.jsx'
import { Link, useLocation } from 'react-router-dom'
import Load from './Load.jsx'
import { ProductContext } from '../utils/Context.jsx'
import axios from '../utils/axios.jsx'
const Home = () => {
  const [products] = useContext(ProductContext);
  const {search} = useLocation();
  const category = decodeURIComponent(search.split('=')[1]);

const [filteredProducts, setfilteredProducts] = useState(null);

  const getproductscategory = async()=>{
    try{
           const {data}= await axios.get(`/products/category/${category}`);
            setfilteredProducts(data);
    }catch(error){
      console.error("Error fetching products by category:", error);
    }
    
  };
useEffect(() => {
  if (!category || category === "undefined") {
    setfilteredProducts(products);
  } else {
    getproductscategory();
  }
}, [category, products]);

    
  return ( products ? (
    <>
    <div className='h-full w-full p-0 m-0 flex items-center justify-center bg-blue-100'>
      {(!category || category === "undefined") ? (
        <img
          src="https://images.unsplash.com/photo-1674027392887-751d6396b710?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // <-- your image URL here
          alt="Main"
          className="w-full h-full object-center object-cover"
        />
      ) : (
      <div className='h-full  w-full p-10 pt-[5]  bg-white flex flex-wrap overflow-x-hidden overflow-y-auto'>

       {Array.isArray(filteredProducts) &&
       filteredProducts.map((p,i)=>(
        <Link 
        key={p.id}
        to={`/details/${p.id}`} className='card  p-3 mr-3 mb-3 bg-white border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center' >
        <div className='hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center'
        style={{
          backgroundImage:
           `url(${p.image})`,
          }} 
        ></div>
         <h1 className='hover:text-blue-300'>{p.title}</h1>
         </Link>
       ))}
      </div>
      )}
        </div>
    </>
  ) : (
    <Load />
  )
);


}

export default Home
