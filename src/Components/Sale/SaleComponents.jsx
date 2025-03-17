import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

 const SaleComponents = () => {
 const products = [
{
    id: 2,
    name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
    originalPrice: 1200,
    discountedPrice: 1100,
    image: "/images/brand1.png"
},
{
  id: 2,
  name: "Red Acne Body Wash 500 ml (17 FL Oz) [1% Salicylic Acid, Niacinamide, Panthenol,",
  originalPrice: 2300,
  discountedPrice: 2070,
  image: "/images/brand2.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1400,
  discountedPrice: 1200,
  image: "/images/brand3.png"
},
{
  id: 2,
  name: "Body Scrub Skin Care Glycolic Acid Exfoliating Body Cleanser KP Bump Eraser | AHA + Lactic",
  originalPrice: 2240,
  discountedPrice: 2140,
  image: "/images/brand4.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 4.3.5% 10.14 FL.OZ/Korean",
  originalPrice: 1200,
  discountedPrice: 1100,
  image: "/images/brand5.png"
},
{
  id: 2,
  name: "BMRS Niacinamide with Glutathione Soap, 3 Bars x 70g, 2.49 Ounce (Pack of 1)",
  originalPrice: 1800,
  discountedPrice: 1700,
  image: "/images/brand6.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Cleansing Water | LIPO GLUTA NIAC CEN™ 7.8% 5.41",
  originalPrice: 1400,
  discountedPrice: 1340,
  image: "/images/brand7.png"
},
{
  id: 2,
  name: "Kojic Acid Soap Body Wash + Turmeric Vitamin C Organic Natural Moisturizing Exfoliating",
  originalPrice: 2200,
  discountedPrice: 2100,
  image: "/images/brand8.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 6.3% 10.14 FL.OZ/Korean",
  originalPrice: 1400,
  discountedPrice: 1320,
  image: "/images/brand9.png"
},
{
  id: 2,
  name: "Brightening Body Wash | Glowing Skin Vitamin C Bodywash | Helps to Reduce",
  originalPrice: 1000,
  discountedPrice: 940,
  image: "/images/brand10.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 15600,
  discountedPrice: 1390,
  image: "/images/brand11.png"
},
{
  id: 2,
  name: "Kojic Acid Lotion Natural Skin Clarifying for Face & Body with Vitamin C, Niacinamide, Shea",
  originalPrice: 3050,
  discountedPrice: 2870,
  image: "/images/brand12.png"
},
{
  id: 2,
  name: "The Body Serum - Hydrating Serum With Hyaluronic Acid, Niacinamide + Ceramides.",
  originalPrice: 5070,
  discountedPrice: 4830,
  image: "/images/brand13.png"
},
{
  id: 2,
  name: "Moisturizing Skin Cream with Pump Dispenser - 16 fl oz (1 lb) - Moisturizer Formulated Without",
  originalPrice: 1400,
  discountedPrice: 1320,
  image: "/images/brand14.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 5.3% 10.14 FL.OZ/Korean",
  originalPrice: 1400,
  discountedPrice: 1280,
  image: "/images/brand16.png"
},
{
  id: 2,
  name: "Body Scrub Skin Care Glycolic Acid Exfoliating Body Cleanser KP Bump Eraser | AHA + Lactic",
  originalPrice: 2200,
  discountedPrice: 2070,
  image: "/images/brand17.png"
},
{
  id: 2,
  name: "The Body Acne Wash. Medicated Clearing Cleanse. 2% Salicylic Acid, Niacinamide, Zinc PCA +",
  originalPrice: 2300,
  discountedPrice: 2210,
  image: "/images/brand18.png"
},
{
  id: 2,
  name: "Salicylic Acid Body Wash - Skin Non-drying, Gentle Exfoliates Rough and Bumpy Skin, Body",
  originalPrice: 3080,
  discountedPrice: 2900,
  image: "/images/brand19.png"
},
{
  id: 2,
  name: "The Body Wash Eucalyptus. Natural Body Wash for Women & Men, Replenishing Shower Gel",
  originalPrice: 4000,
  discountedPrice: 3940,
  image: "/images/brand20.png"
},
{
  id: 2,
  name: "Glutathione Niacinamide Body Wash | LIPO GLUTA NIAC CEN™ 7.4% 10.14 FL.OZ/Korean",
  originalPrice: 1600,
  discountedPrice: 1550,
  image: "/images/brand22.png"
},
{
  id: 2,
  name: "Keratosis Pilaris Exfoliating Body Wash Cleanser - KP Body Wash with 15% Glycolic Acid, Aloe",
  originalPrice: 1170,
  discountedPrice: 1100,
  image: "/images/brand23.png"
},
{
  id: 2,
  name: "Exfoliating Body Wash with 8.8 Free Acid Value Glycolic Acid, Keratosis Pilaris, KP, Smooth",
  originalPrice: 4090,
  discountedPrice: 3960,
  image: "/images/brand24.png"
},
{
  id: 2,
  name: "WC Natural Flawless Skin Glutta Papaya soap with Niacinamide & Glutathione, 70g",
  originalPrice: 1800,
  discountedPrice: 1700,
  image: "/images/brand25.png"
},
{
  id: 2,
  name: "A Rose By Any Other Name Body Cleanser | Gentle Body Cleanser with Rose Petal Oil & Skin-",
  originalPrice: 5000,
  discountedPrice: 4860,
  image: "/images/brand27.png"
},
{
  id: 2,
  name: "Kojic Acid African Black Soap Body Wash Authentic with Vitamin C, Shea Butter, Collage",
  originalPrice: 2350,
  discountedPrice: 2180,
  image: "/images/brand28.png"
},
{
  id: 2,
  name: "Keratosis Pilaris & Acne Exfoliating Body Wash Cleanser with 14% Glycolic & Salicylic",
  originalPrice: 2400,
  discountedPrice: 2310,
  image: "/images/brand29.png"
},
{
  id: 2,
  name: "AC Control Body Wash | Anti-Blemish & Pimples Care | Hypoallergenic Body Cleanser |",
  originalPrice: 1400,
  discountedPrice: 1365,
  image: "/images/brand30.png"
},
{
  id: 2,
  name: "Glutathione & Kojic Acid Original Soap, Evens Skin Tone and Leaves Your Skin Smooth and",
  originalPrice: 1800,
  discountedPrice: 1720,
  image: "/images/brand31.png"
},
{
  id: 2,
  name: "Kojic Acid Lotion Natural Skin Clarifying for Face & Body with Vitamin C, Niacinamide, Shea",
  originalPrice: 3200,
  discountedPrice: 3100,
  image: "/images/brand32.png"
},
{
  id: 2,
  name: "Korean Green Tea - 100 Tea Bags",
  originalPrice: 2000,
  discountedPrice: 1860,
  image: "/images/food1.png"
},
{
id: 2,
name: "Korean Red Ginseng Tea - 100 Packets",
originalPrice: 2800,
discountedPrice: 2450,
image: "/images/food2.png"
},

{
id: 2,
name: "Korean Ginseng Tea - 50 Packets",
originalPrice: 1800,
discountedPrice: 1370,
image: "/images/food3.png"
},

{
id: 2,
name: "Korean Green Tea - 100 Tea Bags",
originalPrice: 2000,
discountedPrice: 1860,
image: "/images/food4.png"
},
{
id: 2,
name: "Korean Green Tea - 25 Tea Bags",
originalPrice: 600,
discountedPrice: 540,
image: "/images/food6.png"
},
{
id: 2,
name: "Korean Ginger Tea - 15 Packets",
originalPrice: 1100,
discountedPrice: 1050,
image: "/images/food7.png"
},

{
id: 2,
name: "Maxim White Gold Instant Coffee stick - 12g",
originalPrice: 50,
discountedPrice: 30,
image: "/images/food8.png"
},

{
id: 2,
name: "Samyang Cheese HOT Chicken Flavor Ramen Noodles Cup - 70g",
originalPrice: 350,
discountedPrice: 290,
image: "/images/food9.png"
},

{
id: 2,
name: "Samyang Carbo Hot Chicken Ramen Noodles - 140g",
originalPrice: 200,
discountedPrice: 180,
image: "/images/food10.png"
},

{
id: 2,
name: "Samyang Buldak Hot Chicken Ramen Noodles - 140g",
originalPrice: 160,
discountedPrice: 150,
image: "/images/food11.png"
},

{
id: 2,
name: "Samyang Jjajang Hot Chicken Ramen Noodles - 140g",
originalPrice: 200,
discountedPrice: 180,
image: "/images/food12.png"
},

{
id: 2,
name: "Samyang Cheese Hot Chicken Ramen Noodles - 140g",
originalPrice: 200,
discountedPrice: 150,
image: "/images/food13.png"
},

{
id: 2,
name: "Samyang Curry Hot Chicken Ramen Noodles - 140g",
originalPrice: 200,
discountedPrice: 180,
image: "/images/food14.png"
},

{
id: 2,
name: "Samyang Carbonara HOT Chicken Flavor Ramen Noodles Cup - 70g",
originalPrice: 350,
discountedPrice: 290,
image: "/images/food15.png"
},

{
id: 2,
name: "Samyang Buldak HOT Chicken Flavor Ramen Noodles Cup - 70g",
originalPrice: 290,
discountedPrice: 290,
image: "/images/food16.png"
},

{
id: 2,
name: "Samyang 2x Spicy HOT Chicken Flavor Ramen Noodles Cup - 70g",
originalPrice: 350,
discountedPrice: 290,
image: "/images/food17.png"
},

{
id: 2,
name: "Samyang 2X Spicy Hot Chicken Ramen Noodles - 140g",
originalPrice: 200,
discountedPrice: 160,
image: "/images/food18.png"
},

{
id: 2,
name: "Samyang Buldak Hot Chicken Flavor Sauce - 200g",
originalPrice: 900,
discountedPrice: 880,
image: "/images/food19.png"
},

{
id: 2,
name: "Samyang Carbo Hot Chicken Flavor Sauce - 200g",
originalPrice: 1000,
discountedPrice: 8000,
image: "/images/food20.png"
},

{
id: 2,
name: "Samyang 2X Spicy Hot Chicken Flavor Sauce - 200g",
originalPrice: 1000,
discountedPrice: 830,
image: "/images/food21.png"
},

{
id: 2,
name: "Sunchang Red Pepper Paste, brown rice -1Kg",
originalPrice: 1500,
discountedPrice: 1420,
image: "/images/food22.png"
},
{
id: 2,
name: "Nongshim Shin Ramyun Spicy Beef Ramen Noodle Soup",
originalPrice: 126,
discountedPrice: 110,
image: "/images/food23.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set1.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set2.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set3.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set4.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set5.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set6.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set7.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set8.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set9.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set10.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set11.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set12.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set13.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set14.png"
},
{
  id: 2,
  name: "AUTOMET Womens 2 Piece Outfits Lounge Hoodie Sweatsuit Sets Oversized Sweatshir",
  originalPrice: 5400,
  discountedPrice: 4980,
  image: "/images/set15.png"
},
 
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

export default SaleComponents;
