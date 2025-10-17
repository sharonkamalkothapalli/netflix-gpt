import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useTopRatedMovies = () => {
  // Fetch data from TMDB API and update the store
  const dispatch = useDispatch();

  const nowTopRatedMovies = useSelector(
    (store) => store.movies.nowTopRatedMovies
  );

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !nowTopRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
