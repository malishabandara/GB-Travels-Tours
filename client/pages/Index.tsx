import { useEffect, useState } from "react";
import { DemoResponse } from "@shared/api";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import { packages } from "@/data/packages";
import TourCard from "@/components/site/TourCard";
import { galleryImages } from "@/data/gallery";
import { heroImages } from "@/data/hero";

export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    fetchDemo();
  }, []);

  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = (await response.json()) as DemoResponse;
      setExampleFromServer(data.message);
    } catch (error) {
      console.error("Error fetching demo:", error);
    }
  };

  useEffect(() => {
    const id = setInterval(
      () => setSlide((i) => (i + 1) % heroImages.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[30vh] md:min-h-[38vh]">
        <div className="absolute inset-0">
          {heroImages.map((img, i) => (
            <img
              key={img.src}
              src={`${img.src}?auto=compress&cs=tinysrgb&w=2400`}
              alt={img.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${i === slide ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
        <div className="relative container py-28 md:py-40"><div className="max-w-3xl rounded-xl bg-black/25 backdrop-blur-sm p-6 md:p-8 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-extrabold text-4xl md:text-6xl leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          >
            GB Travels & Tours
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
          >
            From 1-day city escapes to 20-day grand adventures. Ride in comfort
            with cars and vans. Modern, premium, and always effortless.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <a href="#packages">
                Explore Packages <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="/gallery">View Gallery</a>
            </Button>
          </motion.div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/85 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-primary"/> Licensed guides</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-primary"/> Comfortable vehicles</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-primary"/> Flexible itineraries</span>
          </div>
        </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setSlide(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${i === slide ? "bg-primary scale-110" : "bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="container py-16 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Popular Packages</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Choose from durations that fit your schedule: 1, 2, 4, 5, 7, 10, 12, 14, 20 days. Cars and vans available.
            </p>
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {packages.map((p, i) => (
            <TourCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </section>

      {/* Gallery preview */}
      <section id="gallery" className="py-16 md:py-20 bg-secondary/30 border-y border-border/60">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">From Our Journeys</h2>
              <p className="mt-2 text-muted-foreground">A glimpse of places and moments we adore.</p>
            </div>
            <Button asChild variant="secondary">
              <a href="/gallery">See All</a>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {galleryImages.slice(0, 6).map((img, i) => (
              <motion.a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group overflow-hidden rounded-lg border border-border/60 bg-card/40"
              >
                <img
                  src={`${img.src}?auto=compress&cs=tinysrgb&w=1000`}
                  alt={img.alt}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="container py-16 md:py-20">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">Customer Reviews</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Real stories from travelers who explored with us.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[{
            name: "Ayesha K.",
            content: "We booked the 7-day package. Everything was smooth and perfectly timed!",
            location: "Colombo",
            rating: 5,
          },{
            name: "Michael R.",
            content: "Professional driver, clean van, and amazing itinerary across the highlands.",
            location: "London",
            rating: 5,
          },{
            name: "Sanjay P.",
            content: "Perfect 2-day city tour. Great value and comfort. Highly recommend!",
            location: "Mumbai",
            rating: 5,
          }].map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-xl border border-border/60 bg-card/60 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3.5 w-3.5"/> {r.location}</p>
                </div>
                <div className="flex items-center text-primary">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-primary" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm text-foreground/90">“{r.content}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent"/>
        <div className="container py-12 relative">
          <div className="rounded-2xl border border-border/60 bg-secondary/30 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold">Ready to plan your journey?</h3>
              <p className="mt-2 text-muted-foreground">Tell us your dates and preferences—we'll craft the perfect trip.</p>
            </div>
            <Button asChild size="lg">
              <a href="mailto:nikinihunukumbura@gmail.com?subject=Plan%20My%20Trip%20-%20GB%20Travels%20%26%20Tours">Get a Quote</a>
            </Button>
          </div>
        </div>
      </section>

      <p className="sr-only">{exampleFromServer}</p>
    </main>
  );
}
