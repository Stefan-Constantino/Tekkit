import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIcons from "./Links";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-700 py-4 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Logo (scrolls to top when clicked) */}
        <div className="mb-2 md:mb-0">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="tekkitStraight_cropped.png"
              alt="Tekk-It Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Middle: Social Icons
        <div className="mb-2 md:mb-0">
          <SocialMediaIcons />
        </div> */}

        {/* Right: Copyright */}
        <div className="text-gray-500 text-sm">
          © 2025 Tekk-it. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;