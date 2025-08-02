import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [products] = useContext(ProductContext);
  const [menuOpen, setMenuOpen] = useState(false);

  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4`;
  };

  return (
    <>
     {/* Hamburger Icon for mobile */}
<div className="md:hidden">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="fixed top-4 left-4 z-50 bg-white rounded-full p-2 shadow focus:outline-none"
    aria-label="Open category menu"
  >
    {/* Hamburger SVG */}
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect y="5" width="24" height="2" rx="1" fill="#918CC4"/>
      <rect y="11" width="24" height="2" rx="1" fill="#918CC4"/>
      <rect y="17" width="24" height="2" rx="1" fill="#918CC4"/>
    </svg>
  </button>
</div>

      {/* Sidebar for desktop */}
      <nav className='hidden md:flex w-[15%] h-screen bg-zinc-200 flex-col items-center pt-5'>
        <a
          className="py-2 px-5 bg-[#918CC4] text-white hover:bg-violet-200 hover:text-zinc-900 border rounded border-zinc-700 mb-2"
          href="/create"
        >
          Add New Product
        </a>
        <hr className='my-3 w-[80%]' />
        <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
        <div className='w-[80%]'>
          {distinct_category.map((c) => (
            <Link
              key={c}
              to={`/?category=${c}`}
              className='flex items-center mb-3'
            >
              <span
                className='rounded-full mr-3 w-[15px] h-[15px]'
                style={{ backgroundColor: color() }}
              ></span>
              <h2 className='ml-3 hover:text-white text-base'>{c}</h2>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex flex-col items-start">
          <div className="bg-zinc-200 w-3/4 max-w-xs h-full p-5">
            <button
              onClick={() => setMenuOpen(false)}
              className="mb-5 text-xl font-bold"
              aria-label="Close category menu"
            >
              &times;
            </button>
            <h1 className='text-2xl mb-3'>Category Filter</h1>
            <div>
              {distinct_category.map((c) => (
                <Link
                  key={c}
                  to={`/?category=${c}`}
                  className='flex items-center mb-3'
                  onClick={() => setMenuOpen(false)}
                >
                  <span
                    className='rounded-full mr-3 w-[15px] h-[15px]'
                    style={{ backgroundColor: color() }}
                  ></span>
                  <h2 className='ml-3 hover:text-white text-base'>{c}</h2>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Nav
