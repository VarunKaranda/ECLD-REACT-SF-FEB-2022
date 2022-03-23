import React from 'react'
import styles from "./Card.module.css";

const Pogba = () => {
  return (
    <div className={styles.card}>
      <h3>Paul Pogba</h3>
      <img src="/Manutd/POGBA.jpg" alt="Paul Pogba" />
      <p>Attacking Midfielder</p>
      <p>4.5⭐</p>
      <p>France</p>
    </div>
  );
}

export default Pogba