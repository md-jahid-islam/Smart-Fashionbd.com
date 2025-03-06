import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterComponents = () => {
  return (
    <>
    <nav>
      <div className=" pt-20 ">
      <footer className="bg-gray-900 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">ShopBrand</h2>
          <p className="text-gray-400">
            Elevate your shopping experience with quality products and fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Shop</a></li>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-300">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
          <p className="text-gray-400 mb-3">
            Get the latest updates and offers directly in your inbox.
          </p>
          <div className="flex items-center bg-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full text-black outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebook /></a>
        <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
        <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
        <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedin /></a>
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
