import React from 'react'
import styles from "./Card.module.css";

const Greenwood = () => {
  return (
    <div className={styles.card}>
      <h3>Mason Greenwood</h3>
      <img src="/Manutd/MGW.jpg" alt="Mason Greenwood" />
      <p>Right Winger</p>
      <p>4.1⭐</p>
      <p>England</p>
    </div>
  );
}

export default Greenwood