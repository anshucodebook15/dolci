import { useState } from "react";

import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { locationData } from "../../../data/mock";
// import { locationData } from '../data/mock';

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState(
    locationData.locations[2]
  ); // Default to Cunningham Road (main)

  const socialLinks = [
    {
      icon: Facebook,
      url: locationData.socialMedia.facebook,
      name: "Facebook",
    },
    {
      icon: Instagram,
      url: locationData.socialMedia.instagram,
      name: "Instagram",
    },
    {
      icon: Linkedin,
      url: locationData.socialMedia.linkedin,
      name: "LinkedIn",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: selectedLocation.address,
      action: () =>
        window.open(
          `https://maps.google.com?q=${encodeURIComponent(
            selectedLocation.address
          )}`,
          "_blank"
        ),
    },
    {
      icon: Phone,
      title: "Phone",
      content: selectedLocation.phone,
      action: () => window.open(`tel:${selectedLocation.phone}`),
    },
    {
      icon: Mail,
      title: "Email",
      content: selectedLocation.email,
      action: () => window.open(`mailto:${selectedLocation.email}`),
    },
    {
      icon: Clock,
      title: "Hours",
      content: `Weekdays: ${selectedLocation.hours.weekdays}\nWeekends: ${selectedLocation.hours.weekends}`,
      action: null,
    },
  ];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-midnight-blue mb-4">
            Visit Dolci Today
          </h2>
          <p className="font-montserrat text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the finest coffee and desserts at any of our three
            Bangalore locations, each offering the same exceptional quality in a
            cozy, welcoming atmosphere.
          </p>
        </div>

        {/* Location Selection */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {locationData.locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`btn-secondary ${selectedLocation.id === location.id
                    ? "bg-dolci-blue text-midnight-blue hover:bg-dark-accent"
                    : "text-dolci-blue hover:bg-dolci-blue hover:text-midnight-blue"
                  }`}
              >
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0" />
                {location.name}
                {location.isMain && (
                  <span className="ml-2 text-xs bg-dark-accent text-midnight-blue px-2 py-0.5 rounded-full">
                    Main
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-midnight-blue mb-6">
              Get in Touch - {selectedLocation.name}
            </h3>

            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-300 hover:shadow-lg border-l-4 border-l-dolci-blue ${item.action ? "cursor-pointer hover:-translate-y-1" : ""
                    }`}
                  onClick={() => item.action}
                >
                  <div className="card-padding">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-arctic-blue rounded-lg flex items-center justify-center group-hover:bg-dolci-blue transition-colors">
                          <IconComponent className="h-6 w-6 text-midnight-blue" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-playfair text-lg font-semibold text-midnight-blue mb-1">
                          {item.title}
                        </h4>
                        <p className="font-montserrat text-gray-600 whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Social Media & Delivery Links */}
            <div className="pt-6">
              <h4 className="font-playfair text-lg font-semibold text-midnight-blue mb-4">
                Follow & Order
              </h4>
              <div className="space-y-4">
                {/* Social Media */}
                <div>
                  <p className="font-montserrat text-sm text-gray-500 mb-2">
                    Social Media
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <button
                          key={index}
                          className="btn-secondary min-h-[48px] w-[48px] p-3 text-dolci-blue hover:bg-dolci-blue hover:text-midnight-blue"
                          onClick={() => window.open(social.url, "_blank")}
                          title={social.name}
                        >
                          <IconComponent className="h-5 w-5 flex-shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Delivery Links */}
                <div>
                  <p className="font-montserrat text-sm text-gray-500 mb-2">
                    Order Online
                  </p>
                  <div className="flex space-x-4">
                    {/* Zomato */}
                    {selectedLocation.zomato && (
                      <button
                        className="btn-secondary min-h-[48px] px-4 text-dolci-blue hover:bg-dolci-blue hover:text-midnight-blue flex items-center"
                        onClick={() =>
                          window.open(selectedLocation.zomato, "_blank")
                        }
                        title="Order on Zomato"
                      >
                        <span className="font-montserrat font-semibold text-sm">
                          Zomato
                        </span>
                      </button>
                    )}

                    {/* Swiggy */}
                    {selectedLocation.swiggy && (
                      <button
                        className="btn-secondary min-h-[48px] px-4 text-dolci-blue hover:bg-dolci-blue hover:text-midnight-blue flex items-center"
                        onClick={() =>
                          window.open(selectedLocation.swiggy, "_blank")
                        }
                        title="Order on Swiggy"
                      >
                        <span className="font-montserrat font-semibold text-sm">
                          Swiggy
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-midnight-blue mb-6">
              Find Us Here - {selectedLocation.name}
            </h3>

            <div className="overflow-hidden shadow-lg">
              <div
                className="w-full h-80 bg-gradient-to-br from-arctic-blue to-dolci-blue flex items-center justify-center cursor-pointer group hover:from-dolci-blue hover:to-dark-accent transition-all duration-300"
                onClick={() =>
                  window.open(
                    `https://maps.google.com?q=${encodeURIComponent(
                      selectedLocation.address
                    )}`,
                    "_blank"
                  )
                }
              >
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-midnight-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-playfair text-lg font-semibold text-midnight-blue mb-2">
                    View on Google Maps
                  </p>
                  <p className="font-montserrat text-midnight-blue/80 px-4">
                    Click to get directions to our {selectedLocation.name} café
                  </p>
                </div>
              </div>
            </div>

            {/* Call-to-Action */}
            <div className="bg-gradient-to-r from-dolci-blue to-dark-accent rounded-2xl p-6 lg:p-8 text-midnight-blue">
              <h4 className="font-playfair text-xl lg:text-2xl font-bold mb-4">
                Ready for a Sweet Experience?
              </h4>
              <p className="font-montserrat mb-6 text-midnight-blue/80 text-base">
                Visit our {selectedLocation.name} location today and discover
                why Dolci is Bangalore's favorite café destination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="btn-secondary bg-white text-midnight-blue hover:bg-white-sand"
                  onClick={() =>
                    window.open(
                      `https://maps.google.com?q=${encodeURIComponent(
                        selectedLocation.address
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <MapPin className="mr-2 h-5 w-5 flex-shrink-0" />
                  Get Directions
                </button>
                <button
                  className="btn-secondary border-white text-white hover:bg-white hover:text-midnight-blue"
                  onClick={() => window.open(`tel:${selectedLocation.phone}`)}
                >
                  <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
