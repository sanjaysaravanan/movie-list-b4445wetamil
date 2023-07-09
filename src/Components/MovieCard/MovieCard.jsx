import React, { useState } from 'react';

import styles from './moviecard.module.css';


// Props
/**
 * title - string
 * image - string
 * category - string
 */

const MovieCard = ({ movie, removeFromWishlist, addToWishlist }) => {

  // Props ---> title, image, category

  const [wished, setWished] = useState(false);

  const handleWished = () => {
    if (wished) {
      setWished(false);
      removeFromWishlist(movie);
    } else {
      setWished(true);
      addToWishlist(movie);
    }
  }

  return (
    <div className={styles.container}>
      <img src={movie.image} alt={movie.title} className={styles.movieImage} />
      <h2>{movie.title}</h2>
      <p>{movie.category}</p>
      <button className={styles.button} onClick={() => handleWished()}>
        <i
          className={`${wished ? 'fa-solid' : 'fa-regular'} fa-heart`}
          style={{ color: '#ff0000' }}
        ></i>
        &nbsp;
        Add
      </button>
    </div>
  );
}

export default MovieCard;