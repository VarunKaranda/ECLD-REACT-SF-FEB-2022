import React from 'react'
import styles from "./Card.module.css";

const Degea = () => {
  return (
    <div className={styles.card}>
      <h3>David Degea</h3>
      <img src="/Manutd/DEGEA.jpg" alt="David Degea" />
      <p>Goal Keeper</p>
      <p>4.7⭐</p>
      <p>Spain</p>
    </div>
  );
}

export default Degea