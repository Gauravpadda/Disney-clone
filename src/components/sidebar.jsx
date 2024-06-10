import { useState } from "react";
import { Slider } from "./slider";
import { GeneraList } from "./generalist";

export function Sidebar() {
    const [isHovered, setHover] = useState(false);

    return (
        <div className="flex w-full h-screen">
            {/* sidebar */}
            <div
                className={`${isHovered ? 'w-44' : 'w-32'} ${isHovered ? 'bg-opacity-50' : 'bg-opacity-100'} duration-300 `}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                


                <div className="pt-8 pl-2 relative">
                    <img src="/logo.png" className="hover:scale-110" alt="Logo" />
                </div>
                <div className="mt-14 pt-5 pl-3">
                    <img src="/image.png" className="size-6 hover:scale-110" alt="Icon" />
                </div>
                {/* search */}
                <div className="mt-7 pt-2 pl-3 flex items-center cursor-pointer hover:scale-110">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"   
                        stroke="currentColor"
                        className="size-6 text-gray-300 pt-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                    <h1
                        className={`text-gray-300 pb-7 pt-4 mb-3 text-lg pl-3 h-6 transition-transform duration-200 ${
                            !isHovered ? 'transform scale-0' : 'transform scale-100' 
                        } `}
                    >
                        Search
                    </h1>
                </div>
                {/* home */}
                <div className="mt-3 pt-0 pl-3 flex items-center cursor-pointer hover:scale-110">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 text-gray-300 pt-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                    <h1
                        className={`text-gray-300 pb-7 pt-4 mb-3 text-lg pl-3 h-6 transition-transform duration-200 ${
                            !isHovered ? 'transform scale-0' : 'transform scale-100'
                        }`}
                    >
                        Home
                    </h1>
                </div>
                {/* TV */}
                <div className="mt-3 pt-0 pl-3 flex items-center cursor-pointer hover:scale-110">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-gray-300 pt-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                        />
                    </svg>
                    <h1
                        className={`text-gray-300 pb-7 pt-4 mb-3 text-lg pl-3 h-6 transition-transform duration-200 ${
                            !isHovered ? 'transform scale-0' : 'transform scale-100'
                        }`}
                    >
                        TV
                    </h1>
                </div>
                {/* Movies */}
                <div className="mt-3 pt-0 pl-3 flex items-center cursor-pointer hover:scale-110">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 text-gray-300 pt-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                    </svg>
                    <h1
                        className={`text-gray-300 pb-7 pt-4 mb-3 text-lg pl-3 h-6 transition-transform duration-200 ${
                            !isHovered ? 'transform scale-0' : 'transform scale-100'
                        }`}
                    >
                        Movies
                    </h1>
                </div>
                {/* Sports */}
                <div className="mt-3 pt-0 pl-3 flex items-center cursor-pointer hover:scale-110">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 text-gray-300 pt-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                    </svg>
                    <h1
                        className={`text-gray-300 pb-7 pt-4 mb-3 text-lg pl-3 h-6 transition-transform duration-200 ${
                            !isHovered ? 'transform scale-0' : 'transform scale-100'
                        }`}
                    >
                        Sports
                    </h1>
                </div>
                {/* Categories */}
                <div className="mt-3 pt-0 pl-3 flex items-center cursor-pointer hover:scale-110">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 text-gray-300 pt-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                        />
                    </svg>
                    <h1
                        className={`text-gray-300 pb-7 pt-4 mb-3 text-lg pl-3 h-6 transition-transform duration-200 ${
                            !isHovered ? 'transform scale-0' : 'transform scale-100'
                        }`}
                    >
                        Categories
                    </h1>
                </div>
            </div>

            {/* main content */}
            <div className={`overflow-y-auto flex-grow ${isHovered ? 'basis-10/12' : 'basis-1/2'} duration-300`}>

                <Slider></Slider>
                <GeneraList/>
            </div>
        </div>
    );
}
