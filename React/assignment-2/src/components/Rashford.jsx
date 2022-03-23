import React from 'react'
import styles from "./Card.module.css";

const Rashford = () => {
  return (
    <div className={styles.card}>
      <h3>Marcus Rashford</h3>
      <img src="/Manutd/RASHFORD.jpg" alt="Marcus Rashford" />
      <p>Striker</p>
      <p>4.2⭐</p>
      <p>England</p>
    </div>
  );
}

export default Rashford