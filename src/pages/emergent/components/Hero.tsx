import { useAssets } from "../../../hooks/useAssets";
const Hero = () => {
  const { videos } = useAssets();
  return (
    <div className="">
      <section
        id="home"
        // className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-midnight-blue via-dark-accent to-dolci-blue pb-20"
        className="max-w-[1800px] mx-auto relative flex items-end justify-center overflow-hidden md:pb-30 pb-20"
      >
        {/* Background Video */}
        {/* <div className="absolute transform inset-0 w-full h-full overflow-hidden z-0 sm:mt-[-90px] md:mt-[-50px] lg:mt-[40px] xl:mt-[-100px]" >
        <video
          className="w-full  md:h-auto md:mt-40 lg:mt-0 mt-[200px] md:object-cover object-center scale-[2] md:scale-[1.6] lg:scale-[1.2] xl:scale-[1]"
          src={videos.dolcipeople} // replace with your video path
          autoPlay
          loop
          muted
          playsInline
        />
      </div> */}

        <div className="transform inset-0 mx-auto w-full h-full overflow-hidden z-0 md:block hidden mt-[-40px] sm:mt-[-20px] md:mt-[20px] lg:mt-[-20px] xl:mt-[-120px]">
          <video
            className="w-full md:h-auto md:mt-40 lg:mt-0 mt-[200px] md:object-cover object-center scale-[2] sm:scale-[1.4] md:scale-[1.6] lg:scale-[1] xl:scale-[1.02]"
            src={videos.batista2} // replace with your video path
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="transform inset-0 mx-auto w-full h-full overflow-hidden z-0 lg:hidden xl:hidden md:hidden  mt-[-18rem] sm:mt-[-20px]  md:mt-[20px] lg:mt-[-60px] xl:mt-[-120px]">
          <video
            className="w-full md:h-auto md:mt-40 lg:mt-0 mt-[200px] md:object-cover object-center scale-[0.95] sm:scale-[1] md:scale-[1.6] lg:scale-[1] xl:scale-[1.02]"
            src={videos.batista_mobile} // replace with your video path
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Content */}
        {/* <div className="relative z-20 text-center text-[#1498cf] px-4 pt-22  mt-[360px] sm:mt-[390px] md:mt-[350px] lg:mt-[400px] xl:mt-[300px] ">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-2 leading-tight">
          Since 2008,
          Worth Discovering

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
      </div> */}
      </section>
      <div className="relative z-20 text-center text-[#1498cf] px-4 py-30 xl:mt-[-24rem] lg:mt-[-22rem] md:mt-[-15rem] mt-[-22rem]">
        <h1 className="font-playfair text-3xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[42px] font-bold mb-2 leading-tight">
          {/* Since 2008, Worth Discovering */}
          Dolci, obviously!
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
      {/* <div className="absolute inset-0 bg-black/5"></div> */}
    </div>
  );
};

export default Hero;
