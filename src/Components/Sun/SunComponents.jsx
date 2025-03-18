import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const SunComponents = () => {
    const products = [


{
  id: 2,
  name: "Benton Aloe Propolis Soothing Gel - 100ml",
  originalPrice: 1690,
  discountedPrice: 1560,
  image: "/images/sun2.png"
},
{
  id: 2,
  name: "Isntree hyaluronic acid Natural Suncream SPF50 PA++++ - 50ml",
  originalPrice: 110,
  discountedPrice: 1030,
  image: "/images/sun3.png"
},
{
  id: 2,
  name: "The Saem Eco Earth Pink Sun Cream (SPF50+ PA++++) - 50g",
  originalPrice: 1590,
  discountedPrice: 1460,
  image: "/images/sun7.png"
},
{
  id: 2,
  name: "RAIP R3 Argan Hair Oil - 100ml",
  originalPrice: 980,
  discountedPrice: 850,
  image: "/images/sun8.png"
},
{
  id: 2,
  name: "Missha All Around Safe Block Cotton Sun SPF50++ - 50ml",
  originalPrice: 1190,
  discountedPrice: 870,
  image: "/images/sun9.png"
},
{
  id: 2,
  name: "Iunik Centella Calming Daily Sunscreen - 60ml",
  originalPrice: 1590,
  discountedPrice: 1460,
  image: "/images/sun10.png"
},
{
  id: 2,
  name: "Beaute Melasma-X Vita-Collagen Tone-Up Sun Cream SPF50+",
  originalPrice: 1150,
  discountedPrice: 1060,
  image: "/images/sun11.png"
},
{
  id: 2,
  name: "Beauty of Joseon Rice + Probiotics Sunscreen - 10ml",
  originalPrice: 399,
  discountedPrice: 299,
  image: "/images/sun12.png"
},
{
  id: 2,
  name: "3W Clinic Crystal White Milky Sun Cream - 50ml",
  originalPrice: 1190,
  discountedPrice: 960,
  image: "/images/sun13.png"
},
{
  id: 2,
  name: "Missha All Around Safe Block Soft Finish Sun Milk EX SPF50+/PA+++ - 70ml",
  originalPrice: 1590,
  discountedPrice: 1240,
  image: "/images/sun14.png"
},
{
  id: 2,
  name: "W.Skin Laboratory Triple Care Sun Cream SPF50+ PA++ - 60ml",
  originalPrice: 1390,
  discountedPrice: 1260,
  image: "/images/sun15.png"
},
{
  id: 2,
  name: "Jigott Whitening UV Sun Block Cream - 70ml",
  originalPrice: 980,
  discountedPrice: 850,
  image: "/images/sun16.png"
},
{
  id: 2,
  name: "Abib Quick Sunstick Protection Bar Spf50+PA++++ - 22g",
  originalPrice: 1790,
  discountedPrice: 1560,
  image: "/images/sun17.png"
},
{
  id: 2,
  name: "Beauty of Joseon Matte Sun Stick : (Mugwort+Camelia) - 18g",
  originalPrice: 1590,
  discountedPrice: 1460,
  image: "/images/sun18.png"
},
{
  id: 2,
  name: "Tocobo Cotton Soft Sun Stick Spf50+PA++++ - 19g",
  originalPrice: 1990,
  discountedPrice: 1760,
  image: "/images/sun19.png"
},
{
  id: 2,
  name: "Tocobo Vita Berry Pore Toner - 150ml",
  originalPrice: 2450,
  discountedPrice: 2030,
  image: "/images/sun20.png"
},

      
    ];

    return (
      <>  
      <section className="container mx-auto py-10 px-10 pt-44 "> 

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

export default SunComponents;
