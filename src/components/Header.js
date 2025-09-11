import { onAuthStateChanged, signOut } from "firebase/auth";
import netflixlogo from "../assets/netflixlogo.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSeachClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute top-0 left-0 w-full min-h-24 z-20">
      {/* Gradient overlay across entire header */}
      <div className="absolute inset-0 bg-gradient-to-b from-black opacity-70"></div>

      {/* Header content */}
      <div className="relative z-30 flex items-center justify-between h-full px-4 md:px-6">
        {/* Left: Logo */}
        <img className="w-24 md:w-36" src={netflixlogo} alt="Netflix Logo" />

        {/* Right: User icons + buttons */}
        {user && (
          <div className="flex items-center gap-2 md:gap-4">
            {showGptSearch && (
              <select
                className="p-1 md:p-2 m-1 md:m-2 bg-gray-800 text-white text-sm md:text-base rounded-sm"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="py-1 px-2 md:py-2 md:px-4 m-1 md:m-2 bg-purple-950 text-white text-sm md:text-base rounded-md"
              onClick={handleGptSeachClick}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
            <img
              className="w-6 md:w-8 rounded"
              alt="userIcon"
              src={user.photoURL}
            />
            <button
              className="text-white bg-red-700 text-sm md:text-base px-2 py-1 md:px-3 md:py-1 rounded hover:bg-red-800"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
