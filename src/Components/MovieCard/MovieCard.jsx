import React, { useState } from 'react';

import styles from './moviecard.module.css';


// Props
/**
 * title - string
 * image - string
 * category - string
 */

const MovieCard = ({ title, image, category, addToWishlist, removeFromWishlist }) => {

  // Props ---> title, image, category

  const [wished, setWished] = useState(false);

  const handleWished = () => {
    if (wished) {
      setWished(false);
      removeFromWishlist(title);
    } else {
      addToWishlist(title);
      setWished(true);
    }
  }

  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.movieImage} />
      <h2>{title}</h2>
      <p>{category}</p>
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