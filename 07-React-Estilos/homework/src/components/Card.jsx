import React from "react";
import styles from '../styles/Card.module.css'


class Card extends React.Component {
  render() {
    const { max, min, name, img, onClose } = this.props;
    return (
      <div className={styles.card}>
        <button onClick={onClose} className={styles.btn}>X</button>
        <h2>{name}</h2>
        <div className={styles.secondDiv}>
          <div>
          <h5>Min</h5>
          <p>{min}</p> 
          </div>
          <div>  
          <h5>Max</h5>
          <p>{max}</p>
          </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img" />
      </div>
      </div>
    );
  }
}

export default Card;