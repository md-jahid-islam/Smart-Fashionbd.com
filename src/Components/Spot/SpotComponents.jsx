import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

 const SpotComponents = () => {
 const products = [

{
    id: 2,
    name: "AXIS-Y Dark Spot Correcting Glow Serum - 50ml",
    originalPrice: 1150,
    discountedPrice: 1030,
    image: "/images/spot1.png"
},

{
  id: 2,
  name: "Benton Goodbye Redness Centella Spot Cream - 15g",
  originalPrice: 1250,
  discountedPrice: 1130,
  image: "/images/spot2.png"
},

{
  id: 2,
  name: "Cos De BAHA Vitamin C 15% Serum - 30ml",
  originalPrice: 1050,
  discountedPrice: 930,
  image: "/images/spot3.png"
},

{
  id: 2,
  name: "Cos De BAHA 2% Hydroquinone Brightening Serum - 30ml",
  originalPrice: 1150,
  discountedPrice: 1030,
  image: "/images/spot4.png"
},

{
  id: 2,
  name: "Cosrx Centella Blemish Cream - 30g",
  originalPrice: 1250,
  discountedPrice: 1130,
  image: "/images/spot5.png"
},
{
  id: 2,
  name: "Cosrx Clear Fit Master Patch (18 patches)",
  originalPrice: 450,
  discountedPrice: 360,
  image: "/images/spot7.png"
},

{
  id: 2,
  name: "Goodal Green Tangerine Vita C Dark Spot Serum - 40ml",
  originalPrice: 2250,
  discountedPrice: 2130,
  image: "/images/spot8.png"
},

{
  id: 2,
  name: "Some by mi aha, bha, PHA 14 Days Super Miracle Spot All Kill Cream - 30ml",
  originalPrice: 1550,
  discountedPrice: 1430,
  image: "/images/spot9.png"
},

{
  id: 2,
  name: "Tiam ac fighting oil-free aqua cream - 80gm",
  originalPrice: 1650,
  discountedPrice: 1530,
  image: "/images/spot10.png"
},

{
  id: 2,
  name: "Isntree Onion Newpair Essence Toner - 200ml",
  originalPrice: 1550,
  discountedPrice: 1290,
  image: "/images/spot11.png"
},

{
  id: 2,
  name: "W.Skin Laboratory A.M Clearing Toner (Anti-Melasma) - 250ml",
  originalPrice: 1950,
  discountedPrice: 1730,
  image: "/images/spot12.png"
},
{
  id: 2,
  name: "Innisfree Retinol Cica Repair Ampoule - 30ml +30ml Set",
  originalPrice: 3350,
  discountedPrice: 3130,
  image: "/images/spot14.png"
},
{
  id: 2,
  name: "Innisfree Perfect 9 Intensive Cream - 60ml",
  originalPrice: 3250,
  discountedPrice: 3150,
  image: "/images/spot16.png"
},

{
  id: 2,
  name: "Goodal Green Tangerine Vitamin C Dark Spot Cream - 50ml",
  originalPrice: 2550,
  discountedPrice: 2330,
  image: "/images/spot17.png"
},

{
  id: 2,
  name: "Goodal Green Tangerine Vitamin C Dark Spot Cream - 50ml",
  originalPrice: 2350,
  discountedPrice: 2230,
  image: "/images/spot18.png"
},

{
  id: 2,
  name: "Missha Ampoule Trial Set - 3items",
  originalPrice: 2570,
  discountedPrice: 2370,
  image: "/images/spot19.png"
},
{
    id: 2,
    name: "Some By Mi Yuja Niacin Anti Blemish Starter Kit -",
    originalPrice: 270,
    discountedPrice: 1690,
    image: "/images/spot20.png"
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

export default SpotComponents;
