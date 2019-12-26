import React, { useState } from 'react';

const NewSongForm = () => {
  const [ title, setTitle ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input type="text" required onChange={(e) => setTitle(e.target.value) }/>
      <input type="submit" title='Add Song'/>
    </form>
  );
};

export default NewSongForm;
