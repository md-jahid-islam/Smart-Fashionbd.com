import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

 const ReturnPolicyComponents = () => {
 return (
 <>
 <nav>
    <div className="container max-w-auto max-h-auto max-md: max-lg: max-2xl: ">
        <div className=' pt-56'>
            <h2 className=' text-xl'>Please inspect your order thoroughly in the presence of the delivery agent. If you notice any issues with the packaging or product, contact us immediately before opening the product seal. We will not be able to address any complaints regarding the product's condition once the delivery agent has left.Please inspect your order thoroughly in the presence of the delivery agent. If you notice any issues with the packaging or product, contact us immediately before opening the product seal. We will not be able to address any complaints regarding the product's condition once the delivery agent has left.</h2>
            <p className=' py-3'>প্রোডাক্ট নেওয়ার সময় ডেলিভারি এজেন্টের সামনে চেক করে নিবেন। পার্সেলে কোন সমস্যা মনে হলে, প্রোডাক্টের সীল না ভেঙে ডেলিভারি এজেন্টের সামনে আমাদের সাথে যোগাযোগ করবেন। অন্যথায় ডেলিভারি এজেন্ট চলে যাওয়ার পরে কোন অভিযোগ গ্রহণ করা হবে না।</p>

            <h2 className=' py-3 text-xl'>Return and Refund Policy:</h2>
            <p className=' py-3'>At Korean Mart BD, we strive to ensure customer satisfaction with every purchase. If, for any reason, you are not satisfied with a product, we are here to assist you with returns and refunds.</p>

            <h2 className=' py-3 text-xl '>1. Returns</h2>
            <li className=' py-2'>Eligibility: Products must be returned within 7 days of delivery. Items must be unused, in their original packaging, and in the same condition that you received them.</li>
            <li className=' py-2'>Return process: To initiate a return, please contact our customer service team at 01540587085. We will provide instructions for returning your item.</li>
            <li className=' py-2'>Return shipping: You are responsible for paying the shipping costs for returning the product, unless the return is due to a product defect or an error on our part.</li>
            
            <h2 className=' py-3 text-xl '>2. Refunds</h2>
            <li className=' py-2'>Once we receive your returned item, we will inspect it and notify you of the approval or rejection of your refund. If approved, your refund will be processed.</li>
            <li className=' py-2'>Timeline: The refund will be completed within 7-10 working days after approval of the return request.</li>
            <li className=' py-2'>Refund method: Refunds will be issued to the original method of payment (credit card, bank transfer, etc.). In some cases, it may take additional time for your financial institution to process the refund.</li>
            <li className=' py-2'>Partial refunds: Certain situations may qualify for partial refunds, such as items that are returned with signs of use or missing parts.</li>
            
                        
            <h2 className=' py-3 text-xl '>3. Exchanges</h2>
            <li className=' py-2'>We only replace items if they are defective or damaged. If you need to exchange a product for the same item, please contact our customer service.</li>
             
            <h2 className=' py-3 text-xl '>4. Cancellations</h2>
            <li className=' py-2'>Orders can be canceled before they are shipped. Please reach out to us as soon as possible if you wish to cancel an order.</li>

                
            <h2 className=' py-3 text-xl '>5. Contact Us</h2>
            <li className=' py-2'>For questions about returns, refunds, or exchanges, please contact us at: +880 1540587085, +880 1540601832 </li>
          
            {/* Social Media Links */}
            <div className=" flex py-4 space-x-6">
            <a href="https://www.facebook.com/jahidul.islam.98621/" target="_blank" className="text-gray-400 hover:text-blue-500 text-xl"><FaFacebook /></a>
            <a href="https://x.com/JIslam24072" target="_blank" className="text-gray-400 hover:text-blue-500 text-xl"><FaTwitter /></a>
            <a href="https://www.instagram.com/jahidulislamwebbd/" target="_blank" className="text-gray-400 hover:text-red-500 text-xl"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/jahidul-islam-a5021b325/" target="_blank" className="text-gray-400 hover:text-blue-500 text-xl"><FaLinkedin /></a>
          
            </div>
       </div>
    </div>
 </nav>
 
 </>
 
 )
 }

 export default ReturnPolicyComponents