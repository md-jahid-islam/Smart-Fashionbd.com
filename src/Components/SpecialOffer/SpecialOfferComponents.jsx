import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const SpecialOfferComponents = () => {
    const products = [

{
    id: 2,
    name: "Homecourt Hand Cream, Non-Greasy Moisturizer for Hydrated, Nourished & Soft Hands",
    originalPrice: 6520,
    discountedPrice: 4730,
    image: "/images/specialoffer1.png"
},
{
  id: 2,
  name: "LifeCell All In One Anti-Aging Cream – Reduces Wrinkles, Fine Lines, Dark Circles & Sun",
  originalPrice: 9520,
  discountedPrice: 8730,
  image: "/images/specialoffer2.png"
},

{
  id: 2,
  name: "LifeCell All In One Anti-Aging Cream – Reduces Wrinkles, Fine Lines, Dark Circles & Sun",
  originalPrice: 7520,
  discountedPrice: 5530,
  image: "/images/specialoffer3.png"
},

{
  id: 2,
  name: "Men's Face Cream Moisturizer - Anti-Aging Cream For Men, Collagen, Retinol & Hyaluronic",
  originalPrice: 2775,
  discountedPrice: 2090,
  image: "/images/specialoffer4.png"
},

{
  id: 2,
  name: "BALM OF GILEAD Manuka Eczema Honey Cream - Moisturizer for Sensitive Skin,",
  originalPrice: 2775,
  discountedPrice: 2090,
  image: "/images/specialoffer5.png"
},

{
  id: 2,
  name: "Sadoer Body Cream, Cream- Ointment Body",
  originalPrice: 2375,
  discountedPrice: 1980,
  image: "/images/specialoffer6.png"
},

{
  id: 2,
  name: "7 Days Flash Cream - Advanced Hot Sweat Cream, Sweat Enhancer Cream, Natural Sweat",
  originalPrice: 1960,
  discountedPrice: 1730,
  image: "/images/specialoffer7.png"
},

{
  id: 2,
  name: "Dermaglos Moisturizing Cream, Advanced Skin Hydration with Extra Vitamin A, Vitamin E &",
  originalPrice: 1120,
  discountedPrice: 1020,
  image: "/images/specialoffer8.png"
},

{
  id: 2,
  name: "Advanced Healing Skin Cream with Silver, Vitamin E, & Hyaluronic Acid Which Promotes",
  originalPrice: 2860,
  discountedPrice: 2560,
  image: "/images/specialoffer9.png"
},
{
  id: 2,
  name: "SimplyVital Collagen, Retinol & Hyaluronic Acid Cream - Anti-Aging Face Moisturizer for Face,",
  originalPrice: 1940,
  discountedPrice: 1585,
  image: "/images/specialoffer11.png"
},

{
  id: 2,
  name: "2 PCS Bee Venom Cream, Professional Bee Venom Repair Cream, Natural Skin Moisturizer,",
  originalPrice: 1680,
  discountedPrice: 1460,
  image: "/images/specialoffer12.png"
},

{
  id: 2,
  name: "First Honey® Manuka Honey Cream for Dry & Itchy Skin | Fast Relief for Eczema, Rosacea,",
  originalPrice: 1690,
  discountedPrice: 1495,
  image: "/images/specialoffer13.png"
},

{
  id: 2,
  name: "CeraVe Moisturizing Cream, Body and Face Moisturizer for Dry Skin, Body Cream with",
  originalPrice: 2030,
  discountedPrice: 1840,
  image: "/images/specialoffer14.png"
},

{
  id: 2,
  name: "CHARMZONE Midnight Special Cream – Korean Anti-Aging Night Cream | Deep Hydration & Revitalizing Skincare for Firm, Radiant & Youthful-Looking Skin (1.69 fl oz)",
  originalPrice: 4920,
  discountedPrice: 4530,
  image: "/images/specialoffer15.png"
},

{
  id: 2,
  name: "CHARMZONE Midnight Special Cream – Korean Anti-Aging Night Cream | Deep Hydration & Revitalizing Skincare for Firm, Radiant & Youthful-Looking Skin (1.69 fl oz)",
  originalPrice: 4920,
  discountedPrice: 4530,
  image: "/images/specialoffer16.png"
},




    ];

    return (
      <>  
      <section className="container mx-auto px-4 py-10 pt-44 ">

            <div className='text-center'>
                <h3 className='underline font-bold text-2xl'>Deal Of The Day Special Offer mans women</h3>
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

export default SpecialOfferComponents;
