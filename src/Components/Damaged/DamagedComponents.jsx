import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

 const DamagedComponents = () => {
 const products = [

{
    id: 2,
    name: "Aromatica Reviving Rose Infusion Treatment Toner - 200ml",
    originalPrice: 3300,
    discountedPrice: 2500,
    image: "/images/damege1.png"
},

{
  id: 2,
  name: "AXIS-Y The Mini Glow Set - (4pcs)",
  originalPrice: 1400,
  discountedPrice: 940,
  image: "/images/damege2.png"
},

{
  id: 2,
  name: "AXIS-Y Quinoa One Step Balanced Gel Cleanser - 180ml",
  originalPrice: 1700,
  discountedPrice: 1490,
  image: "/images/damege3.png"
},

{
  id: 2,
  name: "Aromatica Circulating Juniper berry & Ginger Body Oil - 100ml",
  originalPrice: 1800,
  discountedPrice: 1700,
  image: "/images/damege4.png"
},

{
  id: 2,
  name: "Atomy Saengmodan Hair Tonic - 200ml",
  originalPrice: 2100,
  discountedPrice: 1750,
  image: "/images/damege5.png"
},

{
  id: 2,
  name: "Derma house stretch care cream - 180ml",
  originalPrice: 1200,
  discountedPrice: 920,
  image: "/images/damege6.png"
},

{
  id: 2,
  name: "Koelcia Tomato Soothing Gel - 300g",
  originalPrice: 910,
  discountedPrice: 860,
  image: "/images/damege7.png"
},

{
  id: 2,
  name: "Some by mi Snail Truecica Miracle Repair Low Ph Gel Cleanser - 100ml",
  originalPrice: 1400,
  discountedPrice: 1290,
  image: "/images/damege8.png"
},

{
  id: 2,
  name: "Dabo charcoal foam cleansing brightening skin - 150ml",
  originalPrice: 1100,
  discountedPrice: 900,
  image: "/images/damege9.png"
},

{
  id: 2,
  name: "FarmStay Dr-V8 Vitamin Cleansing Foam - 100ml",
  originalPrice: 850,
  discountedPrice: 750,
  image: "/images/damege10.png"
},

{
  id: 2,
  name: "Farmstay Olive Intensive Moisture Foam Cleanser - 100ml",
  originalPrice: 850,
  discountedPrice: 750,
  image: "/images/damege11.png"
},

{
  id: 2,
  name: "I'm From Fig Scrub Mask - 120g",
  originalPrice: 2800,
  discountedPrice: 2590,
  image: "/images/damege12.png"
},

{
  id: 2,
  name: "Jigott Snail Repairing Cream -100g",
  originalPrice: 1200,
  discountedPrice: 950,
  image: "/images/damege13.png"
},

{
  id: 2,
  name: "Cos De BAHA Centella Gel Cream ( CG ) - 45ml",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/damege14.png"
},

{
  id: 2,
  name: "Koelcia Collagen Whitening Cream - 50g",
  originalPrice: 1000,
  discountedPrice: 900,
  image: "/images/damege15.png"
},

{
  id: 2,
  name: "urito Seoul Mighty Bamboo Panthenol Cream - 100ml",
  originalPrice: 2200,
  discountedPrice: 1890,
  image: "/images/damege16.png"
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

 export default DamagedComponents;
