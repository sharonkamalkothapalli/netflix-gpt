import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useUpcomingMovies = () => {
  // Fetch data from TMDB API and update the store
  const dispatch = useDispatch();

  const nowUpcomingMovies = useSelector(
    (store) => store.movies.nowUpcomingMovies
  );

  const getNowUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !nowUpcomingMovies && getNowUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
