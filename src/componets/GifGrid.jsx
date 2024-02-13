import { useState, useEffect } from "react";
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
    <ol>
      {
        // Desetructuramos
        images.map( ( { id, title } ) => (
          <li key={ id }>{ title }</li>
        ))
      }
    </ol>
    </>
  )
}
