import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-40 flex-shrink-0 transform hover:scale-105 transition duration-300">
      <img
        alt="Movie poster"
        src={IMG_CDN + posterPath}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default MovieCard;
