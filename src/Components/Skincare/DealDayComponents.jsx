import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';

const DealDayComponents = () => {
    const products = [
        {
            id: 1,
            name: "acicaberry Cream 60ml",
            originalPrice: 3100,
             discountedPrice: 2600,
           
            image: "/images/acicaberry.png"
        },
        {
            id: 2,
            name: "Koelcia 24K Gold Whitening Essence 35ml",
            originalPrice: 3100,
             discountedPrice: 2600,
            image: "/images/acid1.png"
        },
        {
          id: 2,
          name: "Koelcia 24K Gold Whitening Essence 35ml",
          originalPrice: 3100,
          discountedPrice: 2600,
          image: "/images/acid2.png"
      },
      {
        id: 2,
        name: "acide dairy",
        originalPrice: 3100,
        discountedPrice: 2600,
        image: "/images/acidairy.png"
    },
    {
      id: 2,
      name: "Koelcia 24K Gold Whitening Essence 35ml",
      originalPrice: 3100,
      discountedPrice: 2600,
      image: "/images/acidintensivecream.png"
  },
  {
    id: 2,
    name: "acide toning soulations",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/acidtoningsoulations.png"
},
{
    id: 2,
    name: "acide serum",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/acidserum.png"
},
{
    id: 2,
    name: "acide water aseence",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/acidwateraseence.png"
},
{
    id: 2,
    name: "acide watery sungel",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/acidwaterysungel.png"
},
{
    id: 2,
    name: "ampule",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/ampule.png"
},
{
    id: 2,
    name: "acwell",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/acwell.png"
},
{
    id: 2,
    name: "anti",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/anti1.png"
},
{
    id: 2,
    name: "aqua shotes cream",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/aquashotcream.png"
},
{
    id: 2,
    name: "argan",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/argan2.png"
},
{
    id: 2,
    name: "argan",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/argan.png"
},
{
    id: 2,
    name: "argan",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/argan1.png"
},
{
    id: 2,
    name: "balanching",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/balanching.png"
},
{
    id: 2,
    name: "azulen low",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/azulenlow.png"
},
{
    id: 2,
    name: "bamboo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bamboo.png"
},
{
    id: 2,
    name: "banila coclean",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/banilacoclean.png"
},
{
    id: 2,
    name: "bention",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bention1.png"
},
{
    id: 2,
    name: "bention",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bention2.png"
},
{
    id: 2,
    name: "bention",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bention3.png"
},
{
    id: 2,
    name: "bention",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bention4.png"
},
{
    id: 2,
    name: "bention5",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bention5.png"
},
{
    id: 2,
    name: "bention6",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bention6.png"
},
{
    id: 2,
    name: "bention",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bention9.png"
},
{
    id: 2,
    name: "bention",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bention7.png"
},
{
    id: 2,
    name: "bention",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bention11.png"
},
{
    id: 2,
    name: "bention",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bention10.png"
},
{
    id: 2,
    name: "bention",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bention12.png"
},
{
    id: 2,
    name: "black aqua sun",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/blackaquasun.png"
},
{
    id: 2,
    name: "black facial",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/blackfacial.png"
},
{
    id: 2,
    name: "black snail cream",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/blacksnailcream.png"
},
{
    id: 2,
    name: "blemis",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/blemis.png"
},
{
    id: 2,
    name: "blue calming cream",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bluecalmingcream.png"
},
{
    id: 2,
    name: "boosting",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/boosting1.png"
},
{
    id: 2,
    name: "boosting",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/boosting2.png"
},
{
    id: 2,
    name: "boosting",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/boosting3.png"
},
{
    id: 2,
    name: "collagen whitening cream",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/collagenwhiteningcream.png"
},
{
    id: 2,
    name: "boosting",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/boosting4.png"
},
{
    id: 2,
    name: "boosting",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/boosting5.png"
},
{
    id: 2,
    name: "bright lip",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/brightlip.png"
},
{
    id: 2,
    name: "bright hening sheet mask",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/britheningsheetmask.png"
},
{
    id: 2,
    name: "brone",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/brone.png"
},
{
    id: 2,
    name: "bubble",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bubble2.png"
},
{
    id: 2,
    name: "bubble",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bubble3.png"
},
{
    id: 2,
    name: "bubble",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/bubble6.png"
},
{
    id: 2,
    name: "centella gel cream",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/centellagelcream.png"
},
{
    id: 2,
    name: "ceravi",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/ceravi1.png"
},
{
    id: 2,
    name: "ceravi",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/ceravi2.png"
},
{
    id: 2,
    name: "ceravi5",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/ceravi5.png"
},
{
    id: 2,
    name: "ceravi3",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/ceravi3.png"
},
{
    id: 2,
    name: "charcol cly buble mask",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/charcolclybublemask.png"
},
{
    id: 2,
    name: "choice",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/choice.png"
},
{
    id: 2,
    name: "cica care blam",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/cicacareblam.png"
},
{
    id: 2,
    name: "cicafluied",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/cicafluied.png"
},
{
    id: 2,
    name: "cica tea",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/cicatea.png"
},
{
    id: 2,
    name: "clean blam mandarin",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/cleanblammandarin.png"
},
{
    id: 2,
    name: "cleanser",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/cleanser.png"
},
{
    id: 2,
    name: "clinic",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/clinic.png"
},
{
    id: 2,
    name: "cmc",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/cmc.png"
},
{
    id: 2,
    name: "cmc",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/cmc1.png"
},
{
    id: 2,
    name: "cmc",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/cmc2.png"
},
{
    id: 2,
    name: "collagen eye cream",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/collageneyecream.png"
},
{
    id: 2,
    name: "coserx",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/coserx.png"
},
{
    id: 2,
    name: "covverb cream",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/covverbbcream.png"
},
{
    id: 2,
    name: "dabo foam",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/dabofoam.png"
},
{
    id: 2,
    name: "dark spot glow serum",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/darkspotglowserum.png"
},
{
    id: 2,
    name: "dearling",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/dearling.png"
},

{
    id: 2,
    name: "deep care hair pack",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/deepcarehairpack.png"
},
{
    id: 2,
    name: "deep clean sing fame",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/deepcleansingfame.png"
},
{
    id: 2,
    name: "deep cream",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/deepcream.png"
},
{
    id: 2,
    name: "deep serum",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/deepserum.png"
},
{
    id: 2,
    name: "defence",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/defence.png"
},
{
    id: 2,
    name: "dermacica",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/dermacica.png"
},
{
    id: 2,
    name: "enriced",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/enriced.png"
},
{
    id: 2,
    name: "enriche",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/enriche.png"
},
{
    id: 2,
    name: "face foam",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/facefoam.png"
},
{
    id: 2,
    name: "face mask",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/facemask.png"
},
{
    id: 2,
    name: "face water cleansing",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/faceshopwatercleansing.png"
},
{
    id: 2,
    name: "facial wash",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/facialwash.png"
},
{
    id: 2,
    name: "facila toner",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/facilatoner.png"
},
{
    id: 2,
    name: "fame eye cream",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/fameeyecream.png"
},
{
    id: 2,
    name: "eye creams",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/eyecreams.png"
},
{
    id: 2,
    name: "farmer rice",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/farmerrice.png"
},
{
    id: 2,
    name: "farmsty",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/farmsty.png"
},
{
    id: 2,
    name: "fitread",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/fitread.2.png"
},
{
    id: 2,
    name: "fitread",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/fitread.png"
},
{
    id: 2,
    name: "foam",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/foam.png"
},
{
    id: 2,
    name: "foot cream",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/footcream.png"
},
{
    id: 2,
    name: "frudia",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/frudia.png"
},
{
    id: 2,
    name: "gel",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/gel1.png"
},
{
    id: 2,
    name: "gel cream",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/gelcream.png"
},
{
    id: 2,
    name: "ginseng",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/ginseng.png"
},
{
    id: 2,
    name: "glaze ",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/glaze2.png"
},
{
    id: 2,
    name: "glossy",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/glossy.png"
},
{
    id: 2,
    name: "glow",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/glow2.png"
},
{
    id: 2,
    name: "glow",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/glow3.png"
},
{
    id: 2,
    name: "glow boost",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/glowboost.png"
},
{
    id: 2,
    name: "glow serum",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/glowserum.png"
},
{
    id: 2,
    name: "green plum cleanser",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/greenplumcleanser.png"
},
{
    id: 2,
    name: "grentea freshar toner",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/grenteafreshartoner.png"
},
{
    id: 2,
    name: "hand",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/hand7.png"
},
{
    id: 2,
    name: "Hayper niachinamaide serum",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/Hayperniachinamaideserum.png"
},
{
    id: 2,
    name: "heair",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/heair1.png"
},
{
    id: 2,
    name: "heair",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/heair2.png"
},
{
    id: 2,
    name: "heart leaf cleansing",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/heartleafcleansing.png"
},
{
    id: 2,
    name: "holika",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/holika1.png"
},
{
    id: 2,
    name: "holoika",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/holoika2.png"
},
{
    id: 2,
    name: "hony eye cream",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/honyeyecream.png"
},
{
    id: 2,
    name: "hydro quinone serum",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/hydroquinoneserum.png"
},
{
    id: 2,
    name: "infusion tretment toner",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/infusiontretmenttoner.png"
},
{
    id: 2,
    name: "juiced vitamin cdrop",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/juicedvitamincdrop.png"
},
{
    id: 2,
    name: "koelcica",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/koelcica.png"
},
{
    id: 2,
    name: "lasserum",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/lasserum.png"
},
{
    id: 2,
    name: "lemon",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/lemon.png"
},
{
    id: 2,
    name: "simple",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/simple.png"
},
{
    id: 2,
    name: "shampo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampo1.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo1.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo.png"
},
{
    id: 2,
    name: "shampoo2",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo2.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo3.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo5.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo6.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo7.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo8.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo9.png"
},
{
    id: 2,
    name: "shampoo1",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo10.png"
},
{
    id: 2,
    name: "shampoo1",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo11.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo12.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo13.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo14.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo15.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo16.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo17.png"
},
{
    id: 2,
    name: "shampoo",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/shampoo18.png"
},
{
    id: 2,
    name: "sheet",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/sheet1.png"
},
{
    id: 2,
    name: "nuture",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/nuture.png"
},
{
    id: 2,
    name: "nature",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/nature1.png"
},
{
    id: 2,
    name: "paxmoly",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/paxmoly7.png"
},
{
    id: 2,
    name: "paxmoly",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/paxmoly5.png"
},
{
    id: 2,
    name: "nature",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/nature.png"
},
{
    id: 2,
    name: "nature ",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/nature3.png"
},
{
    id: 2,
    name: "paxmoly",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/paxmoly3.png"
},
{
    id: 2,
    name: "paxmoly",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/paxmoly4.png"
},
{
    id: 2,
    name: "paxmoly",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/paxmoly8.png"
},
{
    id: 2,
    name: "paxmoly",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/paxmoly2.png"
},
{
    id: 2,
    name: "sold",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/sold1.png"
},
{
    id: 2,
    name: "paxmoly",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/paxmoly6.png"
},
{
    id: 2,
    name: "sold",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/sold3.png"
},
{
    id: 2,
    name: "sold4",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/sold4.png"
},
{
    id: 2,
    name: "sold",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/sold5.png"
},
{
    id: 2,
    name: "sold",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/sold17.png"
},
{
    id: 2,
    name: "sold",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/sold18.png"
},
{
    id: 2,
    name: "sold19",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/sold19.png"
},
{
    id: 2,
    name: "sold6",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/sold6.png"
},
{
    id: 2,
    name: "sold",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/sold7.png"
},
{
    id: 2,
    name: "set",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/set4.png"
},
{
    id: 2,
    name: "sold",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/sold10.png"
},
{
    id: 2,
    name: "set",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/set3.png"
},
{
    id: 2,
    name: "teatre mask",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/teatremask.png"
},
{
    id: 2,
    name: "therapy",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/therapy.png"
},
{
    id: 2,
    name: "vitamin",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/vitamin2.png"
},
{
    id: 2,
    name: "vitamin",
    originalPrice: 3100,
    discountedPrice: 2600,
    image: "/images/vitamin3.png"
}
      
    ];

    return (
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
    );
}

export default DealDayComponents;
