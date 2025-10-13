import { motion } from "framer-motion";

export default function About() {
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
            About Us
          </motion.h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            GB Travels & Tours is dedicated to creating unforgettable travel
            experiences. From short city escapes to extended grand tours, our
            curated itineraries and experienced guides ensure a smooth, safe,
            and memorable journey.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 prose prose-invert max-w-none">
            <p className="text-lg md:text-xl text-muted-foreground">
              At GB Travels & Tours we believe travel transforms perspective. From hidden coastal paths to vibrant city streets, we craft experiences that connect you with people, place, and story. Our curated packages balance iconic sights with authentic local moments — designed to be seamless, soulful, and sustainable.
            </p>

            <p>
              Founded by passionate travelers, our team blends local knowledge with thoughtful planning to deliver journeys that linger long after the trip ends. Whether you seek a quick city escape or a multi-day expedition, we handle the logistics so you can travel freely and focus on discovery.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <img
                src="https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Road trip van"
                className="rounded-lg w-full h-40 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/20179680/pexels-photo-20179680.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Safari vehicle"
                className="rounded-lg w-full h-40 object-cover"
              />
            </div>

            <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
              "Travel is the best teacher—every journey changes you. We make sure it changes you for the better."
            </blockquote>

            <h3 className="mt-8 text-xl font-semibold">Our Values</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border/60 bg-card/40 p-4">
                <h4 className="font-semibold">Local Expertise</h4>
                <p className="mt-2 text-sm text-muted-foreground">We partner with local guides and communities to create genuine experiences.</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-card/40 p-4">
                <h4 className="font-semibold">Comfort & Safety</h4>
                <p className="mt-2 text-sm text-muted-foreground">Modern vehicles, vetted accommodations, and clear itineraries for peace of mind.</p>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1 space-y-6">
            <div className="rounded-lg overflow-hidden border border-border/60 bg-card/40 p-4">
              <h4 className="font-semibold">Editorial Picks</h4>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <img src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Beach" className="w-20 h-12 object-cover rounded-md" />
                  <div>
                    <p className="text-sm font-medium">Coastal Retreats</p>
                    <p className="text-xs text-muted-foreground">Short escapes to pristine beaches.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <img src="https://images.pexels.com/photos/13256066/pexels-photo-13256066.jpeg?auto=compress&cs=tinysrgb&w=400" alt="City" className="w-20 h-12 object-cover rounded-md" />
                  <div>
                    <p className="text-sm font-medium">City Highlights</p>
                    <p className="text-xs text-muted-foreground">Curated urban experiences and cultural tours.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border/60 bg-card/40 p-4">
              <h4 className="font-semibold">Meet the Team</h4>
              <div className="mt-4 flex items-center gap-3">
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Team member" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-medium">Nikhil H.</p>
                  <p className="text-xs text-muted-foreground">Founder & Lead Guide</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border/60 bg-card/40 p-4">
              <h4 className="font-semibold">Sustainability</h4>
              <p className="mt-2 text-sm text-muted-foreground">We support local projects and minimize impact through thoughtful operations.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
