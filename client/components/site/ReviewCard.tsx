import { MapPin, Star } from "lucide-react";
import React, { useState } from "react";
import * as Lucide from "lucide-react";
import { motion } from "framer-motion";
import type { Review } from "@/data/reviews";

export default function ReviewCard({ r, index }: { r: Review; index: number }) {
  const [open, setOpen] = useState(false);
  const clampStyle = { display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' } as React.CSSProperties;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="rounded-xl border border-border/60 bg-card/60 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold capitalize">{r.name}</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {r.location}
          </p>
        </div>
        <div className="flex items-center text-primary">
          {Array.from({ length: r.rating }).map((_, idx) => (
            <Star key={idx} className="h-4 w-4 fill-primary" />
          ))}
        </div>
      </div>

      <p
        className={`mt-4 text-sm text-foreground/90 leading-relaxed flex-grow ${open ? "" : "overflow-hidden"}`}
        style={open ? undefined : clampStyle}
      >
        “{r.content}”
      </p>

      <div className="mt-3">
        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className="text-sm text-primary font-medium"
          aria-expanded={open}
        >
          {open ? "Read less" : "Read more"}
        </button>
      </div>
    </motion.div>
  );
}
