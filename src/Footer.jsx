import React from "react";

function Footer (){
  return (
    <footer className="bg-gray-900 w-full">
      <div className="flex justify-center items-center h-20 px-4">
        <div className="text-center">
          <div className="text-white mb-4">
              Privacy
            <span className="text-white mx-2">|</span>
              Terms
            <span className="text-white mx-2">|</span>
              Contact
          </div>
          <p className="text-white">
            Copyright © 2024 Anime ACS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
