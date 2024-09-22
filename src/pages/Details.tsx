import React, { useEffect, useState } from 'react';
import detailsStyles from '../styles/Details.module.css'; // Ensure the correct styles are imported
import Header from '../components/Header';
import movies from '../data/movies.json';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { detailId } = useParams<{ detailId: string }>();
  const [movie, setMovie] = useState<{ Title: string; Plot: string } | null>(null);

  useEffect(() => {
    const fetchRecord = () => {
      const fetchedRecord = movies.find(movie => movie.imdbID.toString() === detailId);
      setMovie(fetchedRecord || null);
    };

    fetchRecord();
  }, [detailId]);

 // if (!movie) {
    //return <div>Movie not found</div>;
 // }

  return (
    <>
      <Header />
      <main className={detailsStyles.main}>
        <div className={detailsStyles.container}>
          <div>
            <h2>{'Blog details of ' + movie?.Title}</h2>

            <div className={detailsStyles.detailsDescription}>
              {movie?.Plot}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
