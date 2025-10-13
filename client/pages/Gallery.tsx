import { galleryImages } from "@/data/gallery";
import type { GalleryCategory } from "@/data/gallery";
import { motion } from "framer-motion";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CATEGORIES: GalleryCategory[] = [
  "Safari",
  "Tours",
  "Airport Transport",
  "Rafting",
  "Boat safari",
];

export default function Gallery() {
  const [category, setCategory] = React.useState<GalleryCategory>(
    CATEGORIES[0],
  );

  const filtered = React.useMemo(() => {
    return galleryImages.filter((img) => img.category === category);
  }, [category]);

  return (
    <main className="min-h-screen">
      <section className="container py-14 relative">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/13256066/pexels-photo-13256066.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="City skyline"
            className="h-full w-full object-cover opacity-80 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        </div>

        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            Travel Inspirations
          </motion.h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            A curated glimpse into journeys we love—city lights, pristine
            beaches, desert sunsets, and more.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Tabs
            value={category}
            onValueChange={(v) => setCategory(v as GalleryCategory)}
            className="w-full"
          >
            <div className="flex justify-center">
              <TabsList className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <TabsTrigger key={c} value={c}>
                    {c}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <TabsContent value={category}>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {filtered.length === 0 ? (
                  <div className="col-span-2 md:col-span-3 lg:col-span-4 text-center text-sm text-muted-foreground py-12">
                    No images found for this category.
                  </div>
                ) : (
                  filtered.map((img, i) => (
                    <motion.a
                      key={`${img.src}-${i}`}
                      href={img.src}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: i * 0.03 }}
                      className="group overflow-hidden rounded-lg border border-border/60 bg-card/40"
                    >
                      <img
                        src={`${img.src}?auto=compress&cs=tinysrgb&w=1200`}
                        alt={img.alt}
                        className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                        loading="lazy"
                      />
                    </motion.a>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}
