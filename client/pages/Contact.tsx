import * as React from "react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast({ title: "Please fill name and message" });
      return;
    }

    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const waUrl = `https://wa.me/94720532077?text=${encodeURIComponent(text)}`;
    toast({ title: "Opening WhatsApp..." });
    window.open(waUrl, "_blank");
  };

  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 -z-10">
        <img
          src="./tour/34.jpg"
          alt="Northern lights"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

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

        <form onSubmit={handleSubmit} className="mt-10 max-w-2xl mx-auto">
          <div className="rounded-lg border border-border/60 bg-card/40 p-6 space-y-4">
            <h3 className="text-lg font-semibold">Send us a message</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                className="w-full rounded-md border border-border/40 bg-background px-3 py-2 text-sm"
                placeholder="Your name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="w-full rounded-md border border-border/40 bg-background px-3 py-2 text-sm"
                placeholder="Your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <input
              className="w-full rounded-md border border-border/40 bg-background px-3 py-2 text-sm"
              placeholder="Phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              className="w-full rounded-md border border-border/40 bg-background px-3 py-2 text-sm min-h-[120px]"
              placeholder="Your message *"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Send via WhatsApp
              </button>
              <a
                href="tel:+94720532077"
                className="inline-flex items-center rounded-md border border-border/60 px-4 py-2 text-sm"
              >
                Call +94 72 053 2077
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              By sending, you'll be redirected to WhatsApp to complete the
              message send.
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
