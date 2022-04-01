import React, {useContext, useEffect} from "react";
import {savedImageDetailsContext} from "../Context/PokemonGallaryContext";
import {Button, Card} from '@mui/material';
import styles from '../Style/PokemonContainer.module.css';

const ImageComponent = ({pokemonUrl}) => {
    const [images, setImages] = React.useState([])
  const {savedImages,pokemonUrlList } = useContext(savedImageDetailsContext);
  
    const handleSave = (img) =>{
        savedImages.push(img);
       let temp = images.filter((ele) => {return ele.name != img.name});
      let tempUrl = pokemonUrl.filter((ele) => {return ele.name != img.name});
       setImages(temp);
       pokemonUrl = tempUrl;
    }

    useEffect(() => {
      async function getImage (url) {
        let jsonRes;
        try {
            const res = await fetch(url);
            jsonRes = await res.json();
            let result = {
                "name" : jsonRes.species.name,
                "image" : jsonRes.sprites.front_default
            }
          return result;
        } catch (err) {
            console.log("error occured");
            console.log(err);
            return null
        }
        
      }
      async function getImages () {
        const imageArray = []
        for (const pokemon of pokemonUrl) {
          imageArray.push(await getImage(pokemon.url))
        }
        setImages(imageArray)
      }
  
      getImages()
    }, [pokemonUrl])
  
    return images.map((img, i) => {
      return (



      <div key={i}>
            <Card  style={{width: 300, height: 300, padding: 20, margin: 10}}>
              <h5>{img.name}</h5>
              <img    src={img.image} alt={`pokemon-${i}`} key={i} width="200px" heigh="200px"/>
              <div style={{}}>
                <Button variant="contained"  onClick={()=>handleSave(img)} className={styles.button}>like</Button>
                <Button variant="contained" style={{margin:"4px"}}>unlike</Button>
              </div>
            </Card>
          </div>
      )
    })
  }

  export default ImageComponent;