import generaList from "../sources/generaList";
import { MovieList } from "./movieslist";

export function GeneraList(){
    function generas(){
        
    }

    return <div>
        {generaList.genere.map((item,index)=>index<=8&&(
            
            <div key={index} className=" mb-3 h-1/12 md:h-1/2 ">
                <h1 className="text-gray-300">{item.name}</h1>
                <MovieList generaid={item.id} index={index}></MovieList>
            
            </div>
        ))}
    </div>
}