 import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
 import { useState } from "react";

 const FooterComponents = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setError(" email is required");
    } else {
      setError("");
      alert("Subscribed successfully!");
      setEmail("");
    }
  };

  return (
    <>
      <nav>
        <div className=" pt-20 ">
          <footer className="bg-gray-900 text-white py-12 gap-10 ">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
              {/* Company Info */}
              <div>
                <h2 className="text-xl font-bold mb-4">Korian Smart Fashion</h2>
                <p className="text-gray-400">
                  Elevate your shopping experience with quality products and fast delivery.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
                <ul className="space-y-2">
                  <li><a href="/Skincare" className="hover:text-gray-300">Skincare</a></li>
                  <li><a href="/Brand" className="hover:text-gray-300"> Shop Brand</a></li>
                  <li><a href="#" className="hover:text-gray-300">Moisturizer</a></li>
                  <li><a href="/Serum" className="hover:text-gray-300">Serum</a></li>
                  <li><a href="#" className="hover:text-gray-300">Essence</a></li>
                  <li><a href="/Toner" className="hover:text-gray-300">Toner</a></li>
                  <li><a href="#" className="hover:text-gray-300">Cleanser</a></li>
                  <li><a href="/Cream" className="hover:text-gray-300">Cream</a></li>


                </ul>
              </div>

              {/* Customer Support */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gray-300">Wholesale</a></li>
                  <li><a href="#" className="hover:text-gray-300">Sponsers</a></li>
                  <li className=" hover:text-gray-300">Promo Codes</li>
                  <li><a href="#" className="hover:text-gray-300">Join Group</a></li>
                  <li><a href="#" className="hover:text-gray-300">Request Products</a></li>
                  <li><a href="#" className="hover:text-gray-300">Request Dealership</a></li>

                </ul>
              </div>

              {/* Help Center */}
              <div>
                <h3 className="text-lg font-semibold mb-4"> Help Center</h3>
                <ul className="space-y-2">
                <li><a href="/About" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Trade License</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
                <li><a href="/PrivacyPolicy" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Return & Refund Policy</a></li>
                <li><a href="/ContactUs" className="hover:text-gray-300">Contact Us</a></li>

                </ul>
              </div>

              {/* Newsletter Subscription */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
                <p className="text-gray-400 mb-3">
                  Get the latest updates and offers directly in your inbox.
                </p>
                <div className="flex items-start">
                  <div className="flex items-center bg-white rounded-lg overflow-hidden w-full">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-3 py-2 w-full text-black outline-none"/>
                    <button onClick={handleSubscribe} className="bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-500">
                      Subscribe
                    </button>
                  </div>
                  {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://www.facebook.com/jahidul.islam.98621/" target="_blank" className="text-gray-400 hover:text-white text-xl"><FaFacebook /></a>
              <a href="https://x.com/JIslam24072" target="_blank" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
              <a href="https://www.instagram.com/jahidulislamwebbd/" target="_blank" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/jahidul-islam-a5021b325/" target="_blank" className="text-gray-400 hover:text-white text-xl"><FaLinkedin /></a>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 mt-6 text-sm">
              &copy; {new Date().getFullYear()} ShopBrand. All rights reserved.
            </div>
          </footer>
        </div>
      </nav>
    </>
  );
 };

 export default FooterComponents;
