import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const AboutComponents = () => {
    return (
      <>  
      <section className="container mx-auto px-4 py-10 pt-20 lg:pt-32">
        <div className='text-center lg:text-left pt-10 '>
            <h3 className='underline font-bold text-5xl mb-10 '>About Us</h3>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h2 className="text-3xl mb-2 font-bold ">Introduction:</h2>
                <p className=' font-bold'>Welcome to the "Korean Smart Fashion Bangladesh" online shop. Here you can buy high-quality cosmetics and skincare products at retail prices. "Korean Smart Fashion Bangladesh" supplies all types of cosmetics and skincare products at retail prices across the country.</p>
              </div>
              
              <div>
                <h2 className=" text-3xl font-bold mb-2 ">Confidentiality:</h2>
                <p className=' font-bold'>"Korean Smart Fashion  Bangladesh" keeps all customer information in its own database and this information is not shared with anyone.</p>
              </div>

              <div>
                <h2 className=" font-bold text-3xl mb-2">Required Information:</h2>
                <p className=' font-bold'>To place an order at "Korean Smart Fashion Bangladesh", the following information is collected from the customer:</p>
                <ul className="list-disc list-inside mt-2 font-bold ">
                  <li>Customer Name</li>
                  <li>Customer Mobile Number</li>
                  <li>Customer Address</li>
                </ul>
              </div>

              <div>
                <h2 className=" text-3xl font-bold mb-2">Delivery Time:</h2>
                <p className=' font-bold'>All products in stock are delivered promptly: within 3 working days in Dhaka and 4-6 working days to other districts.</p>
              </div>

              <div>
                <h2 className=" font-bold text-3xl mb-2">Payment Process:</h2>
                <p className=' font-bold'>We accept cash on delivery and advance payments. Delivery charge within Dhaka is 60 taka and outside Dhaka is 120 taka.</p>
              </div>

              <div>
                <h2 className="font-bold text-3xl">Return Policy:</h2>
                <p>You can return the product if:</p>
                <ul className="list-disc list-inside mt-2 font-bold ">
                  <li>Wrong product or shade is delivered.</li>
                  <li>Product must be checked in front of the delivery person (complaints won’t be accepted later).</li>
                  <li>Complaints or exchanges must be made within 3 working days.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold text-3xl mb-2">Exchange Policy:</h2>
                <p className=' font-bold'>If the product is unused and intact, customers can apply for an exchange. Delivery charge for the exchange is covered by the customer if the wrong product was ordered.</p>
              </div>

              <div>
                <h2 className="font-bold text-3xl mb-2">Refund Policy:</h2>
                <p className=' font-bold '>Refunds are not accepted after the correct product is delivered. Approved refunds are completed within 3 business days via the original payment method.</p>
              </div>

              <div className="mt-4 space-y-1">
                <h2 className="font-bold text-3xl">Contact Us:</h2>
                <Link to="#"><h2 className="text-blue-500 hover:underline font-bold">Phone: 01540587085</h2></Link>
                <Link to="#"><h2 className="text-blue-500 hover:underline font-bold ">Email: jahidulislamwebbd@gmail.com</h2></Link>
                <h2 className="text-gray-700 font-bold ">House# 5 (6th Floor), Road# 15, Dhaka, Uttara Azampur, Sector 6, Dhaka, Bangladesh</h2>
                <h2 className="text-gray-700 font-bold ">10:00 AM - 9:00 PM | Saturday - Sunday - Thursday</h2>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex justify-center lg:justify-start space-x-6">
              <a href="https://www.facebook.com/jahidul.islam.98621/" target="_blank" className="text-gray-400 hover:text-blue-600 text-xl"><FaFacebook /></a>
              <a href="https://x.com/JIslam24072" target="_blank" className="text-gray-400 hover:text-blue-400 text-xl"><FaTwitter /></a>
              <a href="https://www.instagram.com/jahidulislamwebbd/" target="_blank" className="text-gray-400 hover:text-pink-500 text-xl"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/jahidul-islam-a5021b325/" target="_blank" className="text-gray-400 hover:text-blue-700 text-xl"><FaLinkedin /></a>
            </div>
        </div>
      </section>
      </>
    );
}

export default AboutComponents;
