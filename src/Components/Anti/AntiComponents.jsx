import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const AntiComponents = () => {
    const products = [

{
    id: 2,
    name: "Cosrx Advanced Snail 92 All In One Cream - 100g",
    originalPrice: 1450,
    discountedPrice: 1360,
    image: "/images/anti1.png"
},
{
    id: 2,
    name: "Cosrx All About Snail Kit (4-step)",
    originalPrice: 1950,
    discountedPrice: 1860,
    image: "/images/anti2.png"
},
{
  id: 2,
  name: "Cosrx Advanced Snail 96 Mucin Power Essence - 30ml",
  originalPrice: 450,
  discountedPrice: 390,
  image: "/images/anti3.png"
},
{
  id: 2,
  name: "Dr. Jart+ V7 Toning Light Cream - 50ml",
  originalPrice: 3450,
  discountedPrice: 3260,
  image: "/images/anti4.png"
},
{
  id: 2,
  name: "Guerisson 9 Complex Cream - 70g",
  originalPrice: 1450,
  discountedPrice: 1360,
  image: "/images/anti5.png"
},
{
  id: 2,
  name: "Goodal Green Tangerine Vita C Dark Spot Care 70 Pad - 160ml",
  originalPrice: 2950,
  discountedPrice: 2660,
  image: "/images/anti6.png"
},
{
  id: 2,
  name: "HaruHaru Wonder Black Rice Hyaluronic Anti-wrinkle Serum - 50ml",
  originalPrice: 1550,
  discountedPrice: 1460,
  image: "/images/anti7.png"
},
{
  id: 2,
  name: "Iunik black Snail Restore Cream - 60ml",
  originalPrice: 1750,
  discountedPrice: 1660,
  image: "/images/anti8.png"
},
{
  id: 2,
  name: "Isntree Green Tea Fresh Serum - 50ml",
  originalPrice: 1790,
  discountedPrice: 1760,
  image: "/images/anti9.png"
},
{
  id: 2,
  name: "Innisfree Jeju Orchid Eye Cream - 30ml",
  originalPrice: 2750,
  discountedPrice: 2660,
  image: "/images/anti10.png"
},
{
  id: 2,
  name: "Innisfree Jeju orchid enriched cream - 50ml",
  originalPrice: 2960,
  discountedPrice: 2560,
  image: "/images/anti11.png"
},
{
  id: 2,
  name: "Innisfree Black Tea Youth Enhancing Ampoule - 30 ml",
  originalPrice: 3450,
  discountedPrice: 3260,
  image: "/images/anti12.png"
},
{
  id: 2,
  name: "Innisfree Black Tea Youth Enhancing Ampoule - 30 ml",
  originalPrice: 3540,
  discountedPrice: 3280,
  image: "/images/anti13.png"
},
{
  id: 2,
  name: "Some by mi snail truecica Miracle Repair Cream - 60gm",
  originalPrice: 1650,
  discountedPrice: 1560,
  image: "/images/anti14.png"
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

 export default AntiComponents;
