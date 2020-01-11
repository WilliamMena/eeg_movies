import React from 'react';
import './App.css';
import Movies from './containers/movies.js'
import CreateButton from './components/createButton.js';

function App() {
  return (
    <div className="App">
      <CreateButton />
      <Movies />
    </div>
  );
}

export default App;
