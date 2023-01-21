import React, { useEffect, useState } from "react";
import img1 from "../assets/images/fec-100.jpg";
import img2 from "../assets/images/fec-111.jpg";
import img3 from "../assets/images/fec-101.jpg";
import img4 from "../assets/images/fec-102.jpg";
import img5 from "../assets/images/fec-103.jpg";
import img6 from "../assets/images/fec-104.jpg";
import img7 from "../assets/images/fec-105.jpg";
import img8 from "../assets/images/fec-106.jpg";
import img9 from "../assets/images/fec-107.jpg";
import img10 from "../assets/images/fec-10.jpg";
import img11 from "../assets/images/fec-11.jpg";
import img12 from "../assets/images/fec-12.jpg";
import img13 from "../assets/images/fec-13.jpg";
import img14 from "../assets/images/fec-14.jpg";
import img15 from "../assets/images/fec-15.jpg";

let images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];
const Gallery = () => {
  const [randomElements, setRandomElements] = useState([]);

  useEffect(() => {
    // Copy the original array
    let copy = images.slice();
    // Shuffle the copy
    for (let i = copy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    // Take the first 5 elements
    let randomElements = copy.slice(0, 8);
    setRandomElements(randomElements);
  }, []);

  console.log(randomElements);
  return (
    <div>
      <section className="py-6 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          {randomElements?.map((el) => (
            <img
              src={el}
              alt=""
              //   className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
