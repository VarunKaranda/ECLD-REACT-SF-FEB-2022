import React from 'react'
import styles from "./Card.module.css";

const Sancho = () => {
  return (
    <div className={styles.card}>
      <h3>Jadon Sancho</h3>
      <img src="/Manutd/SANCHO.jpg" alt="Jadon Sancho" />
      <p>Left Winger</p>
      <p>4.4⭐</p>
      <p>England</p>
    </div>
  );
}

export default Sancho