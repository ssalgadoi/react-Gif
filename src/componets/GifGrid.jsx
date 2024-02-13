import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { getGif } from "../helpers/getGifs";




export const GifGrid = ( { category } ) => {

  const [ images, setImages ] = useState([]);

  const getImages = async() => {
    const newImages = await getGif ( category );
    setImages( newImages );
  }

  useEffect( () => {
    getImages(); 
  }, [])


  
  return (
    <>
    <h3>{ category }</h3>
    {/* Mostra la imagen */}
    <div className="card-grid">
      {
        // Desetructuramos
        images.map( ( img ) => (
          <GifItem 
            key={ img.id }
            { ...img }
          />
        ))
      }
    </div>
    </>
  )
}
