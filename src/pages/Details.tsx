import React, { useEffect, useState } from 'react';
import detailsStyles from '../styles/Details.module.css'; // Ensure the correct styles are imported
//import Header from './Header'; // Ensure Header is imported
import homeStyles from '../styles/Home.module.css';
import movies from '../data/movies.json';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import { useParams } from 'react-router-dom';


export default function Details() {
  const { detailId } = useParams<{detailId: string}>();
  const [movie, setmMovie] = useState<{Title: string; Plot: string} | null>(null);

  useEffect(() => {
    const fetchRecord = () => {
      const fetchedRecord=movies.find(movies => movies.imdbID.toString() === detailId)
      setmMovie(fetchedRecord || null);
    };

    fetchRecord();
  }, [detailId]);

  if(!movie) {
    return <div> Movie not found</div>;
 }

  return (
    <>
      <Header />
      <main className={detailsStyles.main}> {}
        <div className={detailsStyles.container}> {}
          <div>
            <h2> {movie.Title}</h2>
            <img 
              src='https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg' 
              alt="Movie Detail" // 
            />
            <div className={detailsStyles.detailsDescription}>
              {movie.Plot}
            </div>
          </div> {/* Close the div here */}
        </div>
      </main>
    </>
  );
}
