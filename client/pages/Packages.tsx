import { motion } from "framer-motion";
import { packages } from "@/data/packages";
import TourCard from "@/components/site/TourCard";
import DistrictsGrid from "@/components/site/DistrictsGrid";

export default function Packages() {
  return (
    <main className="min-h-screen">
      <section className="container py-14 relative">
        <div className="text-center">
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

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {packages.map((p, i) => (
            <TourCard key={p.id} p={p} index={i} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-extrabold"
          >
            Districts We Tour
          </motion.h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Explore popular districts and discover the must-see places we cover
            in each region.
          </p>
        </div>
        <DistrictsGrid />
      </section>
    </main>
  );
}
