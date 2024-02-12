import { useState } from "react";



export const GifApp = () => {

  // cuando queremos cambiar de informacion en el html
  // Trabajamos con los Hooks para mantener los estado
const [ categories, setCategories ] = useState( [ "0ne Punch", "Dragon Ball"] );

console.log(categories);

  return (
      <>
      {/* Titulo */}
      <h1>GifApp</h1>
      {/* Input */}

      {/* Listado Gif */}
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
