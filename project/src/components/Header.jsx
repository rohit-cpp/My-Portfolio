import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      Header
      <div className="max-w-screen-2xl w-full mx-auto px-4">
        <h1>
          <a href="/" className="logo">
            <img
              src="/public/letter-r.png"
              alt="Rohit Gawande"
              className="h-8 w-8"
            />
          </a>
        </h1>
        <div className="">
          <button onClick={null} className="">
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
