import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/school/faridpur-engineering-college-fec/about/"
              alt=""
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3536/3536569.png"
                alt=""
                className="w-7 h-7"
              />
            </a>
            <a
              href="https://www.youtube.com/@FaridpurEngineeringCollege"
              alt=""
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png"
                alt=""
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100057697410356"
              alt=""
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3128/3128208.png"
                alt=""
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
