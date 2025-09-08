import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center px-24 bg-gradient-to-b from-black/70 via-transparent to-transparent">
      {/* Title */}
      <h1 className="text-5xl text-white backdrop:md:text-6xl font-extrabold drop-shadow-lg">
        {title}
      </h1>

      {/* Overview */}
      <p className="mt-4 max-w-xl text-lg md:text-xl text-gray-200 leading-relaxed">
        {overview}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="flex items-center bg-white text-black font-semibold py-3 px-8 rounded-sm hover:bg-gray-200 transition">
          ▶️ Play
        </button>
        <button className="flex items-center bg-gray-700 bg-opacity-80 text-white font-semibold py-3 px-8 rounded-md hover:bg-opacity-60 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
