import React, { useEffect, useState } from 'react';
import { api_data } from '../../js-logic/api_data';

const Complete = () => {
  const [complete, setComplete] = useState([]);

  useEffect(() => {
    api_data().then((data) => setComplete(data));
  });
  let completeTasks = complete.filter((task) => task.iscomplete == true);
  return (
    <div>
      i'm complete
      {completeTasks.map((note) => (
        <div key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Complete;
