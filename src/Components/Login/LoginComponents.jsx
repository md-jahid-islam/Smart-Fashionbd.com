import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

 //========= useEffect duration part start ========//
 const LoginComponents = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
 //========= useEffect duration part end ========//

 //============ useState part start ===========//
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 //============ useState part end ===========//

 //============ handleSubmit part start ===========//
  const handleSubmit = (e) => {
    e.preventDefault();

 //============  email error part start ===========//
    if (!email) {
      toast.error("Email field is required!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email address!");
      return;
    }
 //============  email error part end ===========//

 //============  password error part start ===========//
    if (!password) {
      toast.error("Password field is required!");
      return;
    }
 //============  password error part end ===========//

 //============  password length part start ===========//
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }
 //============  password length part start ===========//

 //============  toast successful part start ===========//
    toast.success("Login successful!");
    setEmail("");
    setPassword("");
  };
 //============  toast successful part end ===========//

 //============ handleSubmit part end ===========//

 //=========== return design part start ==========//
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-44 ">
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        data-aos="fade-up">

        {/* h2 part start*/}
        <h2
          className="text-2xl font-bold text-center text-gray-800 mb-6"
          data-aos="fade-down">
          Login
        </h2>
        {/* h2 part end*/}

        {/* form part start*/}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4" data-aos="fade-right" data-aos-delay="200">
            <label className="block text-gray-700 font-medium">Email</label>

           {/* email part start*/}
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
             {/* email part end*/}

          </div>

          {/* Password Field part start */}
          <div
            className="mb-4 relative"
            data-aos="fade-left"
            data-aos-delay="400">
            <label className="block text-gray-700 font-medium">Password</label>

            {/* relative password part start */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                
            {/* span part start */}
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
             {/* span part end */}
            </div>
           {/* relative password part end */}

          </div>
          {/* Password Field part start */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            data-aos="zoom-in"
            data-aos-delay="600">
            Login
          </button>

          <div className="mt-4 text-center" data-aos="fade-up" data-aos-delay="800">
            <Link to="/Register">
              <h2 className="text-gray-700">Don't have an account?</h2>
              <span className="text-blue-500 font-medium">Registration</span>
            </Link>
          </div>
        </form>
      
        {/* form part end*/}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
 };
 //=========== return design part start ==========//
 export default LoginComponents;
