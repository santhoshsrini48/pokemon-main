import React from "react";
import ImageComponent from "./ImageComponent";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import styles from '../Style/PokemonContainer.module.css';

const CardRow=({pokemonUrlList})=>{
  return (
      <div className={styles.row}>

        <ImageComponent pokemonUrl={pokemonUrlList}/>

      </div>
  );
}

export default CardRow;