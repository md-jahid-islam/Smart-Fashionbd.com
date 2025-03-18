import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const DryComponents = () => {
    const products = [

{
    id: 2,
    name: "Ryo Hair Loss Care Shampoo (For dry Scalp) - 400ml",
    originalPrice: 2000,
    discountedPrice: 1900,
    image: "/images/dry1.png"
},
{
  id: 2,
  name: "Cerave Hydrating Cleanser (Normal to Dry) - 236ml",
  originalPrice: 2500,
  discountedPrice: 2050,
  image: "/images/dry2.png"
},
{
  id: 2,
  name: "CeraVe Moisturizing Cream (Normal to Dry) - 236ml",
  originalPrice: 2600,
  discountedPrice: 2500,
  image: "/images/dry3.png"
},
{
  id: 2,
  name: "CeraVe Moisturizing Cream (Normal to Dry) - 56ml",
  originalPrice: 1700,
  discountedPrice: 1220,
  image: "/images/dry4.png"
},
{
  id: 2,
  name: "Cerave hydrating cleanser for normal to dry skin-87ml",
  originalPrice: 1300,
  discountedPrice: 1190,
  image: "/images/dry5.png"
},
{
  id: 2,
  name: "CeraVe Moisturizing Cream (Dry to Very Dry) - 177ml",
  originalPrice: 2000,
  discountedPrice: 1900,
  image: "/images/dry6.png"
},
{
  id: 2,
  name: "CeraVe Moisturizing Cream (Dry to Very Dry) - 50ml",
  originalPrice: 1300,
  discountedPrice: 1200,
  image: "/images/dry7.png"
},
{
  id: 2,
  name: "Missha Super Dryness Off Cleansing Oil - 305ml",
  originalPrice: 2000,
  discountedPrice: 1800,
  image: "/images/dry8.png"
},
{
  id: 2,
  name: "Neutrogena Ultra Sheer Dry Touch Sunscreen SPF 70 - 88ml",
  originalPrice: 1800,
  discountedPrice: 1700,
  image: "/images/dry9.png"
},
{
  id: 2,
  name: "Cerave Moisturizing Lotion (For dry to very dry) - 236ml",
  originalPrice: 2400,
  discountedPrice: 2280,
  image: "/images/dry10.png"
},
{
  id: 2,
  name: "Cerave Moisturizing Lotion (For normal to dry) - 87ml",
  originalPrice: 1300,
  discountedPrice: 1190,
  image: "/images/dry11.png"
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

export default DryComponents;
