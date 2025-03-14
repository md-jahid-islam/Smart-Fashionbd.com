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
  name: "Red Acne Body Wash 500 ml (17 FL Oz) [1% Salicylic Acid, Niacinamide, Panthenol,",
  originalPrice: 2240,
  discountedPrice: 2140,
  image: "/images/brand4.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand1.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand5.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand6.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand7.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand8.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand9.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand10.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand11.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand12.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand13.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand14.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand15.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand16.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand17.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand18.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand19.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand20.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand21.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand22.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand23.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand24.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand25.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand26.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand27.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand28.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand29.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand30.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand31.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
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
                                    <div className='bg-white  p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition'><FiSearch size={20} /></div>
                                    <div className='bg-white  p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition opacity-0 group-hover:opacity-100'><span>Quick View</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h4 className='font-semibold'>{product.name}</h4>
                            <p className='text-gray-500 line-through'>{product.originalPrice}৳</p>
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
