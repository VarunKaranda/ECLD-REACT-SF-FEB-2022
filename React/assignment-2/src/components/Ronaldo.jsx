import React from 'react'
import styles from "./Card.module.css";

const Ronaldo = () => {
  return (
    <div className={styles.card}>
      <h3>Cristiano Ronaldo</h3>
      <img src="/Manutd/CR7.jpg" alt="Cristiano Ronaldo" />
      <p>Central Forward</p>
      <p>4.8⭐</p>
      <p>Portugal</p>
    </div>
  );
}

export default Ronaldo