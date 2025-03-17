import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

 const WholesaleComponents = () => {
 const products = [

{
    id: 2,
    name: "Award Winning Rose Water Facial Spray (30ml) Rose Spray Facial Mist - Rosewater Rose ",
    originalPrice: 2370,
    discountedPrice: 2250,
    image: "/images/stala1.png"
},
{
    id: 2,
    name: "Award-Winning Birthday Gifts for Women - Travel Essentials Skin Care Set with Gold Eye",
    originalPrice: 2170,
    discountedPrice: 2010,
    image: "/images/stala2.png"
},
{
    id: 2,
    name: " Award Winning Rose Water Facial Spray (30ml) ",
    originalPrice: 1030,
    discountedPrice: 940,
    image: "/images/stala3.png"
},
{
    id: 2,
    name: "Under Eye Brightener Balm Stick - Retinol & Caffeine Eye Cream",
    originalPrice: 1030,
    discountedPrice: 940,
    image: "/images/stala4.png"
},
{
    id: 2,
    name: "Under Eye Patches - Birthday Gifts for Women (12 pairs) Gifts for Her - Eye Masks for Puffy",
    originalPrice: 1030,
    discountedPrice: 940,
    image: "/images/stala5.png"
},
{
    id: 2,
    name: "Award Winning Hyaluronic Acid Serum (50ml/1.7 fl oz) Hyaluronic Acid Serum for Face",
    originalPrice: 2100,
    discountedPrice: 2030,
    image: "/images/stala7.png"
},
{
    id: 2,
    name: "Under Eye Mask - Under Eye Patches for Dark Circles and Puffiness Undereye Bags,",
    originalPrice: 2070,
    discountedPrice: 1960,
    image: "/images/stala8.png"
},
{
    id: 2,
    name: "Under Eye Patches for Puffy Eyes and Dark Circles (Retinol, 24 Pairs) Restoring Gel Under Eye",
    originalPrice: 2400,
    discountedPrice: 2210,
    image: "/images/stala9.png"
},
{
    id: 2,
    name: "Under Eye Brightener Roller - Retinol & Caffeine Eye Serum for Puffiness, Dark Circles, Fine Lines",
    originalPrice: 1430,
    discountedPrice: 1340,
    image: "/images/stala10.png"
},
{
    id: 2,
    name: "Under Eye Brightener Balm Stick - Retinol & Caffeine Eye Cream with for Dark Circles, Puffiness,",
    originalPrice: 1030,
    discountedPrice: 940,
    image: "/images/stala11.png"
},
{
    id: 2,
    name: "Award Winning Dream Team Gifts for Her - Airplane-Friendly Skin Care Set with Under Eye",
    originalPrice: 4130,
    discountedPrice: 3970,
    image: "/images/stala12.png"
},
{
    id: 2,
    name: "Under Eye Cream - Caffeine Anti Aging & Brightening - Dark Circles, Wrinkles, Puffiness &",
    originalPrice: 1630,
    discountedPrice: 1480,
    image: "/images/stala13.png"
},
{
    id: 2,
    name: "Makeup Remover Cleansing Balm - Hydrating Facial Cleanser with Vitamin E for Soft, Nourished",
    originalPrice: 2100,
    discountedPrice: 1984,
    image: "/images/stala14.png"
},
{
    id: 2,
    name: "Pimple Patches for Face- Heart Hydrocolloid Zit Stickers that Help Soothe & Conceal",
    originalPrice: 1030,
    discountedPrice: 940,
    image: "/images/stala15.png"
},
{
    id: 2,
    name: "Pimple Patches for Face - Fast Acting Hydrocolloid Acne Patch That Absorb Gunk, Flatten",
    originalPrice: 1030,
    discountedPrice: 940,
    image: "/images/stala16.png"
},
{
    id: 2,
    name: "Kiss Me Softly Nourishing Berry Lip Balm Hydrating - Lip Mask Overnight - Lip Moisturizer For",
    originalPrice: 2230,
    discountedPrice: 2170,
    image: "/images/stala17.png"
},
{
    id: 2,
    name: "Makeup Remover Cleansing Balm - Hydrating Facial Cleanser with Vitamin E for Soft, Nourished",
    originalPrice: 2060,
    discountedPrice: 1930,
    image: "/images/stala18.png"
},
{
    id: 2,
    name: "Under Eye Cream - Caffeine Anti Aging & Brightening - Dark Circles, Wrinkles, Puffiness &",
    originalPrice: 1630,
    discountedPrice: 1540,
    image: "/images/stala19.png"
},
{
    id: 2,
    name: "grace & stella Award Winning Rose Water Facial Spray (30ml) - Vegan - Rose Water Spray Tone",
    originalPrice: 1030,
    discountedPrice: 940,
    image: "/images/stala20.png"
},
{
    id: 2,
    name: "grace & stella Under Eye Patches - Birthday Gifts for Women (12 pairs) Gifts for Her - Eye Masks",
    originalPrice: 1960,
    discountedPrice: 1840,
    image: "/images/stala21.png"
},
{
    id: 2,
    name: "Rescue: Hydrogel Self Cooling Compress | Cold Eye Masks for Puffy Eyes | Self Cooling Eye",
    originalPrice: 2950,
    discountedPrice: 2750,
    image: "/images/stala22.png"
},
{
    id: 2,
    name: "Under Eye Patches (30 Pairs), 24K Gold Under Eye Mask for Puffy Eyes, Dark Circles,Bags an",
    originalPrice: 1030,
    discountedPrice: 940,
    image: "/images/stala23.png"
},
{
    id: 2,
    name: "Dead Sea Mud Mask (120ml) - Vegan Detox Dead Sea Mask - Mud Masks For Face And Body",
    originalPrice: 2180,
    discountedPrice: 2055,
    image: "/images/stala24.png"
},
{
    id: 2,
    name: "Award-Winning Foot Peel Mask - Foot Peeling Mask with Aloe Vera - Moisturizing Foot Mask f",
    originalPrice: 830,
    discountedPrice: 740,
    image: "/images/stala25.png"
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

 export default WholesaleComponents;
