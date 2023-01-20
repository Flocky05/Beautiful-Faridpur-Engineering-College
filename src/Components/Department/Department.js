import React from "react";
import img1 from "../../assets/images/fec-1.jpg";
import img2 from "../../assets/images/fec-12.jpg";
import img3 from "../../assets/images/fec-5.jpg";

const Department = () => {
  return (
    <div className="grid grid-cols-3 m-8">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img1} className="w-full h-[15rem]" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">EEE Department</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img2} className="w-full h-[15rem]" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">CE Department</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img3} className="w-full h-[15rem]" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">CSE Department</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
