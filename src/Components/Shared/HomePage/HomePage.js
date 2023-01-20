import React from "react";
import video from "../../../assets/video/Faridpur Engineering College.mp4";

const HomePage = () => {
  return (
    <div>
      <div className="hero">
        <video autoPlay loop muted playsInline className="w-full">
          <source src={video} />
        </video>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-3 text-4xl font-bold">
              Welcome
              <br /> To <br /> Faridpur Engineering College
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-3 py-2 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
