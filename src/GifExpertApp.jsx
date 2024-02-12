import { useState } from "react";
import { AddCategory } from "./componets/AddCategory";




export const GifApp = () => {

  // cuando queremos cambiar de informacion en el html
  // Trabajamos con los Hooks para mantener los estado
const [ categories, setCategories ] = useState( [ "0ne Punch" ] );

// Esta fue una tarea de agregar una nueva categoria
const onAddCategory = ( newCategory ) => {
  setCategories( [ newCategory,...categories ] )
}

  return (
      <>
      {/* Titulo */}
      <h1>GifApp</h1>
      {/* Input */}
      <AddCategory  
        onNewCategory={ ( value ) => onAddCategory( value ) }
      // setCategories={ setCategories }: esta es la forma original de mostrar las funciones
      />

      {/* Listado Gif */}
      
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
