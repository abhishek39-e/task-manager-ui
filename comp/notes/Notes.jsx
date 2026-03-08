import React, { useEffect, useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('https://task-mannager-api.vercel.app/api/snotes')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNotes(data);
      });
  }, []);

  return (
    <div className='notes-area flex gap-10 flex-col items-center py-10'>
      {notes.map((note) => (
        <div
          key={note._id}
          className='notes border border-[#30363D] rounded-sm max-w-100 min-w-100 px-5 py-4 flex gap-2 flex-col'
          id={note._id}
        >
          <h3 className='taxt-white'>{note.title}</h3>
          <p className='taxt-white'>
            {note.content.split(' ').slice(0, 5).join(' ')}...
          </p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
