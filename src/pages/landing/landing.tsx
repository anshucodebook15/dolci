// import "./dolci.css";
import "./style/theme.css";
import {
  Topbar,
  Navbar,
  // Hero,
  // Delights,
  // Gallery,
  // Baking,
  // Menu,
  // Snapshot,
  // Signature,
  // Units,
  // Footer,
} from "./sections";
// import { useState } from "react";
import { Link } from "react-router";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Features from "./sections/Features";
// import { useAssets } from "../../hooks/useAssets";
// import Ambience from "./sections/Ambience";

const Hero = () => {
  return (
    <div className="pt-5 pb-20">
      <div className="lg-contain">
        {/* <div className="rounded-[5px] overflow-hidden h-40 ">
          <div className="flex items-center justify-center">
            <video
              src={videos.dolcivd}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
          </div>
        </div> */}
      </div>

      <div className="contain">
        {/* <h2>Experience The Best Cafe In Bangalore</h2> */}
      </div>

      <div className="text-center md:py-20 py-10 px-10 md:mb-4 mb-10">
        <h1 className="md:text-8xl text-4xl md:mb-6 mb-4 md:leading-26 leading-14 ">
          YOUR EUROPE TRIP IS <span className="">CONFIRMED !</span>{" "}
        </h1>
        <h2 className="text-2xl text-dolci leading-8">
          {" "}
          <i>Europe. Closer Than You Searched.</i>
        </h2>
      </div>

      <div className="passport flex justify-center mb-20 md:mt-[-8rem] mt-[-4rem]">
        <img
          src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1762952654/Dolci_Passport_Cover_Individual_Frame_ykgrcp.webp"
          alt=""
          className="md:w-[70%] w-full"
        />
      </div>

      <div className="contain mx-auto mb-20">
        <div className="md:w-[920px] w-full mx-auto text-center">
          <p className="md:text-2xl leading-9">
            Bounjour! Every time you search for that Paris flight, the Santorini
            sunsets, or places to visit in Europe, you hit a wall: be it budget,
            visa, or the impossible time off.
          </p>
          <p className="md:text-2xl leading-9">
            So, we're ending your search with one click, and you’ve been
            approved for the ultimate European getaway, right here in Bangalore.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to={"#getstarted"}>
          <button className="border-1 border-cyan-700 p-4 font-bold rounded-2xl text-2xl bg-amber-200 hover:bg-amber-500 cursor-pointer">
            Claim My Europe Trip Today
          </button>
        </Link>
      </div>
    </div>
  );
};

