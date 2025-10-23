export type VehicleType = "Car" | "Van";

export interface TourPackage {
  id: string;
  days: number;
  title: string; // Attractive title with emoji
  vehicles: VehicleType[];
  description: string; // Short bullets for card
  priceFrom: number; // USD
  image: string; // Card thumbnail
  subtitle: string; // Style/Focus line
  moreDetails: string; // Detailed description for modal
  itinerary: string[]; // Highlights/itinerary for modal
  gallery: string[]; // A few images for modal
  galleryCaptions?: string[]; // Optional: text shown over each gallery image (same order as gallery)
}

const basePricePerDay = 80; // simple pricing logic

export const packages: TourPackage[] = [
  // Duration-based packages
  {
    id: "1-day",
    days: 1,
    title: "One-Day Wonders: Quick Sri Lankan Escape",
    vehicles: ["Car"],
    subtitle: "Short scenic day tour",
    description: `• Colombo or Negombo highlights in a day
• Temples, markets & Dutch Canal
• Optional boat ride or shopping`,
    moreDetails:
      "Designed for travelers with limited time who still want a taste of Sri Lanka. Enjoy a relaxed, picture-perfect day covering iconic spots with flexible pacing and comfortable transport.",
    itinerary: [
      "Pick-up from Airport or Hotel in Colombo / Negombo.",
  "Colombo city tour — Galle Face Green, Independence Square, Gangaramaya Temple.",
  "Option for Negombo tour — Dutch Canal, Fish Market, and boat ride.",
  "Local lunch and souvenir shopping.",
  "Drop-off at Airport or your hotel.",
    ],
    priceFrom: 1 * basePricePerDay,
    image: "./packages/1day.jpg",
    gallery: ["./packages/1-1.jpg", "./packages/1-2.jpg", "./packages/1-3.jpg"],
  },
  {
    id: "2-days",
    days: 2,
    title: "Mini Getaway: Culture & Nature Duo",
    vehicles: ["Car"],
    subtitle: "Mix of heritage & greenery",
    description: `• Kandy city tour (Temple of the Tooth)
• Scenic viewpoints & lake walk
• Pinnawala & Peradeniya Garden`,
    moreDetails:
      "A perfect two-day mix of ancient heritage and soothing greenery. Discover Kandy’s charm, meet gentle giants at Pinnawala, and unwind amid lush botanical wonders.",
    itinerary: [
      "Day 1: Kandy city tour (Temple of the Tooth, lake & viewpoints)",
      "Evening cultural show (optional)",
      "Day 2: Pinnawala Elephant Orphanage",
      "Peradeniya Botanical Garden stroll",
      "Return transfer to Colombo/Airport",
    ],
    priceFrom: 2 * basePricePerDay,
    image: "./packages/2day.jpg",
    gallery: ["./packages/2-1.jpg", "./packages/2-2.jpg", "./packages/2-3.jpg"],
    galleryCaptions: [
      "Day 1 - Kandy",
      "Day 2 - Pinnawala",
      "Day 2 - Peradeniya Garden",
    ],
  },
  {
    id: "4-days",
    days: 4,
    title: "Hill Country Explorer",
    vehicles: ["Car"],
    subtitle: "Tea estates, waterfalls, relaxation",
    description: `• Sigiriya & Dambulla cave temple
• Kandy city, cultural show
• Nuwara Eliya tea factory & Gregory Lake
• Scenic viewpoints & easy walks`,
    moreDetails:
      "A refreshing journey through Sri Lanka’s emerald hills—misty mornings, cascading falls, and aromatic tea. Great for slow travelers and photo lovers.",
    itinerary: [
      "Day 1: Airport → Dambulla Cave Temple → Sigiriya Rock Fortress climb.",
  "Day 2: Travel to Kandy → Visit Temple of Tooth & cultural dance show.",
  "Day 3: Scenic drive to Nuwara Eliya → Tea factory tour → Gregory Lake.",
  "Day 4: Optional stop in Kitulgala for white-water rafting → Return to Colombo.",
      "Optional: Kitulgala stop for soft adventure",
    ],
    priceFrom: 4 * basePricePerDay + 60,
    image: "./packages/4day.jpg",
    gallery: ["./packages/4-1.jpg", "./packages/4-2.jpg", "./packages/4-3.jpg"],
  },
  {
    id: "5-days",
    days: 5,
    title: "Highlights of Sri Lanka: 5-Day Discovery",
    vehicles: ["Car", "Van"],
    subtitle: "Balanced culture & adventure",
    description: `• Sigiriya & Dambulla
• Kandy city & Temple of the Tooth
• Nuwara Eliya tea estates
• Ella viewpoints & bridges
• Optional Yala safari`,
    moreDetails:
      "Our best-selling compact circuit—signature landmarks, lush hills, and a hint of adventure. Ideal for first-time visitors who want variety without rush.",
    itinerary: [
      "Day 1: Airport → Sigiriya Rock Fortress & Dambulla Cave Temple.",
  "Day 2: Travel to Kandy → Visit Temple of Tooth, Kandy Lake & Gem Museum.",
  "Day 3: Drive to Nuwara Eliya → Visit tea estates, Gregory Lake, and waterfalls.",
  "Day 4: Travel to Ella → Visit Nine Arch Bridge & Little Adam’s Peak.",
  "Day 5: Yala National Park Safari → Transfer to Galle or Colombo.",
    ],
    priceFrom: 5 * basePricePerDay + 60,
    image: "./packages/5day.jpg",
    gallery: ["./packages/4-2.jpg", "./packages/4-1.jpg", "./packages/2-1.jpg"],
    galleryCaptions: [
      "Day 1 - Sigiriya",
      "Day 2 - Kandy",
      "Day 3 - Nuwara Eliya",
    ],
  },
  {
    id: "7-days",
    days: 7,
    title: "The Classic Sri Lanka Round Tour",
    vehicles: ["Car", "Van"],
    subtitle:
      "A perfect week exploring Sri Lanka’s iconic landmarks, misty hills, and golden beaches.",
    description: `• Sigiriya & Dambulla
• Kandy city & cultural show
• Nuwara Eliya tea country
• Ella bridges & viewpoints
• Yala safari & South coast chill`,
    moreDetails:
      "The timeless week-long route featuring UNESCO wonders, hill escapes, wildlife thrills, and golden beaches—balanced pacing with memorable stays.",
    itinerary: [
      "Day 1: Airport pick-up → Sigiriya Rock Fortress → Dambulla Cave Temple.",
  "Day 2: Travel to Kandy → Temple of Tooth, cultural show & city walk.",
  "Day 3: Scenic drive to Nuwara Eliya → Tea factory visit & Gregory Lake.",
  "Day 4: Train journey to Ella → Visit Little Adam’s Peak & Nine Arch Bridge.",
  "Day 5: Yala National Park Safari (evening safari).",
  "Day 6: Mirissa or Weligama → Beach relaxation & optional whale watching.",
  "Day 7: Visit Galle Fort → Return to Colombo / Airport.",
    ],
    priceFrom: 7 * basePricePerDay + 120,
    image: "./packages/7day.jpg",
    gallery: ["./packages/7-1.jpg", "./packages/7-2.jpg", "./packages/7-3.jpg"],
  },
  {
    id: "10-days",
    days: 10,
    title: "The Heritage & Wild Adventure Trail",
    vehicles: ["Car", "Van"],
    subtitle: "From ancient cities to wild safaris and coastal bliss — experience Sri Lanka’s full diversity.",
    description: `• Anuradhapura & Polonnaruwa
• Sigiriya & Dambulla
• Kandy & hill country
• Yala safari
• South coast escape`,
    moreDetails:
      "Soak in centuries of history and add an adrenaline kick with safari and scenic adventures. A rewarding blend of culture, nature, and coastline.",
    itinerary: [
      "Day 1: Airport → Anuradhapura heritage city (Ruwanwelisaya, Sacred Bo Tree).",
  "Day 2: Explore Mihintale & travel to Polonnaruwa.",
  "Day 3: Polonnaruwa heritage ruins & Parakrama Samudra Lake.",
  "Day 4: Sigiriya Rock Fortress & Dambulla Cave Temple.",
  "Day 5: Kandy city tour & cultural dance show.",
  "Day 6: Tea plantations in Nuwara Eliya & Gregory Lake.",
  "Day 7: Ella → Scenic train ride, Ravana Falls, and Nine Arches.",
  "Day 8: Yala National Park Safari.",
  "Day 9: Mirissa → Whale watching & beach leisure.",
  "Day 10: Galle Fort & return to Airport.",
    ],
    priceFrom: 10 * basePricePerDay + 120,
    image: "./packages/10day.jpg",
    gallery: ["./packages/10-1.jpg", "./packages/10-2.jpg", "./packages/10-3.jpg"],
  },
  {
    id: "12-days",
    days: 12,
    title: "Cultural & Coastal Escape",
    vehicles: ["Car", "Van"],
    subtitle: "Full island journey with heritage + beaches",
    description: `• North Central heritage cities
• Sigiriya & Dambulla
• Kandy → Ella hill track
• Yala safari
• South-west beaches`,
    moreDetails:
      "A generous two-week-leaning route without the rush—ample time for heritage, hillscapes, wildlife, and beach downtime across the island.",
    itinerary: [
      "Day 1: Arrival → Negombo beach stay.",
  "Day 2: Visit Anuradhapura ancient city.",
  "Day 3: Explore Polonnaruwa heritage ruins.",
  "Day 4: Climb Sigiriya Rock Fortress → Visit Dambulla Caves.",
  "Day 5: Kandy → Temple of Tooth & cultural dance show.",
  "Day 6: Peradeniya Botanical Garden & spice village.",
  "Day 7: Nuwara Eliya tea factory & Gregory Lake.",
  "Day 8: Ella → Nine Arch Bridge, Little Adam’s Peak.",
  "Day 9: Yala Safari adventure.",
  "Day 10: Mirissa → Whale watching.",
  "Day 11: Galle Fort & Bentota beach leisure.",
  "Day 12: Colombo city tour → Departure.",
    ],
    priceFrom: 12 * basePricePerDay + 120,
    image: "./packages/7-2.jpg",
    gallery: ["./packages/7-3.jpg", "./packages/4day.jpg", "./packages/10-3.jpg"],
  },
  {
    id: "14-days",
    days: 14,
    title: "The Ultimate Island Odyssey",
    vehicles: ["Car", "Van"],
    subtitle: "Two unforgettable weeks discovering Sri Lanka’s culture, coastlines, and hill country charm.",
    description: `• Negombo & East Coast (Trincomalee)
• Polonnaruwa & Sigiriya
• Kandy & hill country
• Yala safari
• South coast wind-down`,
    moreDetails:
      "Our most complete classic circuit—circle the island with time to savor each region, from coral-blue East Coast to misty hills and warm southern sands.",
    itinerary: [
      "Day 1: Airport → Negombo beach.",
  "Day 2: Explore Anuradhapura & Mihintale.",
  "Day 3: Travel to Trincomalee → Visit Koneswaram Temple & Nilaveli Beach.",
  "Day 4: Polonnaruwa ancient city exploration.",
  "Day 5: Climb Sigiriya Rock Fortress & Dambulla Cave Temple.",
  "Day 6: Kandy → Temple of Tooth & cultural show.",
  "Day 7: Nuwara Eliya → Tea estates & Gregory Lake.",
  "Day 8: Scenic train to Ella → Little Adam’s Peak.",
  "Day 9: Ella sightseeing & Ravana Falls.",
  "Day 10: Yala National Park Safari.",
  "Day 11: Tangalle & Mirissa beach day.",
  "Day 12: Galle Fort & Dutch Museum.",
  "Day 13: Bentota → Madu River boat safari & turtle hatchery.",
  "Day 14: Colombo city tour → Airport drop.",
    ],
    priceFrom: 14 * basePricePerDay + 120,
    image: "./packages/14day.jpg",
    gallery: ["./packages/14-1.jpg", "./packages/14-2.jpg", "./packages/14-3.jpg"],
  },
  {
    id: "20-days",
    days: 20,
    title: "Grand Sri Lanka Expedition",
    vehicles: ["Car", "Van"],
    subtitle: "Explore every region in-depth",
    description: `• North, East, Cultural Triangle
• Hill Country & wildlife parks
• South & West coasts
• Authentic villages & cuisine
• Flexible pace & rest days`,
    moreDetails:
      "The ultimate deep-dive into Sri Lanka—slow, immersive and comprehensive. Ideal for long-stay explorers who value culture, nature, and local life.",
    itinerary: [
      "Day 1: Arrival → Negombo beach leisure.",
  "Day 2: Anuradhapura ancient city tour.",
  "Day 3: Mihintale & Aukana Buddha statue.",
  "Day 4: Trincomalee → Koneswaram Temple & Nilaveli Beach.",
  "Day 5: Pigeon Island snorkeling.",
  "Day 6: Polonnaruwa heritage exploration.",
  "Day 7: Sigiriya Rock & Dambulla Caves.",
  "Day 8: Kandy cultural tour.",
  "Day 9: Nuwara Eliya → Tea country experience.",
  "Day 10: Train to Ella & sightseeing.",
  "Day 11: Ella → Little Adam’s Peak, Nine Arches, and Ravana Falls.",
  "Day 12: Yala Safari adventure.",
  "Day 13: Hambantota & Tangalle beaches.",
  "Day 14: Mirissa → Whale watching.",
  "Day 15: Galle Fort & Unawatuna beach leisure.",
  "Day 16: Bentota → Madu River boat ride & turtle hatchery.",
  "Day 17: Colombo city & shopping.",
  "Day 18: Relaxation day or optional village tour.",
  "Day 19: Local culinary experience & souvenir shopping.",
  "Day 20: Departure from Colombo Airport.",
    ],
    priceFrom: 20 * basePricePerDay + 120,
    image: "./packages/20day.jpg",
    gallery: ["./packages/20-1.jpg", "./packages/2day.jpg", "./packages/7day.jpg"],
  },

  // Special Theme Packages
  {
    id: "honeymoon-7",
    days: 7,
    title: "Romantic Sri Lanka Escape",
    vehicles: ["Car", "Van"],
    subtitle:
      "Special honeymoon resorts, candlelight dinners, private beach stays",
    description: `• Handpicked romantic stays
• Scenic hill views & misty mornings
• Private beach time & sunsets
• Candlelight dinners & surprises`,
    moreDetails:
      "Celebrate love with curated stays, couple-friendly experiences, and picture-perfect settings—from the hills to the sea.",
    itinerary: [
      "Day 1: Arrival at Bandaranaike International Airport → Private transfer to Negombo → Romantic beachfront dinner.",
  "Day 2: Travel to Kandy via Pinnawala Elephant Orphanage → Visit Temple of the Tooth → Evening stroll around Kandy Lake.",
  "Day 3: Scenic train journey from Kandy to Nuwara Eliya → Tea factory visit → Stay in colonial-style honeymoon hotel.",
  "Day 4: Drive to Ella → Visit Ravana Falls and Nine Arches Bridge → Candle-lit dinner with mountain view.",
  "Day 5: Travel to Yala → Private Jeep Safari at Yala National Park.",
  "Day 6: Move to Bentota → Boat ride on Madu River → Romantic sunset beach walk.",
  "Day 7: Leisure morning → Transfer to Airport for departure.",
    ],
    priceFrom: 7 * basePricePerDay + 150,
    image: "./packages/hday.jpg",
    gallery: ["./packages/h-1.jpg", "./packages/h-2.jpg", "./packages/h-3.jpg"],
  },
  {
    id: "family-7",
    days: 7,
    title: "Sri Lanka Family Fun Adventure",
    vehicles: ["Van"],
    subtitle: "Safe, family-friendly attractions, wildlife parks, beaches",
    description: `• Family rooms & easy pacing
• Wildlife safaris
• Train ride & hill views
• Fun beaches & pools`,
    moreDetails:
      "A kid-approved plan with wildlife thrills, scenic rides, and beach fun—stays and routes adjusted for comfort.",
    itinerary: [
      "Day 1: Arrival → Negombo city exploration & beach leisure.",
  "Day 2: Travel to Sigiriya → Climb Sigiriya Rock Fortress → Visit Dambulla Cave Temple.",
  "Day 3: Visit Minneriya National Park for elephant safari → Village tour & bullock cart ride.",
  "Day 4: Travel to Kandy → Visit Tooth Relic Temple → Cultural dance show.",
  "Day 5: Journey to Nuwara Eliya → Gregory Lake boat ride & strawberry farm visit.",
  "Day 6: Ella sightseeing → Nine Arches Bridge, Little Adam’s Peak → Train ride experience.",
  "Day 7: Bentota → Madu River boat safari → Beach relaxation.",
  "Day 8: Colombo city tour → Transfer to Airport.",
    ],
    priceFrom: 7 * basePricePerDay + 100,
    image: "./tour/8.jpg",
    gallery: ["./tour/7.jpg", "./safari/7.jpg", "./boat/5.jpg"],
  },
  {
    id: "cultural-10",
    days: 10,
    title: "Ancient Wonders & Sacred Trails",
    vehicles: ["Car", "Van"],
    subtitle: "Temples, ancient cities, cultural shows",
    description: `• Anuradhapura & Polonnaruwa
• Sigiriya & Dambulla
• Kandy culture & dance
• Heritage crafts & cuisine`,
    moreDetails:
      "Step through time at Sri Lanka’s most storied sites, with guided insights and authentic cultural encounters.",
    itinerary: [
      "Day 1: Arrival → Negombo stay.",
  "Day 2: Explore Anuradhapura ancient city → Sacred Bo Tree & Dagobas.",
  "Day 3: Polonnaruwa heritage city tour → Statue of King Parakramabahu.",
  "Day 4: Climb Sigiriya Fortress → Dambulla Cave Temple.",
  "Day 5: Drive to Kandy → Visit Tooth Temple & cultural dance show.",
  "Day 6: Visit Peradeniya Botanical Gardens → Spice Garden experience.",
  "Day 7: Scenic ride to Nuwara Eliya → Tea factory & Gregory Lake.",
  "Day 8: Colombo city sightseeing → Shopping & local dining.",
  "Day 9: Departure transfer.",
    ],
    priceFrom: 10 * basePricePerDay + 120,
    image: "./tour/10.jpg",
    gallery: ["./tour/11.jpg", "./tour/12.jpg", "./tour/14.jpg"],
  },
  {
    id: "adventure-7",
    days: 7,
    title: "Thrill of Lanka: Mountains to Waves",
    vehicles: ["Car", "Van"],
    subtitle: "Hiking, white-water rafting, surfing, safaris",
    description: `• Hill hikes & viewpoints
• Kitulgala rafting
• Ella adventure spots
• Surf lessons & safari`,
    moreDetails:
      "Built for active travelers—mix hikes, rapids, viewpoints, and ocean fun with safe, guided experiences.",
    itinerary: [
      "Day 1: Arrival → Transfer to Kitulgala → White-water rafting & waterfall trek.",
  "Day 2: Travel to Kandy → Visit Temple of Tooth & city view point.",
  "Day 3: Scenic drive to Nuwara Eliya → Gregory Lake boating.",
  "Day 4: Hike Horton Plains → World’s End trail → Continue to Ella.",
  "Day 5: Ella → Little Adam’s Peak hike & Nine Arches Bridge.",
  "Day 6: Yala → Evening Jeep Safari.",
  "Day 7: Bentota → Water sports & beach relaxation → Departure.",
    ],
    priceFrom: 7 * basePricePerDay + 150,
    image: "./rafting/5.jpg",
    gallery: ["./rafting/6.jpg", "./tour/33.jpg", "./tour/34.jpg"],
  },
  {
    id: "wildlife-5",
    days: 5,
    title: "Into the Wild: Safari Expedition",
    vehicles: ["Car", "Van"],
    subtitle: "Yala, Wilpattu, Udawalawe, Minneriya safaris",
    description: `• Multiple park options
• Dawn & dusk game drives
• Birding & elephants
• Eco-stays close to nature`,
    moreDetails:
      "A compact but focused wildlife plan. Choose your preferred parks and enjoy ethical, well-timed game drives.",
    itinerary: [
      "Day 1: Arrival → Drive to Udawalawe → Evening Safari.",
  "Day 2: Udawalawe Elephant Transit Home → Travel to Yala.",
  "Day 3: Full-day Yala National Park Safari.",
  "Day 4: Bird watching in Bundala → Travel to Mirissa.",
  "Day 5: Whale watching cruise → Leisure at beach.",
  "Day 6: Transfer to Airport via Galle Dutch Fort.",
    ],
    priceFrom: 5 * basePricePerDay + 140,
    image: "./safari/5.jpg",
    gallery: ["./safari/6.jpg", "./safari/7.jpg", "./safari/8.jpg"],
  },
];
