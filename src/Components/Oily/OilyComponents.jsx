import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const OilyComponents = () => {
    const products = [

{
    id: 2,
    name: "Cosrx Green Tea Aqua Soothing Gel Cream - 50ml",
    originalPrice: 2100,
    discountedPrice: 1900,
    image: "/images/gel1.png"
},

{
  id: 2,
  name: "Iunik Centella Calming Gel Cream - 60ml",
  originalPrice: 1800,
  discountedPrice: 1140,
  image: "/images/gel2.png"
},

{
  id: 2,
  name: "I'm From Vitamin Tree Water Gel - 75g",
  originalPrice: 2450,
  discountedPrice: 2300,
  image: "/images/gel3.png"
},

{
  id: 2,
  name: "Cosrx Advanced Snail Mucin Gel Cleanser - 150ml",
  originalPrice: 1650,
  discountedPrice: 1500,
  image: "/images/gel4.png"
},

{
  id: 2,
  name: "Cos De BAHA Centella Gel Cream ( CG ) - 45ml",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/gel5.png"
},

{
  id: 2,
  name: "Welcos Body Phren Oriental Rose Shower Gel - 732g",
  originalPrice: 2550,
  discountedPrice: 2350,
  image: "/images/gel6.png"
},

{
  id: 2,
  name: "Cosrx Advanced Snail Mucin Gel Cleanser - 150ml",
  originalPrice: 1600,
  discountedPrice: 1500,
  image: "/images/gel7.png"
},

{
  id: 2,
  name: "Purito Oat-in calming gel cream - 100ml",
  originalPrice: 1800,
  discountedPrice: 1650,
  image: "/images/gel9.png"
},

{
  id: 2,
  name: "Cosrx Low pH Good Night Soft Peeling Gel - 120ml",
  originalPrice: 1300,
  discountedPrice: 1200,
  image: "/images/gel10.png"
},

{
  id: 2,
  name: "Isntree Onion Newpair Gel Cream - 50ml",
  originalPrice: 2000,
  discountedPrice: 1850,
  image: "/images/gel11.png"
},

{
  id: 2,
  name: "Welcos Body Phren Apple Cocktail Shower Gel -732g",
  originalPrice: 2500,
  discountedPrice: 2350,
  image: "/images/gel12.png"
},

{
  id: 2,
  name: "Welcos Body Phren Lemon Glass Shower Gel - 732g",
  originalPrice: 2500,
  discountedPrice: 2350,
  image: "/images/gel13.png"
},

{
  id: 2,
  name: "Frudia Blueberry Hydrating Cleanser Gel To Foam - 145g",
  originalPrice: 1200,
  discountedPrice: 1000,
  image: "/images/gel14.png"
},

{
  id: 2,
  name: "Beauty of Joseon Red Bean Water Gel - 100ml",
  originalPrice: 1950,
  discountedPrice: 1490,
  image: "/images/gel15.png"
},

{
  id: 2,
  name: "Thank you farmer Phyto Relieful Cica Gel Cleanser - 120ml",
  originalPrice: 1400,
  discountedPrice: 1290,
  image: "/images/gel16.png"
},
{
  id: 2,
  name: "Beauty Of Joseon Apricot Blossom Peeling Gel - 100ml",
  originalPrice: 1300,
  discountedPrice: 1200,
  image: "/images/gel18.png"
},

{
  id: 2,
  name: "Kaine Rosemary Relief Gel Cleanser - 150ml",
  originalPrice: 1500,
  discountedPrice: 1390,
  image: "/images/gel19.png"
},

{
  id: 2,
  name: "The Saem Cell Renew Bio Micro Peel Soft Gel - 160ml",
  originalPrice: 2000,
  discountedPrice: 1900,
  image: "/images/gel20.png"
},

{
  id: 2,
  name: "Farmstay Moisture Aloe Vera Soothing Gel - 300ml",
  originalPrice: 1000,
  discountedPrice: 850,
  image: "/images/gel21.png"
},

{
  id: 2,
  name: "Holika Holika Aloe 99% Soothing Gel - 250ml",
  originalPrice: 1000,
  discountedPrice: 850,
  image: "/images/gel22.png"
},

{
  id: 2,
  name: "Mary & May Sensitive Soothing Gel Cream - 70g",
  originalPrice: 2000,
  discountedPrice: 1900,
  image: "/images/gel23.png"
},

{
  id: 2,
  name: "Skin Aqua Super Moisture Gel SPF50 + PA ++++ - 110g",
  originalPrice: 1600,
  discountedPrice: 1500,
  image: "/images/gel24.png"
},

{
  id: 2,
  name: "The Saem Jeju Fresh Aloe Soothing Gel - 120ml",
  discountedPrice: 1000,
  image: "/images/gel25.png"
},

{
  id: 2,
  name: "3w Clinic 98% Snail Mucus Soothing Gel - 300ml",
  discountedPrice: 900,
  image: "/images/gel26.png"
},

{
  id: 2,
  name: "Heimish Rx Retinol Bakuchiol Hydrogel Eye Patch - 60ea",
  originalPrice: 2000,
  discountedPrice: 1800,
  image: "/images/gel27.png"
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

export default OilyComponents;
