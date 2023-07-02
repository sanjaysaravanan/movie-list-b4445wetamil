import React from 'react';

import styles from './ColorCard.module.css';

const ColorCard = ({ value, title, icon, color }) => {

  const getIcon = () => {
    if (icon === 'home') {
      return (<i className="fa-solid fa-house fa-2x" style={{ color: "#d6d6d6" }}></i>)
    }

    if (icon === 'dollar') {
      return (<i className="fa-solid fa-dollar-sign fa-2x" style={{ color: "#d6d6d6" }}></i>)
    }

    return (
      <i className="fa-solid fa-calendar fa-2x" style={{ color: "#d6d6d6" }}></i>
    )
  }


  return (
    <div className={styles.container}>
      <div>
        <h6 style={{ color: color, margin: 0 }}>{title}</h6>
        <h3 style={{ margin: 0 }}>{value}</h3>
      </div>
      <div style={{ margin: 16 }} >
        {getIcon()}
      </div>
    </div>
  );
};

export default ColorCard;
