import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

 const CleanserComponents = () => {
 const products = [

{
    id: 2,
    name: "CeraVe Hydrating Facial Cleanser, Moisturizing Face Wash For Dry Skin, Hyaluronic Acid +",
    originalPrice: 1630,
    discountedPrice: 1540,
    image: "/images/Cleanser1.png"
},
{
    id: 2,
    name: "CeraVe Hydrating Cream To Foam Cleanser, Makeup Remover Face Wash For Dry Skin, Foaming",
    originalPrice: 1830,
    discountedPrice: 1740,
    image: "/images/Cleanser2.png"
},

{
    id: 2,
    name: "Revision Skincare Brightening Facial Wash, Exfoliating Face Cleanser with Vitamin C and",
    originalPrice: 5560,
    discountedPrice: 4870,
    image: "/images/Cleanser3.png"
},
{
    id: 2,
    name: "CeraVe Renewing Salicylic Acid Cleanser, Formulated With Hyaluronic Acid, Niacinamide, &",
    originalPrice: 1330,
    discountedPrice: 1240,
    image: "/images/Cleanser4.png"
},
{
    id: 2,
    name: "ANUA Heartleaf Quercetinol Pore Deep Cleansing Foam, Facial Cleanser, for Double",
    originalPrice: 1530,
    discountedPrice: 1490,
    image: "/images/Cleanser5.png"
},
{
    id: 2,
    name: "ANUA Heartleaf Quercetinol Pore Deep Cleansing Foam, Facial Cleanser, for Double",
    originalPrice: 1530,
    discountedPrice: 1490,
    image: "/images/Cleanser6.png"
},
{
    id: 2,
    name: "CeraVe Hydrating Facial Cleanser, Moisturizing Face Wash For Dry Skin, Hyaluronic Acid +",
    originalPrice: 1630,
    discountedPrice: 1540,
    image: "/images/Cleanser7.png"
},
{
    id: 2,
    name: "Bioderma Sensibio Foaming Gel Cleansing and Make-Up Removing Refreshing feeling for",
    originalPrice: 2400,
    discountedPrice: 2310,
    image: "/images/Cleanser8.png"
},
{
    id: 2,
    name: "PCA SKIN Gentle Foaming Face Wash, Hydrating Facial Cleanser, Removes Makeup and Hydrates+",
    originalPrice: 4240,
    discountedPrice: 4130,
    image: "/images/Cleanser9.png"
},
{
    id: 2,
    name: "EltaMD Foaming Facial Cleanser Face Wash",
    originalPrice: 3500,
    discountedPrice: 3450,
    image: "/images/Cleanser10.png"
},

{
    id: 2,
    name: "iS CLINICAL Cleansing Complex, 3in1 Gentle deep pore cleanser Face Wash and Makeup remover,",
    originalPrice: 5000,
    discountedPrice: 4860,
    image: "/images/Cleanser12.png"
},
{
    id: 2,
    name: "Anua Heartleaf Pore Control Cleansing Oil, Oil Cleanser for Face, Makeup Blackhead",
    originalPrice: 1930,
    discountedPrice: 1840,
    image: "/images/Cleanser13.png"
},
{
    id: 2,
    name: "Clean & Clear 2-Pack Oil-Free Facial Cleansers with Citrus Scent, Morning Burst and Night",
    originalPrice: 1130,
    discountedPrice: 1040,
    image: "/images/Cleanser14.png"
},
{
    id: 2,
    name: "NEOSTRATA Foaming Glycolic Face Wash High Strength AHA Cleanser",
    originalPrice: 4260,
    discountedPrice: 4140,
    image: "/images/Cleanser15.png"
},
{
    id: 2,
    name: "ALASTIN Skincare Gentle Cleanser Foaming Gel Face Wash (6 oz) | Soothing & Nourishing",
    originalPrice: 5950,
    discountedPrice: 5520,
    image: "/images/Cleanser16.png"
},
{
    id: 2,
    name: "Biodance Collagen Gel Toner Pads | Pore Perfecting, Improving Elasticity, Korean",
    originalPrice: 2870,
    discountedPrice: 2730,
    image: "/images/Cleanser17.png"
},
{
    id: 2,
    name: "Era Organics Microdermabrasion Facial Scrub & Face Exfoliator - Spa Quality Exfoliating Mask",
    originalPrice: 1830,
    discountedPrice: 16740,
    image: "/images/Cleanser18.png"
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

export default CleanserComponents;
