import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGifs";



export const GifGrid = ( { category } ) => {

  const [ counter, setCounter] = useState(10);
  useEffect( () => {
    getGif( category );
  }, [ ])

  getGif( category );
  
  return (
    <>
    <h3>{ category }</h3>
    <h5>{ counter }</h5>
    <button onClick={ () => setCounter( counter + 1) }>+1</button>
    </>
  )
}
