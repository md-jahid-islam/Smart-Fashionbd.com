import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const MoisturizerComponents = () => {
    const products = [

{
    id: 2,
    name: "CeraVe Moisturizing Cream, Body and Face Moisturizer for Dry Skin, Body Cream with",
    originalPrice: 1830,
    discountedPrice: 1640,
    image: "/images/Moisturizer1.png"
},
{
    id: 2,
    name: "CeraVe PM Facial Moisturizing Lotion, Night Cream with Hyaluronic Acid and",
    originalPrice: 1530,
    discountedPrice: 1440, 
    image: "/images/Moisturizer2.png"
},
{
    id: 2,
    name: "SimplyVital Collagen, Retinol & Hyaluronic Acid Cream - Anti-Aging Face Moisturizer for Face,",
    originalPrice: 2400,
    discountedPrice: 2300,
    image: "/images/Moisturizer3.png"
},
{
    id: 2,
    name: "Eight Saints Night Shift Anti-Aging Gel Face Moisturizer, Natural and Organic Anti Wrinkl",
    originalPrice: 3750,
    discountedPrice: 3650,
    image: "/images/Moisturizer4.png"
},
{
    id: 2,
    name: "Jergens Ultra Healing Dry Skin Lotion, Hand and Body Moisturizer for Quick Absorptio",
    originalPrice: 2400,
    discountedPrice: 2320,
    image: "/images/Moisturizer5.png"
},
{
    id: 2,
    name: "EltaMD PM Restore Face Moisturizer, Night Moisturizer for Face, Restores Skin Elasticity and",
    originalPrice: 4000,
    discountedPrice: 3760,
    image: "/images/Moisturizer6.png"
},
{
    id: 2,
    name: "CeraVe AM Facial Moisturizing Lotion with SPF 30, Oil-Free Face Moisturizer with SPF, Formulated",
    originalPrice: 1500,
    discountedPrice: 1400,
    image: "/images/Moisturizer7.png"
},
{
    id: 2,
    name: "Neutrogena Hydro Boost Water Gel with Signature Fragrance, Hyaluronic Acid Face Moisturizer",
    originalPrice: 1800,
    discountedPrice: 1630,
    image: "/images/Moisturizer8.png"
},
{
    id: 2,
    name: "Neutrogena Hydro Boost Night Pressed Serum, Hyaluronic Acid Face Moisturizer for Normal to",
    originalPrice: 2100,
    discountedPrice: 1970,
    image: "/images/Moisturizer9.png"
},
{
    id: 2,
    name: "belif Moisturizing Bomb – Daily Ceramide Moisturizer with Peptide & Squalane, 48hr",
    originalPrice: 4000,
    discountedPrice: 3840,
    image: "/images/Moisturizer10.png"
},
{
    id: 2,
    name: "Dr.Althea 345 Relief Cream | Daily Face Moisturizer | Blemish Relief Care | Soothing Recovery",
    originalPrice: 2800,
    discountedPrice: 2700,
    image: "/images/Moisturizer11.png"
},
{
    id: 2,
    name: "Burt's Bees Renewal Firming Face Cream, Anti-Aging Retinol Alternative, Moisturizing Natural",
    originalPrice: 2000,
    discountedPrice: 1930,
    image: "/images/Moisturizer12.png"
},
{
    id: 2,
    name: "SimplyVital Collagen, Retinol & Hyaluronic Acid Cream - Anti-Aging Face Moisturizer for Face,",
    originalPrice: 2400,
    discountedPrice: 2320,
    image: "/images/Moisturizer13.png"
},
{
    id: 2,
    name: "Vanicream Moisturizing Skin Cream with Pump Dispenser - 16 fl oz (1 lb) - Moisturizer",
    originalPrice: 1400,
    discountedPrice: 1250,
    image: "/images/Moisturizer14.png"
},
{
    id: 2,
    name: "Aveeno Daily Moisturizing Body Lotion, Body Lotion for Dry Skin with Prebiotic Oat, Paraben Free",
    originalPrice: 1030,
    discountedPrice: 960,
    image: "/images/Moisturizer15.png"
},
{
    id: 2,
    name: "AESTURA ATOBARRIER365 Cream with Ceramide, Korean Moisturizer for Barrier Repair |",
    originalPrice: 3600,
    discountedPrice: 3250,
    image: "/images/Moisturizer16.png"
},
{
    id: 2,
    name: "Pyunkang Yul [PKY] Calming Moisture Barrier Cream Instantly Soothes Sensitive Skin,",
    originalPrice: 1400,
    discountedPrice: 1320,
    image: "/images/Moisturizer17.png"
},
{
    id: 2,
    name: "L'Oreal Paris Revitalift Triple Power Anti-Aging Face Moisturizer, Pro Retinol,",
    originalPrice: 3100,
    discountedPrice: 2980,
    image: "/images/Moisturizer18.png"
},
{
    id: 2,
    name: "mixsoon Bean Essence Exfoliating Hydrating Korean Skin Care Glass skin Hyaluronic",
    originalPrice: 3200,
    discountedPrice: 3100,
    image: "/images/Moisturizer19.png"
},
{
    id: 2,
    name: "Cetaphil Face & Body Moisturizer, Hydrating Moisturizing Lotion for All Skin Types, Suitable for",
    originalPrice: 1600,
    discountedPrice: 1430,
    image: "/images/Moisturizer21.png"
},
{
    id: 2,
    name: "ETUDE SoonJung 2x Barrier Intensive Cream 60ml (21AD) | Hypoallergenic Shea Butter",
    originalPrice: 1350,
    discountedPrice: 1210,
    image: "/images/Moisturizer22.png"
},
{
    id: 2,
    name: "Good Molecules Lightweight Daily Moisturizer - Hydrating Facial Lotion with Avocado Oil",
    originalPrice: 1230,
    discountedPrice: 1140,
    image: "/images/Moisturizer23.png"
},
{
    id: 2,
    name: "COSRX Hyaluronic Acid Moisturizing Cream, Long-lasting Hydration, Rich Moisturizer for",
    originalPrice: 2230,
    discountedPrice: 2120,
    image: "/images/Moisturizer24.png"
},
{
    id: 2,
    name: "DRMTLGY Anti-Aging Tinted Moisturizer SPF 46 – Sheer Face Sunscreen & Lightweight",
    originalPrice: 3100,
    discountedPrice: 2950,
    image: "/images/Moisturizer25.png"
},
{
    id: 2,
    name: "Dr.Althea 345 Relief Cream | Daily Face Moisturizer | Blemish Relief Care | Soothing Recovery",
    originalPrice: 2900,
    discountedPrice: 2840,
    image: "/images/Moisturizer26.png"
},
{
    id: 2,
    name: "Illiyoon Ceramide Ato Concentrate Cream | Moisturizer for Dry & Sensitive Skin, 100hr",
    originalPrice: 2640,
    discountedPrice: 2450,
    image: "/images/Moisturizer27.png"
},
{
    id: 2,
    name: "e.l.f. SKIN Holy Hydration! Daily Hydration Moisturizer, Ultra-Hydrating Formula, Infused with",
    originalPrice: 860,
    discountedPrice: 710,
    image: "/images/Moisturizer28.png"
},
{
    id: 2,
    name: "Beauty of Joseon Dynasty Cream Hydrating Face Moisturizer for Dry, Sensitive Skin, Korean",
    originalPrice: 2500,
    discountedPrice: 2390,
    image: "/images/Moisturizer29.png"
},
{
    id: 2,
    name: "e.l.f. SKIN Holy Hydration! Daily Hydration Moisturizer, Ultra-Hydrating Formula, Infused with",
    originalPrice: 800,
    discountedPrice: 720,
    image: "/images/Moisturizer30.png"
},
{
    id: 2,
    name: "EltaMD UV Daily SPF 40 Tinted Face Sunscreen Moisturizer, Tinted Moisturizer for Face with",
    originalPrice: 3600,
    discountedPrice: 3410,
    image: "/images/Moisturizer31.png"
},
{
    id: 2,
    name: "LANEIGE Water Bank Blue Hyaluronic Moisturizer: Barrier-Boosting Hydration, Squalane,",
    originalPrice: 4120,
    discountedPrice: 3910,
    image: "/images/Moisturizer32.png"
},
{
    id: 2,
    name: "Cetaphil Face & Body Moisturizer, Hydrating Moisturizing Cream for Dry to Very Dry, Sensitive",
    originalPrice: 2130,
    discountedPrice: 1970,
    image: "/images/Moisturizer33.png"
},
{
    id: 2,
    name: "Neutrogena Hydro Boost Hyaluronic Acid Face Moisturizer with Sunscreen, Broad Spectrum",
    originalPrice: 1730,
    discountedPrice: 1640,
    image: "/images/Moisturizer34.png"
},
{
    id: 2,
    name: "Curology Gel Face Moisturizer, Lightweight Daily Face Lotion for Oily, Dry or Sensitive Skin, with",
    originalPrice: 1730,
    discountedPrice: 1540,
    image: "/images/Moisturizer35.png"
},
{
    id: 2,
    name: "EltaMD AM Restore Face Moisturizer for Women and Men, Light Moisturizer Face Cream,",
    originalPrice: 3900,
    discountedPrice: 3760,
    image: "/images/Moisturizer36.png"
},
{
    id: 2,
    name: "TATCHA The Dewy Skin Cream | Rich Face Cream to Hydrate, Plump and Protect Dry and",
    originalPrice: 7820,
    discountedPrice: 7570,
    image: "/images/Moisturizer37.png"
},
{
    id: 2,
    name: "belif Aqua Bomb – Daily Niacinamide Hydrating Moisturizer, Lightweight",
    originalPrice: 3900,
    discountedPrice: 3870,
    image: "/images/Moisturizer38.png"
},
{
    id: 2,
    name: "Neutrogena Ultra Gentle Fragrance Free Daily Face Moisturizer, Facial Moisturizer for",
    originalPrice: 1100,
    discountedPrice: 1040,
    image: "/images/Moisturizer39.png"
},
{
    id: 2,
    name: "First Aid Beauty - Ultra Repair Cream, Intense Hydration Whipped Colloidal Oatmeal,",
    originalPrice: 4100,
    discountedPrice: 3820,
    image: "/images/Moisturizer40.png"
},
{
    id: 2,
    name: "TULA Skin Care 24-7 Hydrating Day & Night Cream - Nourishing Moisturizer for Face, Maintain",
    originalPrice: 6400,
    discountedPrice: 5980,
    image: "/images/Moisturizer41.png"
},
{
    id: 2,
    name: "Olay Face Moisturizer, Regenerist Micro-Sculpting Cream for Women, Fragrance-Free -",
    originalPrice: 2600,
    discountedPrice: 2540,
    image: "/images/Moisturizer42.png"
},
{
    id: 2,
    name: "Amazon Basics Oil-free Facial Moisturizer for Sensitive Skin, Fragrance Free, 4 Fluid Ounce",
    originalPrice: 1110,
    discountedPrice: 1060,
    image: "/images/Moisturizer43.png"
},
{
    id: 2,
    name: "TATCHA The Water Cream | Cream Moisturizer for Face, Optimal Hydration For Pure",
    originalPrice: 8400,
    discountedPrice: 7690,
    image: "/images/Moisturizer44.png"
},
{
    id: 2,
    name: "RoC Retinol Correxion Max Daily Hydration Anti-Aging Face Moisturizer with Hyaluronic Acid",
    originalPrice: 2540,
    discountedPrice: 2410,
    image: "/images/Moisturizer45.png"
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

export default MoisturizerComponents;
