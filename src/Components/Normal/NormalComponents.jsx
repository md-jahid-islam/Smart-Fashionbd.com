import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const NormalComopnets = () => {
    const products = [

{
    id: 2,
    name: "Dear Klairs Rich Moist Soothing Cream - 80ml",
    originalPrice: 2500,
    discountedPrice: 2300,
    image: "/images/normal1.png"
},
{
  id: 2,
  name: "Dear Klairs Midnight Blue Calming Cream - 30ml",
  originalPrice: 2500,
  discountedPrice: 1750,
  image: "/images/normal2.png"
},{
  id: 2,
  name: "Guerisson 9 Complex Cream - 70g",
  originalPrice: 1600,
  discountedPrice: 1450,
  image: "/images/normal3.png"
},
{
  id: 2,
  name: "Mamonde Rose Water Toner - 250ml",
  originalPrice: 1800,
  discountedPrice: 1700,
  image: "/images/normal4.png"
},
{
  id: 2,
  name: "Nacific Fresh Herb Origin Serum - 50ml",
  originalPrice: 1800,
  discountedPrice: 1700,
  image: "/images/normal5.png"
},
{
  id: 2,
  name: "Tiam pore minimizing 21 cream - 60ml",
  originalPrice: 1800,
  discountedPrice: 1490,
  image: "/images/normal6.png"
},
{
  id: 2,
  name: "Tiam pore minimizing 21 serum - 40ml",
  originalPrice: 1700,
  discountedPrice: 1490,
  image: "/images/normal7.png"
},
{
  id: 2,
  name: "The Yeon vita7 energy peeling gel - 100ml",
  originalPrice: 1400,
  discountedPrice: 1290,
  image: "/images/normal8.png"
},
{
  id: 2,
  name: "he YEON Refining Calamine Pink Spot - 15ml",
  originalPrice: 1500,
  discountedPrice:  1400,
  image: "/images/normal9.png"
},
{
  id: 2,
  name: "3w clinic crystal white milky body lotion - 150gm",
  originalPrice: 1600,
  discountedPrice: 1090,
  image: "/images/normal10.png"
},
{
  id: 2,
  name: "3w clinic crystal white milky cream - 50gm",
  originalPrice: 1300,
  discountedPrice: 950,
  image: "/images/normal11.png"
},
{
  id: 2,
  name: "3w clinic crystal white milky essence vitamin+ - 150ml",
  originalPrice: 1500,
  discountedPrice: 1300,
  image: "/images/normal12.png"
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

export default NormalComopnets;
