
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#fafafa] border-black px-6 fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-[#008000] text-lg font-bold mr-12">Tekamp</Link>
            <div className="hidden md:block ml-[18rem]">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-black hover:text-[#fff] hover:bg-[#008000] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/about" className="text-black hover:text-[#fff] hover:bg-[#008000] px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/Courses" className="text-black hover:text-[#fff] hover:bg-[#008000] px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
                <Link to="/Blog" className="text-black hover:text-[#fff] hover:bg-[#008000] px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                <div className='pl-[10rem]'>
                  <Link to="/Login" className="text-black hover:text-[#008000] px-3 py-2 rounded-md text-sm font-medium">Log in</Link>
                  <Link to="/Signup"><button className='bg-[#008000] w-[5rem] h-[3rem] text-center text-white font-bold'>Sign up</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} type="button" className="text-black hover:text-gray-300 focus:outline-none focus:text-gray-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={isOpen ? 'block md:hidden' : 'hidden'}>
        <div className="bg-[#008000] px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
          <Link to="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
          <div className='pl-1'>
                  <Link to="/Login" className="text-white hover:text-[#008000] px-3 py-2 rounded-md text-sm font-bold">Log in</Link>
                  <Link to="/Signup"><button className='bg-white w-[5rem] h-[3rem] text-center text-black font-bold'>Sign up</button></Link>
          </div>
          {/* Add other links here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





