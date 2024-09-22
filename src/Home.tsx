//import React from 'react';
//import logo from './logo.svg';
import './Home.css';
import movies from './data/movies.json';

function Home() {
  return <>
          <header className='header'>Movies App</header>
          <main className='main'>
            <div className='container'>
              {movies.map((movie) => (
              <div className='movie' key={movie.imdbID}>
                <img className='poster' src={movie.Images[1]} alt={movie.Title} />
                <div className='title'>{movie.Title}</div>
              </div>
              ))}
              {/*
              <ul className='movie-list'>
              {movies.map((movie) => (
                <li className='movie' key={movie.imdbID}>
                  <div className='title'>{movie.Title}</div>
                </li>
              ))}
            </ul>
            */}
            </div>

          </main>
  
  </>
}

export default Home;
