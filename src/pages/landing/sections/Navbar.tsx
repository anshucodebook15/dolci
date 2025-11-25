// import { Instagram, MapPinHouse, Menu } from "lucide-react";
// import { useAssets } from "../../../hooks/useAssets";

// const Navbar = () => {
//   const { images } = useAssets();
//   const navItems = [
//     { title: "About.", uri: "/#about" },
//     { title: "Shop.", uri: "/#location" },
//   ];

//   return (
//     <div className="sticky top-0 z-50 py-2 md:py-2 ">
//       <div className="contain">
//         <nav className="flex justify-between items-center px-2 backdrop-blur-md">
//           <div className="text-shadow-initial">
//             <img src={images.dolcilogo} alt="" className="w-16 md:w-25" />
//           </div>

//           {/* Desktop Menu */}
//           {/* <div className="hidden lg:block">
//             <ul className="flex list-none gap-12">
//               {navItems.map((item) => (
//                 <li key={item.uri} className="menu">
//                   <a href={item.uri} className="hover:text-secondary link">
//                     {item.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div> */}

//           {/* Icons */}
//           <div className="flex gap-2">
//             <div className="cursor-pointer hidden  md:flex gap-1">
//               <button className="text-[#8cb0c4] rounded-2l cursor-pointer hover:bg-[#e4eef3] rounded-full p-2">
//                 <Instagram size={30} />
//               </button>
//               <button id="locationBtn" className="text-[#8cb0c4] rounded-2l cursor-pointer hover:bg-[#e4eef3] rounded-full p-2">
//                 <MapPinHouse size={30} />
//               </button>
//             </div>
//             <div className="cursor-pointer block md:hidden">
//               <Menu strokeWidth={1.75} fill="#000000" />
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Instagram, MapPinHouse, Menu } from "lucide-react";
import { useAssets } from "../../../hooks/useAssets";
import { Link } from "react-router";
// import PassportCountdown from "./PassportCounter";

const Navbar = () => {
  const { images } = useAssets();
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => setOpenDropdown(!openDropdown);
  // const endTime = new Date().getTime() + 7 * 60 * 60 * 1000;

  return (
    <div className="sticky top-0 z-50 py-2 md:py-2">
      <div className="contain">
        <nav className="flex justify-between items-center px-2 relative">
          <div className="text-shadow-initial">
            <img src={images.dolcilogo} alt="" className="w-16 md:w-22" />
          </div>

          {/* <div>
            <PassportCountdown endTime={endTime} totalPassports={400} />
          </div> */}

          {/* Right Icons */}
          <div className="flex gap-2 relative">
            <div className="md:flex gap-1 items-center">
              <Link to={"https://www.instagram.com/dolci_blr"}>
                <button className="text-[#8cb0c4] hover:bg-[#e4eef3] rounded-full p-2">
                  <Instagram size={30} />
                </button>
              </Link>

              {/* Location Button */}
              <button
                id="locationBtn"
                onClick={toggleDropdown}
                className="text-[#8cb0c4] hover:bg-[#e4eef3] rounded-full p-2"
              >
                <MapPinHouse size={30} />
              </button>

              {/* Dropdown */}
              {openDropdown && (
                <div className="absolute right-0 top-12 w-44 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                  <Link to={"https://share.google/mTlEVxzqb2UNFvpLS"}>
                    <button className="w-full px-4 py-2 text-sm font-bold hover:bg-gray-100 cursor-pointer">
                      New Bel Road
                    </button>
                  </Link>
                  <Link to={"https://share.google/nn3eNGNHwfz9C7zqy"}>
                    <button className="w-full px-4 py-2 text-sm font-bold hover:bg-gray-100 cursor-pointer">
                      Cunningham Road
                    </button>
                  </Link>
                  <Link to={"https://share.google/w9VGV5xIGs8hH3Lzo"}>
                    <button className="w-full px-4 py-2 text-sm font-bold hover:bg-gray-100 cursor-pointer">
                      Lavelle Road
                    </button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden hidden cursor-pointer">
              <Menu strokeWidth={1.75} fill="#000000" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
