import { useEffect, useState } from "react";
// import { useAssets } from "../../../hooks/useAssets";
import LayoutTwo from "../layout/layoutTwo";
import { BadgeCheck, ChefHat, Salad, Sparkle } from "lucide-react";
import { useLocation } from "react-router";
import { useAssets } from "../../../hooks/useAssets";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const B2b2 = () => {
  // const { images } = useAssets();
  const [showModal, setShowModal] = useState(false);

  const { images } = useAssets();

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
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-playfair-display text-4xl md:text-4xl font-bold text-midnight-blue mb-6 leading-12">
                India’s Trusted Partner for White Label Bakery Supplier and Food
                Manufacturing
              </h1>
            </div>

            <p className="font-great-vibes text-2xl text-dark-accent mb-10">
              Trusted by Businesses, Built for Scale
            </p>
            <div className="max-w-5xl mx-auto font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12">
              <p className="mb-2">
                At Dolci, we are more than just a bakery - we are a
                full-service, high-capacity production partner for businesses
                that demand quality, consistency, customization, and scale. As a
                leading white-label baked goods manufacturer and private label
                bakery manufacturer, we power your growth.
              </p>
              <p className="mb-2">
                Whether you're a retailer, corporate buyer, brand owner, or
                event planner, we offer end-to-end solutions for bulk food
                production, white-label manufacturing, and customized gifting.
              </p>
              <p>
                From artisanal foods and snacks to festive hampers and branded
                product lines, we bring together world-class infrastructure,
                food innovation, and reliable logistics to fulfill your vision.
              </p>
            </div>

            <div className="contain max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mb-12">
                <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                  {/* <img
                  src={
                    images?.b2bBatch1 ||
                    "https://img.icons8.com/ios-filled/100/bread.png"
                  }
                  alt="Batch Production"
                  className="w-16 h-16 mb-4"
                /> */}
                  <div className="mb-3">
                    <BadgeCheck strokeWidth={1} size={60} />
                  </div>
                  <h4 className="font-playfair-display text-[18px] font-bold mb-2 text-midnight-blue">
                    Seasonal SKU development
                  </h4>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                  {/* <img
                  src={
                    images?.b2bBatch1 ||
                    "https://img.icons8.com/ios-filled/100/bread.png"
                  }
                  alt="Batch Production"
                  className="w-16 h-16 mb-4"
                /> */}

                  <div className="mb-3">
                    <ChefHat strokeWidth={1} size={60} />
                  </div>
                  <h4 className="font-playfair-display text-[18px] font-bold mb-2 text-midnight-blue">
                    New recipe R&D
                  </h4>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                  {/* <img
                  src={
                    images?.b2bBatch1 ||
                    "https://img.icons8.com/ios-filled/100/bread.png"
                  }
                  alt="Batch Production"
                  className="w-16 h-16 mb-4"
                /> */}
                  <div className="mb-3">
                    <Salad strokeWidth={1} size={60} />
                  </div>
                  <h4 className="font-playfair-display text-[18px] font-bold mb-2 text-midnight-blue">
                    Vegetarian, Eggless, Vegan options
                  </h4>
                </div>
              </div>
            </div>
          </section>

          <div className="contain border-[1px] border-gray-200 mb-16"></div>

          <section className=" mb-20 bg-white">
            <div className="md:max-w-4xl mx-auto px-4">
              <div className="">
                <div className="text-center">
                  <h2 className=" underline font-playfair-display text-4xl md:text-4xl font-bold text-midnight-blue mb-6">
                    Who We Work With
                  </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                  <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-4">
                    We serve diverse partners who require consistent,
                    high-volume supply and wholesale bakery expertise
                  </p>
                </div>
              </div>
              <ul className="font-montserrat text-[18px] text-gray-700 b2blist leading-relaxed mb-12 ">
                <li>Retail Chains & Supermarkets</li>
                <li>Corporate Offices & Enterprises</li>
                <li>Gifting & Promotional Companies</li>
                <li>Event Management Agencies</li>
                <li>Hotels, Cafés & Restaurant Chains</li>
                <li>FMCG & D2C Brands</li>
                <li>Exporters & Distributors</li>
                <li>Institutions, Schools & Caterers</li>
              </ul>
            </div>
          </section>

          <div className="contain border-[1px] border-gray-200 mb-16"></div>

          <section>
            <section className=" mb-20 bg-white">
              <div className="md:max-w-4xl mx-auto px-4">
                <div className="">
                  <div className="text-center">
                    <h2 className=" underline font-playfair-display text-4xl md:text-4xl font-bold text-midnight-blue mb-8">
                      Our Capabilities & Infrastructure
                    </h2>
                  </div>

                  <div className="max-w-5xl mx-auto">
                    <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-4">
                      As a leading white label baked goods manufacturer, we
                      utilize a modern, high-capacity facility specifically
                      designed for the scalable production of baked goods and
                      multi-category food solutions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className=" mb-20 bg-white">
              <div className="flex text-center items-center justify-center mb-6">
                <Sparkle strokeWidth={1} size={20} className="mr-1" />
                <h3 className="font-playfair-display text-2xl md:text-2xl font-bold text-midnight-blue ">
                  Production & Customization
                </h3>
              </div>
              <div className="max-w-4xl mx-auto">
                <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12">
                  Looking for innovation? Our custom bakery solutions in India
                  are designed for brands that want unique recipes, specialised
                  product lines, or dietary-specific ranges like gluten-free and
                  vegan bakery items. We handle everything from concept to
                  scalable production while maintaining your brand’s signature
                  quality.
                </p>

                <ul className="font-montserrat text-[16px] text-gray-700 b2blist leading-relaxed mb-12 ">
                  <li>
                    Fully Equipped Facility: Multi-category kitchen for bakery,
                    confectionery, snacks, and ready-to-eat items
                  </li>
                  <li>
                    White-Label Integrity: Dedicated production lines ensuring
                    strict recipe and brand confidentiality.
                  </li>
                  <li>
                    Innovation: In-house R&D for flavour development, ingredient
                    innovation, and custom formulations.
                  </li>
                  <li>
                    Flexibility: Capability for small batches, pilot runs, and
                    rapid scaling up to full production.
                  </li>
                  <li>
                    Flexibility: Capability for small batches, pilot runs, and
                    rapid scaling up to full production.
                  </li>
                </ul>
              </div>
            </section>

            <section className=" mb-20 bg-white">
              <div className="flex text-center items-center justify-center mb-6">
                <Sparkle strokeWidth={1} size={20} className="mr-1" />
                <h3 className="font-playfair-display text-2xl md:text-2xl font-bold text-midnight-blue ">
                  Facility Highlights
                </h3>
              </div>
              <div className="max-w-4xl mx-auto">
                <ul className="font-montserrat text-[16px] text-gray-700 b2blist leading-relaxed mb-12 ">
                  <li>Temperature-controlled manufacturing zones.</li>
                  <li>HACCP-compliant hygiene and safety protocols.</li>
                  <li>
                    Dedicated packaging, labeling, and quality control sections.
                  </li>
                  <li>
                    Professional inventory management and traceability systems.
                  </li>
                </ul>
              </div>
            </section>
          </section>

          <div className="contain border-[1px] border-gray-200 mb-16"></div>

          <section>
            <section className=" mb-20 bg-white">
              <div className="md:max-w-4xl mx-auto px-4">
                <div className="">
                  <div className="text-center">
                    <h2 className=" underline font-playfair-display text-4xl md:text-4xl font-bold text-midnight-blue mb-6">
                      What We Offer
                    </h2>
                  </div>

                  <div className="max-w-5xl mx-auto">
                    <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-4">
                      As a trusted wholesale bakery supplier in India, our scope
                      extends beyond standard confectionery.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className=" mb-20 bg-white">
              <div className="flex text-center items-center justify-center mb-6">
                <Sparkle strokeWidth={1} size={20} className="mr-1" />
                <h3 className="font-playfair-display text-2xl md:text-2xl font-bold text-midnight-blue ">
                  Bakery & Prepared Foods
                </h3>
              </div>
              <div className="max-w-4xl mx-auto">
                <ul className="font-montserrat text-[16px] text-gray-700 b2blist leading-relaxed mb-12">
                  <li>Bakery items (breads, cookies, cakes, pastries)</li>
                  <li>Savoury snacks (crackers, crisps, ready-to-eat bites)</li>
                  <li>
                    Healthy foods (gluten-free, sugar-free, keto-friendly,
                    protein-packed)
                  </li>
                  <li>Confectionery (chocolates, truffles, bars)</li>
                  <li>Frozen products or semi-processed food</li>
                  <li>Custom packaged products for retail and export</li>
                </ul>
              </div>
            </section>

            <section className=" mb-20 bg-white">
              <div className="flex text-center items-center justify-center mb-6">
                <Sparkle strokeWidth={1} size={20} className="mr-1" />
                <h3 className="font-playfair-display text-2xl md:text-2xl font-bold text-midnight-blue ">
                  Corporate Gifting & Bulk Hampers
                </h3>
              </div>
              <div className="max-w-4xl mx-auto">
                <ul className="font-montserrat text-[16px] text-gray-700 b2blist leading-relaxed mb-12">
                  <li>
                    Branded gifting solutions for Diwali, Christmas, Holi &
                    corporate events
                  </li>
                  <li>
                    Custom-curated hampers with gourmet food, wellness items, or
                    gift sets
                  </li>
                  <li>
                    End-to-end service: product, packaging, labeling, shipping
                  </li>
                  <li>Personalization: names, messages, logos, QR codes</li>
                </ul>
              </div>
            </section>

            <section className=" mb-20 bg-white">
              <div className="flex text-center items-center justify-center mb-6">
                <Sparkle strokeWidth={1} size={20} className="mr-1" />
                <h3 className="font-playfair-display text-2xl md:text-2xl font-bold text-midnight-blue ">
                  White Label & OEM Manufacturing
                </h3>
              </div>
              <div className="max-w-4xl mx-auto">
                <ul className="font-montserrat text-[16px] text-gray-700 b2blist leading-relaxed mb-12 ">
                  <li>
                    End-to-end white label production under your brand name
                  </li>
                  <li>Custom packaging and design support</li>
                  <li>
                    Nutrition labels, FSSAI, shelf-life testing, and compliance
                  </li>
                  <li>
                    Ideal for multiple outlet brands, emerging food brands,
                    wellness startups, and global exporters
                  </li>
                </ul>
              </div>
            </section>
          </section>

          <div className="contain border-[1px] border-gray-200 mb-16"></div>

          <section>
            <section className=" mb-20 bg-white">
              <div className="md:max-w-4xl mx-auto px-4">
                <div className="">
                  <div className="text-center">
                    <h2 className=" underline font-playfair-display text-4xl md:text-4xl font-bold text-midnight-blue mb-6">
                      Our Process Is Simple, Transparent & Efficient
                    </h2>
                  </div>

                  <div className="max-w-5xl mx-auto">
                    <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-4">
                      We support both one-time bulk orders and long-term
                      recurring partnerships.
                    </p>

                    <div className="">
                      <ul className="font-montserrat text-[16px] text-gray-700 b2blist leading-relaxed mb-12">
                        <li>Requirement Discussion</li>
                        <li>Sampling & Customization</li>
                        <li>Quotation & Pilot Production</li>
                        <li>Full-Scale Manufacturing</li>
                        <li>Branding & Packaging</li>
                        <li>Dispatch & Logistics</li>
                        <li>Ongoing Reorders & Client Support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <div className="contain border-[1px] border-gray-200 mb-16"></div>

          <section>
            <section className=" mb-20 bg-white">
              <div className="md:max-w-4xl mx-auto px-4">
                <div className="">
                  <div className="text-center">
                    <h2 className=" underline font-playfair-display text-4xl md:text-4xl font-bold text-midnight-blue mb-6">
                      Why Choose Dolci?
                    </h2>
                  </div>

                  <div className="max-w-5xl mx-auto">
                    <div className="">
                      <ul className="font-montserrat text-[16px] text-gray-700 b2blist leading-relaxed mb-12">
                        <li>
                          Flexible Volumes: From small batches to large-scale
                          rollouts.
                        </li>
                        <li>
                          Reliable Timelines: Guaranteed on-time production &
                          delivery.
                        </li>
                        <li>
                          Customization-First: We tailor products, packaging,
                          and experiences to your precise needs.
                        </li>
                        <li>
                          One-Stop-Shop: Product, packaging, labeling,
                          compliance, all handled in-house.
                        </li>
                        <li>
                          Trusted Partnership: Preferred bakery contract
                          manufacturing partner for top corporates and national
                          retailers.
                        </li>
                        <li>
                          Transparent Pricing: Clear cost structures and
                          dedicated account management.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>



          <section>
            <section className=" mb-20 bg-white">
              <div className="md:max-w-4xl mx-auto px-4">
                <div className="">
                  <div className="">
                    <h2 className=" underline font-playfair-display text-2xl md:text-2xl font-bold text-midnight-blue mb-6">
                      Let’s Build Together

                    </h2>


                  </div>

                  <div className="max-w-5xl mx-auto">


                    <p className="mb-2">Whether you're launching a new product line, planning festive gifting, or need a dependable white label bakery partner for expansion, we’re ready to collaborate.
                    </p>

                    <h3 className="mb-2"> <b>Call Us: </b>9606729491 | <b>Email : </b> business@dolci.in
                    </h3>

                    {/* <button className="btn bg-gray-100 mr-2">Request a Proposal</button>
                    <button className="btn bg-gray-100">Schedule a Consultation</button> */}



                  </div>
                </div>
              </div>
            </section>
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

      {/* 🔹 Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full relative overflow-hidden">
            {/* 🔹 Banner */}
            <div className="relative">
              <div className="w-full flex justify-center bg-dolci-blue py-1">
                <img
                  src={images.dolcilogo} // <-- replace with your bakery banner image
                  alt="Bakery Banner"
                  className="w-20 h-20 object-cover"
                />
              </div>
              {/* 🔹 Close button over banner */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full p-1.5 shadow"
              >
                ✕
              </button>
            </div>

            {/* 🔹 Modal Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold font-playfair-display text-midnight-blue mb-4 text-center">
                Have a question?
              </h3>
              <p className="text-gray-600 text-sm mb-6 text-center">
                Fill up the below credentials and we will get in touch with you
                ASAP!
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
                  type="submit"
                  className="w-full bg-midnight-blue text-white font-semibold rounded-lg py-2 hover:bg-midnight-blue/90 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default B2b2;
