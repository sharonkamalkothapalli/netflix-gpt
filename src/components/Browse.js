import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {/* 
          Main Container
            - VideoBackground
            - video title
          Secondary Conatiner
            - MoviesList * n
              - cards * n
     */}

      <MainContainer />
      <SecondaryConatiner />
    </div>
  );
};

export default Browse;
