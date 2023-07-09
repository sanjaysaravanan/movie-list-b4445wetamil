import React from 'react';

import styles from './header.module.css';


const Header = ({ title, wishCount }) => {
  return (
    <div className={styles.header}>
      <img
        className={styles.headerLogo}
        src="https://w7.pngwing.com/pngs/925/348/png-transparent-logo-online-and-offline-e-online-design-text-logo-online-and-offline.png"
        alt="logo"
      />
      <div>
        <input
          type='text'
          placeholder='Search for ...'
          className={styles.searchInput}
        />
        <button
          className={styles.searchBtn}
        >
          <i class="fa-solid fa-magnifying-glass" style={{ color: "#ffffff" }}></i>
        </button>
      </div>
      <button className={styles.wishList} title={title} >
        <i
          className="fa-solid fa-heart"
          style={{ color: '#ff0000' }}
        ></i>
        ({wishCount})
      </button>
    </div>
  );
}

export default Header;
