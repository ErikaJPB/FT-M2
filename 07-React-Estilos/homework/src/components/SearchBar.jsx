import React from 'react';
import styles from '../styles/SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
  
  <div className={styles.Container}>
    <input type="text" placeholder="Location..."/>

    <button className={styles.btn} onClick={()=>props.onSearch("Buscando Ciudad")}>Search</button>
    

  </div>)
};