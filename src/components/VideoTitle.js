import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center px-2 md:px-24 pt-16 md:pt-0 bg-gradient-to-b from-black/70 via-transparent to-transparent">
      {/* Title */}
      <h1 className="text-lg md:text-5xl font-extrabold text-white drop-shadow-lg">
        {title}
      </h1>

      {/* Overview */}
      <p className="hidden md:inline-block mt-4 max-w-xl text-lg md:text-xl text-gray-200 leading-relaxed">
        {overview}
      </p>

      {/* Buttons */}
      <div className="mt-3 md:mt-6 flex space-x-1.5 md:space-x-4">
        <button className="flex items-center text-sm md:text-base bg-white text-black font-semibold py-1 px-2 md:py-3 md:px-8 rounded-md hover:bg-gray-200 transition">
          ▶️ Play
        </button>
        <button className="flex items-center text-sm md:text-base bg-gray-700 bg-opacity-80 text-white font-semibold py-1 px-2 md:py-3 md:px-8 rounded-md hover:bg-opacity-60 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
