import React from 'react';
const TaskNav = () => {
  const today = new Date();

  const formattedDate = today.toLocaleDateString();
  return (
    <div className='all-task-nav-container py-7 mb-5'>
      <div className='show-task-nav flex justify-around items-center'>
        <h1 className='text-3xl font-bold'>Today's Task</h1>
        <p>Date : {formattedDate}</p>
      </div>
    </div>
  );
};
export default TaskNav;
