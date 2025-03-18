import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

 const OilComponents = () => {
 const products = [

{
    id: 2,
    name: "Benton Aloe BHA Skin Toner - 200ml",
    originalPrice: 1550,
    discountedPrice: 1460,
    image: "/images/oil1.png"
},
{
  id: 2,
  name: "Cosrx Salicylic Acid Daily Gentle Cleanser - 150ml",
  originalPrice: 1199,
  discountedPrice: 999,
  image: "/images/oil2.png"
},
{
  id: 2,
  name: "Cosrx Oil-Free Ultra-Moisturizing Lotion with Birch Sap - 100ml",
  originalPrice: 1450,
  discountedPrice: 1360,
  image: "/images/oil3.png"
},
{
  id: 2,
  name: "Cosrx Galactomyces 95 Tone Balancing Essence - 100ml",
  originalPrice: 1550,
  discountedPrice: 1460,
  image: "/images/oil4.png"
},
{
  id: 2,
  name: "Cosrx Low pH Good Morning Gel Cleanser - 150ml",
  originalPrice: 1199,
  discountedPrice: 999,
  image: "/images/oil5.png"
},
{
  id: 2,
  name: "Cosrx AHA BHA Clarifying Treatment Toner - 150ml",
  originalPrice: 1450,
  discountedPrice: 1360,
  image: "/images/oil6.png"
},
{
  id: 2,
  name: "Cosrx Low pH Good Morning Gel Cleanser - 50ml",
  originalPrice: 650,
  discountedPrice: 560,
  image: "/images/oil7.png"
},
{
  id: 2,
  name: "Cosrx One Step Original Clear Pad 70 pads",
  originalPrice: 1850,
  discountedPrice: 1760,
  image: "/images/oil8.png"
},
{
  id: 2,
  name: "Dear Klairs Supple Preparation Unscented Toner - 180ml",
  originalPrice: 1890,
  discountedPrice: 1660,
  image: "/images/oil9.png"
},
{
  id: 2,
  name: "Dear Klairs Midnight Blue Calming Cream - 60ml",
  originalPrice: 2550,
  discountedPrice: 2460,
  image: "/images/oil10.png"
},
{
  id: 2,
  name: "Dear Klairs Midnight Blue Calming Cream - 30ml",
  originalPrice: 2050,
  discountedPrice: 1760,
  image: "/images/oil11.png"
},
{
  id: 2,
  name: "Iunik centella edition Skincare Set - (2pcs)",
  originalPrice: 1550,
  discountedPrice: 1460,
  image: "/images/oil12.png"
},
{
  id: 2,
  name: "Iunik Tea Tree Relief Toner - 200ml",
  originalPrice: 1690,
  discountedPrice: 1560,
  image: "/images/oil13.png"
},
{
  id: 2,
  name: "Iunik Centella Calming Gel Cream - 60ml",
  originalPrice: 1630,
  discountedPrice: 1450,
  image: "/images/oil14.png"
},
{
  id: 2,
  name: "Iunik Centella Bubble Cleansing Foam - 150ml",
  originalPrice: 1790,
  discountedPrice: 1560,
  image: "/images/oil15.png"
},


 ];

    return (
      <>  
      <section className="container mx-auto px-4 py-10 pt-44 ">

            <div className='text-center'>
            <h3 className='underline font-bold text-2xl'>Deal Of The Day</h3>
            </div>
            <div className='flex flex-wrap justify-center gap-7 mt-10'>
                {products.map(product => ( 
                    <div key={product.id} className='relative group w-56 h-96 bg-white shadow-lg rounded-3xl p-4 flex flex-col justify-between'>
                        <div className='relative'>
                            <img className='w-full h-40 rounded-2xl object-cover' src={product.image} alt={product.name} />
                            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <div className='flex gap-4'>
                            <div className='bg-white  p-2 rounded-full shadow-md cursor-pointer hover:bg-amber-700 transition'><FiSearch size={20} /></div>
                            <div className='bg-white  p-2 rounded-full shadow-md cursor-pointer hover:bg-amber-700 transition opacity-0 group-hover:opacity-100'><span>Quick View</span></div>
                            </div>
                            </div>
                        </div>
                        <div className='text-center'>
                        <h4 className='text-black font-semibold'>{product.name}</h4>
                        <p className='text-black line-through'>{product.originalPrice}৳</p>
                        <p className='text-red-500 font-bold'>{product.discountedPrice}৳</p>
                        </div>
                        <button className='mt-2 bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 group hover:bg-blue-700 transition'>
                        Add to Cart <BsCart className='opacity-0 group-hover:opacity-100 transition-opacity duration-300' size={20} />
                        </button>
                    </div>
                ))}
            </div>
        </section>
      </>
    );
 }

 export default OilComponents;
