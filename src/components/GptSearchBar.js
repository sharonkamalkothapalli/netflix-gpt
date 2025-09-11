import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the exaple given ahaed. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    // Make an API call to GPT API and get movie results
    const gptResults = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: gptQuery }],
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }
    // ["Pyaasa", "Mughal-e-Azam", "Guide", "Kaagaz Ke Phool", "Anand"]
    console.log(gptResults.choices[0].message.content.split(","));
    const gptMovies = gptResults.choices[0].message.content.split(",");

    // For each movie I will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [promise, promise, promise, promise, promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black flex flex-col md:flex-row gap-2 p-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-3 flex-1 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-3 px-4 bg-red-800 text-white rounded-md"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
