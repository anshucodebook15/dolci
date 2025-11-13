// import "./dolci.css";
import "./style/theme.css";
import {
  Topbar,
  Navbar,
  Hero,
  // Delights,
  // Gallery,
  // Baking,
  // Menu,
  // Snapshot,
  // Signature,
  // Units,
  Footer,
} from "./sections";
// import Features from "./sections/Features";
// import { useAssets } from "../../hooks/useAssets";
// import Ambience from "./sections/Ambience";

const OnePassport = () => {
  return (
    <>
      <div className="contain py-20">
        <div className="grid grid-cols-2 ">
          <div className="px-10 mt-8">
            <h2 className="text-4xl leading-12 mb-6">
              Three European Cities. One Passport.
            </h2>
            <p className="text-2xl leading-10">
              Our Dolci Explorer Passport is valid for three high-value
              destinations in Bangalore. It's the Europe you've been searching
              for, without the need to return to reality.
            </p>
          </div>

          <div className="w-full overflow-hidden grid grid-cols-2 gap-2">
            <div className="w-full h-80  col-span-2 overflow-hidden rounded-xl">
              <img
                src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1762246772/DSC01677_11zon_1_gigyaq.webp"
                alt=""
                className="w-full h-full object-cover object-bottom"
              />
            </div>
            <div className="w-full h-60 object-cover overflow-hidden rounded-xl">
              <img
                src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1762246888/DSC01764_11zon_p8bi6m.webp"
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-60 object-cover overflow-hidden rounded-xl">
              <img
                src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1762242033/uploads_image_GNjDKAFRTsqn7VYv1W5OZ8kamgMirh_DSC06492-_1_eqqxhn.webp"
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
      <div className="contain py-20">

        <div className="max-w-[920px] mx-auto">



          <div className="px-10 mt-8 text-center">
            <h2 className="text-4xl leading-12 mb-6">
              How to get started?
            </h2>
            <p className="text-2xl leading-10">
              Our Dolci Explorer Passport is valid for three high-value
              destinations in Bangalore. It's the Europe you've been searching
              for, without the need to return to reality.
            </p>
          </div>

        </div>

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
