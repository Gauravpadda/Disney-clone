import axios from 'axios';

const url = "https://api.themoviedb.org/3/movie/popular";
const apiKey = "2651c48cdbb4baab11cc0bd9c4f449f9";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2651c48cdbb4baab11cc0bd9c4f449f9';

const GetMovies =axios.get(`${url}?api_key=${apiKey}`)
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    GetMovies,
    getMovieByGenreId
}