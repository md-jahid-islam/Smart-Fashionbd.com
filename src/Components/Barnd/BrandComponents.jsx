import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

 const BrandComponents = () => {
 const products = [
{
    id: 2,
    name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
    originalPrice: 1200,
    discountedPrice: 1100,
    image: "/images/brand1.png"
},
{
  id: 2,
  name: "Red Acne Body Wash 500 ml (17 FL Oz) [1% Salicylic Acid, Niacinamide, Panthenol,",
  originalPrice: 2300,
  discountedPrice: 2070,
  image: "/images/brand2.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1400,
  discountedPrice: 1200,
  image: "/images/brand3.png"
},
{
  id: 2,
  name: "Body Scrub Skin Care Glycolic Acid Exfoliating Body Cleanser KP Bump Eraser | AHA + Lactic",
  originalPrice: 2240,
  discountedPrice: 2140,
  image: "/images/brand4.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 4.3.5% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand5.png"
},
{
  id: 2,
  name: "BMRS Niacinamide with Glutathione Soap, 3 Bars x 70g, 2.49 Ounce (Pack of 1)",
  originalPrice: 1800,
  discountedPrice: 1700,
  image: "/images/brand6.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Cleansing Water | LIPO GLUTA NIAC CEN™ 7.8% 5.41",
  originalPrice: 1400,
  discountedPrice: 1340,
  image: "/images/brand7.png"
},
{
  id: 2,
  name: "Kojic Acid Soap Body Wash + Turmeric Vitamin C Organic Natural Moisturizing Exfoliating",
  originalPrice: 2200,
  discountedPrice: 2100,
  image: "/images/brand8.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 6.3% 10.14 FL.OZ/Korean",
  originalPrice: 1400,
  discountedPrice: 1320,
  image: "/images/brand9.png"
},
{
  id: 2,
  name: "Brightening Body Wash | Glowing Skin Vitamin C Bodywash | Helps to Reduce",
  originalPrice: 1000,
  discountedPrice: 940,
  image: "/images/brand10.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 15600,
  discountedPrice: 1390,
  image: "/images/brand11.png"
},
{
  id: 2,
  name: "Kojic Acid Lotion Natural Skin Clarifying for Face & Body with Vitamin C, Niacinamide, Shea",
  originalPrice: 3050,
  discountedPrice: 2870,
  image: "/images/brand12.png"
},
{
  id: 2,
  name: "The Body Serum - Hydrating Serum With Hyaluronic Acid, Niacinamide + Ceramides.",
  originalPrice: 5070,
  discountedPrice: 4830,
  image: "/images/brand13.png"
},
{
  id: 2,
  name: "Moisturizing Skin Cream with Pump Dispenser - 16 fl oz (1 lb) - Moisturizer Formulated Without",
  originalPrice: 1400,
  discountedPrice: 1320,
  image: "/images/brand14.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1400,
  discountedPrice: 1280,
  image: "/images/brand16.png"
},
{
  id: 2,
  name: "Body Scrub Skin Care Glycolic Acid Exfoliating Body Cleanser KP Bump Eraser | AHA + Lactic",
  originalPrice: 2200,
  discountedPrice: 2070,
  image: "/images/brand17.png"
},
{
  id: 2,
  name: "The Body Acne Wash. Medicated Clearing Cleanse. 2% Salicylic Acid, Niacinamide, Zinc PCA +",
  originalPrice: 2300,
  discountedPrice: 2210,
  image: "/images/brand18.png"
},
{
  id: 2,
  name: "Salicylic Acid Body Wash - Skin Non-drying, Gentle Exfoliates Rough and Bumpy Skin, Body",
  originalPrice: 3080,
  discountedPrice: 2900,
  image: "/images/brand19.png"
},
{
  id: 2,
  name: "The Body Wash Eucalyptus. Natural Body Wash for Women & Men, Replenishing Shower Gel",
  originalPrice: 4000,
  discountedPrice: 3940,
  image: "/images/brand20.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 7.4% 10.14 FL.OZ/Korean",
  originalPrice: 1600,
  discountedPrice: 1550,
  image: "/images/brand22.png"
},
{
  id: 2,
  name: "Keratosis Pilaris Exfoliating Body Wash Cleanser - KP Body Wash with 15% Glycolic Acid, Aloe",
  originalPrice: 1170,
  discountedPrice: 1100,
  image: "/images/brand23.png"
},
{
  id: 2,
  name: "Exfoliating Body Wash with 8.8 Free Acid Value Glycolic Acid, Keratosis Pilaris, KP, Smooth",
  originalPrice: 4090,
  discountedPrice: 3960,
  image: "/images/brand24.png"
},
{
  id: 2,
  name: "WC Natural Flawless Skin Glutta Papaya soap with Niacinamide & Glutathione, 70g",
  originalPrice: 1800,
  discountedPrice: 1700,
  image: "/images/brand25.png"
},
{
  id: 2,
  name: "A Rose By Any Other Name Body Cleanser | Gentle Body Cleanser with Rose Petal Oil & Skin-",
  originalPrice: 5000,
  discountedPrice: 4860,
  image: "/images/brand27.png"
},
{
  id: 2,
  name: "Kojic Acid African Black Soap Body Wash Authentic with Vitamin C, Shea Butter, Collage",
  originalPrice: 2350,
  discountedPrice: 2180,
  image: "/images/brand28.png"
},
{
  id: 2,
  name: "Keratosis Pilaris & Acne Exfoliating Body Wash Cleanser with 14% Glycolic & Salicylic",
  originalPrice: 2400,
  discountedPrice: 2310,
  image: "/images/brand29.png"
},
{
  id: 2,
  name: "AC Control Body Wash | Anti-Blemish & Pimples Care | Hypoallergenic Body Cleanser |",
  originalPrice: 1400,
  discountedPrice: 1365,
  image: "/images/brand30.png"
},
{
  id: 2,
  name: "Glutathione & Kojic Acid Original Soap, Evens Skin Tone and Leaves Your Skin Smooth and",
  originalPrice: 1800,
  discountedPrice: 1720,
  image: "/images/brand31.png"
},
{
  id: 2,
  name: "Kojic Acid Lotion Natural Skin Clarifying for Face & Body with Vitamin C, Niacinamide, Shea",
  originalPrice: 3200,
  discountedPrice: 3100,
  image: "/images/brand32.png"
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

export default BrandComponents;
