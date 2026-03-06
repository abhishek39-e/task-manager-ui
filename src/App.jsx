// import { useState, useEffect } from 'react';
import './App.css';
import Nav from '../comp/Nav';
import Taskarea from '../comp/task-area/Taskarea';

function App() {
  return (
    <div className='maindiv flex'>
      <Nav />
      <Taskarea />
    </div>
  );
}

export default App;
