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
    <div className='notes-area flex'>
      {notes.map((note) => (
        <div key={note._id} className='notes border' id={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content.split(' ').slice(0, 5).join(' ')}...</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
