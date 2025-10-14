import { useEffect, useMemo, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import ReviewCard from "./ReviewCard";
import { reviews } from "@/data/reviews";

export default function ReviewsCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [slidesToScroll, setSlidesToScroll] = useState(1);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setSlidesToScroll(mql.matches ? 3 : 1);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!api) return;
    let id: number | null = null;
    if (!paused) {
      id = window.setInterval(() => {
        api.scrollNext();
      }, 4000);
    }
    return () => {
      if (id != null) window.clearInterval(id);
    };
  }, [api, paused]);

  const items = useMemo(() => reviews, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* edge gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent z-10" />

      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true, slidesToScroll }}
        className="px-1"
      >
        <CarouselContent>
          {items.map((r, i) => (
            <CarouselItem
              key={r.id}
              className="md:basis-1/2 lg:basis-1/3 h-full"
            >
              <ReviewCard r={r} index={i} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:left-3" />
        <CarouselNext className="right-2 md:right-3" />
      </Carousel>
    </div>
  );
}
