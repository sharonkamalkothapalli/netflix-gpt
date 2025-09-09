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
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSeachClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute top-0 left-0 w-full h-24 z-20">
      {/* Gradient overlay across entire header */}
      <div className="absolute inset-0 bg-gradient-to-b from-black opacity-70"></div>

      {/* Header content: flex container */}
      <div className="relative z-30 flex items-center justify-between h-full px-6">
        {/* Left: Logo */}
        <img className="w-36" src={netflixlogo} alt="Netflix Logo" />

        {/* Right: User icon + Sign Out */}
        {user && (
          <div className="flex items-center gap-4">
            {showGptSearch && (
              <select
                className="p-2 m-2 bg-gray-800 text-white rounded-sm"
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
              className="py-2 px-4 m-2 bg-purple-950 text-white rounded-md"
              onClick={handleGptSeachClick}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
            <img className="w-8 rounded" alt="userIcon" src={user.photoURL} />
            <button
              className="text-white bg-red-700 px-3 py-1 rounded hover:bg-red-800"
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
