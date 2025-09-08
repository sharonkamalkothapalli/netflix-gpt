import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[30%] left-12 text-white max-w-xl">
      {/* Title */}
      <h1 className="text-5xl font-extrabold drop-shadow-lg">{title}</h1>

      {/* Overview */}
      <p className="py-6 text-lg leading-relaxed text-gray-200">{overview}</p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="flex items-center bg-white text-black font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition">
          ▶️ Play
        </button>
        <button className="flex items-center bg-gray-700 bg-opacity-80 text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-60 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
