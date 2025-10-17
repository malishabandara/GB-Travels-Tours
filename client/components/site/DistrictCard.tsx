import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { District } from "@/data/districts";
import { Info } from "lucide-react";

export default function DistrictCard({
  d,
  index,
}: {
  d: District;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/60 backdrop-blur hover:shadow-[0_0_0_1px_hsl(var(--primary))] flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={`${d.image}?auto=compress&cs=tinysrgb&w=1200`}
          alt={d.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <h3 className="text-white text-lg font-semibold drop-shadow">
            {d.name}
          </h3>
        </div>
      </div>
      <div className="p-5 mt-auto">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-full">
              <Info className="mr-2 h-4 w-4" /> View More Details
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">{d.name}</DialogTitle>
              <DialogDescription>
                Top places we tour in {d.name}
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {d.places.map((p) => (
                <figure
                  key={p.name}
                  className="rounded-md overflow-hidden border border-border/60 bg-muted/20"
                >
                  <div className="aspect-video">
                    <img
                      src={`${p.image}?auto=compress&cs=tinysrgb&w=1200`}
                      alt={p.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="px-3 py-2 text-sm font-medium">
                    {p.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
