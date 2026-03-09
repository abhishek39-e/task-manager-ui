import React from 'react';
// import './Nav.css';
const Nav = () => {
  const navcontent = ['Dashboard', 'Important', 'Completed', 'Do It now'];
  return (
    <div className='firstDiv min-w-48 flex justify-between items-center flex-col'>
      <h1 className='text-black flex justify-center my-3 text-5xl font-semibold'>
        TM
      </h1>
      <div className='task-nav-left'>
        {navcontent.map((content, index) => (
          <li className='capitalize list-none p-2' key={index}>
            {content}
          </li>
        ))}
      </div>
      <div className='h-10'></div>
    </div>
  );
};

export default Nav;
