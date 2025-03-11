import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const CombinationComponents = () => {
    const products = [

{
    id: 2,
    name: "Beaute Melasma-X Aha Bha Brightening Foam Cleansing - 160ml",
    originalPrice: 1200,
    discountedPrice: 750,
    image: "/images/camvition1.png"
},

{
  id: 2,
  name: "Beaute Melasma-X Moringa Brightening Cool Soothing Gel - 160ml",
  originalPrice: 1000,
  discountedPrice: 850,
  image: "/images/camvition2.png"
},

{
  id: 2,
  name: "Benton Aloe BHA Skin Toner - 200ml",
  originalPrice: 1700,
  discountedPrice: 1590,
  image: "/images/camvition3.png"
},

{
  id: 2,
  name: "Beauty of Joseon Rice + Probiotics Sunscreen - 50ml",
  originalPrice: 1800,
  discountedPrice: 1400,
  image: "/images/camvition4.png"
},

{
  id: 2,
  name: "Beauty of Joseon Radiance Cleansing Balm - 100ml",
  originalPrice: 1800,
  discountedPrice: 1700,
  image: "/images/camvition5.png"
},

{
  id: 2,
  name: "Beauty of Joseon Radiance Cleansing Balm - 100ml",
  originalPrice: 1800,
  discountedPrice: 1700,
  image: "/images/camvition6.png"
},

{
  id: 2,
  name: "Banila Co Clean It Zero Cleansing Balm Original - 100ml",
  originalPrice: 2200,
  discountedPrice: 1720,
  image: "/images/camvition7.png"
},

{
  id: 2,
  name: "Cosrx Hyaluronic Acid Hydra Power Essence - 100ml",
  originalPrice: 1650,
  discountedPrice: 1500,
  image: "/images/camvition8.png"
},

{
  id: 2,
  name: "Cosrx Galactomyces 95 Tone Balancing Essence - 100ml",
  originalPrice: 1650,
  discountedPrice: 1500,
  image: "/images/camvition9.png"
},

{
  id: 2,
  name: "Cosrx Balancium Comfort Ceramide Cream - 80 ml",
  originalPrice: 1900,
  discountedPrice: 1800,
  image: "/images/camvition10.png"
},

{
  id: 2,
  name: "Cosrx Centella Blemish Cream - 30g",
  originalPrice: 1700,
  discountedPrice: 1290,
  image: "/images/camvition12.png"
},

{
  id: 2,
  name: "Cosrx Centella Water Alcohol-Free Toner - 150ml",
  originalPrice: 1500,
  discountedPrice: 1390,
  image: "/images/camvition13.png"
},

{
  id: 2,
  name: "Cosrx Bha Blackhead Power Liquid - 100ml",
  originalPrice: 1650,
  discountedPrice: 1550,
  image: "/images/camvition14.png"
},

{
  id: 2,
  name: "Cosrx Bha Blackhead Power Liquid - 100ml",
  originalPrice: 1900,
  discountedPrice: 1440,
  image: "/images/camvition15.png"
},

{
  id: 2,
  name: "Cosrx Clear Fit Master Patch (18 patches)",
  originalPrice: 400,
  discountedPrice: 350,
  image: "/images/camvition16.png"
},

{
  id: 2,
  name: "Cosrx Propolis Synergy Toner - 50ml",
  originalPrice: 800,
  discountedPrice: 750,
  image: "/images/camvition17.png"
},

{
  id: 2,
  name: "Cosrx Advanced Snail 96 Mucin Power Essence - 30ml",
  originalPrice: 600,
  discountedPrice: 499,
  image: "/images/camvition18.png"
},

{
  id: 2,
  name: "Cosrx Advanced Snail 96 Mucin Power Essence - 30ml",
  originalPrice: 2100,
  discountedPrice: 1900,
  image: "/images/camvition19.png"
},

{
  id: 2,
  name: "Derma house stretch care cream - 180ml",
  originalPrice: 1200,
  discountedPrice: 920,
  image: "/images/camvition20.png"
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
                                    <div className='bg-white  p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition'><FiSearch size={20} /></div>
                                    <div className='bg-white  p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition opacity-0 group-hover:opacity-100'><span>Quick View</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h4 className='font-semibold'>{product.name}</h4>
                            <p className='text-gray-500 line-through'>{product.originalPrice}৳</p>
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

export default CombinationComponents;
