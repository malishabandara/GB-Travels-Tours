export type VehicleType = "Car" | "Van";

export interface TourPackage {
  id: string;
  days: number;
  title: string;
  vehicles: VehicleType[];
  description: string;
  priceFrom: number; // USD
  image: string;
}

const basePricePerDay = 80; // simple pricing logic

const images = [
  "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg",
  "https://images.pexels.com/photos/13256066/pexels-photo-13256066.jpeg",
  "https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg",
  "https://images.pexels.com/photos/34239912/pexels-photo-34239912.jpeg",
  "https://images.pexels.com/photos/20179680/pexels-photo-20179680.jpeg",
  "https://images.pexels.com/photos/15794381/pexels-photo-15794381.jpeg",
  "https://images.pexels.com/photos/15488423/pexels-photo-15488423.jpeg",
  "https://images.pexels.com/photos/8844224/pexels-photo-8844224.jpeg",
  "https://images.pexels.com/photos/13256066/pexels-photo-13256066.jpeg",
];

export const packages: TourPackage[] = [1, 2, 4, 5, 7, 10, 12, 14, 20].map(
  (d, idx) => ({
    id: `${d}-days`,
    days: d,
    title: `${d}-Day ${d === 1 ? "Getaway" : d <= 5 ? "Explorer" : d <= 10 ? "Journey" : "Grand Tour"}`,
    vehicles: d <= 4 ? ["Car"] : ["Car", "Van"],
    description:
      d <= 2
        ? "Perfect for quick escapes with city highlights and curated experiences."
        : d <= 7
          ? "Balanced itinerary across must-see attractions, culture, and cuisine."
          : "Comprehensive tour covering iconic landmarks and hidden gems with flexible pace.",
    priceFrom: d * basePricePerDay + (d > 7 ? 120 : d > 4 ? 60 : 0),
    image: images[idx % images.length],
  }),
);
