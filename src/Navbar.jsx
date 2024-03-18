import React, {useState} from "react";
import logo from "./components/icon/65dde509e42c9.png";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search value:", searchValue);
  };

  return (
    <nav className="bg-black p-4 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="ml-10 cursor-pointer w-32" />
        <ul className="ml-10 flex space-x-6 text-white">
          <li className="flex items-center mr-4 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" className="w-8 h-8 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"/>
            </svg>
            Category
          </li>
          <li className="flex items-center mr-4 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
              stroke="currentColor" className="w-8 h-8 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            My watchlist
          </li>
        </ul>
      </div>
      <div className="flex items-center">
      <form onSubmit={handleSubmit} className="flex items-center mr-6 ">
          <div className="relative">
            <input
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              placeholder="Search here. . ."
              className="px-12 py-3 rounded-full border border-white hover:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 px-4 py-1 border border-white bg-blue-600 rounded-full text-white font-semibold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
              </svg>
            </button>
          </div>
        </form>

        <button className="flex items-center mr-4 bg-red-600 px-4 py-2 rounded-full text-white font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-8 h-8 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
          </svg>
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
