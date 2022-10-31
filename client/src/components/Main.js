import React, { useEffect, useState } from "react";
import Home from "../pages/Home";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    const fethData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=01c3da185b5eef24879699f5137b813f"
      );
      const data = await res.json();
      setMovies(data.results);
    };
    fethData();
  }, []);
  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title} //Optional chaining (?.) 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining'
          />
          <div className="absolute w-full top-[40%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Play
              </button>
              <button className="border  text-white border-gray-300 py-2 px-5 ml-4">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Relese: {movie?.release_date}
            </p>
          </div>
        </div>
      </div>
      <Home />
    </>
  );
};

export default Main;
