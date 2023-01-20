import React from "react";
import img from "../../../assets/images/fec-115.jpg";

const HomePage = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/building-lake_1127-3045.jpg?w=1060&t=st=1674218295~exp=1674218895~hmac=37a01d3192dcdd6c37ac78c5416906b5fe80cb1473fb6611b23bbc60421416d4")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
