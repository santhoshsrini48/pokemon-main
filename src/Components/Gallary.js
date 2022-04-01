import React,{useContext} from "react";
import {useNavigate} from "react-router-dom";
import {routes} from "../Routes/routes";
import {savedImageDetailsContext} from "../Context/PokemonGallaryContext";
import {Button, Card} from "@mui/material";
import styles from "../Style/PokemonContainer.module.css";

const Gallary = () =>{

    const navigate = useNavigate();
  const {savedImages,pokemonUrlList } = useContext(savedImageDetailsContext);
  console.log("saved" +savedImages);
    const handleHomeClick = () =>{
        navigate(routes.home);
    }
    return (
        <div >
             <button onClick={()=>handleHomeClick()}>Home</button>
             <br/>
          <div className={styles.row}>
            Galary page !!!
            {savedImages.map((img,i)=>{
                return (

                    <div key={i}>
                      <Card  style={{width: 300, height: 300, padding: 20, margin: 10}}>
                        <h5>{img.name}</h5>
                        <img    src={img.image} alt={`pokemon-${i}`} key={i} width="200px" heigh="200px"/>
                        <div style={{}}>
                          <Button variant="contained" className={styles.button}>like</Button>
                          <Button variant="contained" style={{margin:"4px"}}>unlike</Button>
                        </div>
                      </Card>
                    </div>
                )
            })}
          </div>
        </div>
    )
}

export default Gallary;