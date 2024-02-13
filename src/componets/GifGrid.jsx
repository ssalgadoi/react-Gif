import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ( { category } ) => {

  const { images, isLoading  } = useFetchGifs( category );
  
  return (
    <>
    <h3>{ category }</h3>
    {
      isLoading && ( <h2 className=""></h2> )
    }
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
