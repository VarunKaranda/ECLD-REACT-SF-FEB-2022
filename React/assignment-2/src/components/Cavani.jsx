import React from 'react'
import styles from "./Card.module.css";

const Cavani = () => {
  return (
    <div className={styles.card}>
      <h3>Edinson Cavani</h3>
      <img src="/Manutd/CAVANI.jpg" alt="Edinson Cavani" />
      <p>Central Forward</p>
      <p>4.6⭐</p>
      <p>Uruguay</p>
    </div>
  );
}

export default Cavani