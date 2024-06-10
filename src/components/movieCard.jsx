const imagebaseurl = "http://image.tmdb.org/t/p/original";

export function MovieCard({items}){
    

    return <div>
        <div className=" mt-2 h-[100px] w-[100px] md:h-[200px] md:w-[133px] rounded-3xl shadow-2xl hover:scale-110 transition-all duration-200">
        
                <img src={`${imagebaseurl}${items.poster_path}`}
                    className="h-[120px] w-[100px] md:h-[200px] md:w-[133px] rounded-lg hover:border-4  border-gray-300 hover:scale-200 transition-all duration-200 cursor-pointer">
                </img>
        </div>
        
    </div>


}