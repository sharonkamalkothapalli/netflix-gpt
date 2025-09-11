export const USER_AVATAR =
  "https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg";

const url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://cdn-images-1.medium.com/max/1024/1*5lyavS59mazOFnb55Z6znQ.png";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
