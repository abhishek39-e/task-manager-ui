import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Important from '../pages/important';
// import './Nav.css';
const Nav = () => {
  const router = createBrowserRouter([
    {
      path: '/complete',
      element: <Important />,
    },
  ]);
  const navcontent = ['dashboard', 'important', 'completed', 'do it now'];
  return (
    <div className='firstDiv min-w-48 flex justify-between items-center flex-col bg-[#161B22] text-white'>
      <h1 className='text-white flex justify-center my-3 text-5xl font-semibold'>
        TM
      </h1>
      <div className='task-nav-left'>
        {navcontent.map((content, index) => (
          <li
            id={content.trim().replace(/\s+/g, '-')}
            className='cursor-pointer capitalize list-none p-2'
            key={index}
          >
            {content}
          </li>
        ))}
      </div>
      <RouterProvider router={router} />
      <div className='h-10'></div>
    </div>
  );
};

export default Nav;
