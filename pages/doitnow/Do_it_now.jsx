import React, { useEffect, useState } from 'react';
import { api_data } from '../../js-logic/api_data';
const Do_it_now = () => {
  const [doItNow, setDoItNow] = useState([]);
  useEffect(() => {
    api_data().then((data) => setDoItNow(data));
  }, []);
  let runnigTask = doItNow.filter((task) => task.iscomplete == false);
  return (
    <div>
      {runnigTask.map((note) => (
        <div key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Do_it_now;
