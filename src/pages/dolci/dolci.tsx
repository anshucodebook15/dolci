// import "./dolci.css";
import "./style/theme.css";
import {
  Topbar,
  Navbar,
  Hero,
  Delights,
  Gallery,
  Baking,
  Menu,
  // Snapshot,
  Signature,
  Units,
  Footer,
} from "./sections";
import Features from "./sections/Features";
// import { useAssets } from "../../hooks/useAssets";
import Ambience from "./sections/Ambience";

const Home = () => {
  // const { backgrounds } = useAssets();
  return (
    <>
      <div className="herobg relative">
        <Topbar />
        <Navbar />
        <Hero />
      </div>
      <Features />
      <Delights />
      <Gallery />
      <Menu />
      <Ambience />
      <Baking />
      {/* <Snapshot /> */}
      <Signature />
      <Units />
      <Footer />
    </>
  );
};

const Dolci = () => {
  return (
    <main className="dolci_system_design relative">
      <Home />
    </main>
  );
};

export default Dolci;
