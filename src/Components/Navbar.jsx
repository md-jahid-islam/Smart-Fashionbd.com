import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
 // To track scroll position
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        // If the user scrolls down, hide the navbar
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsScrolled(true);
        }
        // If the user scrolls up, show the navbar
        if (currentScrollY < lastScrollY) {
          setIsScrolled(false);
        }

        // Update the last scroll position
        setLastScrollY(currentScrollY);
      }
    };

    // Adding event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div className={`fixed z-50 w-full transition-all duration-300 ${
          isScrolled ? "-top-20" : "top-0"
        }`}>
        {/* Top Navbar */}
        <nav className="bg-gray-100 shadow-md">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <Link className="text-2xl font-bold text-gray-900" to="/">
                Korian Smart Fashion
              </Link>
              {/* Search Bar */}
              <div className="relative hidden md:flex items-center w-full max-w-md">
                <input
                  className="w-full h-10 pl-10 pr-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Search your choice products"
                />
                <FaSearch className="absolute left-3 text-gray-500" size={18} />
              </div>

              {/* Navigation Icons */}
              <ul className="flex items-center gap-4">
                <li>
                  <Link
                    className="flex items-center gap-1 text-gray-900 hover:text-blue-600"
                    to="/Card">
                    <FaShoppingCart size={18} />
                    <span className="hidden sm:inline">0.00৳ |</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-1 text-gray-900 hover:text-blue-600"
                    to="/Login">
                    <FaUser size={18} />
                    <span className="hidden sm:inline">Login</span>
                  </Link>
                </li>
                <li className="hidden sm:block">
                  <Link className="text-gray-900 hover:text-blue-600" to="/Register">
                    | Register
                  </Link>
                </li>
              </ul>

              {/* Mobile Search Icon */}
              <div className="md:hidden">
                <FaSearch size={20} className="text-gray-700" />
              </div>
            </div>
          </div>
        </nav>

        {/* Main Navbar */}
        <nav className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center py-4">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex md:items-center md:gap-8">
              {[
                "Skincare",
                "Brand",
                "MakeUp",
                "BeautyTools",
                "Faragrance",
                "Food",
                "Sale",
                "SpecialOffer",
              ].map((item) => (
                <li key={item}>
                  <Link to={`/${item}`} className="hover:text-blue-700 text-lg">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          <ul
            className={`absolute md:hidden bg-gray-800 w-full left-0 transition-all duration-300 ease-in-out ${
              isOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0"
            } flex flex-col items-center gap-6 py-5`}>
            {[
              "Skincare",
              "Brand",
              "MakeUp",
              "BeautyTools",
              "Faragrance",
              "Food",
              "Sale",
              "SpecialOffer",
            ].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item}`}
                  className="hover:text-blue-700 text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
