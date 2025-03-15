import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaSearch, FaShoppingCart, FaUser, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Apply theme to entire window background
    if (theme === "dark") {
      document.documentElement.style.backgroundColor = "#1a202c";
      document.documentElement.style.color = "#ffffff";
    } else {
      document.documentElement.style.backgroundColor = "#ffffff";
      document.documentElement.style.color = "#000000";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) setIsScrolled(true);
      if (currentScrollY < lastScrollY) setIsScrolled(false);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <>
      <div
        className={`fixed z-50 w-full transition-all duration-300 ${isScrolled ? "-top-20" : "top-0"}`}>
        {/* Top Navbar */}
        <nav className={`${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"} shadow-md`}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex justify-between items-center py-4">
              <Link className="text-2xl font-bold" to="/">Korian Smart Fashion <img className=" w-56 h-24" src="/images/Logo.jpg" alt="jpg" /> </Link>
              
              <div className="relative hidden md:flex items-center w-full max-w-md">
                <input
                  className="w-full h-10 pl-10 pr-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Search your choice products"
                />
                <FaSearch className="absolute left-3 text-gray-500" size={18} />
              </div>
              <ul className="flex items-center gap-4">
                <li><Link className="flex items-center gap-1" to="/Card"><FaShoppingCart size={18} /><span className="hidden sm:inline">0.00৳ |</span></Link></li>
                <li><Link className="flex items-center gap-1" to="/Login"><FaUser size={18} /><span className="hidden sm:inline">Login</span></Link></li>
                <li className="hidden sm:block"><Link to="/Register">| Register</Link></li>
                <li>
                  <button onClick={toggleTheme} className="text-xl">
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                  </button>
                </li>
              </ul>
              <div className="md:hidden"><FaSearch size={20} /></div>
            </div>
          </div>
        </nav>

        {/* Main Navbar */}
        <nav className={theme === "dark" ? "bg-gray-700 text-white" : "bg-[#D1D4C9] text-black font-bold"}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center py-4">
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
              </button>
            </div>
            <ul className="hidden md:flex md:items-center md:gap-8">
              {["Skincare", "Brand", "MakeUp", "BeautyTools", "Faragrance", "Food", "Sale", "SpecialOffer"].map((item) => (
                <li key={item}><Link to={`/${item}`} className="hover:text-blue-700 text-lg">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          <ul className={`absolute md:hidden bg-[#FFEDFA] w-full left-0 transition-all duration-300 ease-in-out ${isOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0"} flex flex-col items-center gap-6 py-5`}>
            {["Skincare", "Brand", "MakeUp", "BeautyTools", "Faragrance", "Food", "Sale", "SpecialOffer"].map((item) => (
              <li key={item}><Link to={`/${item}`} className="hover:text-blue-700 text-xl" onClick={() => setIsOpen(false)}>{item}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
