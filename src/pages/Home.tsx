//import React from 'react';
//import logo from './logo.svg';
import homeStyles from '../styles/Home.module.css';
import movies from '../data/movies.json';
import Header from '../components/Header';
import PostCard from '../components/PostCard';

function Home() {
  return <>
          <Header/>
          <main className={homeStyles.main}>
            <div className={homeStyles.container}>
              {movies.map((movie) => (
                <PostCard key={movie.imdbID} imdbID={movie.imdbID} Images={movie.Images} Title={movie.Title} />

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


