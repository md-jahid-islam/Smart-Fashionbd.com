import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

 const CreamComponents = () => {
 const products = [

{
    id: 2,
    name: "Aveeno Sensitive Skin Face & Body Gel Cream for Kids with Prebiotic Oat, Clinically Proven",
    originalPrice: 750,
    discountedPrice: 660,
    image: "/images/creame1.png"
},
{
  id: 2,
  name: "NIVEA MEN Maximum Hydration 48-Hour Moisture Body Lotion for Dry Skin, Aloe Vera Lotion fo",
  originalPrice: 850,
  discountedPrice: 790,
  image: "/images/creame2.png"
},
{
  id: 2,
  name: "Skin Care for Teenage Boys and Girls - Teen Moisturizer for Face with Tea Tree - Organic Face",
  originalPrice: 2130,
  discountedPrice: 1970,
  image: "/images/creame3.png"
},
{
  id: 2,
  name: "Aveeno Sensitive Skin Face & Body Gel Cream for Kids with Prebiotic Oat, Clinically Proven",
  originalPrice: 750,
  discountedPrice: 660,
  image: "/images/creame5.png"
},{
  id: 2,
  name: "Teen Skin Face Wash | Gentle Foaming Daily Boys & Girls Facial Cleanser Lotion | Natural Non-",
  originalPrice: 1550,
  discountedPrice: 1460,
  image: "/images/creame6.png"
},
{
  id: 2,
  name: "AKARY Men Tone Up Face Cream Boy Oil Control Make Up Lazy BB Cream Moisturizing Conceal",
  originalPrice: 750,
  discountedPrice: 660,
  image: "/images/creame7.png"
},{
  id: 2,
  name: "T is for Tame Tame Taming Gel - Boys & Girls Baby Hair Styling Gel for Frizz Control, ",
  originalPrice: 950,
  discountedPrice: 890,
  image: "/images/creame8.png"
},
{
  id: 2,
  name: "Fix Your Lid-Hair Styling Fiber for Men's and Boys' Short, Choppy Hair Types with High Hold and",
  originalPrice: 1150,
  discountedPrice: 1090,
  image: "/images/creame9.png"
},
{
  id: 2,
  name: "BeYOUtiful Face Moisturizer, Preppy Skin Care for Teens, Tweens, and Kids, Hydrating Face",
  originalPrice: 1150,
  discountedPrice: 1060,
  image: "/images/creame10.png"
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

 export default CreamComponents;
