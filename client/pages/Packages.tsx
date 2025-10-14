import { motion } from "framer-motion";
import { packages } from "@/data/packages";
import { Car, Bus, Clock, MapPin } from "lucide-react";

export default function Packages() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="container py-16 relative">
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight"
          >
            Explore Our Tour Packages
          </motion.h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Discover Sri Lanka’s breathtaking beauty — from cultural wonders to
            wild safaris and golden beaches. Pick your perfect journey below.
          </p>
        </div>

        {/* Grid of Packages */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {packages.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-[260px]">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {p.title}
                  </h2>

                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{p.days} Days Tour</span>
                    <MapPin className="w-4 h-4 ml-3" />
                    <span>Sri Lanka</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 whitespace-pre-line">
                    {p.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2">
                    {p.vehicles.includes("Car") && (
                      <Car className="w-4 h-4 text-blue-500" />
                    )}
                    {p.vehicles.includes("Van") && (
                      <Bus className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">From</p>
                    <p className="text-lg font-semibold text-primary">
                      ${p.priceFrom}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
