import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

 const EssenceComponents = () => {
 const products = [

{
    id: 2,
    name: "Pyunkang Yul [PKY] Essence Toner for Deep Hydration, Highly Concentrated Essence Facial",
    originalPrice: 1830,
    discountedPrice: 1640,
    image: "/images/Essence1.png"
},
{
    id: 2,
    name: "NEOGEN DERMALOGY Real Ferment Micro Essence 5.07 Fl Oz (150ml) - 93% Naturally",
    originalPrice: 4000,
    discountedPrice: 3850,
    image: "/images/Essence2.png"
},
{
    id: 2,
    name: "essence | Lash Princess False Lash Effect Mascara | Volumizing & Lengthening | Cruelty Free &",
    originalPrice: 510,
    discountedPrice: 490,
    image: "/images/Essence3.png"
},
{
    id: 2,
    name: "essence | Lash Princess False Lash Waterproof Mascara | Vegan & Cruelty Free | For",
    originalPrice: 520,
    discountedPrice: 510,
    image: "/images/Essence4.png"
},
{
    id: 2,
    name: "essence | Lash Princess Curl & Volume Mascara | Vegan & Cruelty Free",
    originalPrice: 520,
    discountedPrice: 510,
    image: "/images/Essence5.png"
},
{
    id: 2,
    name: "essence | Lash Princess Sculpted Volume Mascara | Defining & Volumizing | Vegan & Cruelty",
    originalPrice: 520,
    discountedPrice: 510,
    image: "/images/Essence6.png"
},
{
    id: 2,
    name: "essence | I Love Extreme Crazy Volume Mascara (Pack of 1) | Intense & Dramatic Volume &",
    originalPrice: 520,
    discountedPrice: 510,
    image: "/images/Essence7.png"
},
{
    id: 2,
    name: "essence | Lash Without Limits Extreme Lengthening & Volume Mascara (01 | Extra Black) |",
    originalPrice: 520,
    discountedPrice: 510,
    image: "/images/Essence8.png"
},
{
    id: 2,
    name: "I'm From Mugwort Essence | Vegan Extract - Soothe Sensitive and Irritated Skin, Redness",
    originalPrice: 2890,
    discountedPrice: 2750,
    image: "/images/Essence9.png"
},
{
    id: 2,
    name: "essence | Lash Princess Mascara Primer for Extra Length & Volume (1 Pack) | Voluminous,",
    originalPrice: 520,
    discountedPrice: 510,
    image: "/images/Essence10.png"
},
{
    id: 2,
    name: "essence | Stay & Play Gel Eyeliner | Super Soft Gel-like Texture | Waterproof & Longlasting |",
    originalPrice: 520,
    discountedPrice: 510,
    image: "/images/Essence11.png"
},
{
    id: 2,
    name: "essence | Volume Booster Lash Primer Mascara | Infused with Mango Butter and Acai Oil for",
    originalPrice: 520,
    discountedPrice: 510,
    image: "/images/Essence12.png"
},
{
    id: 2,
    name: "essence | Baby Got Bronze | Cream Bronzer Stick Easy to Apply & Blend | Vegan & Cruelt",
    originalPrice: 520,
    discountedPrice: 510,
    image: "/images/Essence13.png"
},
{
    id: 2,
    name: "essence | Baby Got Blush (30 | Rosé All Day) | Easy to Apply & Blend Pigmented Cream Blush",
    originalPrice: 520,
    discountedPrice: 510,
    image: "/images/Essence14.png"
},
{
    id: 2,
    name: "Covergirl Simply Ageless Skin Perfector Essence Foundation, 40 Medium, Tinted Skin",
    originalPrice: 1150,
    discountedPrice: 1100,
    image: "/images/Essence15.png"
},
{
    id: 2,
    name: "[I'm From] Miniatures of Rice Toner, Mugwort Essence, Fig Boosting Essence (Mugwort),",
    originalPrice: 1530,
    discountedPrice: 1440,
    image: "/images/Essence16.png"
},
{
    id: 2,
    name: "Essence de Beaute - Collagen Cream 8oz",
    originalPrice: 8000,
    discountedPrice: 7200,
    image: "/images/Essence17.png"
},
{
    id: 2,
    name: "IOPE Antioxidant First-Step Essence Face Toner, Premium Korean Bio-Conditioning",
    originalPrice: 3200,
    discountedPrice: 3120,
    image: "/images/Essence18.png"
},
{
    id: 2,
    name: "Pyunkang Yul [PKY] Essence Toner for Deep Hydration, Highly Concentrated Essence Facial",
    originalPrice: 1830,
    discountedPrice: 1640,
    image: "/images/Essence19.png"
},
{
    id: 2,
    name: "mixsoon Bifida Ferment Essence 3.38 fl oz / 100ml",
    originalPrice: 2400,
    discountedPrice: 2340,
    image: "/images/Essence20.png"
},
{
    id: 2,
    name: "JIN JUNG SUNG Soothing Non-sticky Face Moisturizer Essence Serum 5 Oz Oily Dry Sensitive",
    originalPrice: 2360,
    discountedPrice: 2210,
    image: "/images/Essence21.png"
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
                            <img className='w-full h-44 rounded-2xl object-cover' src={product.image} alt={product.name} />
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

 export default EssenceComponents;
