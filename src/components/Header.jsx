import React, { useState } from "react";
// styles
// import "../styles/headers.css";
//components
import Navbar from "./Navbar";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b  from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl  w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/ht_white_bold.svg"
              width="100"
              height="40"
              alt="hayyantahirr"
            />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            onClick={() => setNavOpen((prev) => !prev)}
            className="menu-btn md:hidden"
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a
          href="#contact"
          className="px-7 py-3 text-xs font-medium uppercase tracking-widest text-black bg-white rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-[#ff6673] hover:text-white hover:shadow-lg hover:translate-y-[-5px] active:translate-y-[-1px] max-md:hidden md:justify-self-end"
        >
          {" "}
          Reach Me Out !
        </a>
      </div>
    </header>
  );
};

export default Header;
