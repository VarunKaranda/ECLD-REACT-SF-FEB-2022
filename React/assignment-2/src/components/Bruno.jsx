import React from "react";
import styles from "./Card.module.css";
const Bruno = () => {
  return (
    <div className={styles.card}>
      <h3>Bruno Fernandes</h3>
      <img src="/Manutd/BRUNO.jpg" alt="Bruno Fernandes" />
      <p>Attacking Midfielder</p>
      <p>4.4⭐</p>
      <p>Portugal</p>
    </div>
  );
};

export default Bruno;
