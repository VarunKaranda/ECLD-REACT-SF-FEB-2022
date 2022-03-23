import React from 'react'
import styles from "./Card.module.css";

const Maguire = () => {
  return (
    <div className={styles.card}>
      <h3>Harry Maguire</h3>
      <img src="/Manutd/MAGUIRE.jpg" alt="Harry Maguire" />
      <p>Central Back</p>
      <p>4.2⭐</p>
      <p>England</p>
    </div>
  );
}

export default Maguire