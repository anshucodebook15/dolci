import { useState } from "react";
import { ArrowRight } from "lucide-react";

const menuTabs = {
  dolci: {
    title: "Artisan Desserts, Viennoiseries & Signature Beverages",
    description: `Discover a thoughtfully curated selection of handcrafted desserts, freshly baked viennoiseries, premium
coffee blends, and refreshing beverages designed to make every café moment special. From indulgent cakes and
decadent sweet treats to buttery croissants, flaky bakes, and artisanal coffees — Dolci brings together warmth,
comfort, and authentic café culture in every experience`,
    buttonColor: "bg-dolci-blue text-midnight-blue hover:bg-dolci-blue/90",
    pdf: " https://drive.google.com/file/d/1_YI53aKsMJl3t21XpxCfnr9ixT1utndA/view?usp=sharing",
  },

  salato: {
    title: "Meet Salato - The Savoury Side of Dolci",
    description: `Discover a flavour-packed selection of vegetarian and non-vegetarian continental dishes, crafted to
bring bold flavours and satisfying café dining to every table. From hearty burgers and gourmet sandwiches
to protein-rich rice bowls and finger-licking starters — Salato brings together wholesome ingredients,
comforting flavours, and a fresh food-forward experience across every Dolci outlet.`,
    buttonColor: "bg-orange-500 text-white hover:bg-orange-600",
    pdf: "https://drive.google.com/file/d/1I-Mt2H0m9mearsU_SreU1fKLijDZvS2y/view?usp=sharing",
  },
};

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState<"dolci" | "salato">("dolci");

  const currentTab = menuTabs[activeTab];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-midnight-blue mb-4">
            Our Artisan Menu
          </h2>

          <p className="font-great-vibes text-2xl text-dark-accent mb-4">
            Sweet Indulgence Meets Bold Flavors
          </p>

          <p className="font-montserrat text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of artisan desserts, premium coffee blends, continental savoury
            favourites, and gourmet café specials that bring together authentic flavours and comforting experiences.
            From handcrafted beverages and signature desserts to hearty burgers, gourmet sandwiches, protein-rich rice
            bowls, and flavour-packed starters — Dolci & Salato together create the perfect all-day café experience.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {/* Dolci */}
          <button
            onClick={() => setActiveTab("dolci")}
            className={`px-8 py-4 rounded-2xl font-montserrat font-semibold text-lg transition-all duration-300 shadow-md hover:scale-105
              
              ${activeTab === "dolci"
                ? "bg-dolci-blue text-midnight-blue"
                : "bg-arctic-blue text-gray-700 hover:bg-dolci-blue/30"
              }
            `}
          >
            Dolci
          </button>

          {/* Salato */}
          <button
            onClick={() => setActiveTab("salato")}
            className={`px-8 py-4 rounded-2xl font-montserrat font-semibold text-lg transition-all duration-300 shadow-md hover:scale-105
              
              ${activeTab === "salato"
                ? "bg-orange-500 text-white"
                : "bg-orange-400 text-white hover:bg-orange-100"
              }
            `}
          >
            Salato
          </button>
        </div>

        {/* Content Card */}
        <div className=" rounded-3xl bg-gray-50 border border-gray-100 p-8 md:p-14 text-center transition-all duration-500">
          <h3
            className={`font-playfair text-2xl md:text-3xl font-bold ${activeTab === "salato" ? "text-orange-500" : ""} mb-6`}
          >
            {currentTab.title}
          </h3>

          <p className="font-montserrat text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
            {currentTab.description}
          </p>

          <a href={currentTab.pdf} target="_blank" className="inline-block">
            <button
              className={`cursor-pointer inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-montserrat font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg ${currentTab.buttonColor}`}
            >
              Explore Our Menu
              <ArrowRight className="w-5 h-5" />
            </button>
          </a>

        </div>
      </div>
    </section>
  );
};

export default MenuTabs;
