import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Load from './Load'
const Details = () => {
     const [product, setProduct] = useState(null);
    const {id} = useParams();
    const getsingleproduct = async()=>{
      try{
        const {data}= await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);

      }catch(error){
        console.error("Error fetching product details:", error);
      }
    };
    useEffect(() => {
      getsingleproduct();
    }, []);

  return ( product ?(
    <div className='w-[70%] flex h-full justify-between  items-center m-auto p-[10%]'>
      <img className='object-contain h-[80%] w-[40%]'
      
      src={product.image} alt="" />
      <div className='content w-[50%]'>
        <h1 className='text-4xl'>
          {product.title}
        </h1>
        <h3 className='text-zinc-400 my-5'>
          {product.category}
        </h3>
        <h2 className='text-red-300 mb-3'>
          ${product.price}
        </h2>
        <p className='mb-5'>
          {product.description}
        </p>
           
           <Link className="py-2 mr-3 px-5 hover:bg-blue-100 hover:text-zinc-900 border rounded border-blue-400 text-blue-400">
           Edit
           </Link>

           <Link className="py-2 px-5 hover:bg-red-100 hover:text-zinc-900 border rounded border-red-400 text-red-400">
            Delete
           </Link>
      </div>
    </div>
  ) :(
   <Load />
  )
);
}

export default Details
