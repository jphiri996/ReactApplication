//import React from 'react';
//import logo from './logo.svg';
import homeStyles from '../styles/Home.module.css';
import movies from '../data/movies.json';
import Header from '../components/Header';

function Home() {
  return <>
          <Header/>
          <main className={homeStyles.main}>
            <div className={homeStyles.container}>
              {movies.map((movie) => (
              <div className={homeStyles.movie} key={movie.imdbID}>
                <img className={homeStyles.poster} src={movie.Images[1]} alt={movie.Title} />
                <div className={homeStyles.title}>{movie.Title}</div>
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
