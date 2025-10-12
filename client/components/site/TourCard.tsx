import { Car, Van, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TourPackage } from "@/data/packages";
import { motion } from "framer-motion";

export default function TourCard({ p, index }: { p: TourPackage; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/60 backdrop-blur hover:shadow-[0_0_0_1px_hsl(var(--primary))]"
    >
      <div className="p-5">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-semibold">
            {p.title}
          </h3>
          <span className="text-xs tracking-widest uppercase text-primary font-semibold">{p.days} {p.days === 1 ? "Day" : "Days"}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground min-h-10">{p.description}</p>
        <div className="mt-4 flex items-center gap-3 text-muted-foreground">
          {p.vehicles.includes("Car") && (
            <span className="inline-flex items-center gap-1 text-xs"><Car className="h-4 w-4 text-primary"/> Car</span>
          )}
          {p.vehicles.includes("Van") && (
            <span className="inline-flex items-center gap-1 text-xs"><Van className="h-4 w-4 text-primary"/> Van</span>
          )}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">From</p>
            <p className="text-xl font-bold">${p.priceFrom.toFixed(0)}</p>
          </div>
          <Button asChild>
            <a href={`mailto:nikinihunukumbura@gmail.com?subject=${encodeURIComponent(p.title + " Inquiry - GB Travels & Tours")}`}>
              Book Now <ArrowRight className="ml-2 h-4 w-4"/>
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"/>
    </motion.div>
  );
}
