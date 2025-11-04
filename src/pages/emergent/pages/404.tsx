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

// const b2bannerImage = [
//   {
//     title: "men making",
//     uri: "https://res.cloudinary.com/dq7bzydqz/image/upload/v1762067719/qqhjiyu5miz86nh6mw6y_xun7e5.webp",
//   },
//   {
//     title: "gloves",
//     uri: "https://res.cloudinary.com/dq7bzydqz/image/upload/v1762067717/dapidiu5wlaotyo5scse_sinajl.webp",
//   },
//   {
//     title: "biscutes",
//     uri: "https://res.cloudinary.com/dq7bzydqz/image/upload/v1762067721/asns266wwhgsl7klnbfa_f2nj0t.webp",
//   },
//   {
//     title: "tray",
//     uri: "https://res.cloudinary.com/dq7bzydqz/image/upload/v1762067718/fvirztlazxfw1jy58yt7_wqhji8.webp",
//   },
// ];

const Error404 = () => {
  // const { images } = useAssets();
  const [_showModal, setShowModal] = useState(false);

  // const { images } = useAssets();

  // Auto-open modal after 2s
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ScrollToTop />
      <LayoutTwo>
        <div className="text-center min-h-[90vh] flex items-center justify-center">
          <h1>404 Nothing found here</h1>
        </div>
      </LayoutTwo>
    </div>
  );
};

export default Error404;
