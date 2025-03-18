import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const BlackheadsComopnents = () => {
    const products = [

{
    id: 2,
    name: "Cosrx Bha Blackhead Power Liquid - 100ml",
    originalPrice: 1550,
    discountedPrice: 1460,
    image: "/images/blackhead1.png"
},

{
  id: 2,
  name: "Innisfree Super Volcanic Pore Clay Mask - 100ml",
  originalPrice: 1590,
  discountedPrice: 1520,
  image: "/images/blackhead3.png"
},

{
  id: 2,
  name: "Some by mi Bye Bye Blackhead 30 Days Miracle Green Tea Tox Bubble Cleanser - 120g",
  originalPrice: 1390,
  discountedPrice: 1260,
  image: "/images/blackhead4.png"
},

{
  id: 2,
  name: "Cosrx Bha Blackhead Power Liquid - 100ml",
  originalPrice: 1550,
  discountedPrice: 1460,
  image: "/images/blackhead5.png"
},

{
  id: 2,
  name: "Dear Klairs Gentle Black Sugar Facial Polish - 110g",
  originalPrice: 1950,
  discountedPrice: 1860,
  image: "/images/blackhead6.png"
},

{
  id: 2,
  name: "Cosrx Pure Fit Cica Clear Cleansing Oil - 200ml",
  originalPrice: 1950,
  discountedPrice: 1760,
  image: "/images/blackhead7.png"
},

{
  id: 2,
  name: "CeraVe Acne Control Cleanser - 237ml",
  originalPrice: 2780,
  discountedPrice: 2560,
  image: "/images/blackhead8.png"
},

{
  id: 2,
  name: "Innisfree Volcanic BHA Pore Cleansing Foam - 150ml",
  originalPrice: 1950,
  discountedPrice: 1860,
  image: "/images/blackhead10.png"
},

{
  id: 2,
  name: "Pyunkang Yul Acne Facial Cleanser - 120ml",
  originalPrice: 1150,
  discountedPrice: 1060,
  image: "/images/blackhead11.png"
},

{
  id: 2,
  name: "Numbuzin Easy Peasy Cleansing Oil - 200ml",
  originalPrice: 1950,
  discountedPrice: 1760,
  image: "/images/blackhead12.png"
},


{
  id: 2,
  name: "Isntree Hyper Acid4 Aha Bha Lha 30 Serum - 20ml",
  originalPrice: 1590,
  discountedPrice: 1460,
  image: "/images/blackhead13.png"
},
{
  id: 2,
  name: "Eshumi 24K Real Gold Peel Off Pack - 100g",
  originalPrice: 1750,
  discountedPrice: 1660,
  image: "/images/blackhead14.png"
},

{
  id: 2,
  name: "Mary & May Blackberry Complex Glow Wash Off Pack - 125g",
  originalPrice: 2250,
  discountedPrice: 2210,
  image: "/images/blackhead15.png"
},

{
  id: 2,
  name: "Anua Heartleaf 77% Clear Pad (70pcs) - 160ml",
  originalPrice: 2050,
  discountedPrice: 1860,
  image: "/images/blackhead16.png"
},

{
  id: 2,
  name: "Numbuzin No.3 Pore & Makeup Cleansing Balm With Green Tea And Charcoal - 85g",
  originalPrice: 1850,
  discountedPrice: 1630,
  image: "/images/blackhead17.png"
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
                            <h4 className=' text-black font-semibold'>{product.name}</h4>
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

export default BlackheadsComopnents;
