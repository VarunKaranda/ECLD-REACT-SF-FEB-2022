import React from 'react'
import styles from "./Card.module.css";
;

const Players = (props) => {
  return (
      <div className={styles.card}>
      <h3>{props.name}</h3>
      <img src={props.src} alt={props.alt} />
      <p>{props.position}</p>
      <p>{props.rating}</p>
      <p>{props.country}</p>
    </div>
  );
}

export default Players
