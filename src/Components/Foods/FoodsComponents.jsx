import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const FoodsComponents = () => {
    const products = [

{
    id: 2,
    name: "Skinfood Rice Wash-Off Face Mask - 120gm",
    originalPrice: 1500,
    discountedPrice: 1090,
    image: "/images/food1.png"
},
{
  id: 2,
  name: "Skinfood Rice Brightening Cleansing Foam - 150ml",
  originalPrice: 1300,
  discountedPrice: 1150,
  image: "/images/food2.png"
},
{
  id: 2,
  name: "Skinfood Egg White Pore Mask - 120g",
  originalPrice: 1300,
  discountedPrice: 1200,
  image: "/images/food3.png"
},
{
  id: 2,
  name: "Skinfood Black Sugar Mask Wash Off -120gm",
  originalPrice: 1300,
  discountedPrice: 1200,
  image: "/images/food4.png"
},
{
  id: 2,
  name: "Skinfood Black Sugar Perfect Essential Scrub 2X - 210g",
  originalPrice: 2000,
  discountedPrice: 1890,
  image: "/images/food5.png"
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

export default FoodsComponents;
