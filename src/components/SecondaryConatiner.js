import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies.nowPlayingMovies) return null;

  return (
    <div className=" bg-black">
      <div className=" relative z-20  pl-12 -mt-[30vh] pr-6 space-y-6">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.nowPopularMovies} />
        <MovieList title="Upcoming Movies" movies={movies.nowPlayingMovies} />
        <MovieList title="Horror" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
