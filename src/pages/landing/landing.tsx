// import "./dolci.css";
import "./style/theme.css";
import {
  // Topbar,
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
import PassportCountdown from "./sections/PassportCounter";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Features from "./sections/Features";
// import { useAssets } from "../../hooks/useAssets";
// import Ambience from "./sections/Ambience";

const Hero = () => {
  const endTime = new Date().getTime() + 7 * 60 * 60 * 1000;
  return (
    <div className="pb-20 mt-[-5rem]">
      <PassportCountdown endTime={endTime} totalPassports={400} />
      <div className=" text-center md:py-4 py-10 px-10 md:mb-4 mb-10">
        <h1 className="md:text-5xl text-4xl md:mb-2 mb-4 md:leading-26 leading-14 font-playfair-display">
          {/* YOUR EUROPE TRIP IS <span className="">CONFIRMED !</span>{" "} */}
          Your Europe Trip Is <span className="">Confirmed !</span>{" "}
        </h1>
        <h2 className="text-2xl text-dolci leading-8">
          {" "}
          <i>Europe. Closer Than You Searched.</i>
        </h2>
      </div>

      <div className="w-full overflow-hidden  flex justify-center mb-20 md:mt-[-24rem] mt-[-4rem]">
        {/* <img
          src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1762952654/Dolci_Passport_Cover_Individual_Frame_ykgrcp.webp"
          alt=""
          className="md:w-[70%] w-full"
        /> */}
        <img
          src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763465271/Dolci_Landing_Page_Section_copy_3_cpzb39.svg"
          alt=""
          className="md:w-[98%] w-300 "
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
                src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763391286/Gemini_Generated_Image_keqjc5keqjc5keqj_fzawhq.webp"
                alt=""
                className="w-full h-full object-cover object-center transform scale-[1.2]"
              />
            </div>
            <div className="w-full h-60 object-cover overflow-hidden rounded-xl">
              <img
                src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763391285/Gemini_Generated_Image_va827lva827lva82_1_s0a1kq.webp"
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-60 object-cover overflow-hidden rounded-xl">
              <img
                src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763391285/Gemini_Generated_Image_13vpkx13vpkx13vp_yxvlha.webp"
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
        <div className="max-w-[650px] mx-auto">
          <div className="px-10 mt-8 text-center mb-12">
            <h2 className="text-4xl leading-12 ">Claim Your Passport !</h2>
          </div>

          <div className="">
            <div className="flex items-center justify-center mb-10">
              {/* <div className="w-10 h-10 flex justify-center items-center bg-dolci-blue rounded-full text-xl mr-4">
                1.{" "}
              </div> */}

              <div className="w-full text-center">
                <p className="md:text-2xl text-2xl text-gray-600 leading-8">
                  {" "}
                  <i>Enter your delivery details.</i>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mb-10">
              <input
                type="text"
                className="input border-1 p-4 border-[#56a4d1] md:w-[80%] w-[80%] rounded-2xl mb-4"
                placeholder="Name"
              />
              <input
                type="text"
                className="input border-1 p-4 border-[#56a4d1]  md:w-[80%] w-[80%] rounded-2xl mb-4"
                placeholder="Address"
              />
              {/* <input type="text" className="input border-1 p-4 border-dolci-blue w-[60%] rounded-2xl mb-4" placeholder="city"/>
            <input type="text" className="input border-1 p-4 border-dolci-blue w-[60%] rounded-2xl mb-4" placeholder="state"/> */}
              <input
                type="number"
                className="input border-1 p-4 border-[#56a4d1] md:w-[80%] w-[80%] rounded-2xl mb-4"
                placeholder="Mobile Number"
              />
              {/* <input type="text" className="Street" /> */}

              <button className="hover:bg-[#468fba] bg-dolci-blue md:w-[80%] w-[80%] p-4 rounded-2xl cursor-pointer text-xl font-semibold">
                {" "}
                Claim My Europe Trip Today
              </button>
            </div>

            <div className="flex mb-10">
              {/* <div className="w-10 h-10 flex justify-center items-center bg-dolci-blue rounded-[100%] text-xl mr-4">
                2.{" "}
              </div> */}

              <div className="w-full text-center">
                <p className="md:text-xl text-2xl text-gray-600 leading-8">
                  {" "}
                  <i>
                    Your Dolci Explorer Passport will be processed and delivered
                    to your doorstep within 48 hours.
                  </i>
                </p>
              </div>
            </div>
          </div>

          {/* <div className="text-center mb-10 flex justify-center items-center ">
            <p className="text-xl text-gray-600 w-150 leading-6">
              {" "}
              <i>
                Your Dolci Explorer Passport will be processed and delivered to
                your doorstep within 48 hours.
              </i>
            </p>
          </div> */}

          {/* <div className="mx-auto mt-[-4rem] mb-10">
            <div className="passport flex justify-center ">
              <img
                src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763036723/3_ejnwcx.webp"
                alt=""
                className="w-[100%]"
              />
            </div>
          </div> */}
        </div>
        <div className="p-8 md:p-0 md:py-12 grid md:grid-cols-6 grid-cols-3 gap-2 mt-[0rem]">
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
    </>
  );
};

{
  /* <div className="flex justify-center mb-4 mt-[-2rem]">
            <img
              src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763017293/Switch_Collage_LP_44_imgbor.png"
              alt=""
              className="md:w-50 w-30"
            />
          </div> */
}

const DolciPassportInfo = () => {
  return (
    <section className="dolci_landing_text max-w-3xl mx-auto px-4 py-20">
      {/* Title */}
      <h1 className="text-xl font-semibold mb-3">
        Passport Usage, Rewards, and Redemption
      </h1>

      {/* Point 1 */}
      <p className="text-sm leading-snug text-gray-700 mb-2">
        <strong>1.</strong> You must collect stamps on your Dolci “Europe
        Passport” during each eligible visit to a designated Dolci outlet.
      </p>

      {/* Point 2 + bullets */}
      <p className="text-sm leading-snug text-gray-700 mb-1">
        <strong>2.</strong> Stamp collection and redemption will follow these
        updated slabs for rewards:
      </p>

      <ul className="list-disc pl-6 space-y-1 text-sm leading-snug text-gray-700 mb-3">
        <li>
          On the first visit, you can earn up to four stamps: one for the visit,
          one for referring a friend, leaving a review, and posting a story
          tagging Dolci (maximum 4 stamps on the first day).
        </li>
        <li>
          On the second visit with a friend, you will receive a stamp and redeem
          a 15% discount on their bill, totaling five stamps by the end of this
          visit.
        </li>
        <li>
          On the third visit, you will receive one additional stamp (total: 6
          stamps).
        </li>
        <li>
          On the fourth visit, you will receive a stamp and are eligible to
          redeem a 25% discount on the bill (total: 7 stamps).
        </li>
        <li>
          On the fifth and sixth visits, you can collect one stamp per visit; on
          the sixth visit, you can redeem a 30% discount on the bill for
          purchases above 1500 INR (total: 9 stamps by the end of the sixth
          visit).
        </li>
      </ul>

      {/* Ongoing Privileges */}
      <h2 className="text-base font-semibold mb-1">Ongoing Privileges</h2>

      <p className="text-sm leading-snug text-gray-700 mb-2">
        After collecting nine stamps, you can become eligible for exclusive
        perks, including free beverages, birthday discounts, Dolci merchandise,
        special freebies, and VIP invites for tastings, new launches, and
        limited edition previews.
      </p>

      {/* Point 3 */}
      <p className="text-sm leading-snug text-gray-700 mb-2">
        <strong>3.</strong> Rewards must be claimed in person by presenting the
        physical passport with the required number of stamps at any
        participating Dolci outlet.
      </p>

      {/* Point 4 */}
      <p className="text-sm leading-snug text-gray-700 mb-2">
        <strong>4.</strong> Offers and merchandise are subject to availability
        and are non-transferable, non-exchangeable, and cannot be redeemed for
        cash.
      </p>

      {/* Point 5 */}
      <p className="text-sm leading-snug text-gray-700 mb-2">
        <strong>5.</strong> Multiple visits in a day are always welcome at any
        outlet. However, only one reward slab can be claimed per visit, and
        stamps will be marked as redeemed after usage to avoid repeat
        redemption.
      </p>

      {/* Point 6 */}
      <p className="text-sm leading-snug text-gray-700 mb-1">
        <strong>6.</strong> Post your unique stickers on Instagram, tag #Dolci,
        and enjoy a free dessert right away.
      </p>

      <p className="text-sm leading-snug text-gray-700">
        In addition, post a story on Instagram of your passport, tag #Dolci and
        you will receive a free sticker that you can paste on the passport right
        away.
      </p>
    </section>
  );
};

const ArriveAtDolci = () => {
  return (
    <>
      <div className="contain">
        <div className="max-w-[920px] mx-auto px-6 md:px-0">
          <div className=" mt-8 text-center mb-12">
            <h2 className="text-3xl md:text-4xl leading-12 ">
              What Happens When You Arrive at Emigration?
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

          {/* <div className="grid md:grid-cols-3 grid-cols-1 gap-2 ">
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
          </div> */}

          <div className="max-w-[820px] mx-auto">



            <div className="overflow-hidden p-2">
              <img
                src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763535469/Paris_01_v1_vgmn7v.png"
                alt=""
                className="w-full"
              />
            </div>
            <div className="overflow-hidden p-2">
              <img
                src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763537155/Paris_02_v1_vduqyl.png"
                alt=""
                className="w-full"
              />
            </div>
            <div className="overflow-hidden p-2">
              <img
                src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763537154/backgrid_tajctp.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>

          <div className="flex justify-center mt-20">
            <button className="border-1 border-cyan-700 p-4 font-bold rounded-2xl text-2xl bg-amber-200 hover:bg-amber-500 cursor-pointer">
              Claim My Europe Trip Today
            </button>
          </div>

          <DolciPassportInfo />
        </div>
      </div>
    </>
  );
};

// const CollectMoreRewards = () => {
//   return (
//     <>
//       <div className="py-20 relative dbg">
//         {/* 🔹 Light overlay */}
//         <div className="absolute inset-0 bg-white/80 pointer-events-none"></div>
//         <div className=" relative max-w-[920px] mx-auto z-20">
//           <div className="px-10 mt-8 text-center mb-12">
//             <h2 className="text-3xl leading-12 mb-2">Collect More Rewards</h2>

//             <p className="text">
//               Post your unique stickers on Instagram, tag #Dolci, and enjoy a
//               free dessert right away.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

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
  // Set **end time** for countdown (example: 7 hours from now)
  // const endTime = new Date().getTime() + 7 * 60 * 60 * 1000;
  return (
    <>
      <div className="dolci_landing">
        <div className=" relative">
          {/* <Topbar /> */}
          <Navbar />
          <Hero />
        </div>

        <OnePassport />
        <GetStarted />
        <ArriveAtDolci />

        {/* <PassportCountdown endTime={endTime} totalPassports={400} /> */}

        <div className="py-10"></div>
        {/* <CollectMoreRewards /> */}
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
      </div>
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
    <main className="dolci_landing relative">
      <Home />
      {/* <Test /> */}
    </main>
  );
};

export default Landing;
