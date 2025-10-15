import { Car, BusFront, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TourPackage } from "@/data/packages";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/60 backdrop-blur hover:shadow-[0_0_0_1px_hsl(var(--primary))] flex flex-col h-full"
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
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-start">
          <h3 className="text-white text-lg font-semibold drop-shadow">
            {p.title}
          </h3>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs mb-3 text-muted-foreground">{p.subtitle}</p>
        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1 mb-4">
          {p.description
            .split(/\r?\n/)
            .map((s) => s.replace(/^\s*•\s*/, "").trim())
            .filter(Boolean)
            .map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
        </ul>
        <div className="mt-auto pt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
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
          <div className="w-full flex flex-col md:flex-row items-stretch md:items-center gap-2 md:ml-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" className="w-full md:w-auto">
                  <Info className="mr-2 h-4 w-4" /> View More
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-xl">{p.title}</DialogTitle>
                  <DialogDescription>
                    {p.days} {p.days === 1 ? "Day" : "Days"} • {p.subtitle}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="relative">
                    <Carousel className="w-full" opts={{ loop: true }}>
                      <CarouselContent>
                        {p.gallery.map((src, i) => (
                          <CarouselItem key={i} className="md:basis-1/2">
                            <div className="aspect-video overflow-hidden rounded-md border border-border/60 bg-muted/20">
                              <img
                                src={`${src}?auto=compress&cs=tinysrgb&w=1600`}
                                alt={`${p.title} ${i + 1}`}
                                className="h-full w-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">About this package</h4>
                    <p className="text-sm text-muted-foreground">
                      {p.moreDetails}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Itinerary Highlights</h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      {p.itinerary.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <Button asChild className="w-full md:w-auto">
                      <a href="tel:+94720532077">
                        Book Now <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button asChild className="w-full md:w-auto">
              <a href="tel:+94720532077">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
