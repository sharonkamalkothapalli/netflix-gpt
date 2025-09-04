import { signOut } from "firebase/auth";
import netflixlogo from "../assets/netflixlogo.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser);
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
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
