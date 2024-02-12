import { useState } from "react";



export const GifApp = () => {

  // cuando queremos cambiar de informacion en el html
  // Trabajamos con los Hooks para mantener los estado
const [ categories, setCategories ] = useState( [ "0ne Punch", "Dragon Ball"] );

const onAddCategory = () => {
  setCategories([ ...categories, "Valorant"])
}

  return (
      <>
      {/* Titulo */}
      <h1>GifApp</h1>
      {/* Input */}

      {/* Listado Gif */}
      <button onClick={ onAddCategory }>Agregar</button>
      <ol>
        { categories.map( category => {
          return <li hey={ category }>{ category }</li>
        })
        }
        {/* <li>ABC</li> */}
      </ol>
      {/* Listado Item */}
      </>
  )
}
