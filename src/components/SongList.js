import React, { useState } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from "./NewSongForm";

const Songs = () => {
  const [ songs, setSongs ] = useState([
    { title: 'Macarena', id:1 },
    { title: 'Let her go', id:2 },
    { title: 'You are beautiful', id: 3 }
  ]);

  const addSong = title => {
    console.log('Inside Add Song::', title);
    setSongs([...songs, { title: title, id: uuid() }]);
  };

  return (
    <div>
      <ul>
        { songs.map(song => {
          return (<li key={song.id}>{song.title}</li>);
        })}
      </ul>
      <NewSongForm addSong={addSong}/>
    </div>
  );
};

export default Songs;
