import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

 const MakupComponents = () => {
 const products = [

{
    id: 2,
    name: "Innisfree No-Sebum Mineral Powder - 5g",
    originalPrice: 1000,
    discountedPrice: 640,
    image: "/images/makup1.png"
},
{
  id: 2,
  name: "Koelcia Aura Moonlight Cushion 25 Natural Beige - 14g",
  originalPrice: 1600,
  discountedPrice: 1490,
  image: "/images/makup2.png"
},
{
  id: 2,
  name: "Koelcia Aura Moonlight Cushion 23 Medium Beige - 14g",
  originalPrice: 1600,
  discountedPrice: 1490,
  image: "/images/makup3.png"
},
{
  id: 2,
  name: "Koelcia Aura Moonlight Cushion 21 Light Beige - 14g",
  originalPrice: 1600,
  discountedPrice: 1490,
  image: "/images/maku4.png"
},
{
  id: 2,
  name: "Thank you farmer Be Beautiful Luminous CC Cream SPF30 PA++ - 40ml",
  originalPrice: 1600,
  discountedPrice: 1350,
  image: "/images/makup5.png"
},

{
  id: 2,
  name: "Missha Magic Cushion Cover Lasting No.23 - 15g",
  originalPrice: 1600,
  discountedPrice: 1490,
  image: "/images/makup7.png"
},
{
  id: 2,
  name: "Missha Velvet Finish Cushion No.23 - 15g",
  originalPrice: 1600,
  discountedPrice: 1490,
  image: "/images/makup8.png"
},
{
  id: 2,
  name: "Missha Velvet Finish Cushion No.21 - 15g",
  originalPrice: 1600,
  discountedPrice: 1490,
  image: "/images/makup9.png"
},
{
  id: 2,
  name: "Etude House Dear Darling Water Tint Shade 03 (Orange) - 9.5g",
  originalPrice: 800,
  discountedPrice: 650,
  image: "/images/makup10.png"
},
{
  id: 2,
  name: "Innisfree No-Sebum Mineral Powder - 5g",
  originalPrice: 1600,
  discountedPrice: 1390,
  image: "/images/makup11.png"
},
{
  id: 2,
  name: "Etude House Dear Darling Water Tint Shade 01 (Strawberry) - 9.5g",
  originalPrice: 800,
  discountedPrice: 650,
  image: "/images/makup12.png"
},
{
  id: 2,
  name: "The Yeon 2X Calming Cover Fit BB (light beige) Cream - 50ml",
  originalPrice: 1700,
  discountedPrice: 1500,
  image: "/images/makup13.png"
},
{
  id: 2,
  name: "The Yeon 2x Calming Cover Fit BB (Natural Beige) Cream SPF36 PA++ - 50ml",
  originalPrice: 1600,
  discountedPrice: 1530,
  image: "/images/makup15.png"
},
{
  id: 2,
  name: "3w Clinic Natural Make Up Powder (Pearl) - 30g",
  originalPrice: 850,
  discountedPrice: 750,
  image: "/images/makup16.png"
},
{
  id: 2,
  name: "TIRTIR Mask Fit Red Cushion 21N Ivory - 18g",
  originalPrice: 2500,
  discountedPrice: 2250,
  image: "/images/makup17.png"
},
{
  id: 2,
  name: "TIRTIR Mask Fit Red Cushion 23N Sand - 18g",
  originalPrice: 2500,
  discountedPrice: 2250,
  image: "/images/makup18.png"
},
{
  id: 2,
  name: "Skinfood Peach Cotton Multi Finish Powder -15g",
  originalPrice: 1000,
  discountedPrice: 980,
  image: "/images/makup19.png"
},
{
  id: 2,
  name: "Thank you farmer Be Beautiful Natural BB Cream SPF30 PA++ - 40ml",
  originalPrice: 1000,
  discountedPrice: 750,
  image: "/images/makup20.png"
},
{
  id: 2,
  name: "Thank you farmer Be Beautiful Pure Make Up Base SPF30 PA++ - 40ml",
  originalPrice: 1600,
  discountedPrice: 1490,
  image: "/images/makup21.png"
},
{
  id: 2,
  name: "Cosrx Perfect Sebum Centella Mineral Powder - 5g",
  originalPrice:700 ,
  discountedPrice: 600,
  image: "/images/makup22.png"
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

export default MakupComponents;
