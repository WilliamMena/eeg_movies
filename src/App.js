import React from 'react';
import './App.css';
import './style.css';
import Movies from './containers/movies.js'
import Header from './components/header.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Movies />
    </div>
  );
}

export default App;
