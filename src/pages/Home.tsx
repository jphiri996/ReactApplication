//import React from 'react';
//import logo from './logo.svg';
import homeStyles from '../styles/Home.module.css';
import movies from '../data/movies.json';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

function Home() {
  return <>
          <Header/>
          <main className={homeStyles.main}>
            <div className={homeStyles.container}>
              {movies.map((movie) => (
                <Link to={'/details/${movie.imdbID}'}>
                <PostCard key={movie.imdbID} imdbID={movie.imdbID} Images={movie.Images} Title={movie.Title} />
                </Link>

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


