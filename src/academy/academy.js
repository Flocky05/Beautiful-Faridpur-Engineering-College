import React from "react";

const Academy = () => {
  return (
    <div className="p-20 m-16">
      <div className="grid grid-cols-2 mx-auto ">
        <div className="card w-96 bg-gray-300 shadow-xl text-black">
          <div className="card-body">
            <h2 className="card-title">Documents</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit
              explicabo incidunt voluptatibus iure sequi, animi pariatur aliquid
              non necessitatibus aut aliquam tenetur cumque odio earum quibusdam
              hic repellendus nam.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Next</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-gray-300 shadow-xl text-black">
          <div className="card-body">
            <h2 className="card-title">Results</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur perspiciatis similique reiciendis pariatur in fuga
              fugiat excepturi quos tenetur asperiores! Blanditiis iure culpa
              dolore, repellendus sed harum. Pariatur, quam modi?
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
