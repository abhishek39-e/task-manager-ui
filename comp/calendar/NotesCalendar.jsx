import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './NotesCalendar.css';

const NotesCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className='notes-calender'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
};

export default NotesCalendar;
