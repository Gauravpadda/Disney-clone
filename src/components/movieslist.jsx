import { useEffect, useRef, useState } from "react"
import globalapi from "../sources/globalapi"
import { MovieCard } from "./movieCard";
import { HrMovieCard } from "./hrMoviecard";
const windowSize = window.innerWidth;
export function MovieList({generaid,index}){
    const [moviesbyid,setMoviesbyid]=useState([])
    useEffect(()=>{
    getmoviesbyid()
},[])
    const element=useRef(null);
    function getmoviesbyid(){
        globalapi.getMovieByGenreId(generaid).then((res)=>{
            setMoviesbyid(res.data.results)

        })
    }
    function scrollLeft() {
        if (element.current) {
          element.current.scrollLeft -= windowSize - 500;
        }
      }
    
      function scrollRight() {
        if (element.current) {
          element.current.scrollLeft += windowSize - 500;
        }
      }


    return <div className="relative h-1/12 md:h-[250px]">
        <div className=" flex overflow-x-auto scrollbar-hide scroll-smooth gap-2 w-full m-0" ref={element}>
        {moviesbyid.map((items,ind)=>{
          return <div className=" h-[150px] md:h-[250px] pt-2 pl-4 pr-2 pb-11 m-0">
                    
                  {index%3==0 ?<HrMovieCard items={items} />:<MovieCard items={items} />}
                </div>
        })}
                    
                    

        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"                        
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="hidden md:block size-9 absolute text-white right-0 top-[40%] transform -translate-y-1/2 cursor-pointer mr-6 mt-5"
            onClick={scrollRight}
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="hidden md:block size-9 absolute text-white left-0 top-[40%] transform -translate-y-1/2 cursor-pointer ml-4 mt-5"
            onClick={scrollLeft}
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    </div>
}