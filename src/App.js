import React from 'react';
import './App.css';
import MovieAppHeader from './components/MovieAppHeader';
import MovieList from './components/MovieList';


function App() {
  return (
    <div className="movie-app">
      <MovieAppHeader/>
      <MovieList />
     
    </div>
  );
}

export default App;
