import Header from "./Header";
import netflixlogo from "../assets/netflixlogo.png"; // adjust path if needed
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="relative top-6 left-6 z-10 bg-gradient-to-b from-black">
        <img className="w-44" src={netflixlogo} alt="Netfilx Logo"></img>
      </div>

      <form className="absolute w-3/12 min-w-[300px] p-12 bg-black bg-opacity-80 rounded text-white flex flex-col gap-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-bold text-3xl my-4 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 rounded bg-transparent  text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 rounded bg-transparent  text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 rounded bg-transparent text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button className="bg-red-700 my-4 p-4 w-full rounded">
          {" "}
          {isSignIn ? "Submit" : "Sign Up"}
        </button>
        <p className="cursor-pointer py-4" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now."
            : "Already Registerd? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
