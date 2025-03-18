import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const BentioComponents = () => {
    const products = [

{
    id: 2,
    name: "SMART SOLUTIONS Calcium Bentonite Clay Food Grade, 2 lb Pure Indian Healing Clay",
    originalPrice: 1620,
    discountedPrice: 1460,
    image: "/images/Bention1.png"
},
{
  id: 2,
  name: "Magnetic Bentonite Clay Detox Bath  Sodium & Calcium Bentonite, & Himalayan Salt ",
  originalPrice: 4520,
  discountedPrice: 4180,
  image: "/images/Bention2.png"
},
{
  id: 2,
  name: "Pure Body Naturals Bentonite Clay Powder for DIY Detox Body & Face Mask, Pure Indian Healin ",
  originalPrice: 890,
  discountedPrice: 790,
  image: "/images/Bention3.png"
},
{
  id: 2,
  name: "Bentonite Clay Powder (5lb) | Bentonite Clay Mask For Face, Body, Feet, Hair & More | Deep",
  originalPrice: 3620,
  discountedPrice: 3460,
  image: "/images/Bention4.png"
},
{
  id: 2,
  name: "Premium 1 lb Bentonite Clay Pure, Natural Detoxifying Clay for Face Masks, Hair Care & Mo",
  originalPrice: 1620,
  discountedPrice: 1460,
  image: "/images/Bention6.png"
},
{
  id: 2,
  name: "Premium 1 lb Bentonite Clay Pure, Natural Detoxifying Clay for Face Masks, Hair Care & Mo",
  originalPrice: 1620,
  discountedPrice: 1460,
  image: "/images/Bention7.png"
},
{
  id: 2,
  name: "Natrulo Turmeric Face Mask - Skin Brightening Mask with Turmeric and Bentonite Clay -",
  originalPrice: 920,
  discountedPrice: 860,
  image: "/images/Bention9.png"
},
{
  id: 2,
  name: "Bentonite Clay (Cosmetic Grade) 5 Lb - Bulk Size - Wholesale Bentonite Clay",
  originalPrice: 2340,
  discountedPrice: 2230,
  image: "/images/Bention10.png"
},
{
  id: 2,
  name: "Calcium Bentonite Clay Powder | for Internal and External Use | 13oz | Pharmaceutical Grade",
  originalPrice: 1950,
  discountedPrice: 1810,
  image: "/images/Bention11.png"
},
{
  id: 2,
  name: "NOW Foods Solutions, Bentonite Clay Powder, Pure Powder for Face and Body, Great for Oily",
  originalPrice: 1420,
  discountedPrice: 1360,
  image: "/images/Bention12.png"
},
{
  id: 2,
  name: "Organic BENTONITE Clay Powder (1 LBS / 16 oz) Organic 100% Natural Cosmetic Grade | Facials",
  originalPrice: 1520,
  discountedPrice: 1410,
  image: "/images/Bention13.png"
},
{
  id: 2,
  name: "Bentodent Remineralizing Food Grade Organic Calcium Bentonite Clay Toothpaste Fluoride Free",
  originalPrice: 1420,
  discountedPrice: 1330,
  image: "/images/Bention14.png"
},
{
  id: 2,
  name: "Earthborn Elements Bentonite Clay Powder, 1 Gallon Bucket, Pure Sodium Bentonite, Home",
  originalPrice: 5240,
  discountedPrice: 4660,
  image: "/images/Bention15.png"
},
{
  id: 2,
  name: "Aztec Secret, Face Healing Clay, 1 LB",
  originalPrice: 2240,
  discountedPrice: 2160,
  image: "/images/Bention16.png"
},
{
  id: 2,
  name: "Kaili Wellness and mores 100% Natural Bentonite Clay 8oz, Fuller's Earth(Multani Mitti) for",
  originalPrice: 920,
  discountedPrice: 780,
  image: "/images/Bention17.png"
},
{
  id: 2,
  name: "Vinyl Designz 1LB Bentonite for Wine Making and More",
  originalPrice: 1120,
  discountedPrice: 1060,
  image: "/images/Bention18.png"
},
{
  id: 2,
  name: "Detoxifying Clay Facial Mask with Exfoliant: Bentonite Clay Absorbs Oil, Clears Acne, Reduces",
  originalPrice: 920,
  discountedPrice: 850,
  image: "/images/Bention19.png"
},
{
  id: 2,
  name: "Plant Guru Calcium Bentonite Clay Powder 1 lb. - 100% Natural Indian Healing Clay - Deep Pore",
  originalPrice: 1220,
  discountedPrice: 1140,
  image: "/images/Bention20.png"
},
{
  id: 2,
  name: "100% Natural Sodium Bentonite Clay Powder (Food Grade) 0.5 LBS / 227 GMS For Facial Masks,",
  originalPrice: 820,
  discountedPrice: 760,
  image: "/images/Bention21.png"
},
{
  id: 2,
  name: "Nutricost Essentials Bentonite Clay (1 LB) - Rejuvenating Clay Mask",
  originalPrice: 1620,
  discountedPrice: 1460,
  image: "/images/Bention22.png"
},
{
  id: 2,
  name: "Indian Healing Clay, Deep Pore Cleansing Face & Body Mask Powder, STERILIZED Without",
  originalPrice: 1520,
  discountedPrice: 1460,
  image: "/images/Bention23.png"
},
{
  id: 2,
  name: "Bentonite Clay 16 oz | Purifying & Rejuvenating Clay Mask for Face & Body | 100% Pure",
  originalPrice: 1420,
  discountedPrice: 1360,
  image: "/images/Bention24.png"
},
{
  id: 2,
  name: "Aztec Bentonite Clay - Detox & Deep Cleansing",
  originalPrice: 1820,
  discountedPrice: 1560,
  image: "/images/Bention25.png"
},
{
  id: 2,
  name: "Bentonite Clay Montmorillonite Fine Powder ~ 8oz ~ NATURAL FOOD GRADE POWDER ~",
  originalPrice: 1220,
  discountedPrice: 1120,
  image: "/images/Bention26.png"
},
{
  id: 2,
  name: "Bentonite Clay Mask, Valentines Gifts for Women Her, Deep Cleansing Facial Mask, Clay Face",
  originalPrice: 1120,
  discountedPrice: 1120,
  image: "/images/Bention27.png"
},
{
  id: 2,
  name: "Essential Living: Bentonite Clay Powder - All-Natural DIY Skin Care Facial Mask for Deep",
  originalPrice: 3310,
  discountedPrice: 3145,
  image: "/images/Bention28.png"
},

      
    ];

    return (
      <>  
      <section className="container mx-auto px-4 py-10 pt-44">

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
                            <p className=' text-black line-through'>{product.originalPrice}৳</p>
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

export default BentioComponents;
