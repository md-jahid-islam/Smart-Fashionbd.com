import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

 const TonerComponents = () => {
 const products = [

{
    id: 2,
    name: "Bath & body",
    originalPrice: 950,
    discountedPrice: 860,
    image: "/images/toner1.png"
},
{
  id: 2,
  name: "Beauty",
  originalPrice: 1150,
  discountedPrice: 1090,
  image: "/images/toner2.png"
},
{
  id: 2,
  name: "Personal care womens",
  originalPrice: 1350,
  discountedPrice: 1240,
  image: "/images/toner3.png"
},
{
  id: 2,
  name: "ELEMIS Balancing Toner | Alcohol-Free Purifying Facial Treatment Gently Softens,",
  originalPrice: 4240,
  discountedPrice: 3990,
  image: "/images/toner4.png"
},
{
  id: 2,
  name: "Proactiv Hydrating Facial Toner for Sensitive Skin - Alcohol Free Toner for Face Care - Pore",
  originalPrice: 2340,
  discountedPrice: 2120,
  image: "/images/toner5.png"
},
{
  id: 2,
  name: "ELEMIS Soothing Apricot Toner, Alcohol-Free Calming Facial Treatment Hydrates, Refreshes,",
  originalPrice: 4300,
  discountedPrice: 4120,
  image: "/images/toner6.png"
},{
  id: 2,
  name: "Proactiv Hydrating Facial Toner for Sensitive Skin - Alcohol Free Toner for Face Care - Pore",
  originalPrice: 19609,
  discountedPrice: 1860,
  image: "/images/toner7.png"
},
{
  id: 2,
  name: "TIRTIR Milk Skin Rice Toner | Deep Moisturizing, Hydrating Toner for face, Niacinamide,",
  originalPrice: 2150,
  discountedPrice: 1960,
  image: "/images/toner8.png"
},
{
  id: 2,
  name: "I'm from Rice Toner, Milky Toner for Glowing Skin, Korean Rice, Glow Essence with Niacinamid",
  originalPrice: 2450,
  discountedPrice: 2390,
  image: "/images/toner9.png"
},
{
  id: 2,
  name: "Dickinson's Original Witch Hazel Pore Perfecting Toner, 100% Natural, 16 Ounce Fragrance free",
  originalPrice: 550,
  discountedPrice: 490,
  image: "/images/toner10.png"
},
{
  id: 2,
  name: "Anua Heartleaf 77 Soothing Toner I pH 5.5 Trouble Care, Calming Skin, Refreshing,",
  originalPrice: 2760,
  discountedPrice: 2630,
  image: "/images/toner11.png"
},
{
  id: 2,
  name: "BABOR Phyto Hy-Ol Booster Hydrating for Dry Skin, Facial Cleanser for Use with Hy Oil,",
  originalPrice: 3750,
  discountedPrice: 3560,
  image: "/images/toner12.png"
},
{
  id: 2,
  name: "gren spiri bubble toner",
  originalPrice: 1950,
  discountedPrice: 1760,
  image: "/images/toner13.png"
},


 ];

    return (
      <>  
      <section className="container mx-auto py-10 pt-44 ">

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

 export default TonerComponents;
