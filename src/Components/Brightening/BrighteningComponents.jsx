import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const BrighteningComponents = () => {
    const products = [
{
    id: 2,
    name: "IMAGE Skincare, VITAL C Hydrating Face Serum, with Vitamin C and Hyaluronic Acid,",
    originalPrice: 7640,
    discountedPrice: 6560,
    image: "/images/bright1.png"
},
{
    id: 2,
    name: "PCA SKIN Vitamin B3 Brightening Serum, Anti Aging Serum for Dark Spots and Skin,",
    originalPrice: 6640,
    discountedPrice: 5560,
    image: "/images/bright2.png"
},
{
    id: 2,
    name: "TruSkin Vitamin C Serum For Face – Anti Aging Formula with Vitamin C, Hyaluronic Acid,,",
    originalPrice: 2570,
    discountedPrice: 2340,
    image: "/images/bright3.png"
},
{
    id: 2,
    name: "Handmade Whipped Organic Beef Tallow for Skin - 4 OZ (Unscented) — Grass Fed Beef,",
    originalPrice: 4240,
    discountedPrice: 4160,
    image: "/images/bright4.png"
},
{
    id: 2,
    name: "Vitamin C - Glow and Antioxidant Serum with Niacinamide, Mushroom & Pla,",
    originalPrice: 3540,
    discountedPrice: 3260,
    image: "/images/bright5.png"
},
{
    id: 2,
    name: "Good Molecules Daily Brightening Serum - Hydrating Facial Serum with Beta Arbutin,",
    originalPrice: 3110,
    discountedPrice: 2960,
    image: "/images/bright6.png"
},
{
    id: 2,
    name: "Vitamin C Face Serum - Skin Care for Dark Spots, Vitamin C Serum with Hyaluronic Acid, Ferulic,",
    originalPrice: 1140,
    discountedPrice: 1040,
    image: "/images/bright7.png"
},
{
    id: 2,
    name: "Good Molecules Discoloration Correcting Serum - Tranexamic Acid and Niacinamide for Dark,",
    originalPrice: 1330,
    discountedPrice: 1240,
    image: "/images/bright8.png"
},
{
    id: 2,
    name: "Pure Natural Skin Brightening & Anti Aging 20% Vitamin C Serum, Collagen Peptide Infuse,",
    originalPrice: 2290,
    discountedPrice: 2170,
    image: "/images/bright9.png"
},
{
    id: 2,
    name: "Medik8 Liquid Peptides - Regenerating Multi Peptide Serum - Smooths Wrinkles and,",
    originalPrice: 4640,
    discountedPrice: 3960,
    image: "/images/bright10.png"
},
{
    id: 2,
    name: "Vitamin C Face Serum Vitamin CE Serum with Ferulic Acid for Women Vitamin E and Ferulic,",
    originalPrice: 4640,
    discountedPrice: 4160,
    image: "/images/bright11.png"
},
{
    id: 2,
    name: "Divine Derriere Intimate Dark Spot Remover for Body, Face, Bikini and Sensitive Areas - Dark,",
    originalPrice: 2940,
    discountedPrice: 2560,
    image: "/images/bright12.png"
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

export default BrighteningComponents;
