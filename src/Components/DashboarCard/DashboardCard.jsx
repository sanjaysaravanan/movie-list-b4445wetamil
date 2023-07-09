import React from 'react';

import styles from './dashboardcard.module.css';
const DashboardCard = ({ title, width, isAction, children, innerHtml }) => {
  return (
    <div className={width} >
      <div className={`${styles.container}`}>
        <div className={styles.header} >
          {title}
        </div>
        <div
          style={{
            padding: '16px'
          }}
        >
          {innerHtml !== undefined && innerHtml}
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
