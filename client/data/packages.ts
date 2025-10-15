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
}

const basePricePerDay = 80; // simple pricing logic

export const packages: TourPackage[] = [
  // Duration-based packages
  {
    id: "1-day",
    days: 1,
    title: "🌅 One-Day Wonders: Quick Sri Lankan Escape",
    vehicles: ["Car"],
    subtitle: "Short scenic day tour",
    description: `• Pick-up from Airport or Hotel
• Colombo or Negombo highlights in a day
• Temples, markets & Dutch Canal
• Optional boat ride or shopping
• Drop back to hotel/airport`,
    moreDetails:
      "Designed for travelers with limited time who still want a taste of Sri Lanka. Enjoy a relaxed, picture-perfect day covering iconic spots with flexible pacing and comfortable transport.",
    itinerary: [
      "Airport/Hotel pick-up",
      "Colombo or Negombo city highlights",
      "Temple visit and local markets",
      "Dutch Canal walk or optional boat ride",
      "Seafood or local lunch recommendations",
      "Drop off at hotel/airport",
    ],
    priceFrom: 1 * basePricePerDay,
    image: "./packages/1day.jpg",
    gallery: ["./packages/1-1.jpg", "./packages/1-2.jpg", "./packages/1-3.jpg"],
  },
  {
    id: "2-days",
    days: 2,
    title: "🏯 Mini Getaway: Culture & Nature Duo",
    vehicles: ["Car"],
    subtitle: "Mix of heritage & greenery",
    description: `• Day 1: Kandy city tour (Temple of the Tooth)
• Scenic viewpoints & lake walk
• Day 2: Pinnawala & Peradeniya Garden
• Return to Colombo or Airport`,
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
    image: "./tour/15.jpg",
    gallery: ["./tour/15.jpg", "./tour/14.jpg", "./tour/16.jpg"],
  },
  {
    id: "4-days",
    days: 4,
    title: "🌄 Hill Country Explorer",
    vehicles: ["Car"],
    subtitle: "Tea estates, waterfalls, relaxation",
    description: `• Sigiriya & Dambulla cave temple
• Kandy city, cultural show
• Nuwara Eliya tea factory & Gregory Lake
• Scenic viewpoints & easy walks`,
    moreDetails:
      "A refreshing journey through Sri Lanka’s emerald hills—misty mornings, cascading falls, and aromatic tea. Great for slow travelers and photo lovers.",
    itinerary: [
      "Sigiriya Rock Fortress & Dambulla cave temple",
      "Kandy city tour & cultural show",
      "Nuwara Eliya tea factory tour",
      "Gregory Lake and scenic viewpoints",
      "Optional: Kitulgala stop for soft adventure",
    ],
    priceFrom: 4 * basePricePerDay + 60,
    image: "./tour/20.jpg",
    gallery: ["./tour/20.jpg", "./tour/21.jpg", "./tour/22.jpg"],
  },
  {
    id: "5-days",
    days: 5,
    title: "🏖️ Highlights of Sri Lanka: 5-Day Discovery",
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
      "Day 1: Airport → Sigiriya (Lion Rock, Dambulla)",
      "Day 2: Kandy city tour & Temple of the Tooth",
      "Day 3: Nuwara Eliya tea country & waterfalls",
      "Day 4: Ella (Nine Arch Bridge, Little Adam’s Peak)",
      "Day 5: Optional Yala Safari → South/Colombo",
    ],
    priceFrom: 5 * basePricePerDay + 60,
    image: "./rafting/6.jpg",
    gallery: ["./rafting/4.jpg", "./tour/18.jpg", "./tour/19.jpg"],
  },
  {
    id: "7-days",
    days: 7,
    title: "🐘 The Classic Sri Lanka Round Tour",
    vehicles: ["Car", "Van"],
    subtitle:
      "Airport → Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → Mirissa/Galle",
    description: `• Sigiriya & Dambulla
• Kandy city & cultural show
• Nuwara Eliya tea country
• Ella bridges & viewpoints
• Yala safari & South coast chill`,
    moreDetails:
      "The timeless week-long route featuring UNESCO wonders, hill escapes, wildlife thrills, and golden beaches—balanced pacing with memorable stays.",
    itinerary: [
      "Airport pick-up",
      "Sigiriya & Dambulla",
      "Kandy city tour & culture",
      "Nuwara Eliya tea plantations",
      "Ella (Nine Arch Bridge, Little Adam’s Peak)",
      "Yala National Park Safari",
      "Mirissa/Weligama/Galle beach time",
    ],
    priceFrom: 7 * basePricePerDay + 120,
    image: "./rafting/4.jpg",
    gallery: ["./tour/69.jpg", "./tour/70.jpg", "./tour/71.jpg"],
  },
  {
    id: "10-days",
    days: 10,
    title: "🕌 The Heritage & Wild Adventure Trail",
    vehicles: ["Car", "Van"],
    subtitle: "Anuradhapura, Polonnaruwa, Yala, South beaches",
    description: `• Anuradhapura & Polonnaruwa
• Sigiriya & Dambulla
• Kandy & hill country
• Yala safari
• South coast escape`,
    moreDetails:
      "Soak in centuries of history and add an adrenaline kick with safari and scenic adventures. A rewarding blend of culture, nature, and coastline.",
    itinerary: [
      "Anuradhapura sacred city",
      "Polonnaruwa ancient capital",
      "Sigiriya Rock & Dambulla caves",
      "Kandy cultural city",
      "Nuwara Eliya and scenic train (optional)",
      "Yala safari",
      "Mirissa/Weligama/Galle beaches",
    ],
    priceFrom: 10 * basePricePerDay + 120,
    image: "./safari/4.jpg",
    gallery: ["./safari/5.jpg", "./safari/6.jpg", "./tour/30.jpg"],
  },
  {
    id: "12-days",
    days: 12,
    title: "🌅 Cultural & Coastal Escape",
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
      "Negombo beach ease-in",
      "Anuradhapura & Polonnaruwa",
      "Sigiriya & Dambulla",
      "Kandy → Ella (scenic train optional)",
      "Yala National Park",
      "Mirissa/Galle/Bentota beaches",
    ],
    priceFrom: 12 * basePricePerDay + 120,
    image: "./tour/13.jpg",
    gallery: ["./tour/13.jpg", "./tour/24.jpg", "./tour/25.jpg"],
  },
  {
    id: "14-days",
    days: 14,
    title: "🛕 The Ultimate Island Odyssey",
    vehicles: ["Car", "Van"],
    subtitle: "Negombo → Trincomalee → Hill Country → Safari → South",
    description: `• Negombo & East Coast (Trincomalee)
• Polonnaruwa & Sigiriya
• Kandy & hill country
• Yala safari
• South coast wind-down`,
    moreDetails:
      "Our most complete classic circuit—circle the island with time to savor each region, from coral-blue East Coast to misty hills and warm southern sands.",
    itinerary: [
      "Negombo beach",
      "Trincomalee bays & beaches",
      "Polonnaruwa and Sigiriya",
      "Kandy and Nuwara Eliya",
      "Ella viewpoints",
      "Yala safari",
      "Galle and Bentota",
    ],
    priceFrom: 14 * basePricePerDay + 120,
    image: "./tour/2.jpg",
    gallery: ["./tour/21.jpg", "./tour/22.jpg", "./tour/23.jpg"],
  },
  {
    id: "20-days",
    days: 20,
    title: "🗺️ Grand Sri Lanka Expedition",
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
      "Negombo → Cultural Triangle → East Coast",
      "Hill Country hikes & tea trails",
      "Multiple safaris (Yala/Wilpattu/Udawalawe)",
      "South & West coast stays",
      "Colombo city & shopping",
    ],
    priceFrom: 20 * basePricePerDay + 120,
    image: "./tour/17.jpg",
    gallery: ["./tour/24.jpg", "./tour/25.jpg", "./tour/26.jpg"],
  },

  // Special Theme Packages
  {
    id: "honeymoon-7",
    days: 7,
    title: "💖 Romantic Sri Lanka Escape",
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
      "Colombo/Negombo welcome evening",
      "Kandy & lush hills",
      "Nuwara Eliya views and tea trails",
      "South coast private beach stays",
      "Sunset dinners & spa time",
    ],
    priceFrom: 7 * basePricePerDay + 150,
    image: "./tour/40.jpg",
    gallery: ["./tour/41.jpg", "./tour/42.jpeg", "./tour/43.jpg"],
  },
  {
    id: "family-7",
    days: 7,
    title: "👨‍👩‍👧‍👦 Sri Lanka Family Fun Adventure",
    vehicles: ["Van"],
    subtitle: "Safe, family-friendly attractions, wildlife parks, beaches",
    description: `• Family rooms & easy pacing
• Wildlife safaris
• Train ride & hill views
• Fun beaches & pools`,
    moreDetails:
      "A kid-approved plan with wildlife thrills, scenic rides, and beach fun—stays and routes adjusted for comfort.",
    itinerary: [
      "Negombo beach start",
      "Kandy cultural stop",
      "Ella scenic train (short sector)",
      "Yala/Udawalawe safari",
      "Galle & Bentota beach time",
    ],
    priceFrom: 7 * basePricePerDay + 100,
    image: "./tour/8.jpg",
    gallery: ["./tour/7.jpg", "./safari/7.jpg", "./boat/5.jpg"],
  },
  {
    id: "cultural-10",
    days: 10,
    title: "🛕 Ancient Wonders & Sacred Trails",
    vehicles: ["Car", "Van"],
    subtitle: "Temples, ancient cities, cultural shows",
    description: `• Anuradhapura & Polonnaruwa
• Sigiriya & Dambulla
• Kandy culture & dance
• Heritage crafts & cuisine`,
    moreDetails:
      "Step through time at Sri Lanka’s most storied sites, with guided insights and authentic cultural encounters.",
    itinerary: [
      "Anuradhapura sacred city",
      "Polonnaruwa royal ruins",
      "Sigiriya and Dambulla",
      "Kandy culture & crafts",
      "Option: Mihintale & Aukana",
    ],
    priceFrom: 10 * basePricePerDay + 120,
    image: "./tour/10.jpg",
    gallery: ["./tour/11.jpg", "./tour/12.jpg", "./tour/14.jpg"],
  },
  {
    id: "adventure-7",
    days: 7,
    title: "🧗 Thrill of Lanka: Mountains to Waves",
    vehicles: ["Car", "Van"],
    subtitle: "Hiking, white-water rafting, surfing, safaris",
    description: `• Hill hikes & viewpoints
• Kitulgala rafting
• Ella adventure spots
• Surf lessons & safari`,
    moreDetails:
      "Built for active travelers—mix hikes, rapids, viewpoints, and ocean fun with safe, guided experiences.",
    itinerary: [
      "Kandy → Kitulgala rafting",
      "Ella hikes & bridges",
      "Yala safari",
      "Weligama surf session",
      "Optional: zipline or canyoning",
    ],
    priceFrom: 7 * basePricePerDay + 150,
    image: "./rafting/5.jpg",
    gallery: ["./rafting/6.jpg", "./tour/33.jpg", "./tour/34.jpg"],
  },
  {
    id: "wildlife-5",
    days: 5,
    title: "🐅 Into the Wild: Safari Expedition",
    vehicles: ["Car", "Van"],
    subtitle: "Yala, Wilpattu, Udawalawe, Minneriya safaris",
    description: `• Multiple park options
• Dawn & dusk game drives
• Birding & elephants
• Eco-stays close to nature`,
    moreDetails:
      "A compact but focused wildlife plan. Choose your preferred parks and enjoy ethical, well-timed game drives.",
    itinerary: [
      "Colombo/Negombo → chosen park",
      "2–3 game drives (dawn/dusk)",
      "Birding walks & nature time",
      "Transfer to beach/city",
    ],
    priceFrom: 5 * basePricePerDay + 140,
    image: "./safari/5.jpg",
    gallery: ["./safari/6.jpg", "./safari/7.jpg", "./safari/8.jpg"],
  },
];
