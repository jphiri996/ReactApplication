import React from 'react';
import detailsStyles from '../styles/Details.module.css'; // Ensure the correct styles are imported
//import Header from './Header'; // Ensure Header is imported
import homeStyles from '../styles/Home.module.css';
import movies from '../data/movies.json';
import Header from '../components/Header';
import PostCard from '../components/PostCard';


export default function Details() {
  return (
    <>
      <Header />
      <main className={detailsStyles.main}> {}
        <div className={detailsStyles.container}> {}
          <div>
            <h2> The title goes here</h2>
            <img 
              src='https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg' 
              alt="Movie Detail" // 
            />
            <div className={detailsStyles.detailsDescription}>
              Here is my details text
            </div>
          </div> {/* Close the div here */}
        </div>
      </main>
    </>
  );
}
