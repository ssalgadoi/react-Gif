import { useState } from "react";
import { AddCategory } from "./componets/AddCategory";




export const GifApp = () => {

  // cuando queremos cambiar de informacion en el html
  // Trabajamos con los Hooks para mantener los estado
const [ categories, setCategories ] = useState( [ "0ne Punch", "Dragon Ball"] );

// Esta fue una tarea de agregar una nueva categoria
const onAddCategory = () => {
  setCategories([ "Valorant",...categories])
}

  return (
      <>
      {/* Titulo */}
      <h1>GifApp</h1>
      {/* Input */}
      <AddCategory />

      {/* Listado Gif */}
      <button onClick={ onAddCategory }>Agregar</button>
      <ol>
        { categories.map( category => {
          return <li key={ category }>{ category }</li>
        })
        }
        {/* <li>ABC</li> */}
      </ol>
      {/* Listado Item */}
      </>
  )
}
