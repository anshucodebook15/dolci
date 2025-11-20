// import { useAssets } from "../../../hooks/useAssets";
import Navbar from "./Navbar";
// import Lottie from "lottie-react";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-950 p-1 text-center">
        <p className="text-white text-[16px] p-0 m-0">
          © 2025 Dolci Café Private Limited. All rights reserved.
        </p>
      </div>
    </>
  );
};

export const ThankYou = () => {
//   const { lottiee } = useAssets();
  return (
    <>
      <div className="dolci_landing">
        <div className=" relative">
          {/* <Topbar /> */}
          <Navbar />
        </div>

        <div className=" text-center pt-12 ">
          <h1 className="text-[68px] leading-0 mb-20">
            {" "}
            <i>Thank You, Enjoy Your Trip</i>
          </h1>

          <div className="max-w-4xl mx-auto">
            <div className="w-full overflow-hidden grid grid-cols-2 gap-2 md:p-4 p-6">
              <div className="w-full md:h-80  col-span-2 overflow-hidden rounded-xl">
                <img
                  src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1763391286/Gemini_Generated_Image_keqjc5keqjc5keqj_fzawhq.webp"
                  alt=""
                  className="w-full h-full object-cover object-center transform scale-[1.2]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <PassportCountdown endTime={endTime} totalPassports={400} /> */}

        <div className="py-22"></div>

        <Footer />
      </div>
    </>
  );
};
