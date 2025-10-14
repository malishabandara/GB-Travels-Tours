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
  "./tour/5.jpg",
  "./tour/15.jpg",
  "./boat/1.jpg",
  "./rafting/6.jpg",
  "./rafting/4.jpg",
  "./safari/4.jpg",
  "./tour/13.jpg",
  "./tour/2.jpg",
  "./tour/17.jpg",
];

export const packages: TourPackage[] = [
  {
    id: "1-day",
    days: 1,
    title: "1-Day Getaway",
    vehicles: ["Car"],
    description: `• Pick-up from Airport or Hotel
• Visit Colombo or Negombo highlights
• Explore temples, markets & Dutch Canal
• Optional boat ride or city shopping
• Drop back to hotel or airport`,
    priceFrom: 1 * basePricePerDay,
    image: images[0],
  },
  {
    id: "2-days",
    days: 2,
    title: "2-Day Explorer",
    vehicles: ["Car"],
    description: `• Day 1: Airport → Kandy city tour (Temple of the Tooth, Kandy Lake)
• Overnight stay in Kandy
• Day 2: Visit Pinnawala Elephant Orphanage & Peradeniya Garden
• Return to Colombo or Airport`,
    priceFrom: 2 * basePricePerDay,
    image: images[1],
  },
  {
    id: "4-days",
    days: 4,
    title: "4-Day Explorer",
    vehicles: ["Car"],
    description: `• Day 1: Airport → Sigiriya (Rock Fortress, Dambulla Caves)
• Day 2: Kandy city tour & cultural show
• Day 3: Nuwara Eliya tea factory & Gregory Lake
• Day 4: Return via Kitulgala or Colombo sightseeing`,
    priceFrom: 4 * basePricePerDay + 60,
    image: images[2],
  },
  {
    id: "5-days",
    days: 5,
    title: "5-Day Explorer",
    vehicles: ["Car", "Van"],
    description: `• Day 1: Airport → Sigiriya (Lion Rock, Dambulla)
• Day 2: Kandy city & Temple of Tooth
• Day 3: Nuwara Eliya tea estates & waterfalls
• Day 4: Ella sightseeing (Nine Arch Bridge, Little Adam’s Peak)
• Day 5: Yala Safari → Drop at Galle or Colombo`,
    priceFrom: 5 * basePricePerDay + 60,
    image: images[3],
  },
  {
    id: "7-days",
    days: 7,
    title: "7-Day Journey",
    vehicles: ["Car", "Van"],
    description: `• Airport pick-up
• Sigiriya Rock Fortress & Dambulla Cave Temple
• Kandy (Temple of Tooth, cultural show)
• Nuwara Eliya (tea factory, Gregory Lake)
• Ella (Nine Arch Bridge, Little Adam’s Peak)
• Yala Safari wildlife experience
• Mirissa / Weligama / Galle beach relaxation`,
    priceFrom: 7 * basePricePerDay + 120,
    image: images[4],
  },
  {
    id: "10-days",
    days: 10,
    title: "10-Day Journey",
    vehicles: ["Car", "Van"],
    description: `• Airport → Anuradhapura ancient city
• Polonnaruwa heritage sites
• Sigiriya & Dambulla temples
• Kandy cultural city tour
• Nuwara Eliya tea country
• Ella scenic train ride
• Yala Safari adventure
• Mirissa / Weligama / Galle beach tour
• Return to Airport`,
    priceFrom: 10 * basePricePerDay + 120,
    image: images[5],
  },
  {
    id: "12-days",
    days: 12,
    title: "12-Day Journey",
    vehicles: ["Car", "Van"],
    description: `• Airport → Negombo beach stay
• Anuradhapura & Polonnaruwa heritage cities
• Sigiriya & Dambulla caves
• Kandy city & Temple of Tooth
• Nuwara Eliya tea plantations
• Ella scenic spots
• Yala Safari wildlife
• Mirissa / Galle / Bentota beaches
• Return to Airport`,
    priceFrom: 12 * basePricePerDay + 120,
    image: images[6],
  },
  {
    id: "14-days",
    days: 14,
    title: "14-Day Grand Tour",
    vehicles: ["Car", "Van"],
    description: `• Airport → Negombo beach
• Anuradhapura & Trincomalee sightseeing
• Polonnaruwa ancient city
• Sigiriya & Dambulla temples
• Kandy city tour
• Nuwara Eliya tea hills
• Ella train ride & viewpoints
• Yala Safari
• Mirissa / Weligama / Galle beaches
• Return to Airport`,
    priceFrom: 14 * basePricePerDay + 120,
    image: images[7],
  },
  {
    id: "20-days",
    days: 20,
    title: "20-Day Grand Tour",
    vehicles: ["Car", "Van"],
    description: `• Airport → Negombo beach
• Anuradhapura, Trincomalee, Polonnaruwa, Sigiriya, Dambulla
• Kandy city & culture
• Nuwara Eliya tea country
• Ella hiking & train experience
• Yala National Park Safari
• Hambantota, Tangalle, Mirissa, Galle, Bentota beaches
• Colombo city & shopping tour
• Drop off at Airport`,
    priceFrom: 20 * basePricePerDay + 120,
    image: images[8],
  },
];
