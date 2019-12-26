import React, { useState, useEffect } from 'react';

import Songs from './components/Songs';
import './App.css';

function App() {
  const [ count, setCount ] = useState(0);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log('Calling to useEffect!');
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>Click me!</button>
      <hr/>
      <Songs/>
    </div>
  );
}

export default App;
