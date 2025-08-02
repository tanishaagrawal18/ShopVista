import React, { useState } from 'react'

const Create = () => {
const[title,settitle] = useState("");
const[category,setcategory] = useState("");
const[description,setdescription] = useState("");
const[image,setimage] = useState("");
const[price,setprice] = useState("");

 const AddProductHandler = (e)=>{
    e.preventDefault();

    const product = {
        title,
        image,
        price,
        category,
        description,
    };
    console.log(product); 
    
 }

  return (
    <div>
      <form 
      onSubmit={AddProductHandler}
      className='flex items-center flex-col p-[5%] w-full h-full'>
        <h1 className='mb-5 w-1/2 text-3xl'>Add New Product</h1>
        <input 
        type="url"
        placeholder='Add Product Image'
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        onChange={(e)=>setimage(e.target.value)}
        value={image}
         />
        <input 
        type="text"
        placeholder='Add Product Title'
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        onChange={(e)=>settitle(e.target.value)}
        value={title}
         />
         <div className='w-1/2 flex justify-between'>
         <input 
        type="text"
        placeholder='Add Category'
        className='text-1xl bg-zinc-100 rounded p-3 w-[45%] mb-3'
        onChange={(e)=>setcategory(e.target.value)}
        value={category}
         />
        <input 
        type="number"
        placeholder='Add Price'
        className='text-1xl bg-zinc-100 rounded p-3 w-[45%] mb-3'
        onChange={(e)=>setprice(e.target.value)}
        value={price}
         />
         </div>
         <textarea 
         onChange={(e)=>setdescription(e.target.value)}
            placeholder='Add Product Description Here...'
        value={description}
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3 '
        rows="10"
         ></textarea>
<div className='w-1/2'>
<button 
        className="py-2 px-5 bg-white text-white hover:bg-zinc-300 text-zinc-900 border rounded border-zinc-700 text-zinc-400" >
        Add New Product</button>
</div>
      </form>
    </div>
  )
}

export default Create
