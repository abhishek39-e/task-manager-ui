import React, { useState } from 'react';

const Popup = ({ onClose }) => {
  const [formData, setFormData] = useState({ title: '', des: '' });
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div
      onClick={onClose}
      className='add-task-popup  fixed inset-0 bg-[#706f6fc7] bg-opacity-50 flex items-center justify-center z-50'
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-[#C9D1D9] hover:text-white text-2xl font-bold'
      >
        ✕
      </button>

      {/* Popup container */}
      <div
        className='popup-area bg-[#21262D] border border-[#30363D] rounded-lg p-8 w-96 shadow-lg z-3'
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          {/* Title input */}
          <div className='flex flex-col'>
            <label className='text-[#C9D1D9] text-sm font-semibold mb-2'>
              Task Title
            </label>
            <input
              type='text'
              name='title'
              onChange={handleChange}
              placeholder='Enter task title...'
              className='bg-[#0D1117] border border-[#30363D] text-[#C9D1D9] placeholder-[#484F58] px-3 py-2 rounded focus:outline-none focus:border-[#58A6FF] transition-colors'
            />
          </div>

          {/* Description input */}
          <div className='flex flex-col'>
            <label className='text-[#C9D1D9] text-sm font-semibold mb-2'>
              Description
            </label>
            <textarea
              name='des'
              onChange={handleChange}
              placeholder='Enter task description...'
              className='bg-[#0D1117] border border-[#30363D] text-[#C9D1D9] placeholder-[#484F58] px-3 py-2 rounded focus:outline-none focus:border-[#58A6FF] transition-colors resize-none h-24'
            />
          </div>
          {/* calendar */}
          <div className='flex justify-between'>
            <label className='text-[#C9D1D9]' for='start'>
              Select a Date:
            </label>
            <input
              type='date'
              id='start'
              onChange={handleChange}
              name='date'
              className='text-[#C9D1D9]'
            ></input>
          </div>
          {/* important */}
          <div className='flex justify-between'>
            <label className='text-[#C9D1D9]' for='imp'>
              Mark Important:
            </label>
            <input
              type='checkbox'
              id='imp'
              onChange={handleChange}
              name='imp'
              className='text-[#C9D1D9]'
            ></input>
          </div>

          {/* Buttons */}
          <div className='flex gap-2 mt-4'>
            <button
              type='submit'
              className='flex-1 bg-[#238636] hover:bg-[#2EA043] text-white font-semibold py-2 rounded transition-colors'
            >
              Add Task
            </button>
            <button
              type='button'
              onClick={onClose}
              className='flex-1 bg-[#21262D] border border-[#30363D] text-[#C9D1D9] hover:bg-[#161B22] font-semibold py-2 rounded transition-colors'
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
