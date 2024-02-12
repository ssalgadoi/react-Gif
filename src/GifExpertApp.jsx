import { useState } from "react";
import { AddCategory } from "./componets/AddCategory";
import { GifGrid } from "./componets/GifGrid";




export const GifApp = () => {

  // cuando queremos cambiar de informacion en el html
  // Trabajamos con los Hooks para mantener los estado
const [ categories, setCategories ] = useState( [ "0ne Punch" ] );

// Esta fue una tarea de agregar una nueva categoria
const onAddCategory = ( newCategory ) => {
  console.log(newCategory);
  if ( categories.includes( newCategory ) ) return;  
  setCategories( [ newCategory,...categories ] )
}

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory  
        onNewCategory={ ( value ) => onAddCategory( value ) }
      />
        { categories.map( ( category )  => 
          (
            <GifGrid 
            key={ category }
            category={ category } />
          ))
        }
      </>
  )     
}
