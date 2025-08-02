import React from 'react'
import Home from './Components/Home.jsx'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import Details from './Components/Details.jsx'
import Create from './Components/Create.jsx'
import Nav from './Components/Nav.jsx'
const App = () => {
  const {search,pathname} = useLocation();
  

  return (
    <>
    <div className='h-screen w-screen flex'>
      {(pathname!="/" || search.length>0)&&(
        <Link 
         to="/"
         className='text-red absolute right-[2%] top-[3%] bg-[#918CC4] text-white hover:bg-violet-200 hover:text-zinc-900 py-2 px-2  rounded-md'
         >
          Home
         </Link>
      )}
     

      
      <Nav />
       <div className='h-full w-[85%]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
       </div>
      </div>
    </>
  )
}
export default App
