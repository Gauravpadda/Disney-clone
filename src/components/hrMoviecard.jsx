const imagebaseurl = "http://image.tmdb.org/t/p/original";
export function HrMovieCard({items}){
    return <div>
        <div className=" mt-2 h-[100px] w-[250px] md:h-[200px] md:w-[333px] rounded-3xl shadow-2xl hover:scale-110 transition-all duration-200">
        
                <img src={`${imagebaseurl}${items.backdrop_path}`}
                    className="h-[100px] w-[250px] md:h-[200px] md:w-[333px] rounded-lg hover:border-4  border-gray-300  transition-all duration-200 cursor-pointer">
                </img>
                <h2 className="text-white">{items.title}</h2>
        </div>
        
    </div>
}