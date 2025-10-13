import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="container py-14 relative">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            About Us
          </motion.h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            GB Travels & Tours is dedicated to creating unforgettable travel
            experiences. From short city escapes to extended grand tours, our
            curated itineraries and experienced guides ensure a smooth, safe,
            and memorable journey.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-border/60 bg-card/40 p-6">
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              To make travel accessible, comfortable, and inspiring for every
              traveler. We focus on local experiences, responsible tourism, and
              high-quality service.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 bg-card/40 p-6">
            <h3 className="text-lg font-semibold">Why Choose Us</h3>
            <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-2">
              <li>Experienced local guides</li>
              <li>Comfortable vehicles and punctual service</li>
              <li>Flexible and customizable itineraries</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
