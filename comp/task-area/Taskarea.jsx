import React, { useState } from 'react';
import Popup from '../popup/Popup';

const Taskarea = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='show-all-task min-w-lg relative'>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <button
        id='add-new-task'
        onClick={() => setShowPopup(true)}
        className='add-new-task  bg-[#238636] text-white flex justify-center items-center px-3 py-2 rounded-sm absolute bottom-10 right-5'
      >
        {' '}
        <i class='fa-solid fa-plus'></i> <p>Add New Task</p>
      </button>
    </div>
  );
};

export default Taskarea;
