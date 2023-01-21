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
import img16 from "../assets/images/fec-16.jpg";
import img17 from "../assets/images/fec-66.jpg";
import img18 from "../assets/images/fec-17.jpg";
import img19 from "../assets/images/fec-18.jpg";
import img20 from "../assets/images/fec-19.jpg";
import img21 from "../assets/images/fec-20.jpg";
import img22 from "../assets/images/fec-21.jpg";
import img23 from "../assets/images/fec-22.jpg";
import img24 from "../assets/images/fec-23.jpg";
import img25 from "../assets/images/fec-24.jpg";
import img26 from "../assets/images/fec-25.jpg";
import img27 from "../assets/images/fec-26.jpg";
import img28 from "../assets/images/fec-27.jpg";
import img29 from "../assets/images/fec-28.jpg";
import img30 from "../assets/images/fec-29.jpg";
import img31 from "../assets/images/fec-30.jpg";
import img32 from "../assets/images/fec-31.jpg";
import img33 from "../assets/images/fec-32.jpg";
import img34 from "../assets/images/fec-33.jpg";

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
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
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
    let randomElements = copy.slice(0, 32);
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
              className="w-full h-full object-cover "
              //   className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
