import { useState } from "react"
// onNewCategory

export const AddCategory = ( { onNewCategory } ) => {

  const [ inputValue, setInputValue ] =  useState("");

  const onInputChange = ( { target } ) => {
    setInputValue( target.value )
  }
  const onSubmit = ( event ) => {
    event.preventDefault();
// El método trim() en JavaScript se utiliza para eliminar los 
// espacios en blanco al principio y al final de una cadena de texto.
    if ( inputValue.trim().length <= 1 ) return// Esta cadena completa evalua si hay mas de una letra recien puede guardar
    onNewCategory( inputValue.trim() );
    setInputValue("");
  }

  
  return (
    <form onSubmit={ onSubmit }>
      <input
      type="text"
      placeholder="Buscar gifs" 
      value={ inputValue }
      onChange={ onInputChange }
    />
    </form>
  )
}
