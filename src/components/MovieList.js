import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-2xl font-bold text-white mb-4">{title}</h1>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
