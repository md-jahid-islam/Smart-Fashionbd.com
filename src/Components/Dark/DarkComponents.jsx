import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

 const DarkComponents = () => {
 const products = [

{
    id: 2,
    name: "3w clinic rose eye cream - 40ml",
    originalPrice: 650,
    discountedPrice: 560,
    image: "/images/dark1.png"
},
{
  id: 2,
  name: "3w clinic black pearl eye cream - 40ml",
  originalPrice: 750,
  discountedPrice: 660,
  image: "/images/dark2.png"
},
{
  id: 2,
  name: "3w clinic snail eye cream - 40ml",
  originalPrice: 630,
  discountedPrice: 510,
  image: "/images/dark3.png"
},
{
  id: 2,
  name: "3w clinic honey eye cream - 40ml",
  originalPrice: 450,
  discountedPrice: 399,
  image: "/images/dark4.png"
},
{
  id: 2,
  name: "3w clinic collagen eye cream - 40ml",
  originalPrice: 580,
  discountedPrice: 510,
  image: "/images/dark5.png"
},
{
  id: 2,
  name: "3W Clinic Whitening & Anti-Wrinkle Horse Oil Eye Cream - 40ml",
  originalPrice: 440,
  discountedPrice: 390,
  image: "/images/dark6.png"
},
{
  id: 2,
  name: "Thank You Farmer LOU Eye Cream (Face & neck) - 30ml",
  originalPrice: 1350,
  discountedPrice: 1460,
  image: "/images/dark7.png"
},
{
  id: 2,
  name: "Tonymoly Bio Ex Cell Peptide Eye Solution - 30ml",
  originalPrice: 1950,
  discountedPrice: 1760,
  image: "/images/dark8.png"
},
{
  id: 2,
  name: "TheYeon Ectoin Vital Conceal Eye Cream - 20g",
  originalPrice: 1250,
  discountedPrice: 1160,
  image: "/images/dark9.png"
},
{
  id: 2,
  name: "Tonymoly Retinol Red Wrinkle Focus Eye Cream - 30ml",
  originalPrice: 2050,
  discountedPrice: 1860,
  image: "/images/dark10.png"
},
{
  id: 2,
  name: "3w Clinic Placenta Eye Cream - 40ml",
  originalPrice: 650,
  discountedPrice: 560,
  image: "/images/dark11.png"
},
{
  id: 2,
  name: "3w clinic rose eye cream - 40ml",
  originalPrice: 650,
  discountedPrice: 560,
  image: "/images/dark12.png"
},
{
  id: 2,
  name: "AXIS-Y Vegan Collagen Eye Serum - 10ml",
  originalPrice: 1550,
  discountedPrice: 1460,
  image: "/images/dark13.png"
},
{
  id: 2,
  name: "3HaruHaru Wonder Black Rice Bakuchiol Eye Cream - 20ml",
  originalPrice: 1650,
  discountedPrice: 1560,
  image: "/images/dark14.png"
},
{
  id: 2,
  name: "Makelean Eyelid Cooling Patch - 6ea",
  originalPrice: 450,
  discountedPrice: 360,
  image: "/images/dark15.png"
},
{
  id: 2,
  name: "Purito Wonder Releaf Centella Unscented Eye Cream - 30ml",
  originalPrice: 1450,
  discountedPrice: 1360,
  image: "/images/dark16.png"
},
{
  id: 2,
  name: "3w Clinic Hyaluronic Eye Cream - 40ml",
  originalPrice: 650,
  discountedPrice: 560,
  image: "/images/dark17.png"
},
{
  id: 2,
  name: "Thank You Farmer Bakuvita Intensive Eye Serum - 30ml",
  originalPrice: 1650,
  discountedPrice: 1460,
  image: "/images/dark18.png"
},
{
  id: 2,
  name: "Acwell Licorice pH Balancing Intensive Eye Cream - 30ml",
  originalPrice: 1950,
  discountedPrice: 1760,
  image: "/images/dark19.png"
},
{
  id: 2,
  name: "Benton Fermentation Eye Cream - 30g",
  originalPrice: 1950,
  discountedPrice: 1860,
  image: "/images/dark20.png"
}
    
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
                        <p className='text-black  line-through'>{product.originalPrice}৳</p>
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

export default DarkComponents;
