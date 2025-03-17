import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

 const AcidairyComponents = () => {
 const products = [

{
    id: 2,
    name: "Anti-Aging, Clean Beauty, Cruelty-Free Korean Skincare for All Skin Types - 1.69 Fl oz",
    originalPrice: 1120,
    discountedPrice: 1010,
    image: "/images/acide1.png"
},
{
  id: 2,
  name: "7% Glycolic Acid Toner, 7% Glycolic Acid Toner for Diminishing Acne Marks, ",
  originalPrice: 540,
  discountedPrice: 520,
  image: "/images/acide2.png"
},
{
  id: 2,
  name: "Glycolic Acid/AHA 30% Renewal Serum, infused with Vitamins C & E for Skin Brightening,",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/acide3.png"
},
{
  id: 2,
  name: "NOW Foods Supplements, Folic Acid 800 mcg + B-12 (Cyanocobalamin) 25 mcg,",
  originalPrice: 2220,
  discountedPrice: 2140,
  image: "/images/acide4.png"
},
{
  id: 2,
  name: "L'Oreal Paris Revitalift 1.5% Pure Hyaluronic Acid Face Serum,",
  originalPrice: 2340,
  discountedPrice: 2210,
  image: "/images/acide5.png"
},
{
  id: 2,
  name: "Concentrated Hyaluronic Acid Serum with Vitamin C & Centella Asiatica - Pure Organic,",
  originalPrice: 4110,
  discountedPrice: 3860,
  image: "/images/acide6.png"
},
{
  id: 2,
  name: "10% Tranexamic Acid Serum, Dark Spot & Hyperpigmentation Treatment Serum,",
  originalPrice: 2190,
  discountedPrice: 2035,
  image: "/images/acide7.png"
},
{
  id: 2,
  name: "mixsoon Glacier Water Hyaluronic Acid Serum - Non-greasy Hydration Booster,",
  originalPrice: 2000,
  discountedPrice: 1950,
  image: "/images/acide8.png"
},
{
  id: 2,
  name: "Hyaluronic Acid 2% + B5 Serum 30ml/1oz – USA Made - All Skin Types - Hyaluronic Acid Serum",
  originalPrice: 1620,
  discountedPrice: 1510,
  image: "/images/acide9.png"
},
{
  id: 2,
  name: "ANAI RUI 10% Tranexamic Acid Serum With Niacinamide,Kojic acid, Arbutin",
  originalPrice: 1920,
  discountedPrice: 1810,
  image: "/images/acide10.png"
},
{
  id: 2,
  name: "The Fixer AHA Resurfacing Gel Peel, Clarifying Glycolic Acid Exfoliant Gently Regenerates and Renews, Vegan, 1 Oz",
  originalPrice: 8675,
  discountedPrice: 7595,
  image: "/images/acide11.png"
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

 export default AcidairyComponents;
