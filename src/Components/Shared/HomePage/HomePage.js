import React from "react";
import img from "../../../assets/images/fec-115.jpg";

const HomePage = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/aerial-view-residence-bukovinian-dalmatian-metropolitans-chernivtsi-national-university-chernivtsi-touristic-destination-western-ukraine_231208-45.jpg?w=1060&t=st=1674218740~exp=1674219340~hmac=d0724af2ab9c864f4c50a02828cf9b341f7234566871e7f8d4330adb56d65e61")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-3 text-4xl font-bold hover:text-5xl ">
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
