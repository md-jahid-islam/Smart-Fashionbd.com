import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';
import FooterComponents from './Skincare/FooterComponents';

const Serum1Components = () => {
    const products = [

{
    id: 2,
    name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
    originalPrice: 850,
    discountedPrice: 720,
    image: "/images/bright1.png"
},
{
  id: 2,
  name: "Organikaon Vitamin C serum",
  originalPrice: 850,
  discountedPrice: 680,
  image: "/images/bright2.png"
},
{
  id: 2,
  name: "YC Vitamin C Whitening Fairness Serum",
  originalPrice: 495,
  discountedPrice: 440,
  image: "/images/bright3.png"
},
{
  id: 2,
  name: "TopGrain Pumpkin Seed Oil",
  originalPrice: 650,
  discountedPrice: 520,
  image: "/images/bright4.png"
},
{
  id: 2,
  name: "The Ordinary Alpha Arbutin 2% +HA Serum",
  originalPrice: 28500.00,
  discountedPrice: 2250.00,
  image: "/images/bright5.png"
},
{
  id: 2,
  name: "Groome Vitamin-C 12% Glowing Serum",
  originalPrice: 845.00,
  discountedPrice: 699.00,
  image: "/images/bright6.png"
},
{
  id: 2,
  name: "Wow Skin Science Vitamin C Serum",
  originalPrice: 1199.00,
  discountedPrice: 719.00,
  image: "/images/bright7.png"
},
{
  id: 2,
  name: "Xpel Argan Oil Night Repair Serum",
  originalPrice: 650,
  discountedPrice: 560,
  image: "/images/bright8.png"
},
{
  id: 2,
  name: "Amlaki Anti Acne Brightening Serum",
  originalPrice: 1300,
  discountedPrice: 1065,
  image: "/images/bright9.png"
},
{
  id: 2,
  name: "Amlaki Glow Serum",
  originalPrice: 1200,
  discountedPrice: 985,
  image: "/images/bright10.png"
},
{
  id: 2,
  name: "The Ordinary Retinol 0.2% in Squalane",
  originalPrice: 2250,
  discountedPrice: 1950,
  image: "/images/bright11.png"
},
{
  id: 2,
  name: "Wow Skin Science Hyaluronic Acid Serum",
  originalPrice: 1199,
  discountedPrice: 830,
  image: "/images/bright12.png"
},
{
  id: 2,
  name: "Beauty of Joseon Glow Deep Serum Rice + Arbutin",
  originalPrice: 2100,
  discountedPrice: 1850,
  image: "/images/bright13.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright14.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright15.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright16.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright17.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright18.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright19.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright20.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright21.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright22.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright23.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright24.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright25.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright26.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright27.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright28.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright29.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright30.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright31.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright32.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright33.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright34.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright30.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright34.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright35.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright36.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright37.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright38.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright39.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright40.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright41.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright42.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright43.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright44.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright45.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright46.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright47.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright48.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright49.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright51.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright52.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright53.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright54.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright55.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright56.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright57.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright58.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright59.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright60.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright61.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright62.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright63.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright64.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright65.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright67.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright78.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright69.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright70.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright71.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright72.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright73.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright74.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright75.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright76.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright77.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright79.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright80.png"
},
{
  id: 2,
  name: "Lilac Brightening Serum with 2% Alpha Arbutin and 1% Kojic",
  originalPrice: 850,
  discountedPrice: 720,
  image: "/images/bright81.png"
},



    ];

    return (
      <>  
      <section className="container mx-auto px-4 py-10">

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
        <FooterComponents/>
      </>
    );
}

export default Serum1Components;
