import React, { useState } from 'react';
import Popup from '../popup/Popup';
import Notes from '../notes/Notes';
import Calendar from '../calendar/NotesCalendar';
import Tasknav from '../tasknav/TaskNav';

const Taskarea = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='show-all-task min-w-lg relative bg-[#0D1117] text-white overflow-y-scroll w-full'>
      {/* task nav */}
      <Tasknav />

      <div className='main-container flex justify-around max-lg:flex-col max-lg:items-center'>
        {/* notes */}
        <div
          className='relative px-10 main border-0 border-white h-100 overflow-y-scroll overflow-x-hidden scrollbar-thin 
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-800
  [&::-webkit-scrollbar-thumb]:bg-gray-500
  [&::-webkit-scrollbar-thumb]:rounded-full
  hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 '
        >
          <div className='show-all-task-notes'>
            <Notes />
          </div>

          {showPopup && <Popup onClose={() => setShowPopup(false)} />}
          <button
            id='add-new-task'
            onClick={() => setShowPopup(true)}
            className='add-new-task  bg-[#238636] text-white flex justify-center items-center px-3 py-2 rounded-sm sticky bottom-10 left-99'
          >
            {' '}
            <i class='fa-solid fa-plus'></i> <p>Add New Task</p>
          </button>
        </div>
        <Calendar />
      </div>
    </div>
  );
};

export default Taskarea;
