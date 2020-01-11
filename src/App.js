import React from 'react';
import './App.css';
import Movies from './containers/movies.js'
import CreateMovie from './components/createMovie.js';

function App() {
  return (
    <div className="App">
      <CreateMovie />
      <Movies />
    </div>
  );
}

export default App;
