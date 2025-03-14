// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { toast, ToastContainer } from "react-toastify"; 
// import "react-toastify/dist/ReactToastify.css"; 

//  const ContactUsComponents = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = {};

//     if (!formData.name) {
//       newErrors.name = "Name is required";
//       valid = false;
//     }

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email";
//       valid = false;
//     }

//     if (!formData.message) {
//       newErrors.message = "Message is required";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // Show success toast message
//       toast.success("Message sent successfully!", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });

//       // Clear the form fields after successful submission
//       setFormData({
//         name: "",
//         email: "",
//         message: "",
//       });
//       setErrors({});
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-20 min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 bg-gradient-to-r from-blue-100 to-indigo-200 mt-[300px] bg-fixed">
//       {/* Left Side: Contact Info */}
//       <div className="md:w-1/2 text-center md:text-left space-y-4">
//         <h2 className="text-4xl font-extrabold text-gray-800 underline mb-4">Contact Us</h2>
//         <p className="text-gray-700 font-semibold">📞 Phone: +880 1540587085</p>
//         <Link to="mailto:jahidulislamwebbd@gmail.com" className="text-blue-500 hover:underline font-semibold">
//           📧 Email: jahidulislamwebbd@gmail.com
//         </Link>
//         <p className="text-gray-700 font-medium">📍 House# 5 (6th Floor), Road# 15, Dhaka, Uttara Sector No. 6, Dhaka, Bangladesh</p>
//         <h2 className="text-gray-600 mt-1 font-bold">🕒 9:00 AM - 9:00 PM | Sat - Sun - Thu</h2>

//         {/* Social Media Links */}
//         <div className="mt-6 flex justify-center md:justify-start space-x-6">
//           <a href="https://www.facebook.com/jahidul.islam.98621/" target="_blank" className="text-gray-500 hover:text-blue-600 text-2xl transform hover:scale-125 transition">
//             <FaFacebook />
//           </a>
//           <a href="https://x.com/JIslam24072" target="_blank" className="text-gray-500 hover:text-blue-400 text-2xl transform hover:scale-125 transition">
//             <FaTwitter />
//           </a>
//           <a href="https://www.instagram.com/jahidulislamwebbd/" target="_blank" className="text-gray-500 hover:text-pink-500 text-2xl transform hover:scale-125 transition">
//             <FaInstagram />
//           </a>
//           <a href="https://www.linkedin.com/in/jahidul-islam-a5021b325/" target="_blank" className="text-gray-500 hover:text-blue-700 text-2xl transform hover:scale-125 transition">
//             <FaLinkedin />
//           </a>
//         </div>
//       </div>

//       {/* Right Side: Contact Form */}
//       <form
//         className="md:w-1/2 bg-white shadow-2xl rounded-xl p-6 w-full max-w-lg transition transform hover:-translate-y-1"
//         onSubmit={handleSubmit}>
//         <div className="flex justify-center items-center pt-5">
//           <h3 className="font-bold text-2xl">Welcome to my page, contact us!</h3>
//         </div>

//         <label className="block font-semibold text-gray-700 mb-1">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter Your Name"
//           className={`p-2 mb-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition ${errors.name ? 'border-red-500' : ''}`}/>
//         {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

//         <label className="block font-semibold text-gray-700 mb-1">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter Your Email"
//           className={`p-2 mb-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition ${errors.email ? 'border-red-500' : ''}`}/>
//         {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//         <label className="block font-semibold text-gray-700 mb-1">Message</label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Enter Your Message"
//           className={`p-2 mb-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition ${errors.message ? 'border-red-500' : ''}`}></textarea>
//         {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

//         <button
//           type="submit"
//           className="mt-2 p-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-lg w-full hover:bg-indigo-700 transition hover:scale-105">
//           Send Message
//         </button>
//       </form>

//       {/* Toast container */}
//       <ToastContainer />
//     </div>
//   );
//  };

//  export default ContactUsComponents;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactUsComponents = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Show success toast message
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Clear the form fields after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 bg-gradient-to-r from-blue-100 to-indigo-200 mt-[300px] bg-fixed">
      {/* Left Side: Contact Info */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-4xl font-extrabold text-gray-800 underline mb-4">Contact Us</h2>
        <p className="text-gray-700 font-semibold">📞 Phone: +880 1540587085</p>
        <Link to="mailto:jahidulislamwebbd@gmail.com" className="text-blue-500 hover:underline font-semibold">
          📧 Email: jahidulislamwebbd@gmail.com
        </Link>
        <p className="text-gray-700 font-medium">📍 House# 5 (6th Floor), Road# 15, Dhaka, Uttara Sector No. 6, Dhaka, Bangladesh</p>
        <h2 className="text-gray-600 mt-1 font-bold">🕒 9:00 AM - 9:00 PM | Sat - Sun - Thu</h2>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center md:justify-start space-x-6">
          <a href="https://www.facebook.com/jahidul.islam.98621/" target="_blank" className="text-gray-500 hover:text-blue-600 text-2xl transform hover:scale-125 transition">
            <FaFacebook />
          </a>
          <a href="https://x.com/JIslam24072" target="_blank" className="text-gray-500 hover:text-blue-400 text-2xl transform hover:scale-125 transition">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/jahidulislamwebbd/" target="_blank" className="text-gray-500 hover:text-pink-500 text-2xl transform hover:scale-125 transition">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/jahidul-islam-a5021b325/" target="_blank" className="text-gray-500 hover:text-blue-700 text-2xl transform hover:scale-125 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <form
        className="md:w-1/2 bg-white shadow-2xl rounded-xl p-6 w-full max-w-lg transition transform hover:-translate-y-1"
        onSubmit={handleSubmit}>
        <div className="flex justify-center items-center pt-5">
          <h3 className="font-bold text-2xl">Welcome to my page, contact us!</h3>
        </div>

        <label className="block font-semibold text-gray-700 mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
          className={`p-2 mb-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition ${errors.name ? 'border-red-500' : ''}`}/>
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <label className="block font-semibold text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
          className={`p-2 mb-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition ${errors.email ? 'border-red-500' : ''}`}/>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <label className="block font-semibold text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter Your Message"
          className={`p-2 mb-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition ${errors.message ? 'border-red-500' : ''}`}></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        <button
          type="submit"
          className="mt-2 p-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-lg w-full hover:bg-indigo-700 transition hover:scale-105">
          Send Message
        </button>
      </form>

      {/* Google Map */}
      <div className="md:w-1/2 w-full mt-10">
        <LoadScript googleMapsApiKey="">
          <GoogleMap
            mapContainerStyle={{
              height: "400px",
              width: "100%",
            }}
            center={{
              lat: 23.8666, // Lat of Dhaka Uttara Azimpur
              lng: 90.3984, // Lng of Dhaka Uttara Azimpur
            }}
            zoom={15}
          >
            <Marker position={{ lat: 23.8666, lng: 90.3984 }} />
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default ContactUsComponents;
