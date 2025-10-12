import { Car, BusFront, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TourPackage } from "@/data/packages";
import { motion } from "framer-motion";

export default function TourCard({
  p,
  index,
}: {
  p: TourPackage;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/60 backdrop-blur hover:shadow-[0_0_0_1px_hsl(var(--primary))]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={`${p.image}?auto=compress&cs=tinysrgb&w=1200`}
          alt={p.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white tracking-wider">
            {p.days} {p.days === 1 ? "Day" : "Days"}
          </span>
          <div className="hidden sm:flex items-center gap-2 text-white/90">
            {p.vehicles.includes("Car") && (
              <span className="inline-flex items-center gap-1 text-[11px]">
                <Car className="h-4 w-4 text-primary" /> Car
              </span>
            )}
            {p.vehicles.includes("Van") && (
              <span className="inline-flex items-center gap-1 text-[11px]">
                <BusFront className="h-4 w-4 text-primary" /> Van
              </span>
            )}
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <h3 className="text-white text-lg font-semibold drop-shadow">
            {p.title}
          </h3>
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow">
            From ${p.priceFrom.toFixed(0)}
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-muted-foreground min-h-10">
          {p.description}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3 text-muted-foreground sm:hidden">
            {p.vehicles.includes("Car") && (
              <span className="inline-flex items-center gap-1 text-xs">
                <Car className="h-4 w-4 text-primary" /> Car
              </span>
            )}
            {p.vehicles.includes("Van") && (
              <span className="inline-flex items-center gap-1 text-xs">
                <BusFront className="h-4 w-4 text-primary" /> Van
              </span>
            )}
          </div>
          <Button asChild>
            <a
              href={`mailto:nikinihunukumbura@gmail.com?subject=${encodeURIComponent(p.title + " Inquiry - GB Travels & Tours")}`}
            >
              Book Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
