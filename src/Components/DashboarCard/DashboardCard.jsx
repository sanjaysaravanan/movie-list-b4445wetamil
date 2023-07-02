import React from 'react';

import styles from './dashboardcard.module.css';

const DashboardCard = ({ title, width, isAction }) => {
  return (
    <div className={width} >
      <div className={`${styles.container}`}>
        <div className={styles.header} >
          {title}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
