import { motion } from "framer-motion";

export default function Contact() {
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
            Contact Us
          </motion.h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We're here to help — reach out for bookings, questions, or custom
            itineraries.
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <div className="rounded-lg border border-border/60 bg-card/40 p-6">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Email: <a href="mailto:nikinihunukumbura@gmail.com" className="text-primary">nikinihunukumbura@gmail.com</a>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Phone: <a href="tel:+94720532077" className="text-primary">+94 72 053 2077</a></p>
            <p className="mt-4 text-sm text-muted-foreground">
              Or send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
