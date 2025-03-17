import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const FoodComponents = () => {
    const products = [

{
    id: 2,
    name: "Korean Green Tea - 100 Tea Bags",
    originalPrice: 2000,
    discountedPrice: 1860,
    image: "/images/food1.png"
},
{
  id: 2,
  name: "Korean Red Ginseng Tea - 100 Packets",
  originalPrice: 2800,
  discountedPrice: 2450,
  image: "/images/food2.png"
},

{
  id: 2,
  name: "Korean Ginseng Tea - 50 Packets",
  originalPrice: 1800,
  discountedPrice: 1370,
  image: "/images/food3.png"
},

{
  id: 2,
  name: "Korean Green Tea - 100 Tea Bags",
  originalPrice: 2000,
  discountedPrice: 1860,
  image: "/images/food4.png"
},
{
  id: 2,
  name: "Korean Green Tea - 25 Tea Bags",
  originalPrice: 600,
  discountedPrice: 540,
  image: "/images/food6.png"
},
{
  id: 2,
  name: "Korean Ginger Tea - 15 Packets",
  originalPrice: 1100,
  discountedPrice: 1050,
  image: "/images/food7.png"
},

{
  id: 2,
  name: "Maxim White Gold Instant Coffee stick - 12g",
  originalPrice: 50,
  discountedPrice: 30,
  image: "/images/food8.png"
},

{
  id: 2,
  name: "Samyang Cheese HOT Chicken Flavor Ramen Noodles Cup - 70g",
  originalPrice: 350,
  discountedPrice: 290,
  image: "/images/food9.png"
},

{
  id: 2,
  name: "Samyang Carbo Hot Chicken Ramen Noodles - 140g",
  originalPrice: 200,
  discountedPrice: 180,
  image: "/images/food10.png"
},

{
  id: 2,
  name: "Samyang Buldak Hot Chicken Ramen Noodles - 140g",
  originalPrice: 160,
  discountedPrice: 150,
  image: "/images/food11.png"
},

{
  id: 2,
  name: "Samyang Jjajang Hot Chicken Ramen Noodles - 140g",
  originalPrice: 200,
  discountedPrice: 180,
  image: "/images/food12.png"
},

{
  id: 2,
  name: "Samyang Cheese Hot Chicken Ramen Noodles - 140g",
  originalPrice: 200,
  discountedPrice: 150,
  image: "/images/food13.png"
},

{
  id: 2,
  name: "Samyang Curry Hot Chicken Ramen Noodles - 140g",
  originalPrice: 200,
  discountedPrice: 180,
  image: "/images/food14.png"
},

{
  id: 2,
  name: "Samyang Carbonara HOT Chicken Flavor Ramen Noodles Cup - 70g",
  originalPrice: 350,
  discountedPrice: 290,
  image: "/images/food15.png"
},

{
  id: 2,
  name: "Samyang Buldak HOT Chicken Flavor Ramen Noodles Cup - 70g",
  originalPrice: 290,
  discountedPrice: 290,
  image: "/images/food16.png"
},

{
  id: 2,
  name: "Samyang 2x Spicy HOT Chicken Flavor Ramen Noodles Cup - 70g",
  originalPrice: 350,
  discountedPrice: 290,
  image: "/images/food17.png"
},

{
  id: 2,
  name: "Samyang 2X Spicy Hot Chicken Ramen Noodles - 140g",
  originalPrice: 200,
  discountedPrice: 160,
  image: "/images/food18.png"
},

{
  id: 2,
  name: "Samyang Buldak Hot Chicken Flavor Sauce - 200g",
  originalPrice: 900,
  discountedPrice: 880,
  image: "/images/food19.png"
},

{
  id: 2,
  name: "Samyang Carbo Hot Chicken Flavor Sauce - 200g",
  originalPrice: 1000,
  discountedPrice: 8000,
  image: "/images/food20.png"
},

{
  id: 2,
  name: "Samyang 2X Spicy Hot Chicken Flavor Sauce - 200g",
  originalPrice: 1000,
  discountedPrice: 830,
  image: "/images/food21.png"
},

{
  id: 2,
  name: "Sunchang Red Pepper Paste, brown rice -1Kg",
  originalPrice: 1500,
  discountedPrice: 1420,
  image: "/images/food22.png"
},
{
  id: 2,
  name: "Nongshim Shin Ramyun Spicy Beef Ramen Noodle Soup",
  originalPrice: 126,
  discountedPrice: 110,
  image: "/images/food23.png"
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

export default FoodComponents;
