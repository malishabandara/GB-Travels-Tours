import { motion } from "framer-motion";
import { packages } from "@/data/packages";
import TourCard from "@/components/site/TourCard";

export default function Packages() {
  return (
    <main className="min-h-screen">
      <section className="container py-14 relative">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="https://images.pexels.com/photos/34239912/pexels-photo-34239912.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Desert dunes"
            className="absolute inset-0 h-full w-full object-cover opacity-80 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="relative z-10 text-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-extrabold"
            >
              Packages
            </motion.h1>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Choose from curated packages ranging from quick getaways to
              extended grand tours.
            </p>
          </div>
        </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {packages.map((p, i) => (
            <TourCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
