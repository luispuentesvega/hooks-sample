import React, {useEffect, useState} from 'react';
import uuid from 'uuid/v1';
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [ songs, setSongs ] = useState([
    { title: 'Macarena', id:1 },
    { title: 'Let her go', id:2 },
    { title: 'You are beautiful', id: 3 }
  ]);
  const [ age, setAge ] = useState(20);

  const addSong = title => {
    console.log('Inside Add Song::', title);
    setSongs([...songs, { title: title, id: uuid() }]);
  };

  // It will be executed every time the component change, when the songs array changes
  useEffect(() => {
    console.log('UseEffect hook ran, SONGS', songs);
  }, [songs]);

  useEffect(() => {
    console.log('UseEffect hook ran, AGES', age);
  }, [age]);

  return (
    <div>
      <h1>UseState</h1>
      <ul>
        { songs.map(song => {
          return (<li key={song.id}>{song.title}</li>);
        })}
      </ul>
      <NewSongForm addSong={addSong}/>
      <hr/>
      <h1>UseEffect:</h1>
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
