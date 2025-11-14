// import { useAssets } from "../../../hooks/useAssets";

// import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  // const { videos } = useAssets();
  const [_selectedLocation, _setSelectedLocation] = useState([
    "https://res.cloudinary.com/dq7bzydqz/image/upload/v1763036723/2_ewcgtb.webp",
    "https://res.cloudinary.com/dq7bzydqz/image/upload/v1763036723/3_ejnwcx.webp",
  ]);

  // const [slideIndex, setSlideIndex] = useState(0);

  // const nextSlide = () => {
  //   setSlideIndex((prev) =>
  //     prev === selectedLocation.length - 1 ? 0 : prev + 1
  //   );
  // };

  // const prevSlide = () => {
  //   setSlideIndex((prev) =>
  //     prev === 0 ? selectedLocation.length - 1 : prev - 1
  //   );
  // };

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

      <div className="text-center py-20 px-10">
        <h1 className="md:text-8xl text-4xl mb-2 md:leading-26 leading-14">
          YOUR EUROPE TRIP IS <span className="">CONFIRMED !</span>{" "}
        </h1>
        <h2 className="text-2xl text-dolci">
          {" "}
          <i>Europe. Closer Than You Searched.</i>
        </h2>
      </div>

      <div className="contain mx-auto mt-[-5rem]">
        <div className="md:w-[920px] w-full mx-auto text-center">
          <p className="text-2xl leading-8">
            Bounjour! Every time you search for that Paris flight, the Santorini
            sunsets, or places to visit in Europe, you hit a wall: be it budget,
            visa, or the impossible time off.
          </p>
          <p className="text-2xl leading-8">
            So, we're ending your search with one click, and you’ve been
            approved for the ultimate European getaway, right here in Bangalore.
          </p>
        </div>

        <div className="passport flex justify-center mb-20">
          <img
            src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1762952654/Dolci_Passport_Cover_Individual_Frame_ykgrcp.webp"
            alt=""
            className="w-[70%]"
          />
        </div>

        <div className="flex justify-center">
          <button className="border-1 border-cyan-700 p-4 font-bold rounded-2xl text-2xl bg-amber-200 hover:bg-amber-500 cursor-pointer">
            Claim My Europe Trip Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

/**
 *         <section
          id="location-image"
          className="relative max-w-4xl mx-auto my-6  overflow-hidden rounded-2xl group"
        >
          <img
            src={selectedLocation[slideIndex]}
            alt={selectedLocation[slideIndex]}
            className="w-full h-full object-cover transition-all duration-500"
          />

         
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm p-2 rounded-full  md:flex hover:bg-white transition"
          >
            <ChevronLeft size={20} />
          </button>

         
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm p-2 rounded-full  md:flex hover:bg-white transition"
          >
            <ChevronRight size={20} />
          </button>

        
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {selectedLocation.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition ${slideIndex === i ? "bg-dark-accent" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </section>
 */
