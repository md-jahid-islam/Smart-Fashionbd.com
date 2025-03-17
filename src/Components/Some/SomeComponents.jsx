import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const SomeComponents = () => {
    const products = [

{
    id: 2,
    name: "IF’S Daily Essence Sun 32 SPF | Everyday UV Protection | Ultra-Light and refreshing texture",
    originalPrice: 3550,
    discountedPrice: 3460,
    image: "/images/some1.png"
},
{
  id: 2,
  name: "Aqua Bomb Sunscreen SPF 45 (Milky Sunscreen (1.68 fl.oz))",
  originalPrice: 2750,
  discountedPrice: 2540,
  image: "/images/some2.png"
},
{
  id: 2,
  name: "V10 Hyal Air Fit Sunscreen - Pack of 2 - Travel Size Korean Centella Sunscreen,",
  originalPrice: 3250,
  discountedPrice: 3160,
  image: "/images/some3.png"
},
{
  id: 2,
  name: "EXO SKIN SIMPLE - EXO PLUS™ Exoceuticals Anti-Aging Cream | Rejuvenation",
  originalPrice: 4550,
  discountedPrice: 4160,
  image: "/images/some4.png"
},
{
  id: 2,
  name: "Heartleaf Silky Moisture Mild Sunscreen, Broad Spectrum SPF 50+ with Moisturizing ",
  originalPrice: 1950,
  discountedPrice: 1610,
  image: "/images/some5.png"
},
{
  id: 2,
  name: "Wonder Black Rice Moisture Airyfit Daily Sunscreen 50ml (1.69fl.oz), Reef Safe Formula,",
  originalPrice: 1750,
  discountedPrice: 1560,
  image: "/images/some8.png"
},
{
  id: 2,
  name: "Heartleaf Silky Moisture Mild Sunscreen, Broad Spectrum SPF 50+ with Moisturizing Formula,",
  originalPrice: 2020,
  discountedPrice: 1860,
  image: "/images/some9.png"
},
{
  id: 2,
  name: "d'alba Piedmont Waterfull Tone-Up Sunscreen Serum BROAD SPECTRUM SPF 50 + Korean",
  originalPrice: 2550,
  discountedPrice: 2260,
  image: "/images/some10.png"
},
{
  id: 2,
  name: "Mad Rabbit Defend Tattoo Sunscreen- SPF 30 100mL Tube- Mineral Sunscreen Lotion",
  originalPrice: 2950,
  discountedPrice: 2645,
  image: "/images/some11.png"
},
{
  id: 2,
  name: "All Around Vita C Sunscreen SPF 50/2.36 Fl Oz - Korean face with Vitamin",
  originalPrice: 1950,
  discountedPrice: 1760,
  image: "/images/some12.png"
},
{
  id: 2,
  name: "Non-Toxic Natural Mineral Sunscreen SPF 50 ",
  originalPrice: 3950,
  discountedPrice: 3860,
  image: "/images/some13.png"
},
{
  id: 2,
  name: "Daily UV Defense Sunscreen Invisible Korean Sunscreen for Face wit",
  originalPrice: 2050,
  discountedPrice: 1930,
  image: "/images/some14.png"
},
{
  id: 2,
  name: "Sunprise Mild Airy Finish Sun Milk SPF50+ / PA++++ (55ml) | Sebum-free, Non-Sticky, Long",
  originalPrice: 1920,
  discountedPrice: 1740,
  image: "/images/some15.png"
},
{
  id: 2,
  name: "Birch Juice Moisturizing Sunscreen (SPF50+ PA++++) | A moisturizing sunscreen, No",
  originalPrice: 1850,
  discountedPrice: 1690,
  image: "/images/some16.png"
},
{
  id: 2,
  name: "Relief Sun Organic sunscreen SPF50++++PA++++ Rice| Korean Skin Care",
  originalPrice: 1870,
  discountedPrice: 1600,
  image: "/images/some17.png"
},
{
  id: 2,
  name: "2PCS Relief Sun Organic Sunscreen SPF50+, Sunblock PA++++ Rice and",
  originalPrice: 2750,
  discountedPrice:2560,
  image: "/images/some18.png"
},
{
  id: 2,
  name: "Centella Sunscreen SPF50 PA++++ Calming Moisture Facial Sunscreen Centella Asiatica",
  originalPrice: 1550,
  discountedPrice: 1430,
  image: "/images/some19.png"
},
{
  id: 2,
  name: "Korean Sunscreen Relief Sun Organic Sunscreen S-PF50, +PA++++ Rice And Probiotics",
  originalPrice: 1000,
  discountedPrice: 940,
  image: "/images/some20.png"
},
{
  id: 2,
  name: "Onion Newpair Sunscreen 50ml, 1.69 fl.oz | SPF 40 | Korean Skincare | Hydrating Sun",
  originalPrice: 1920,
  discountedPrice: 1820,
  image: "/images/some21.png"
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

export default SomeComponents;
