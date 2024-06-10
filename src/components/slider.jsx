import { useEffect, useRef, useState } from "react";
import globalapi from "../sources/globalapi";

const imagebaseurl = "http://image.tmdb.org/t/p/original";
const windowSize = window.innerWidth;

export function Slider() {
  const [movies, setMovies] = useState([]);
  const element = useRef(null);

  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    return globalapi.GetMovies.then((res) => {
      setMovies(res.data.results);
    });
  }

  function scrollLeft() {
    if (element.current) {
      element.current.scrollLeft -= windowSize - 133;
    }
  }

  function scrollRight() {
    if (element.current) {
      element.current.scrollLeft += windowSize - 133;
    }
  }

  return (
    <div className="relative w-full h-fit md:h-[550px]">
      <div className="flex overflow-x-auto w-full h-fit scrollbar-hide scroll-smooth min-w-full md:h-[550px] " ref={element}>
        {movies.map((eachMovie, index) => (
          <img
            key={index}
            src={`${imagebaseurl}${eachMovie.backdrop_path}`}
            className="min-w-full h-1/2 md:h-[550px] mr-3 mt-0 ml-0 object-cover object-left-top rounded-b-2xl hover:border-4 hover:border-gray-300"
            alt={`Movie ${index}`}
          />
        ))}
      </div>
     <svg
        xmlns="http://www.w3.org/2000/svg"
         fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="hidden md:block size-9 absolute text-white right-0 top-[40%] transform -translate-y-1/2 cursor-pointer mr-4"
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
        className="hidden md:block size-9 absolute text-white left-0 top-[40%] transform -translate-y-1/2 cursor-pointer ml-4"
        onClick={scrollLeft}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </div>
  );
}
