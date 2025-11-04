// import { ZoomIn } from "lucide-react";
// import React from "react";
import { Link } from "react-router";

const Bevrages = () => {
  const storyData = [
    {
      id: 1,
      title: "Inspired by",
      subtitle: "European café culture",
      link: "/dacadc",
      image:
        "https://res.cloudinary.com/dq7bzydqz/image/upload/v1758764537/Hot_Chocolate_Square_alv4zz.webp",
      gradient: "bg-gradient-to-t from-black/80 via-transparent to-transparent",
    },
    {
      id: 2,
      title: "Handcrafted",
      subtitle: "Dishes and pastries",
      link: "/dacadc",
      image:
        "https://res.cloudinary.com/dq7bzydqz/image/upload/v1758764536/Dolci_Square_Web-Images_0002_Cappuccino-Square_fgr6qb.webp",
      gradient: "bg-gradient-to-t from-black/80 via-transparent to-transparent",
    },
    {
      id: 3,
      title: "Rich Coffee",
      link: "/dacadc",
      // subtitle: "Blends and specialty drinks",
      subtitle: "Blends and drinks",
      image:
        "https://res.cloudinary.com/dq7bzydqz/image/upload/v1758764535/Dolci_Square_Web-Images_0000_Cafe-Mocha-Square_vbqpfu.webp",
      gradient: "bg-gradient-to-t from-black/80 via-transparent to-transparent",
    },
    {
      id: 4,
      title: "Cozy Ambience",
      link: "/dacadc",
      subtitle: "Perfect for any occasion",
      image:
        "https://res.cloudinary.com/dq7bzydqz/image/upload/v1758764535/Dolci_Square_Web-Images_0001_Caffe-Latte-square_rpomhy.webp",
      gradient: "bg-gradient-to-t from-black/80 via-transparent to-transparent",
    },
    {
      id: 4,
      title: "Cozy Ambience",
      link: "/dacadc",
      subtitle: "Perfect for any occasion",
      image:
        "https://res.cloudinary.com/dq7bzydqz/image/upload/v1758764539/Orange_Cold_Brew_Square_degucl.webp",
      gradient: "bg-gradient-to-t from-black/80 via-transparent to-transparent",
    },
    {
      id: 4,
      title: "Cozy Ambience",
      link: "/dacadc",
      subtitle: "Perfect for any occasion",
      image:
        "https://res.cloudinary.com/dq7bzydqz/image/upload/v1758764538/Iced_Americano_Square_rzhld2.webp",
      gradient: "bg-gradient-to-t from-black/80 via-transparent to-transparent",
    },
  ];

  return (
    <section className=" max-w-[1600px] mx-auto relative dbg py-20">
      {/* 🔹 Light overlay */}
      <div className="absolute inset-0 bg-white/80 pointer-events-none"></div>
      <div className=" relative max-w-full mx-auto  px-4 md:px-0">
        <div className="text-center mb-10">
          <h2 className="font-playfair-display text-4xl md:text-5xl font-bold text-midnight-blue mb-6">
            Star Beverages of Docli
          </h2>
          <p className="font-great-vibes text-2xl text-dark-accent">
            Beverages & More
          </p>
        </div>
        {/* Image Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-1 lg:gap-1 justify-center">
          {storyData.map((item) => (
            <Link to={"#"}>
              <div key={item.id} className="group cursor-pointer md:py-2 ">
                <div className="overflow-hidden rounded-[5px] md:h-90 h-40">
                  <div className="overflow-hidden rounded-[5px] w-full h-full">
                    <img
                      src={item.image}
                      alt={item.subtitle}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bevrages;
