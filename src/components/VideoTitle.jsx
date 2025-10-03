import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="py-6 text-s w-1/4">{overview}</p>
        <div>
          <button className="bg-white text-black font-bold p-3 px-9 text-m rounded-lg cursor-pointer hover:animate-pulse">Play</button>
          <button className="mx-2 bg-white text-black font-bold p-3 px-9 text-m rounded-lg cursor-pointer hover:animate-pulse" >More Info</button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
