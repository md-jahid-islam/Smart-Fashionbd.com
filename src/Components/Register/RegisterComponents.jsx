// import { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const RegisterComponents = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, easing: "ease-in-out", once: true });
//   }, []);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     workEmail: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//     address: "",
//     city: "",
//     country: "",
//     zipCode: "",
//     termsAccepted: false,
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-bold text-center text-gray-700" data-aos="fade-down">Register</h2>
//         <form className="mt-4 space-y-4">
//           <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" data-aos="fade-up" data-aos-delay="100" />
//           <input type="email" name="workEmail" placeholder="Work Email" value={formData.workEmail} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" data-aos="fade-up" data-aos-delay="200" />
//           <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" data-aos="fade-up" data-aos-delay="300" />

//           <div className="relative" data-aos="fade-up" data-aos-delay="400">
//             <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" />
//             <span className="absolute right-3 top-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
//           </div>

//           <div className="relative" data-aos="fade-up" data-aos-delay="500">
//             <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" />
//             <span className="absolute right-3 top-4 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</span>
//           </div>

//           <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" data-aos="fade-up" data-aos-delay="600" />
//           <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" data-aos="fade-up" data-aos-delay="700" />
//           <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" data-aos="fade-up" data-aos-delay="800" />
//           <input type="text" name="zipCode" placeholder="Zip/Postal Code" value={formData.zipCode} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" data-aos="fade-up" data-aos-delay="900" />

//           <div className="flex items-center" data-aos="fade-up" data-aos-delay="1000">
//             <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mr-2" />
//             <label className="text-gray-600">I agree to the <a href="#" className="text-blue-500 underline">Terms of Service</a> and <a href="#" className="text-blue-500 underline">Privacy Policy</a>.</label>
//           </div>

//           <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition" data-aos="fade-up" data-aos-delay="1100">Register</button>
          
//           <div className="mt-3 text-center" data-aos="fade-up" data-aos-delay="1200">
//             <Link to="/Login" className="text-blue-500">Already have an account? <span className="underline">Login</span></Link>
//           </div>
//         </form>
//       </div>
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default RegisterComponents;

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterComponents = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation Check
    if (!formData.fullName) {
      toast.error("Full Name is required!");
      return;
    }

    if (!formData.address || !formData.city || !formData.country || !formData.zipCode) {
      toast.error("Please fill out Address, City, Country, and Zip Code!");
      return;
    }

    // If all fields are filled correctly
    toast.success("Registration Successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-44 ">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700" data-aos="fade-down">
          Register
        </h2>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <input
            type="email"
            name="workEmail"
            placeholder="Work Email"
            value={formData.workEmail}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            data-aos="fade-up"
            data-aos-delay="300"
          />

          <div className="relative" data-aos="fade-up" data-aos-delay="400">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            />
            <span className="absolute right-3 top-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay="500">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            />
            <span className="absolute right-3 top-4 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            data-aos="fade-up"
            data-aos-delay="600"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            data-aos="fade-up"
            data-aos-delay="700"/>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            data-aos="fade-up"
            data-aos-delay="800"/>
          <input
            type="text"
            name="zipCode"
            placeholder="Zip/Postal Code"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            data-aos="fade-up"
            data-aos-delay="900"
          />

          <div className="flex items-center" data-aos="fade-up" data-aos-delay="1000">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mr-2" />
            <label className="text-gray-600">
              I agree to the <a href="#" className="text-blue-500 underline">Terms of Service</a> and{" "}
              <a href="#" className="text-blue-500 underline">Privacy Policy</a>.
            </label>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition" data-aos="fade-up" data-aos-delay="1100">
            Register
          </button>

          <div className="mt-3 text-center" data-aos="fade-up" data-aos-delay="1200">
            <Link to="/Login" className="text-blue-500">
              Already have an account? <span className="underline">Login</span>
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default RegisterComponents;
