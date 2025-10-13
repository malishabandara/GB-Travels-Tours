import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="container py-14">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Discover places, savor moments
          </motion.h1>
          <p className="mt-4 text-lg text-muted-foreground">
            GB Travels & Tours curates immersive journeys that blend iconic
            sights with authentic local experiences. We design seamless, safe,
            and inspiring trips so you can explore with confidence and wonder.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="tel:+94720532077"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Book Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/packages"
              className="inline-flex items-center rounded-md border border-border/60 px-4 py-2 text-sm"
            >
              View Packages
            </a>
          </div>
        </div>

        {/* Magazine content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                <img
                  src="https://images.pexels.com/photos/13256066/pexels-photo-13256066.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="city"
                  className="w-full h-44 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="beach"
                  className="w-full h-44 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/20179680/pexels-photo-20179680.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="safari"
                  className="w-full h-44 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/34239912/pexels-photo-34239912.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="desert"
                  className="w-full h-44 object-cover"
                />
              </div>

              <div className="p-6 bg-card/60">
                <h2 className="text-2xl font-semibold">Our Story</h2>
                <p className="mt-3 text-muted-foreground">
                  Born from a love of discovery, GB Travels & Tours began as a
                  small team of explorers who wanted better travel — more
                  authentic, more thoughtful, and more human. Over the years
                  we've grown while keeping curiosity at our core.
                </p>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-md bg-background/60 p-4">
                    <h4 className="font-semibold">Tailored Experiences</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Custom itineraries to match your pace and interests.
                    </p>
                  </div>
                  <div className="rounded-md bg-background/60 p-4">
                    <h4 className="font-semibold">Trusted Partners</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Vetted guides and reliable accommodations across all
                      destinations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border/60 bg-card/40 p-5">
                <h3 className="text-xl font-semibold">Sustainability</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We support local communities, reduce impact, and encourage
                  responsible tourism.
                </p>
              </div>

              <div className="rounded-lg border border-border/60 bg-card/40 p-5">
                <h3 className="text-xl font-semibold">Safety & Comfort</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Modern vehicles, trained guides, health-conscious partners,
                  and clear safety protocols.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-border/60 bg-card/40 p-5">
              <h4 className="font-semibold">Quick Facts</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>10+</strong> years delivering trips
                </li>
                <li>
                  <strong>50+</strong> curated itineraries
                </li>
                <li>
                  <strong>1000+</strong> happy travelers
                </li>
              </ul>
            </div>

            <div className="rounded-lg overflow-hidden border border-border/60">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="team"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 bg-card/40">
                <h4 className="font-semibold">Meet the Team</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our local guides are experienced storytellers and safety-first
                  professionals.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border/60 bg-card/40 p-4">
              <h4 className="font-semibold">Newsletter</h4>
              <p className="mt-2 text-xs text-muted-foreground">
                Sign up for travel tips and exclusive offers.
              </p>
              <form className="mt-3 flex gap-2">
                <input
                  className="flex-1 rounded-md border border-border/40 bg-background px-3 py-2 text-sm"
                  placeholder="Email address"
                />
                <button className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
