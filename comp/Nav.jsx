import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className='firstDiv min-w-48 flex justify-between items-center flex-col bg-[#161B22] text-white'>
      <h1 className='text-white flex justify-center my-3 text-5xl font-semibold'>
        TM
      </h1>
      <div className='task-nav-left flex flex-col gap-3'>
        <Link to='/'>
          <span className='cursor-pointer capitalize list-none p-2'>
            dashboard
          </span>
        </Link>
        <Link to='/important'>
          <span className='cursor-pointer capitalize list-none p-2'>
            important
          </span>
        </Link>
        <Link to='/complete'>
          <span className='cursor-pointer capitalize list-none p-2'>
            completed
          </span>
        </Link>
        <Link to='/do-it-now'>
          <span className='cursor-pointer capitalize list-none p-2'>
            do it now
          </span>
        </Link>
      </div>
      <div className='h-10'></div>
    </div>
  );
};

export default Nav;