const OnePassport = () => {
  return (
    <>
      <div className="contain py-20">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10 ">
          <div className="px-10 mt-4">
            <div className="mb-8">
              <h2 className="text-4xl leading-12 mb-6">
                Three European Cities. One Passport.
              </h2>

              <p className="text-2xl leading-9">
                Our Dolci Explorer Passport is valid for three high-value
                destinations in Bangalore. It's the Europe you've been searching
                for, without the need to return to reality.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="overflow-hidden bg-gray-100">
                <img
                  src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1762952229/Dolci_Passport_Stamp_Sticker_08_apc1na.webp"
                  alt=""
                  className="w-30"
                />
                {/* <h3 className="text-[12px] mt-[-5px] ml-[10px]"> Santorini</h3> */}
              </div>

              <div className="overflow-hidden bg-gray-100">
                <img
                  src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1762952231/Dolci_Passport_Stamp_Sticker_02_scikub.webp"
                  alt=""
                  className="w-30"
                />
                {/* <h3 className="text-[12px] mt-[-5px] ml-[10px]"> Milan</h3> */}
              </div>
              <div className="overflow-hidden bg-gray-100">
                <img
                  src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1762952229/Dolci_Passport_Stamp_Sticker_09_jvywwo.webp"
                  alt=""
                  className="w-30"
                />
                {/* <h3 className="text-[12px] mt-[-5px] ml-[10px]"> Paris</h3> */}
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden grid grid-cols-2 gap-2 md:p-4 p-6">
            <div className="w-full md:h-80  col-span-2 overflow-hidden rounded-xl">
              <img
                src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763048025/skyline-of-paris-france-2024-10-22-15-46-07-utc_11zon_jui4li.webp"
                alt=""
                className="w-full h-full object-cover object-bottom"
              />
            </div>
            <div className="w-full h-60 object-cover overflow-hidden rounded-xl">
              <img
                src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763045731/view-of-the-plaza-de-las-tendillas-and-the-sculpt-2025-10-06-23-11-54-utc_11zon_u5m4xr.webp"
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-60 object-cover overflow-hidden rounded-xl">
              <img
                src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763045044/city-view-of-grand-canal-2025-02-22-17-06-29-utc_11zon_vxuhje.webp"
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const GetStarted = () => {
  return (
    <>
      <div id="getstarted" className="contain md:py-20">
        <div className="max-w-[920px] mx-auto">
          <div className="px-10 mt-8 text-center mb-12">
            <h2 className="text-4xl leading-12 ">How to get started?</h2>
          </div>

          <div className="text-center mb-10 flex flex-col md:flex-row justify-center items-center">
            <span className="w-10 h-10 flex justify-center items-center bg-dolci-blue rounded-full text-2xl mr-4">
              1.{" "}
            </span>
            <p className="md:text-3xl text-2xl text-gray-600 leading-8">
              {" "}
              <i>Click below and enter your Bangalore address.</i>
            </p>
          </div>

          <div className="flex justify-center mb-4 mt-[-2rem]">
            <img
              src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763017293/Switch_Collage_LP_44_imgbor.png"
              alt=""
              className="md:w-50 w-30"
            />
          </div>

          <div className="flex flex-col items-center justify-center mb-5">
            <input
              type="text"
              className="input border-1 p-4 border-[#56a4d1] md:w-[60%] w-[80%] rounded-2xl mb-4"
              placeholder="Name"
            />
            <input
              type="text"
              className="input border-1 p-4 border-[#56a4d1]  md:w-[60%] w-[80%] rounded-2xl mb-4"
              placeholder="Address"
            />
            {/* <input type="text" className="input border-1 p-4 border-dolci-blue w-[60%] rounded-2xl mb-4" placeholder="city"/>
            <input type="text" className="input border-1 p-4 border-dolci-blue w-[60%] rounded-2xl mb-4" placeholder="state"/> */}
            <input
              type="number"
              className="input border-1 p-4 border-[#56a4d1] md:w-[60%] w-[80%] rounded-2xl"
              placeholder="Pincode"
            />
            <input type="text" className="Street" />
            <button className="bg-dolci-blue md:w-[60%] w-[80%] p-4 rounded-2xl cursor-pointer text-xl font-bold">
              {" "}
              Claim My Europe Trip Today
            </button>
          </div>

          <div className="text-center mb-10 flex justify-center items-center ">
            {/* <span className="w-10 h-10 flex justify-center items-center bg-dolci-blue rounded-full text-2xl mr-4">
              1.{" "}
            </span> */}
            <p className="text-xl text-gray-600 w-150 leading-6">
              {" "}
              <i>
                Your Dolci Explorer Passport will be processed and delivered to
                your doorstep within 48 hours.
              </i>
            </p>
          </div>

          <div className="mx-auto mt-[-4rem] mb-10">
            <div className="passport flex justify-center ">
              <img
                src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763036723/3_ejnwcx.webp"
                alt=""
                className="w-[100%]"
              />
            </div>
          </div>

          <div className="p-8 md:p-0 grid md:grid-cols-6 grid-cols-3 gap-2 mt-[-5rem]">
            {[
              "https://res.cloudinary.com/dq7bzydqz/image/upload/v1762952231/Dolci_Passport_Stamp_Sticker_06_fzgaqa.webp",
              "https://res.cloudinary.com/dq7bzydqz/image/upload/v1762952231/Dolci_Passport_Stamp_Sticker_07_bxriro.webp",
              "https://res.cloudinary.com/dq7bzydqz/image/upload/v1762952231/Dolci_Passport_Stamp_Sticker_02_scikub.webp",
              "https://res.cloudinary.com/dq7bzydqz/image/upload/v1762952230/Dolci_Passport_Stamp_Sticker_05_y4apop.webp",
              "https://res.cloudinary.com/dq7bzydqz/image/upload/v1762952229/Dolci_Passport_Stamp_Sticker_04_wfu8au.webp",
              "https://res.cloudinary.com/dq7bzydqz/image/upload/v1762952229/Dolci_Passport_Stamp_Sticker_09_jvywwo.webp",
              ,
            ].map((item) => (
              <img src={item} alt="" className="w-full" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ArriveAtDolci = () => {
  return (
    <>
      <div className="contain py-20">
        <div className="max-w-[920px] mx-auto px-6 md:px-0">
          <div className=" mt-8 text-center mb-12">
            <h2 className="text-3xl md:text-4xl leading-12 ">
              What Happens When You Arrive at Dolci?
            </h2>
          </div>

          <div className="text-center mb-16 flex justify-center items-center">
            <p className="text-2xl leading-9 text-gray-600">
              {" "}
              <i>
                Each time you visit Dolci with your Dolci Explorer Passport, you
                shall earn a unique sticker, and that can be redeemed for
                exciting rewards, making your entire visit an investment.
              </i>
            </p>
          </div>

          {/* <div className="flex justify-center mb-4 mt-[-2rem]">
            <img
              src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1762952231/Dolci_Passport_Stickers_tvlncc.webp"
              alt=""
              className="w-[80%]"
            />
          </div> */}

          <div className="grid md:grid-cols-3 grid-cols-1 gap-2 ">
            {[
              {
                title: "3 Unique Stickers",
                img: "https://res.cloudinary.com/dq7bzydqz/image/upload/v1763049049/4_i9e0xr.png",
              },
              {
                title: "5 Unique Stickers",
                img: "https://res.cloudinary.com/dq7bzydqz/image/upload/v1763049049/5_etgj7a.png",
              },
              {
                title: "7 Unique Stickers",
                img: "https://res.cloudinary.com/dq7bzydqz/image/upload/v1763049049/3_eqoawt.png",
              },
            ].map((item) => (
              <>
                <div className="flex flex-col items-center justify-between mb-5">
                  <img src={item.img} alt="" className="md:w-50 w-40 mb-2" />
                  <h3 className="text-xl ">{item.title}</h3>
                  <p className="text-[18px] md:mt-[-0.5rem]">
                    <span className="text-gray-600">On Your Purchase</span>
                  </p>
                </div>
              </>
            ))}
          </div>

          <div className="flex justify-center mt-20">
            <button className="border-1 border-cyan-700 p-4 font-bold rounded-2xl text-2xl bg-amber-200 hover:bg-amber-500 cursor-pointer">
              Claim My Europe Trip Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const CollectMoreRewards = () => {
  return (
    <>
      <div className=" bg-dolci-blue py-20">
        <div className="max-w-[920px] mx-auto">
          <div className="px-10 mt-8 text-center mb-12">
            <h2 className="text-3xl leading-12 mb-2">Collect More Rewards</h2>

            <p className="text bg-amber-200">
              Post your unique stickers on Instagram, tag #Dolci, and enjoy a
              free dessert right away.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className="bg-blue-950 p-2 text-center">
        <p className="text-white p-0 m-0">@ Dolci.in</p>
      </div>
    </>
  );
};

const Home = () => {
  // const { backgrounds } = useAssets();
  return (
    <>
      <div className=" relative">
        <Topbar />
        <Navbar />
        <Hero />
      </div>

      <OnePassport />
      <GetStarted />
      <ArriveAtDolci />

      <div className="py-10"></div>
      <CollectMoreRewards />
      {/* <Features />
      <Delights />
      <Gallery />
      <Menu />
      <Ambience />
      <Baking /> */}
      {/* <Snapshot /> */}
      {/* <Signature />
      <Units /> */}
      <Footer />
    </>
  );
};

// const Test = () => {
//   return (
//     <>
//       <div className="w-[1400px] mx-auto">
//         <div className="">
//           <div className="py-10">
//             <h1>Aesthetic Delights at Dolci</h1>
//           </div>
//           <div className="py-10">
//             <h2>Aesthetic Delights at Dolci</h2>
//           </div>
//           <div className="py-10">
//             <h3>
//               Every treat is handcrafted with passion and premium ingredients.
//             </h3>
//           </div>
//           <div className="py-10">
//             <h3>Made With Love</h3>
//             <p>
//               Dolci, inspired by the lanes of Greece and a love for sweets, has
//               grown from a humble home baking venture into a beloved café chain
//               in Bengaluru. Dolci offers a cozy haven for food and coffee lovers
//               alike—serving rich brews, hearty bites, and an irresistible array
//               of pastries, cakes, and other handcrafted treats.
//             </p>
//           </div>
//           <div className="py-10">
//             <span className="cap">
//               <i>
//                 {" "}
//                 Dolci, inspired by the lanes of Greece and a love for sweets,
//                 has grown from a humble home baking venture into a beloved café
//                 chain in Bengaluru. Dolci offers a cozy haven for food and
//                 coffee lovers alike—serving rich brews, hearty bites, and an
//                 irresistible array of pastries, cakes, and other handcrafted
//                 treats.
//               </i>
//             </span>
//           </div>
//           <div className="py-10">
//             <span className="menu">Shop</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const Landing = () => {
  return (
    <main className="dolci_system_design relative">
      <Home />
      {/* <Test /> */}
    </main>
  );
};

export default Landing;
