import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const SoldComponents = () => {
 const products = [

{
    id: 2,
    name: "YIHUA 939D+ Digital Soldering Station, (392°F to 896°F",
    originalPrice: 6740,
    discountedPrice: 5470,
    image: "/images/solder1.png"
},

{
  id: 2,
  name: "YIHUA 939D+ III EVO Digital Soldering Iron Station Kit 110W High Power ",
  originalPrice: 9740,
  discountedPrice: 8470,
  image: "/images/solder2.png"
},

{
  id: 2,
  name: "SolderAce Cordless Soldering Iron Kit, Portable Soldering Iron with LED Display, ",
  originalPrice: 6740,
  discountedPrice: 5470,
  image: "/images/solder3.png"
},

{
  id: 2,
  name: "60/40 Solder for Stained Glass, 1/8(3mm) Dia, 1 lb Spool, Supplied by ANOSON",
  originalPrice: 6740,
  discountedPrice: 5470,
  image: "/images/solder4.png"
},

{
  id: 2,
  name: "YIHUA 939D+ Digital Soldering Station, 75W Equivalent with Precision Heat Control (392°F to 896°F)",
  originalPrice: 5740,
  discountedPrice: 4470,
  image: "/images/solder5.png"
},

{
  id: 2,
  name: "63-37 Tin Lead Rosin Core Solder Wire for Electrical Soldering (0.8mm 50g)",
  originalPrice: 2195,
  discountedPrice: 1870,
  image: "/images/solder6.png"
},

{
  id: 2,
  name: "63/37 Solder Wire, high Purity no-wash tin-Lead Rosin cored Wire with 1.8% Flux for Electric",
  originalPrice: 740,
  discountedPrice: 570,
  image: "/images/solder7.png"
},

{
  id: 2,
  name: "Rosin Core Solder Wire for Electrical Soldering(0.8mm/50g),By JWOWO",
  originalPrice: 740,
  discountedPrice: 570,
  image: "/images/solder8.png"
},

{
  id: 2,
  name: "Soldering Iron Kit, 90W LED Display Adjustable Temperature Soldering Iron Automatic Sleep",
  originalPrice: 1670,
  discountedPrice: 1520,
  image: "/images/solder9.png"
},

{
  id: 2,
  name: "SolderAce Cordless Soldering Iron Kit, Portable Soldering Iron with LED Display, ",
  originalPrice: 7740,
  discountedPrice: 6470,
  image: "/images/solder10.png"
},

{
  id: 2,
  name: "YIHUA 939D+ 75W Equivalent with Precision Heat and Built-in Transforme",
  originalPrice: 2740,
  discountedPrice: 2470,
  image: "/images/solder11.png"
},

{
  id: 2,
  name: "YIHUA 939D+ Digital Soldering Precision Heat Control (392°F to 896°F) ",
  originalPrice: 1740,
  discountedPrice: 1470,
  image: "/images/solder12.png"
},

{
  id: 2,
  name: "YIHUA 939D+ 75W Equivalent with Precision Heat Control (392°F to 896°F)",
  originalPrice: 2740,
  discountedPrice: 2470,
  image: "/images/solder13.png"
},

{
  id: 2,
  name: "YIHUA 939D+ Digital Soldering Station, 75W Equivalent with Precision Heat Control",
  originalPrice: 3740,
  discountedPrice: 3490,
  image: "/images/solder14.png"
},

{
  id: 2,
  name: "YIHUA 939D+ Digital Soldering (392°F to 896°F) and Built-in Transforme",
  originalPrice: 6740,
  discountedPrice: 5470,
  image: "/images/solder15.png"
},

{
  id: 2,
  name: "YIHUA 939D+ Digital Soldering Station, 75W Equivalent with Precision ",
  originalPrice: 4740,
  discountedPrice: 4430,
  image: "/images/solder16.png"
},

{
  id: 2,
  name: "YIHUA 939D+ Digital Soldering Station, ",
  originalPrice: 3740,
  discountedPrice: 3470,
  image: "/images/solder17.png"
},

{
  id: 2,
  name: "YIHUA 939D+ Digital Soldering Station, and Built-in Transforme",
  originalPrice: 2740,
  discountedPrice: 2440,
  image: "/images/solder18.png"
},

{
  id: 2,
  name: "YIHUA 939D+ Digital Soldering Station, Transforme",
  originalPrice: 1740,
  discountedPrice: 1570,
  image: "/images/solder19.png"
},

{
  id: 2,
  name: "YIHUA 939D+ 75W Equivalent with Precision Heat Control (392°F to 896°F) ",
  originalPrice: 3740,
  discountedPrice: 3470,
  image: "/images/solder20.png"
},

{
  id: 2,
  name: "YIHUA 939D+ (392°F to 896°F) and Built-in Transforme",
  originalPrice: 4940,
  discountedPrice: 4670,
  image: "/images/solder21.png"
},
{
  id: 2,
  name: "YIHUA 939D+ Precision Heat Control (392°F to 896°F) and Built-in Transforme",
  originalPrice: 5740,
  discountedPrice: 5480,
  image: "/images/solder23.png"
},

{
  id: 2,
  name: " Control (392°F to 896°F) and Built-in Transforme",
  originalPrice: 5740,
  discountedPrice: 5475,
  image: "/images/solder24.png"
},

{
  id: 2,
  name: " 75W Equivalent with Precision Heat Control (392°F to 896°F) and Built-in Transforme",
  originalPrice: 2340,
  discountedPrice: 2140,
  image: "/images/solder25.png"
},

{
  id: 2,
  name: "YIHUA 939D+ Digital Soldering Station, and Built-in Transforme",
  originalPrice: 2740,
  discountedPrice: 2550,
  image: "/images/solder26.png"
},

{
  id: 2,
  name: " Station, 75W Equivalent with Precision Heat Control (392°F to 896°F) and Built-in Transforme",
  originalPrice: 1840,
  discountedPrice: 1670,
  image: "/images/solder27.png"
},

{
  id: 2,
  name: " 939D+ Digital Soldering Station, (392°F to 896°F) and Built-in Transforme",
  originalPrice: 1040,
  discountedPrice: 970,
  image: "/images/solder28.png"
},

{
  id: 2,
  name: " Equivalent with Precision Heat Control (392°F to 896°F) and Built-in Transforme",
  originalPrice: 640,
  discountedPrice: 570,
  image: "/images/solder29.png"
},

{
  id: 2,
  name: "YIHUA 939D+ Precision Heat Control (392°F to 896°F) and Built-in Transforme",
  originalPrice: 4740,
  discountedPrice: 4300,
  image: "/images/solder30.png"
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

export default SoldComponents;
