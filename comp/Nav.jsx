import React from 'react';
// import './Nav.css';
const Nav = () => {
  return (
    <div className='firstDiv min-w-48'>
      <h1 className='text-black flex justify-center my-3 text-5xl font-semibold'>
        TM
      </h1>
      <div className='task-nav-left'>
        <p>Dashboard</p>
        <p>All Tasks</p>
        <p>projects</p>
        <p>Calendar</p>
      </div>
    </div>
  );
};

export default Nav;
