import { galleryImages } from "@/data/gallery";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <main className="min-h-screen">
      <section className="container py-14">
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
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.a
              key={img.src}
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
          ))}
        </div>
      </section>
    </main>
  );
}
