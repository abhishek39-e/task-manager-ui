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
    <div>
      hey i'm important
      {importantPosts.map((note) => (
        <div key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Important;
