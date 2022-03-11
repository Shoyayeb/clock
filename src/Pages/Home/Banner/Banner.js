import React from 'react';
import { HashLink } from 'react-router-hash-link';
import bannerImage from '../../../Assets/banner.png';
const Banner = () => {
    return (
        <div id="home" className="bg-white items-center overflow-hidden">
            <div className="sm:container mx-auto px-6 sm:flex sm:flex-row flex-col py-16">
                <div className="sm:w-2/3 lg:w-3/6 flex flex-col">
                    <span className="w-20 h-2 bg-gray-800 md:mb-12"></span>
                    <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none  text-gray-800">
                        Time Matters
                        <span className="text-5xl sm:text-5xl">More than ever</span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-700 ">
                        Discover watches you've never seen before. O'Clock offers the most unique and cool watches. Shop for both men's watches and women's watches.
                    </p>
                    <div className="flex mt-8">
                        <HashLink
                            to="/home#services"
                            className="uppercase py-2 px-4 rounded-lg bg-gray-500 border-2 border-transparent text-white text-md mr-4 hover:bg-gray-400"
                        >
                            Shop Now
                        </HashLink>
                        <HashLink
                            to="/home#features"
                            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-gray-500 text-gray-500  hover:bg-gray-500 hover:text-white text-md"
                        >
                            Contact Sales
                        </HashLink>
                    </div>
                </div>

                <div className="hidden sm:block sm:w-1/3 lg:w-3/6 ">
                    <img
                        src={bannerImage}
                        alt="banner"
                        className="max-w-xs md:max-w-lg m-auto"
                    />
                </div>
                <div className="sm:hidden flex justify-center items-center my-4">
                    <img src={bannerImage} alt="banner" className="max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default Banner;