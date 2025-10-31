import { useAssets } from "../../../hooks/useAssets";
const Hero = () => {
  const { videos } = useAssets();
  return (
    <section
      id="home"
      // className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-midnight-blue via-dark-accent to-dolci-blue pb-20"
      className="max-w-[1600px] mx-auto relative min-h-[100vh] flex items-center justify-center overflow-hidden md:pb-30 pb-30 mb-20"
    >
      {/* Background Video */}
      <div className="absolute transform inset-0 w-full h-full overflow-hidden z-0 md:mt-[-100px] lg:mt-[-40px] xl:mt-[-120px]">
        <video
          className="w-full  md:h-auto md:mt-40 lg:mt-0 mt-[200px] md:object-cover object-center scale-[2] md:scale-[1.8] lg:scale-100"
          src={videos.dolcipeople} // replace with your video path
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark overlay to improve text readability */}
      </div>
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-white animate-pulse animation-delay-200"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 rounded-full bg-white animate-pulse animation-delay-400"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 rounded-full bg-white animate-pulse animation-delay-600"></div>
      </div> */}

      {/* Content */}
      <div className="relative z-20 text-center text-[#1498cf] px-4 pt-22 lg:mt-[440px] xl:mt-[490px] mt-[360px]">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-2 leading-tight">
          Since 2008, {/* <br /> */}
          Worth Discovering
          {/* <br /> */}
        </h1>

        <p className="font-montserrat text-gray-500 text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-90">
          Where flavor meets ambience in the heart of Bangalore
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="btn btn-primary text-lg px-8 py-4"
            onClick={() =>
              document
                .getElementById("location")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Visit Our Café
          </button>
          <button
            className="btn btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-midnight-blue"
            onClick={() =>
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
