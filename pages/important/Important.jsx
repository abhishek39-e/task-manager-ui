import React from 'react';
import { useEffect, useState } from 'react';
import { api_data } from '../../js-logic/api_data';

const Important = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api_data().then((data) => setPosts(data));
  }, []);

  const importantPosts = posts.filter((post) => post.important === true);
  return (
    <div className='notes-areaa flex gap-10 flex-col items-center py-10 w-screen bg-[#0D1117] text-white'>
      {importantPosts.map((note) => (
        <div
          key={note._id}
          className='notes border border-[#30363D] rounded-sm max-w-100 min-w-100 px-5 py-4 flex gap-2 flex-col'
        >
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Important;
