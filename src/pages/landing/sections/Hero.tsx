// import { useAssets } from "../../../hooks/useAssets";



const Hero = () => {
  // const { videos } = useAssets();

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

        <div className="passport flex justify-center mb-10">
          <img
            src="https://res.cloudinary.com/dq7bzydqz/image/upload/v1762952654/Dolci_Passport_Cover_Individual_Frame_ykgrcp.webp"
            alt=""
            className="w-[70%]"
          />
        </div>

        <div className="flex justify-center">
          <button className="border-1 border-cyan-700 p-4 font-bold rounded-2xl text-2xl bg-amber-200 hover:bg-amber-500 cursor-pointer">Claim My Europe Trip Today</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
