export type VehicleType = "Car" | "Van";

export interface TourPackage {
  id: string;
  days: number;
  title: string;
  vehicles: VehicleType[];
  description: string;
  priceFrom: number; // USD
}

const basePricePerDay = 80; // simple pricing logic

export const packages: TourPackage[] = [1, 2, 4, 5, 7, 10, 12, 14, 20].map((d) => ({
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
}));
