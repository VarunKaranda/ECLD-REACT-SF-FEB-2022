import React from 'react'
import styles from "./Card.module.css";

const Lindelof = () => {
  return (
    <div className={styles.card}>
      <h3>Victor Lindelof</h3>
      <img src="/Manutd/LINDELOF.jpg" alt="Victor Lindelof" />
      <p>Central Back</p>
      <p>4.2⭐</p>
      <p>Sweden</p>
    </div>
  );
}

export default Lindelof