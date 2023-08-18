import React from "react";

import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8 sticky top-0 z-[1000000]" style={{ background: "linear-gradient(to right, rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42))" }}>
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <a href="#">
            <h2 className="text-3xl text-transparent bg-gradient-to-r from-red-800 to-indigo-600 bg-clip-text">BLENDI</h2>
          </a>
          <a
            href="https://www.linkedin.com/in/blendi-ivanja-214586250/"
            target="_blank"
          >
            <button className="btn btn-sm">Work with me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
