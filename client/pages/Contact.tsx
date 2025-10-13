import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <section className="container py-14 relative">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="https://images.pexels.com/photos/15794381/pexels-photo-15794381.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Northern lights"
            className="absolute inset-0 h-full w-full object-cover opacity-80 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            Contact Us
          </motion.h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We're here to help — reach out for bookings, questions, or custom
            itineraries.
          </p>
        </div>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <div className="rounded-lg border border-border/60 bg-card/40 p-6">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Email: <a href="mailto:nikinihunukumbura@gmail.com" className="text-primary">nikinihunukumbura@gmail.com</a>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Phone: +94 77 123 4567</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Or send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
