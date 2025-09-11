import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, gptMovies } = gpt;
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black/70  text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMovies[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
