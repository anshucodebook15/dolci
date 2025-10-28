import { useEffect, useState } from "react";
// import { useAssets } from "../../../hooks/useAssets";
import LayoutTwo from "../layout/layoutTwo";
// import { BadgeCheck, ChefHat, Salad, Sparkle } from "lucide-react";
import { useLocation } from "react-router";
// import { useAssets } from "../../../hooks/useAssets";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Blog = () => {
  // const { images } = useAssets();
  const [_showModal, setShowModal] = useState(false);

  // const { _images } = useAssets();

  // Auto-open modal after 2s
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ScrollToTop />
      <LayoutTwo>
        <div className="px-4">
          <div className="py-20"></div>

          <section className="text- mb-16 max-w-4xl mx-auto">
            <p className="font-great-vibes text-2xl text-dark-accent mb-2">
              Cakes
            </p>
            <h1 className="font-playfair-display text-4xl md:text-5xl font-bold text-midnight-blue mb-8 leading-12">
              How cakes are made at dolci?
            </h1>

            {/* <div className="text-[14px] pb-8">
              <p>
                <i>By Dolci </i>{" "}
              </p>
            </div> */}

            <div className="w-full overflow-hidden h-100 mb-6">
              <img
                src="https://t3.ftcdn.net/jpg/07/14/64/44/360_F_714644486_zpPsCXds1W8oaevXFG7SWoqKaopeazt9.jpg"
                alt=""
                className="w-full object-contain"
              />
            </div>

            <div className="max-w-5xl mx-auto">
              <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-8">
                At Dolci, we power some of the biggest brands with our expertise
                in baking and food innovation. As a trusted white label bakery
                supplier and private label bakery manufacturer for B2B, we
                create high-quality products that carry your brand name while
                delivering our top-notch craftsmanship and consistency.
              </p>

              {/* <p>Our batch production for scaling includes: </p> */}
            </div>
          </section>

          <section className="mb-20">
            {/* CTA Section */}
            <div className="mt-24 text-center rounded-3xl p-10 lg:p-12 text-midnight-blue max-w-2xl mx-auto border-1 border-dolci-blue">
              <p className="font-montserrat text-midnight-blue/80 mb-10 max-w-3xl mx-auto text-base lg:text-lg">
                Get in touch today to discuss your requirements and explore how
                we can create the perfect baked products for your brand.
              </p>

              <p className="text-gray-600 text-sm mb-6 text-center">
                Enter your phone number and email to receive updates from Dolci.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-midnight-blue focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-midnight-blue focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-midnight-blue focus:outline-none"
                />

                <button
                  type="button"
                  className="w-full bg-midnight-blue hover:bg-midnight-blue/60 text-white rounded-lg py-2  transition font-playfair text-2xl lg:text-2xl font-bold mb-6 leading-normal cursor-pointer"
                >
                  I AM INTERESTED
                </button>
              </form>
            </div>
          </section>

          <section className=" w-[80%] mx-auto overflow-hidden rounded-2xl border-1 border-gray-200 mb-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5009906078853!2d77.579714!3d13.067403999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae190038070535%3A0x5fcf8c6cd9f8e26e!2sDolci%20-%20Commissary%20%26%20Satellite%20Kitchen!5e0!3m2!1sen!2sin!4v1761546527359!5m2!1sen!2sin"
              className="w-full h-80"
              loading="lazy"
            />

            <div className="p-8">
              <h2>
                <b>Commissary address </b>- 206/6, Main Road, Canara Bank
                Layout, Rajiv Gandhi Nagar, Kodigehalli, Bengaluru, Karnataka
                560097
              </h2>
            </div>
          </section>
        </div>
      </LayoutTwo>
    </div>
  );
};

export default Blog;
