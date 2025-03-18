import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

 const CmcComponents = () => {
 const products = [

{
    id: 2,
    name: "9oz CMC Powder, 100% Pure Food Grade CMC Powder for Fondant, Ice Cream, Cake",
    originalPrice: 1000,
    discountedPrice: 950,
    image: "/images/cmc1.png"
},
{
  id: 2,
  name: "CMC Tylos Pot of Powder; Food Glue; 35 g",
  originalPrice: 1030,
  discountedPrice: 950,
  image: "/images/cmc2.png"
},

{
  id: 2,
  name: "Penguin Pottery Glazes - CMC Gum Solution - Add to Ceramic Glazes to Improve 16oz",
  originalPrice: 2200,
  discountedPrice: 2150,
  image: "/images/cmc3.png"
},
{
  id: 2,
  name: "18oz Gum Arabic Powder, 18oz CMC Powder for Fondant and 18 oz Food-Grade Methylcellulose",
  originalPrice: 7200,
  discountedPrice: 6350,
  image: "/images/cmc4.png"
},
{
  id: 2,
  name: "Physicians Formula Mineral Powder Medium Beige, Dermatologist Tested,",
  originalPrice: 1700,
  discountedPrice: 1550,
  image: "/images/cmc6.png"
},
{
  id: 2,
  name: "Comfort Cool NC79494 Thumb CMC Abduction Left, Small",
  originalPrice: 4400,
  discountedPrice: 4220,
  image: "/images/cmc7.png"
},
{
  id: 2,
  name: "4oz Sodium Alginate Powder, 100% Pure Food Grade Sodium Alginate Powder for Making",
  originalPrice: 1000,
  discountedPrice: 950,
  image: "/images/cmc8.png"
},
{
  id: 2,
  name: "Spartan Industrial - 3” X 12” (1000 Count) 2 Mil Heavy Duty Flat",
  originalPrice: 3250,
  discountedPrice: 3140,
  image: "/images/cmc9.png"
},
{
  id: 2,
  name: "Pooh Modeling Works CMC-01 Beltex Mokenchu Decal, Full Color, Plastic Model Decal",
  originalPrice: 2670,
  discountedPrice: 2450,
  image: "/images/cmc10.png"
},
{
  id: 2,
  name: "Pooh Modeling Works CMC-01 Beltex Mokenchu Decal, Full Color, Plastic Model Decal",
  originalPrice: 2570,
  discountedPrice: 2440,
  image: "/images/cmc11.png"
},
{
  id: 2,
  name: "9oz CMC Powder, 100% Pure Food Grade CMC Powder for Fondant, Ice Cream, Cake",
  originalPrice: 1000,
  discountedPrice: 950,
  image: "/images/cmc12.png"
},
{
  id: 2,
  name: "Collagen Anti-Aging Cream - Moisturises, nourishes, locks in",
  originalPrice: 1800,
  discountedPrice: 1650,
  image: "/images/cmc13.png"
},
{
  id: 2,
  name: "Spicy World Zinc Oxide 1 Pound Bag - NON NANO Uncoated - 100% Pure Pharmaceutical",
  originalPrice: 1530,
  discountedPrice: 1420,
  image: "/images/cmc14.png"
},
{
  id: 2,
  name: "Glitter Freckles Face Tattoo, Gold Freckle Tattoo, Sparkle Freckle Temporary",
  originalPrice: 1000,
  discountedPrice: 950,
  image: "/images/cmc15.png"
},
{
  id: 2,
  name: "AMACO 1-Pint Gum Solution",
  originalPrice: 1660,
  discountedPrice: 1490,
  image: "/images/cmc16.png"
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
                        <p className='text-black  line-through'>{product.originalPrice}৳</p>
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

 export default CmcComponents;
