import { motion } from "framer-motion";
import { vehicles } from "@/data/vehicles";

export default function VehicleCategory() {
  return (
    <section id="vehicles" className="container py-12 md:py-16">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Vehicle Categories
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Choose the right vehicle for your group — capacities shown below.
        </p>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-start">
          {vehicles.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border/60 bg-card/40"
            >
              <div className="w-full h-20 overflow-hidden rounded-md">
                <img
                  src={`${v.image}`}
                  alt={v.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium">{v.name}</div>
                <div className="text-xs text-muted-foreground">
                  Facts: {v.capacityLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
