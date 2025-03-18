import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';


 const PimplesComponents = () => {
 const products = [

{
    id: 2,
    name: "Exposed Skin Care Basic Acne Treatment Kit - Includes Salicylic Acid Face Wash,",
    originalPrice: 9520,
    discountedPrice: 8740,
    image: "/images/Pimples1.png"
},
{
  id: 2,
  name: "Kidskin - Z-Blast Serum, for Face Acne, Skin Care for Kids, Pre-Teen and Teen Skin Ages 9-17,",
  originalPrice: 2760,
  discountedPrice: 2540,
  image: "/images/Pimples2.png"
},
{
  id: 2,
  name: "SU:M One Minute Clay Mask (5.07 fl oz) 2-in-1 Korean Skin care, Hydrating Facial Cleanser ,",
  originalPrice: 2380,
  discountedPrice: 2140,
  image: "/images/Pimples3.png"
},
{
  id: 2,
  name: "Hydrocolloid Acne Patches for Face | Blemish and Zit Covering Patches for All Skin Types |,",
  originalPrice: 1540,
  discountedPrice: 2430,
  image: "/images/Pimples4.png"
},
{
  id: 2,
  name: "Proactiv Zits Happen® Hydrocolloid Acne Patches- Pimple Patches for Face and,",
  originalPrice: 1240,
  discountedPrice: 1130,
  image: "/images/Pimples6.png"
},
{
  id: 2,
  name: "Acne Clarifying Face Toner for Teens by Natural Outcome Skin Care - Salicylic Acid Facial,",
  originalPrice: 1540,
  discountedPrice: 1420,
  image: "/images/Pimples7.png"
},
{
  id: 2,
  name: "BioSwiss Pimple Patches, Tasty Treats Shaped Acne Patch for Zits and Blemishes, Hydrocolloi,",
  originalPrice: 970,
  discountedPrice: 850,
  image: "/images/Pimples8.png"
},
{
  id: 2,
  name: "BioSwiss Pimple Patches, Tasty Treats Shaped Acne Patch for Zits and Blemishes, Hydrocolloi,",
  originalPrice: 2240,
  discountedPrice: 2120,
  image: "/images/Pimples9.png"
},
{
  id: 2,
  name: "ZitSticka Killa Pimple Patches for Face - World's Most Potent Pimple Patch with Fast-Acting,",
  originalPrice: 2640,
  discountedPrice: 2530,
  image: "/images/Pimples10.png"
},
{
  id: 2,
  name: "Exposed Skin Care Basic Acne Treatment Kit - Includes Salicylic Acid Face Wash,",
  originalPrice: 9520,
  discountedPrice: 8740,
  image: "/images/Pimples11.png"
},
{
  id: 2,
  name: "LitBear Pimple Patch Bulk, 480 Patches 3 Size Acne Patches for Face,",
  originalPrice: 850,
  discountedPrice: 780,
  image: "/images/Pimples12.png"
},
{
  id: 2,
  name: "LitBear Acne Patch with Tea Tree & Centella Oil, 168 Hydrocolloid Dots in 6 Colors for Face - Cute,",
  originalPrice: 1120,
  discountedPrice: 1040,
  image: "/images/Pimples13.png"
},
{
  id: 2,
  name: "Lumi Patch Hana Glow Hydrocolloid Acne Patches for Zits, Blemishes,",
  originalPrice: 520,
  discountedPrice: 520,
  image: "/images/Pimples14.png"
},
{
  id: 2,
  name: "Proactiv Clean 3 Step Acne Routine w/ Pimple Patches- Sulfur Acne Treatment Cleanser,,",
  originalPrice: 3450,
  discountedPrice: 3340,
  image: "/images/Pimples15.png"
},
{
  id: 2,
  name: "Acne Treatment for Face for Hormonal Cystic Stubborn Acne Cream for Sensitive Skin Teens,",
  originalPrice: 1140,
  discountedPrice: 1020,
  image: "/images/Pimples17.png"
},
{
  id: 2,
  name: "EasyDerm Beauty Patch(42 Counts) - 100% Hydrocolloid Pimple Patch for Zit Spot Care,",
  originalPrice: 1630,
  discountedPrice: 1550,
  image: "/images/Pimples18.png"
},
{
  id: 2,
  name: "Precision Acne Spot Serum, Acne Drying Lotion, ",
  originalPrice: 1870,
  discountedPrice: 1750,
  image: "/images/Pimples19.png"
},
{
  id: 2,
  name: "Dots for Spots Blemish Patches For Face - Fast Acting Translucent Hydrocolloid Zit,",
  originalPrice: 2525,
  discountedPrice: 2370,
  image: "/images/Pimples20.png"
},
{
  id: 2,
  name: "Exposed Skin Care Basic Acne Treatment Kit - Includes Salicylic Acid Face Wash,",
  originalPrice: 9520,
  discountedPrice: 8740,
  image: "/images/Pimples21.png"
},
{
  id: 2,
  name: "Pimple Patches for Face, Colorful Hydrocolloid Acne Patches for Covering Zits and Blemishes,",
  originalPrice: 450,
  discountedPrice: 410,
  image: "/images/Pimples22.png"
},
{
  id: 2,
  name: "Star Pimple Patches for Face w/Hydrocolloid, Salicylic Acid & Tea Tree, 240 Patches,,",
  originalPrice: 920,
  discountedPrice: 840,
  image: "/images/Pimples23.png"
},
{
  id: 2,
  name: "Kids Spot Foam Face Cleaning Spot Wipes for Kids, Preteens, and Teens with Sensitive Dry Oily,",
  originalPrice: 1120,
  discountedPrice: 1040,
  image: "/images/Pimples24.png"
},
{
  id: 2,
  name: "This item: ZVYK Cute Pimple Patches for Face - Tattoo Style Hydrocolloid Acne Patches,",
  originalPrice: 1640,
  discountedPrice: 1530,
  image: "/images/Pimples25.png"
},
{
  id: 2,
  name: "Kids Deodorant - Unscented Deodorant for Kids - Made w/ Natural Ingredients in the USA ,",
  originalPrice: 1120,
  discountedPrice: 1030,
  image: "/images/Pimples26.png"
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

export default PimplesComponents;
