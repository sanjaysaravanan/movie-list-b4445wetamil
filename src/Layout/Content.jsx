import React from 'react';

import styles from './content.module.css';
import MovieCard from '../Components/MovieCard/MovieCard';
import moviesData from './mvoies.json';
import DashboardCard from '../Components/DashboarCard/DashboardCard';
import ColorCard from '../Components/ColorCard/ColorCard';

const Content = ({ addToWishlist, removeFromWishlist }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 24
        }}
      >
        <h1 style={{ margin: 0 }}>Dashboard</h1>
        <button>Add New</button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 24
        }}
      >
        <ColorCard
          color={'blue'}
          title={"Earnings"}
          value={'$10000'}
          icon={'home'}
        />
        <ColorCard
          color={'green'}
          title={"Annual"}
          value={'$10000'}
          icon={'dollar'}
        />
        <ColorCard
          color={'yellow'}
          title={"Excercise"}
          value={'50%'}
          icon={'calendar'}
        />
      </div>
      <div className={styles.container} >
        {/* key prop is must while Listing rendering */}
        {moviesData.map((movie) => (
          <MovieCard
            title={movie.title}
            category={movie.category}
            image={movie.image}
            key={movie.id} // index should not be used for key
            addToWishlist={addToWishlist}
            removeFromWishlist={removeFromWishlist}
          />))}
      </div>
      <div
        style={{
          display: 'flex',
          padding: 24,
          flexWrap: 'wrap',
        }}
        className='container-fluid'
      >
        <DashboardCard
          title={'Earnings Overview'}
          width={'col-12 col-sm-12 col-md-4'}
        />
        <DashboardCard
          title={'Earnings Overview'}
          width={'col-12 col-sm-12 col-md-8'}
        />
      </div>
    </>
  );
}

export default Content;