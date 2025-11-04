import { useEffect, useState } from "react";
// import { useAssets } from "../../../hooks/useAssets";
import LayoutTwo from "../layout/layoutTwo";
// import { BadgeCheck, ChefHat, Salad, Sparkle } from "lucide-react";
import { Link, useLocation } from "react-router";
import useAPI from "../../../api/api";
import axios from "axios";
// import { useAssets } from "../../../hooks/useAssets";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Blogs = () => {
  // const { images } = useAssets();
  const [_showModal, setShowModal] = useState(false);

  const { fetchAllPosts } = useAPI();
  const [posts, setPosts] = useState([
    {
      title: "",
      description: "",
      thumbnail: "",
      slug: "",
    },
  ]);
  const [_error, setError] = useState("");

  const fetchPostBySlug = async () => {
    try {
      // const response = await axios.get('https://dolci.theasylum.in/wp-json/wp/v2/posts?slug=step-by-step-guide-to-the-perfect-classic-french-croissant&_embed=1')
      const response = await axios.get(fetchAllPosts());

      if (!response.data || response.data.length === 0) {
        setError("No post found");
        throw new Error("Post not found");
      }

      const allPosts = response.data.map((_: any, i: any) => {
        return {
          title: response.data[i].title.rendered,
          description: response.data[i].excerpt.rendered,
          thumbnail: response.data[i]._embedded["wp:featuredmedia"]
            ? response.data[i]._embedded["wp:featuredmedia"][0].media_details
                .sizes.thumbnail.source_url
            : null,
          slug: response.data[i].slug,
        };
      });

      // const creactPost = {
      //   title: response.data[0].title.rendered,
      //   description: response.data[0].content.rendered,
      //   thumbnail: response.data[0]._embedded["wp:featuredmedia"]
      //     ? response.data[0]._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url
      //     : null,
      //   slug: response.data[0].slug,
      // };

      // console.log("response", allPosts);

      setPosts(allPosts);
      return { data: allPosts };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { message: "something went wrong" };
    }
  };

  useEffect(() => {
    fetchPostBySlug();
  }, []);

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

          <section className="mb-20">
            <div className="max-w-6xl mx-auto px-4">
              <p className="font-great-vibes text-2xl text-dark-accent mb-2">
                Blogs
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-midnight-blue mb-10">
                Latest Posts
              </h2>

              {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "The Art of Perfect Baking",
                    excerpt:
                      "Discover techniques and tips to elevate your baked goods — from dough handling to finishing touches.",
                    img: "https://img.freepik.com/premium-vector/realistic-vector-illustration-croissant_1027803-109.jpg",
                    link: "/asdad",
                  },
                  {
                    title: "Scaling Production for Your Brand",
                    excerpt:
                      "How to move from artisan batches to consistent large-scale production without losing quality.",
                    img: "https://www.shutterstock.com/image-vector/cup-coffee-vector-icon-illustration-600nw-2556793561.jpg",
                    link: "/asdad",
                  },
                  {
                    title: "Flavor Trends to Watch",
                    excerpt:
                      "A look at emerging flavor profiles and ingredient pairings that are exciting consumers right now.",
                    img: "https://img.freepik.com/premium-vector/delicious-tiramisu-dessert-with-cocoa-illustration-vector-illustration_1149116-24358.jpg?semt=ais_hybrid&w=740&q=80",
                    link: "/asdad",
                  },
                ].map((post, idx) => (
                  <article
                    key={idx}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col"
                  >
                    <div className="h-40 w-full overflow-hidden bg-gray-50">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-playfair text-lg font-bold text-midnight-blue mb-2">
                        {post.title}
                      </h3>
                      <p className="font-montserrat text-sm text-gray-600 leading-relaxed flex-1">
                        {post.excerpt}
                      </p>

                      <div className="mt-4">
                        <Link to={post.link}>
                          <button
                            type="button"
                            className="text-sm text-midnight-blue font-semibold hover:underline"
                          >
                            Read more →
                          </button>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div> */}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, idx) => (
                  <article
                    key={idx}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col"
                  >
                    <div className="h-40 w-full overflow-hidden bg-gray-50">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-playfair text-lg font-bold text-midnight-blue mb-2">
                        {post.title}
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: post.description }}
                        className="font-montserrat text-sm text-gray-600 leading-relaxed flex-1"
                      ></div>

                      <div className="mt-4">
                        <Link to={`/${post.slug}`}>
                          <button
                            type="button"
                            className="text-sm text-midnight-blue font-semibold hover:underline"
                          >
                            Read more →
                          </button>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
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

export default Blogs;
