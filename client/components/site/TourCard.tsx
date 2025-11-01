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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          <div className="w-full min-w-0 flex flex-col md:flex-row md:flex-wrap items-stretch md:items-center gap-2 md:ml-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" className="w-full md:flex-1">
                  <Info className="mr-2 h-4 w-4" /> View More
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl">{p.title}</DialogTitle>
                  <DialogDescription>
                    {p.days} {p.days === 1 ? "Day" : "Days"} • {p.subtitle}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">
                      About this package
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {p.moreDetails}
                    </p>
                  </div>

                  {p.dayItinerary && p.dayItinerary.length > 0 ? (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">
                        Day-by-Day Itinerary
                      </h4>
                      <div className="space-y-6">
                        {p.dayItinerary.map((day) => (
                          <div
                            key={day.day}
                            className="border rounded-lg p-4 space-y-4"
                          >
                            <div className="flex items-center gap-2">
                              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center text-sm">
                                {day.day}
                              </span>
                              <h5 className="font-semibold text-base">
                                {day.title}
                              </h5>
                            </div>

                            {day.places && day.places.length > 0 && (
                              <div className="ml-10">
                                <Accordion
                                  type="multiple"
                                  className="space-y-2"
                                >
                                  {day.places.map((place, placeIndex) => (
                                    <AccordionItem
                                      key={placeIndex}
                                      value={`day-${day.day}-place-${placeIndex}`}
                                      className="border rounded-md px-0"
                                    >
                                      <AccordionTrigger className="px-4 py-3 hover:no-underline">
                                        <div className="flex items-center gap-3 w-full">
                                          {place.image && (
                                            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border border-border/60">
                                              <img
                                                src={`${place.image}?auto=compress&cs=tinysrgb&w=300`}
                                                alt={place.name}
                                                className="h-full w-full object-cover"
                                                loading="lazy"
                                              />
                                            </div>
                                          )}
                                          <span className="font-medium text-left flex-1">
                                            {place.name}
                                          </span>
                                        </div>
                                      </AccordionTrigger>
                                      {place.description && (
                                        <AccordionContent className="px-4 pb-4">
                                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                            {place.description}
                                          </p>
                                          {place.image && (
                                            <div className="rounded-md overflow-hidden border border-border/60">
                                              <img
                                                src={`${place.image}?auto=compress&cs=tinysrgb&w=800`}
                                                alt={place.name}
                                                className="w-full h-auto object-cover"
                                                loading="lazy"
                                              />
                                            </div>
                                          )}
                                        </AccordionContent>
                                      )}
                                    </AccordionItem>
                                  ))}
                                </Accordion>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">
                        Itinerary Highlights
                      </h4>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        {p.itinerary.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t">
                    <Button asChild className="w-full md:flex-1">
                      <a href="tel:+94720532077">
                        Book Now <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button asChild className="w-full md:flex-1">
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
