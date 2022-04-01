import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {routes} from "../Routes/routes";
import CardRow from "./CardRow";
import {savedImageDetailsContext} from "../Context/PokemonGallaryContext";


const Home = () =>{
  const {savedImages,pokemonUrlList } =useContext(savedImageDetailsContext);
    const navigate = useNavigate();

    const handleGallaryClick = () =>{
        navigate(routes.gallary);
    }



    return (
        <div>
            <button onClick={()=>handleGallaryClick()}>Gallary</button>
            <br/>
            Home page!!!
            <div>
                <CardRow pokemonUrlList={pokemonUrlList}/>
            </div>
        </div>
    )
}

export default Home;