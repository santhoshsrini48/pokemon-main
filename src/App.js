import React, {Fragment, useEffect, useState} from "react";
import {Route,Routes} from "react-router-dom";
import Gallary from "./Components/Gallary";
import Home from "./Components/Home";
import {routes} from "./Routes/routes";
import {savedImageDetailsContext} from "./Context/PokemonGallaryContext";
import styles from './Style/PokemonContainer.module.css';


const App = () => {

  let savedImages = [];
  const [newPokemonUrlList,setPokemonUrlList] = useState([]);

let url = "https://pokeapi.co/api/v2/pokemon?limit=100";
  useEffect(()=>{
    const fetchData = async () =>{
      await fetch(url)
      .then(response => response.json())
      .then((data) => {
        setPokemonUrlList(data.results);
      })
    }

    fetchData();
  },[url]);

  let pokemonUrlList = [...newPokemonUrlList];
  return (

    <Fragment>
      <div className={styles.pokeContainer}>

        <h1>Welcome to pokemon page!!!</h1>
        <savedImageDetailsContext.Provider value={{savedImages,pokemonUrlList}}>
          <div className={styles.pokeContainer}>
            <Routes>
              <Route exact path={routes.home} element={<Home />}/>
              <Route path={routes.gallary} element={<Gallary/>}/>
            </Routes>
          </div>
        </savedImageDetailsContext.Provider>
      </div>
    </Fragment>
  );
}

export default App;
