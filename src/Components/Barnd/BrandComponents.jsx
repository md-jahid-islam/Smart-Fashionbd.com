import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const BrandComponents = () => {
    const products = [

{
    id: 2,
    name: "APLB Glutathione Niacinamide Body Wash",
    originalPrice: 1700,
    discountedPrice: 1500,
    image: "/images/APLB1.png"
},

{
  id: 2,
  name: "APLB Glutathione Niacinamide Beauty Tablet 500mg x 30 Tablets",
  originalPrice: 1100,
  discountedPrice: 950,
  image: "/images/APLB2.png"
},

{
  id: 2,
  name: "APLB Glutathione Niacinamide Sheet Mask 25ml",
  originalPrice: 300,
  discountedPrice: 200,
  image: "/images/APLB3.png"
},

{
  id: 2,
  name: "APLB Hyaluronic Acid Ceramide HA B5 Facial Cream 55ml",
  originalPrice: 1200,
  discountedPrice: 1000,
  image: "/images/APLB4.png"
},

{
  id: 2,
  name: "APLB Retinol Vitamin C Vitamin E Facial Cream 55ml",
  originalPrice: 1200,
  discountedPrice: 1000,
  image: "/images/APLB5.png"
},

{
  id: 2,
  name: "APLB Retinol Vitamin C Vitamin E Ampoule Serum 40ml",
  originalPrice: 1100,
  discountedPrice: 940,
  image: "/images/APLB6.png"
},

{
  id: 2,
  name: "APLB Glutathione Niacinamide Body Lotion",
  originalPrice: 550,
  discountedPrice: 460,
  image: "/images/APLB7.png"
},

{
  id: 2,
  name: "APLB Glutathione Niacinamide Body Lotion",
  originalPrice: 550,
  discountedPrice: 460,
  image: "/images/APLB8.png"
},

{
  id: 2,
  name: "APLB Glutathione Niacinamide Body Lotion",
  originalPrice: 550,
  discountedPrice: 460,
  image: "/images/APLB9.png"
},

{
  id: 2,
  name: "APLB Glutathione Niacinamide Body Lotion",
  originalPrice: 550,
  discountedPrice: 460,
  image: "/images/APLB10.png"
},

{
  id: 2,
  name: "APLB Glutathione Niacinamide Body Lotion",
  originalPrice: 550,
  discountedPrice: 460,
  image: "/images/APLB11.png"
},

{
  id: 2,
  name: "APLB Glutathione Niacinamide Sheet Mask 25ml",
  originalPrice: 300,
  discountedPrice: 250,
  image: "/images/APLB12.png"
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
