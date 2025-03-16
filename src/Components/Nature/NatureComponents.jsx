import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const NatureComponents = () => {
    const products = [

{
    id: 2,
    name: "Nurture: A Modern Guide to Pregnancy, Birth, Early Motherhood―and Trusting Yourself and Your Body",
    originalPrice: 1340,
    discountedPrice: 1230,
    image: "/images/nature1.png"
},

{
  id: 2,
  name: "Nurture Rinse Free Waterless Foaming Cleanser | Women, Camping, Elderly & Hospital Car",
  originalPrice: 2670,
  discountedPrice: 2530,
  image: "/images/nature2.png"
},

{
  id: 2,
  name: "Gentle Foaming Hand Soap - Gentle Cleanser for Dry Hands - Non-Toxic Unscented Hand Soap",
  originalPrice: 1140,
  discountedPrice: 1030,
  image: "/images/nature3.png"
},
{
  id: 2,
  name: "Anti Itch Body Wash, Eczema Bodywash for adults, Psoriasis Body Wash, Moisturising",
  originalPrice: 3620,
  discountedPrice: 3510,
  image: "/images/nature4.png"
},

{
  id: 2,
  name: "Hydrating Face Moisturizer & Body Cream with Manuka Honey Cream & Coconut Body Oil -",
  originalPrice: 3640,
  discountedPrice: 3520,
  image: "/images/nature5.png"
},

{
  id: 2,
  name: "Perineal Cleanser, Ideal for Incontinence Care and Postpartum, Removes Bacteria, 8",
  originalPrice: 1980,
  discountedPrice: 1760,
  image: "/images/nature6.png"
},

{
  id: 2,
  name: "Extra Large Bath Wipes for Adults Bathing No Rinse - 80 Disposable Body Cleansing",
  originalPrice: 3320,
  discountedPrice: 3190,
  image: "/images/nature7.png"
},

{
  id: 2,
  name: "NUTURE AND I: TEACHING CHILDREN TO KNOW, LEARN AND LOVE NATURE",
  originalPrice: 150,
  discountedPrice: 130,
  image: "/images/nature8.png"
},
{
  id: 2,
  name: "5 Minute Christmas Devotional for Kids: Daily 5- Minute Devotionals to Nuture Your Child 's Spirit abd Create Lasting",
  originalPrice: 310,
  discountedPrice: 300,
  image: "/images/nature10.png"
},

{
  id: 2,
  name: "Eczema Relief Oatmeal Soap, oatmeal bath, treatment for eczema rosacea, psoriasis",
  originalPrice: 1140,
  discountedPrice: 1030,
  image: "/images/nature11.png"
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
      </>
    );
}

export default NatureComponents;
