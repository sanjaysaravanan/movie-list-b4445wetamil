import React from 'react';

import styles from './content.module.css';
import MovieCard from '../Components/MovieCard/MovieCard';
import moviesData from './mvoies.json';
import DashboardCard from '../Components/DashboarCard/DashboardCard';
import ColorCard from '../Components/ColorCard/ColorCard';
import LineChart from '../Components/Charts/Line';
import DoughnutChart from '../Components/Charts/Doughnut';

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
          icon={<i className="fa-solid fa-house fa-2x" style={{ color: "#d6d6d6" }}></i>}
        />
        <ColorCard
          color={'green'}
          title={"Annual"}
          value={'$10000'}
          icon={<i className="fa-solid fa-dollar-sign fa-2x" style={{ color: "#d6d6d6" }}></i>}
        />
        <ColorCard
          color={'yellow'}
          title={"Excercise"}
          value={'50%'}
          icon={<i className="fa-solid fa-calendar fa-2x" style={{ color: "#d6d6d6" }}></i>}
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
          width={'col-12 col-sm-12 col-md-8'}
        >
          <LineChart />
        </DashboardCard>
        <DashboardCard
          title={'Revenuse Sources'}
          width={'col-12 col-sm-12 col-md-4'}
          innerHtml={<DoughnutChart />}
        />
        <DashboardCard
          title={'Development Approach'}
          width={'col-12 col-sm-12 col-md-4'}
        >
          <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
            CSS bloat and poor page performance. Custom CSS classes are used to create
            custom components and custom utility classes.</p>
          <p class="mb-0">Before working with this theme, you should become familiar with the
            Bootstrap framework, especially the utility classes.</p>
        </DashboardCard>
      </div>
    </>
  );
}

export default Content;