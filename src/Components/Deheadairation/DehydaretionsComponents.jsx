import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const DehydaretionsComponents = () => {
const products = [

{
    id: 2,
    name: "AXIS-Y - Daily Purifying Treatment Toner - 200ml",
    originalPrice: 1550,
    discountedPrice: 1460,
    image: "/images/Dehydaretions1.png"
},
{
  id: 2,
  name: "AXIS-Y The Mini Glow Set - (4pcs)",
  originalPrice: 1150,
  discountedPrice: 960,
  image: "/images/Dehydaretions2.png"
},
{
  id: 2,
  name: "AXIS-Y Artichoke Intensive Skin Barrier Ampoule - 30ml",
  originalPrice: 1850,
  discountedPrice: 1660,
  image: "/images/Dehydaretions3.png"
},
{
  id: 2,
  name: "AXIS-Y New Skin Resolution Gel Mask - 100ml",
  originalPrice: 1850,
  discountedPrice: 1710,
  image: "/images/Dehydaretions4.png"
},
{
  id: 2,
  name: "Aromatica Reviving Rose Infusion Treatment Toner - 200ml",
  originalPrice: 2550,
  discountedPrice: 2360,
  image: "/images/Dehydaretions5.png"
},
{
  id: 2,
  name: "Acwell Licorice pH Balancing Cleansing Toner - 150ml",
  originalPrice: 1350,
  discountedPrice: 1160,
  image: "/images/Dehydaretions6.png"
},
{
  id: 2,
  name: "Beaute Melasma-X Moringa Brightening Cool Soothing Gel - 160ml",
  originalPrice: 950,
  discountedPrice: 860,
  image: "/images/Dehydaretions7.png"
},
{
  id: 2,
  name: "Beauty of Joseon Green Plum Refreshing Toner : AHA + BHA - 150ml",
  originalPrice: 1850,
  discountedPrice: 1760,
  image: "/images/Dehydaretions8.png"
},
{
  id: 2,
  name: "Beauty of Joseon Ginseng Essence Water - 150ml",
  originalPrice: 1950,
  discountedPrice: 1860,
  image: "/images/Dehydaretions9.png"
},
{
  id: 2,
  name: "Beauty of Joseon Dynasty Cream - 50ml",
  originalPrice: 1950,
  discountedPrice: 1860,
  image: "/images/Dehydaretions10.png"
},
{
  id: 2,
  name: "Cosrx Propolis Light Cream - 65ml",
  originalPrice: 2050,
  discountedPrice: 190,
  image: "/images/Dehydaretions11.png"
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
                        <h4 className='text-black font-semibold'>{product.name}</h4>
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

export default DehydaretionsComponents;
