import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const SponsoresComponents = () => {
    const products = [

{
    id: 2,
    name: "ECOLipak 150 Pcs Disposable Spoons, 6.7 Large Size Heavy Duty No Plastic Spoons for Party",
    originalPrice: 2270,
    discountedPrice: 2150,
    image: "/images/Sponsores1.png"
},
{
    id: 2,
    name: "300 Count Clear Plastic Spoons Disposable,Solid and Durable Disposable Spoons Heavy Duty",
    originalPrice: 2270,
    discountedPrice: 2150,
    image: "/images/Sponsores2.png"
},
{
    id: 2,
    name: "100% Compostable No Plastic Knives Forks Spoons Utensils, Flatware for Lounge",
    originalPrice: 4270,
    discountedPrice: 3950,
    image: "/images/Sponsores3.png"
},
{
    id: 2,
    name: "Set of 300 Clear Plastic Spoons Bulk by Prestee - Heavy Duty Disposable Silverware for Weddings,",
    originalPrice: 1600,
    discountedPrice: 1540,
    image: "/images/Sponsores4.png"
},
{
    id: 2,
    name: "Solar Lanterns Outdoor Waterproof Hummingbird Garden Decor Christmas Gifts for Women Mom Grandma Hangin",
    originalPrice: 2870,
    discountedPrice: 2650,
    image: "/images/Sponsores5.png"
},
{
    id: 2,
    name: "Hefty ECOSAVE Heavy Duty Assorted Cutlery, White, 24 Count",
    originalPrice: 3270,
    discountedPrice: 3150,
    image: "/images/Sponsores6.png"
},
{
    id: 2,
    name: "Mxrymvu Sponsor Gift for Women Makeup Bag for Sponsor Appreciation AA NA Addiction Recovery Cosmetic Bag",
    originalPrice: 870,
    discountedPrice: 790,
    image: "/images/Sponsores7.png"
},
{
    id: 2,
    name: "Sazuwu Sponsor Gift Sponsor Appreciation Gift Makeup Bag Thank You Gift for Women",
    originalPrice: 970,
    discountedPrice: 830,
    image: "/images/Sponsores8.png"
},
{
    id: 2,
    name: "SEIRAA Confirmation Sponsor Thank You Gift Catholic Mentor Gift Thank You For Being Mine Keychain Gift for Godparents",
    originalPrice: 1620,
    discountedPrice: 1530,
    image: "/images/Sponsores9.png"
},
{
    id: 2,
    name: "TGBJE Confirmation Sponsor Gift Christian Faith Gift Christmas Gift Catholic Confirmation Gift Godfather Gift Thank You Gift",
    originalPrice: 1430,
    discountedPrice: 1320,
    image: "/images/Sponsores10.png"
},
{
    id: 2,
    name: "Confirmation Christening gift Thank You for being My Sponsor Religious Thank You Sock",
    originalPrice: 1610,
    discountedPrice: 1560,
    image: "/images/Sponsores11.png"
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
                            <img className='w-full h-44 rounded-2xl object-cover' src={product.image} alt={product.name} />
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

export default SponsoresComponents;
