export type VehicleType = "Car" | "Van";

export interface Place {
  name: string;
  description?: string; // Detailed description shown in accordion
  image?: string; // Image for this specific place
}

export interface DayItinerary {
  day: number;
  title: string; // Day title or location name
  places: Place[]; // Places visited on this day
}

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
  itinerary: string[]; // Highlights/itinerary for modal (legacy - kept for backward compatibility)
  gallery: string[]; // A few images for modal (legacy - kept for backward compatibility)
  galleryCaptions?: string[]; // Optional: text shown over each gallery image (same order as gallery)
  dayItinerary?: DayItinerary[]; // Day-by-day itinerary with places, images, and descriptions
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
    gallery: [
      "./places/8.jpg",
      "./places/10.jpg",
      "./places/9.jpg",
      "./places/13.jpg",
      "./places/14.jpg",
      "./packages/14day.jpg",
    ],
    galleryCaptions: [
      "Galle Face Green",
      "Independence Square",
      "Gangaramaya Temple",
      "Dutch Canal",
      "Fish Market",
      "Boat Ride",
    ],
    dayItinerary: [
      {
        day: 1,
        title: "Colombo or Negombo highlights tour",
        places: [
          {
            name: "Galle Face Green",
            image: "./places/8.jpg",
            description:
              "A beautiful ocean-side urban park and promenade stretching along the coast. Perfect for evening walks, kite flying, and enjoying street food while watching the sunset over the Indian Ocean.",
          },
          {
            name: "Independence Square",
            image: "./places/10.jpg",
            description:
              "A historic monument commemorating Sri Lanka's independence from British rule in 1948. The beautiful colonial architecture and peaceful gardens make it a popular spot for locals and tourists.",
          },
          {
            name: "Gangaramaya Temple",
            image: "./places/9.jpg",
            description:
              "One of the most important Buddhist temples in Colombo, featuring a unique blend of Sri Lankan, Thai, Indian, and Chinese architecture. The temple houses a vast collection of artifacts and is known for its annual Perahera festival.",
          },
          {
            name: "Dutch Canal",
            image: "./places/13.jpg",
            description:
              "A historic canal built during the Dutch colonial period in Negombo. A boat ride along the canal offers glimpses of local life, fishing activities, and scenic countryside views.",
          },
          {
            name: "Fish Market",
            image: "./places/14.jpg",
            description:
              "Experience the vibrant atmosphere of a traditional Sri Lankan fish market, especially in Negombo. Watch fishermen bring in their daily catch and learn about local fishing traditions.",
          },
        ],
      },
    ],
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
    gallery: [
      "./packages/2-1.jpg",
      "./places/1.jpg",
      "./packages/2-3.jpg",
      "./packages/2-2.jpg",
    ],
    galleryCaptions: [
      "Day 1 - Temple of the Tooth",
      "Day 1 - Kandy lake & viewpoints",
      "Day 1 - Peradeniya Garden",
      "Day 2 - Pinnawala Elephant Orphanage",
    ],
    dayItinerary: [
      {
        day: 1,
        title: "Kandy city tour (Temple of the Tooth, lake & viewpoints)",
        places: [
          {
            name: "Temple of the Sacred Tooth Relic",
            image: "./packages/2-1.jpg",
            description:
              "One of the most sacred Buddhist temples in the world, housing the tooth relic of Lord Buddha. Located in Kandy, this temple is part of the UNESCO World Heritage Site. The temple complex includes the golden-roofed shrine, museum, and the Royal Palace of Kandy. Daily ceremonies (puja) are held to honor the relic.",
          },
          {
            name: "Kandy Lake",
            image: "./places/1.jpg",
            description:
              "A scenic artificial lake in the heart of Kandy, built by the last king of Kandy. Perfect for a peaceful stroll along the lakefront with beautiful views of the temple and surrounding hills.",
          },
          {
            name: "Peradeniya Botanical Garden",
            image: "./packages/2-3.jpg",
            description:
              "One of the finest tropical gardens in Asia, spanning 147 acres. Features over 4,000 species of plants including the giant Javan fig tree, orchid house, and bamboo collection. The garden offers serene walks along the Mahaweli River with beautifully landscaped lawns and exotic flora.",
          },
        ],
      },
      {
        day: 2,
        title: "Pinnawala Elephant Orphanage & return transfer",
        places: [
          {
            name: "Pinnawala Elephant Orphanage",
            image: "./packages/2-2.jpg",
            description:
              "The first and largest elephant orphanage in the world, established to care for orphaned and injured elephants. Visitors can watch elephants being fed, bathed in the river, and observe their daily routines. A heartwarming experience to see these gentle giants up close.",
          },
        ],
      },
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
    gallery: [
      "./places/Dambulla.jpg",
      "./packages/4day.jpg",
      "./packages/2-1.jpg",
      "./packages/2-3.jpg",
      "./packages/4-2.jpg",
      "./places/3.jpg",
      "./packages/9.jpg",
    ],
    galleryCaptions: [
      "Day 1 - Dambulla Cave Temple",
      "Day 1 - Sigiriya Rock Fortress climb",
      "Day 2 - Temple of Tooth",
      "Day 2 - Peradeniya Garden",
      "Day 3 - Tea factory tour",
      "Day 3 - Gregory Lake",
      "Day 4 - Kitulgala for white-water rafting",
    ],
    dayItinerary: [
      {
        day: 1,
        title: "Airport → Dambulla Cave Temple → Sigiriya Rock Fortress",
        places: [
          {
            name: "Dambulla Cave Temple",
            image: "./places/Dambulla.jpg",
            description:
              "The largest and best-preserved cave temple complex in Sri Lanka, also a UNESCO World Heritage Site. It features five caves containing over 150 Buddha statues and stunning murals covering 2,100 square meters. The temple dates back to the 1st century BC and represents the most important cave temple complex in the country.",
          },
          {
            name: "Sigiriya Rock Fortress",
            image: "./packages/4day.jpg",
            description:
              "Also known as Lion Rock, Sigiriya is an ancient rock fortress and palace ruins located in the northern Matale District. This UNESCO World Heritage Site rises 200 meters above the surrounding plains. It features frescoes, water gardens, and the famous Lion's Gate. The climb to the top offers breathtaking panoramic views of the surrounding countryside.",
          },
        ],
      },
      {
        day: 2,
        title: "Travel to Kandy → Visit Temple of Tooth & cultural dance show",
        places: [
          {
            name: "Temple of the Sacred Tooth Relic",
            image: "./packages/2-1.jpg",
            description:
              "One of the most sacred Buddhist temples in the world, housing the tooth relic of Lord Buddha. Located in Kandy, this temple is part of the UNESCO World Heritage Site. The temple complex includes the golden-roofed shrine, museum, and the Royal Palace of Kandy. Daily ceremonies (puja) are held to honor the relic.",
          },
          {
            name: "Peradeniya Botanical Garden",
            image: "./packages/2-3.jpg",
            description:
              "One of the finest tropical gardens in Asia, spanning 147 acres. Features over 4,000 species of plants including the giant Javan fig tree, orchid house, and bamboo collection. The garden offers serene walks along the Mahaweli River with beautifully landscaped lawns and exotic flora.",
          },
        ],
      },
      {
        day: 3,
        title: "Scenic drive to Nuwara Eliya → Tea factory tour → Gregory Lake",
        places: [
          {
            name: "Tea Factory Tour",
            image: "./packages/4-2.jpg",
            description:
              "Experience the art of Ceylon tea production at a working tea factory. Learn about the tea-making process from plucking to packaging. Sample different varieties of tea while enjoying stunning views of the surrounding tea plantations that carpet the hillsides.",
          },
          {
            name: "Gregory Lake",
            image: "./places/3.jpg",
            description:
              "A picturesque man-made lake built during the British colonial era, perfect for boating, horse riding, and leisurely walks. The lake is surrounded by mountains and offers beautiful sunset views. It's one of the main attractions in the 'Little England' of Sri Lanka.",
          },
        ],
      },
      {
        day: 4,
        title: "Optional stop in Kitulgala for white-water rafting → Return to Colombo",
        places: [
          {
            name: "Kitulgala White Water Rafting",
            image: "./packages/9.jpg",
            description:
              "An exciting white-water rafting adventure on the Kelani River through lush jungle terrain. Suitable for beginners and experienced rafters, offering thrilling rapids and beautiful natural scenery.",
          },
        ],
      },
    ],
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
    gallery: [
      "./places/Dambulla.jpg",
      "./packages/4day.jpg",
      "./packages/4-3.jpg",
      "./packages/2-3.jpg",
      "./packages/4-2.jpg",
      "./places/3.jpg",
      "./places/6.jpg",
      "./packages/5day.jpg",
      "./places/5.jpg",
      "./packages/7day.jpg",
    ],
    galleryCaptions: [
      "Day 1 - Dambulla Cave Temple",
      "Day 1 - Sigiriya Rock Fortress climb",
      "Day 2 - Temple of Tooth",
      "Day 2 - Peradeniya Garden",
      "Day 3 - Tea factory tour",
      "Day 3 - Gregory Lake",
      "Day 3 - Bomuru Waterfall",
      "Day 4 - Nine Arch Bridge",
      "Day 4 - Little Adam's Peak",
      "Day 5 - Yala National Park Safari",
    ],
    dayItinerary: [
      {
        day: 1,
        title: "Airport → Sigiriya Rock Fortress & Dambulla Cave Temple",
        places: [
          {
            name: "Dambulla Cave Temple",
            image: "./places/Dambulla.jpg",
            description:
              "The largest and best-preserved cave temple complex in Sri Lanka, also a UNESCO World Heritage Site. It features five caves containing over 150 Buddha statues and stunning murals covering 2,100 square meters. The temple dates back to the 1st century BC and represents the most important cave temple complex in the country.",
          },
          {
            name: "Sigiriya Rock Fortress",
            image: "./packages/4day.jpg",
            description:
              "Also known as Lion Rock, Sigiriya is an ancient rock fortress and palace ruins located in the northern Matale District. This UNESCO World Heritage Site rises 200 meters above the surrounding plains. It features frescoes, water gardens, and the famous Lion's Gate. The climb to the top offers breathtaking panoramic views of the surrounding countryside.",
          },
        ],
      },
      {
        day: 2,
        title: "Travel to Kandy → Visit Temple of Tooth, Kandy Lake & Gem Museum",
        places: [
          {
            name: "Temple of the Sacred Tooth Relic",
            image: "./packages/4-3.jpg",
            description:
              "One of the most sacred Buddhist temples in the world, housing the tooth relic of Lord Buddha. Located in Kandy, this temple is part of the UNESCO World Heritage Site. The temple complex includes the golden-roofed shrine, museum, and the Royal Palace of Kandy. Daily ceremonies (puja) are held to honor the relic.",
          },
          {
            name: "Peradeniya Botanical Garden",
            image: "./packages/2-3.jpg",
            description:
              "One of the finest tropical gardens in Asia, spanning 147 acres. Features over 4,000 species of plants including the giant Javan fig tree, orchid house, and bamboo collection. The garden offers serene walks along the Mahaweli River with beautifully landscaped lawns and exotic flora.",
          },
        ],
      },
      {
        day: 3,
        title: "Drive to Nuwara Eliya → Visit tea estates, Gregory Lake, and waterfalls",
        places: [
          {
            name: "Tea Factory Tour",
            image: "./packages/4-2.jpg",
            description:
              "Experience the art of Ceylon tea production at a working tea factory. Learn about the tea-making process from plucking to packaging. Sample different varieties of tea while enjoying stunning views of the surrounding tea plantations that carpet the hillsides.",
          },
          {
            name: "Gregory Lake",
            image: "./places/3.jpg",
            description:
              "A picturesque man-made lake built during the British colonial era, perfect for boating, horse riding, and leisurely walks. The lake is surrounded by mountains and offers beautiful sunset views. It's one of the main attractions in the 'Little England' of Sri Lanka.",
          },
          {
            name: "Bomuru Waterfall",
            image: "./places/6.jpg",
            description:
              "A beautiful cascading waterfall located near Nuwara Eliya, surrounded by lush greenery. The falls create a serene atmosphere perfect for photography and nature appreciation.",
          },
        ],
      },
      {
        day: 4,
        title: "Travel to Ella → Visit Nine Arch Bridge & Little Adam's Peak",
        places: [
          {
            name: "Nine Arch Bridge",
            image: "./packages/5day.jpg",
            description:
              "A stunning architectural marvel built entirely of stone, bricks, and cement without steel. This 91-meter long bridge stands 24 meters high and spans across a lush valley. The best time to visit is when a train passes over, creating an iconic Sri Lankan moment.",
          },
          {
            name: "Little Adam's Peak",
            image: "./places/5.jpg",
            description:
              "A beautiful mountain peak offering relatively easy hiking with panoramic views of the Ella Gap and surrounding tea plantations. The hike takes about 1-2 hours and rewards visitors with breathtaking sunrise or sunset views. Much easier than the famous Adam's Peak, making it accessible to most visitors.",
          },
        ],
      },
      {
        day: 5,
        title: "Yala National Park Safari → Transfer to Galle or Colombo",
        places: [
          {
            name: "Yala National Park Safari",
            image: "./packages/7day.jpg",
            description:
              "Yala is Sri Lanka's most visited national park, known for its high density of leopards, elephants, sloth bears, crocodiles, and diverse birdlife. The safari offers the best chance to spot wildlife as animals become more active. The park also features ancient rock inscriptions and beautiful coastal areas.",
          },
        ],
      },
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
    gallery: [
      "./places/Dambulla.jpg",
      "./packages/4day.jpg",
      "./packages/2-1.jpg",
      "./packages/2-3.jpg",
      "./packages/4-2.jpg",
      "./places/3.jpg",
      "./places/6.jpg",
      "./packages/5day.jpg",
      "./places/5.jpg",
      "./packages/7day.jpg",
      "./packages/7-2.jpg",
      "./packages/15.jpg",
      "./packages/7-1.jpg",
    ],
    galleryCaptions: [
      "Day 1 - Dambulla Cave Temple",
      "Day 1 - Sigiriya Rock Fortress climb",
      "Day 2 - Temple of Tooth",
      "Day 2 - Peradeniya Garden",
      "Day 3 - Tea factory tour",
      "Day 3 - Gregory Lake",
      "Day 3 - Bomuru Waterfall",
      "Day 4 - Nine Arch Bridge",
      "Day 4 - Little Adam's Peak",
      "Day 5 - Yala National Park Safari",
      "Day 6 - Mirissa",
      "Day 6 - whale watching",
      "Day 7 - Galle Fort",
    ],
    dayItinerary: [
      {
        day: 1,
        title:
          "Airport pick-up → Sigiriya Rock Fortress → Dambulla Cave Temple",
        places: [
          {
            name: "Sigiriya Rock Fortress",
            image: "./packages/4day.jpg",
            description:
              "Also known as Lion Rock, Sigiriya is an ancient rock fortress and palace ruins located in the northern Matale District. This UNESCO World Heritage Site rises 200 meters above the surrounding plains. It features frescoes, water gardens, and the famous Lion's Gate. The climb to the top offers breathtaking panoramic views of the surrounding countryside.",
          },
          {
            name: "Dambulla Cave Temple",
            image: "./places/Dambulla.jpg",
            description:
              "The largest and best-preserved cave temple complex in Sri Lanka, also a UNESCO World Heritage Site. It features five caves containing over 150 Buddha statues and stunning murals covering 2,100 square meters. The temple dates back to the 1st century BC and represents the most important cave temple complex in the country.",
          },
        ],
      },
      {
        day: 2,
        title: "Travel to Kandy → Temple of Tooth, cultural show & city walk",
        places: [
          {
            name: "Temple of the Sacred Tooth Relic",
            image: "./packages/2-1.jpg",
            description:
              "One of the most sacred Buddhist temples in the world, housing the tooth relic of Lord Buddha. Located in Kandy, this temple is part of the UNESCO World Heritage Site. The temple complex includes the golden-roofed shrine, museum, and the Royal Palace of Kandy. Daily ceremonies (puja) are held to honor the relic.",
          },
          {
            name: "Peradeniya Botanical Garden",
            image: "./packages/2-3.jpg",
            description:
              "One of the finest tropical gardens in Asia, spanning 147 acres. Features over 4,000 species of plants including the giant Javan fig tree, orchid house, and bamboo collection. The garden offers serene walks along the Mahaweli River with beautifully landscaped lawns and exotic flora.",
          },
          {
            name: "Kandy Cultural Show",
            image: "./places/1.jpg",
            description:
              "A traditional dance performance showcasing Sri Lankan cultural heritage including Kandyan dancing, fire walking, drumming, and various folk dances. The show highlights the rich traditions of the hill country region.",
          },
        ],
      },
      {
        day: 3,
        title:
          "Scenic drive to Nuwara Eliya → Tea factory visit & Gregory Lake",
        places: [
          {
            name: "Tea Factory Tour",
            image: "./packages/4-2.jpg",
            description:
              "Experience the art of Ceylon tea production at a working tea factory. Learn about the tea-making process from plucking to packaging. Sample different varieties of tea while enjoying stunning views of the surrounding tea plantations that carpet the hillsides.",
          },
          {
            name: "Gregory Lake",
            image: "./places/3.jpg",
            description:
              "A picturesque man-made lake built during the British colonial era, perfect for boating, horse riding, and leisurely walks. The lake is surrounded by mountains and offers beautiful sunset views. It's one of the main attractions in the 'Little England' of Sri Lanka.",
          },
          {
            name: "Bomuru Waterfall",
            image: "./places/6.jpg",
            description:
              "A beautiful cascading waterfall located near Nuwara Eliya, surrounded by lush greenery. The falls create a serene atmosphere perfect for photography and nature appreciation.",
          },
        ],
      },
      {
        day: 4,
        title:
          "Train journey to Ella → Visit Little Adam's Peak & Nine Arch Bridge",
        places: [
          {
            name: "Nine Arch Bridge",
            image: "./packages/5day.jpg",
            description:
              "A stunning architectural marvel built entirely of stone, bricks, and cement without steel. This 91-meter long bridge stands 24 meters high and spans across a lush valley. The best time to visit is when a train passes over, creating an iconic Sri Lankan moment.",
          },
          {
            name: "Little Adam's Peak",
            image: "./places/5.jpg",
            description:
              "A beautiful mountain peak offering relatively easy hiking with panoramic views of the Ella Gap and surrounding tea plantations. The hike takes about 1-2 hours and rewards visitors with breathtaking sunrise or sunset views. Much easier than the famous Adam's Peak, making it accessible to most visitors.",
          },
        ],
      },
      {
        day: 5,
        title: "Yala National Park Safari (evening safari)",
        places: [
          {
            name: "Yala National Park Safari",
            image: "./packages/7day.jpg",
            description:
              "Yala is Sri Lanka's most visited national park, known for its high density of leopards, elephants, sloth bears, crocodiles, and diverse birdlife. The evening safari offers the best chance to spot wildlife as animals become more active. The park also features ancient rock inscriptions and beautiful coastal areas.",
          },
        ],
      },
      {
        day: 6,
        title:
          "Mirissa or Weligama → Beach relaxation & optional whale watching",
        places: [
          {
            name: "Mirissa Beach",
            image: "./packages/7-2.jpg",
            description:
              "A beautiful crescent-shaped beach known for its golden sands and clear blue waters. Perfect for swimming, sunbathing, and watching spectacular sunsets. The area has excellent restaurants and cafes along the beach.",
          },
          {
            name: "Whale Watching",
            image: "./packages/15.jpg",
            description:
              "Mirissa is one of the best places in the world for blue whale and sperm whale watching. The whale watching season runs from November to April, offering opportunities to see these magnificent creatures in their natural habitat along with dolphins.",
          },
        ],
      },
      {
        day: 7,
        title: "Visit Galle Fort → Return to Colombo / Airport",
        places: [
          {
            name: "Galle Fort",
            image: "./packages/7-1.jpg",
            description:
              "A UNESCO World Heritage Site, this 16th-century fortified old city was built by Portuguese and later fortified by the Dutch. The fort features colonial architecture, narrow streets, historic churches, mosques, museums, boutique shops, and cafes. It's a living heritage site where history and modern life blend seamlessly.",
          },
        ],
      },
    ],
  },
  {
    id: "10-days",
    days: 10,
    title: "The Heritage & Wild Adventure Trail",
    vehicles: ["Car", "Van"],
    subtitle:
      "From ancient cities to wild safaris and coastal bliss — experience Sri Lanka’s full diversity.",
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
    gallery: [
      "./packages/17.jpg",
      "./packages/16.jpg",
      "./packages/18.jpg",
      "./packages/10-2.jpg",
      "./packages/19.jpg",
      "./places/Dambulla.jpg",
      "./packages/4day.jpg",
      "./packages/2-1.jpg",
      "./packages/2-3.jpg",
      "./packages/4-2.jpg",
      "./places/3.jpg",
      "./places/6.jpg",
      "./packages/5day.jpg",
      "./places/5.jpg",
      "./packages/7day.jpg",
      "./packages/7-2.jpg",
      "./packages/15.jpg",
      "./packages/7-1.jpg",
    ],
    galleryCaptions: [
      "Day 1 - Ruwanwelisaya",
      "Day 1 - Sacred Bo Tree",
      "Day 2 - Mihintale",
      "Day 3 - Polonnaruwa heritage ruins",
      "Day 3 - Parakrama Samudra Lake",
      "Day 4 - Dambulla Cave Temple",
      "Day 4 - Sigiriya Rock Fortress climb",
      "Day 5 - Temple of Tooth",
      "Day 5 - Peradeniya Garden",
      "Day 6 - Tea factory tour",
      "Day 6 - Gregory Lake",
      "Day 6 - Bomuru Waterfall",
      "Day 7 - Nine Arch Bridge",
      "Day 7 - Little Adam's Peak",
      "Day 8 - Yala National Park Safari",
      "Day 9- Mirissa",
      "Day 9 - whale watching",
      "Day 10 - Galle Fort",
    ],
    dayItinerary: [
      {
        day: 1,
        title: "Airport → Anuradhapura heritage city (Ruwanwelisaya, Sacred Bo Tree)",
        places: [
          {
            name: "Ruwanwelisaya",
            image: "./packages/17.jpg",
            description:
              "A magnificent stupa in Anuradhapura, one of the world's tallest ancient structures. This sacred Buddhist monument is said to contain relics of the Buddha and is an important pilgrimage site.",
          },
          {
            name: "Sacred Bo Tree (Jaya Sri Maha Bodhi)",
            image: "./packages/16.jpg",
            description:
              "The oldest historically authenticated tree in the world, grown from a sapling of the Bodhi tree under which Buddha attained enlightenment. A deeply revered site for Buddhists.",
          },
        ],
      },
      {
        day: 2,
        title: "Explore Mihintale & travel to Polonnaruwa",
        places: [
          {
            name: "Mihintale",
            image: "./packages/18.jpg",
            description:
              "The birthplace of Buddhism in Sri Lanka, where Buddhism was first introduced in 247 BC. Climb the rock steps to visit ancient monastic caves, stupas, and enjoy panoramic views of the surrounding plains.",
          },
        ],
      },
      {
        day: 3,
        title: "Polonnaruwa heritage ruins & Parakrama Samudra Lake",
        places: [
          {
            name: "Polonnaruwa Ancient City",
            image: "./packages/10-2.jpg",
            description:
              "A UNESCO World Heritage Site showcasing well-preserved ruins of the ancient capital. Explore royal palaces, impressive Buddhist temples, and intricate stone carvings dating back to the 11th century.",
          },
          {
            name: "Parakrama Samudra Lake",
            image: "./packages/19.jpg",
            description:
              "A massive man-made reservoir built by King Parakramabahu, showcasing ancient Sri Lankan engineering. The lake provides irrigation and offers beautiful sunset views.",
          },
        ],
      },
      {
        day: 4,
        title: "Sigiriya Rock Fortress & Dambulla Cave Temple",
        places: [
          {
            name: "Dambulla Cave Temple",
            image: "./places/Dambulla.jpg",
            description:
              "The largest and best-preserved cave temple complex in Sri Lanka, also a UNESCO World Heritage Site. It features five caves containing over 150 Buddha statues and stunning murals covering 2,100 square meters. The temple dates back to the 1st century BC and represents the most important cave temple complex in the country.",
          },
          {
            name: "Sigiriya Rock Fortress",
            image: "./packages/4day.jpg",
            description:
              "Also known as Lion Rock, Sigiriya is an ancient rock fortress and palace ruins located in the northern Matale District. This UNESCO World Heritage Site rises 200 meters above the surrounding plains. It features frescoes, water gardens, and the famous Lion's Gate. The climb to the top offers breathtaking panoramic views of the surrounding countryside.",
          },
        ],
      },
      {
        day: 5,
        title: "Kandy city tour & cultural dance show",
        places: [
          {
            name: "Temple of the Sacred Tooth Relic",
            image: "./packages/2-1.jpg",
            description:
              "One of the most sacred Buddhist temples in the world, housing the tooth relic of Lord Buddha. Located in Kandy, this temple is part of the UNESCO World Heritage Site. The temple complex includes the golden-roofed shrine, museum, and the Royal Palace of Kandy. Daily ceremonies (puja) are held to honor the relic.",
          },
          {
            name: "Peradeniya Botanical Garden",
            image: "./packages/2-3.jpg",
            description:
              "One of the finest tropical gardens in Asia, spanning 147 acres. Features over 4,000 species of plants including the giant Javan fig tree, orchid house, and bamboo collection. The garden offers serene walks along the Mahaweli River with beautifully landscaped lawns and exotic flora.",
          },
        ],
      },
      {
        day: 6,
        title: "Tea plantations in Nuwara Eliya & Gregory Lake",
        places: [
          {
            name: "Tea Factory Tour",
            image: "./packages/4-2.jpg",
            description:
              "Experience the art of Ceylon tea production at a working tea factory. Learn about the tea-making process from plucking to packaging. Sample different varieties of tea while enjoying stunning views of the surrounding tea plantations that carpet the hillsides.",
          },
          {
            name: "Gregory Lake",
            image: "./places/3.jpg",
            description:
              "A picturesque man-made lake built during the British colonial era, perfect for boating, horse riding, and leisurely walks. The lake is surrounded by mountains and offers beautiful sunset views. It's one of the main attractions in the 'Little England' of Sri Lanka.",
          },
          {
            name: "Bomuru Waterfall",
            image: "./places/6.jpg",
            description:
              "A beautiful cascading waterfall located near Nuwara Eliya, surrounded by lush greenery. The falls create a serene atmosphere perfect for photography and nature appreciation.",
          },
        ],
      },
      {
        day: 7,
        title: "Ella → Scenic train ride, Ravana Falls, and Nine Arches",
        places: [
          {
            name: "Nine Arch Bridge",
            image: "./packages/5day.jpg",
            description:
              "A stunning architectural marvel built entirely of stone, bricks, and cement without steel. This 91-meter long bridge stands 24 meters high and spans across a lush valley. The best time to visit is when a train passes over, creating an iconic Sri Lankan moment.",
          },
          {
            name: "Little Adam's Peak",
            image: "./places/5.jpg",
            description:
              "A beautiful mountain peak offering relatively easy hiking with panoramic views of the Ella Gap and surrounding tea plantations. The hike takes about 1-2 hours and rewards visitors with breathtaking sunrise or sunset views. Much easier than the famous Adam's Peak, making it accessible to most visitors.",
          },
        ],
      },
      {
        day: 8,
        title: "Yala National Park Safari",
        places: [
          {
            name: "Yala National Park Safari",
            image: "./packages/7day.jpg",
            description:
              "Yala is Sri Lanka's most visited national park, known for its high density of leopards, elephants, sloth bears, crocodiles, and diverse birdlife. The safari offers the best chance to spot wildlife as animals become more active. The park also features ancient rock inscriptions and beautiful coastal areas.",
          },
        ],
      },
      {
        day: 9,
        title: "Mirissa → Whale watching & beach leisure",
        places: [
          {
            name: "Mirissa Beach",
            image: "./packages/7-2.jpg",
            description:
              "A beautiful crescent-shaped beach known for its golden sands and clear blue waters. Perfect for swimming, sunbathing, and watching spectacular sunsets. The area has excellent restaurants and cafes along the beach.",
          },
          {
            name: "Whale Watching",
            image: "./packages/15.jpg",
            description:
              "Mirissa is one of the best places in the world for blue whale and sperm whale watching. The whale watching season runs from November to April, offering opportunities to see these magnificent creatures in their natural habitat along with dolphins.",
          },
        ],
      },
      {
        day: 10,
        title: "Galle Fort & return to Airport",
        places: [
          {
            name: "Galle Fort",
            image: "./packages/7-1.jpg",
            description:
              "A UNESCO World Heritage Site, this 16th-century fortified old city was built by Portuguese and later fortified by the Dutch. The fort features colonial architecture, narrow streets, historic churches, mosques, museums, boutique shops, and cafes. It's a living heritage site where history and modern life blend seamlessly.",
          },
        ],
      },
    ],
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
    gallery: [
      "./packages/1-3.jpg",
      "./packages/17.jpg",
      "./packages/16.jpg",
      "./packages/18.jpg",
      "./packages/10-2.jpg",
      "./packages/19.jpg",
      "./places/Dambulla.jpg",
      "./packages/4day.jpg",
      "./packages/2-1.jpg",
      "./packages/2-3.jpg",
      "./packages/4-2.jpg",
      "./places/3.jpg",
      "./places/6.jpg",
      "./packages/5day.jpg",
      "./places/5.jpg",
      "./packages/7day.jpg",
      "./packages/7-2.jpg",
      "./packages/15.jpg",
      "./packages/7-1.jpg",
    ],
    galleryCaptions: [
      "Day 1 - Negambo Beach",
      "Day 2 - Ruwanwelisaya",
      "Day 2 - Sacred Bo Tree",
      "Day 2 - Mihintale",
      "Day 3 - Polonnaruwa heritage ruins",
      "Day 3 - Parakrama Samudra Lake",
      "Day 4 - Dambulla Cave Temple",
      "Day 4 - Sigiriya Rock Fortress climb",
      "Day 5 - Temple of Tooth",
      "Day 6 - Peradeniya Garden",
      "Day 7 - Tea factory tour",
      "Day 7 - Gregory Lake",
      "Day 7 - Bomuru Waterfall",
      "Day 8 - Nine Arch Bridge",
      "Day 8 - Little Adam’s Peak",
      "Day 9 - Yala National Park Safari",
      "Day 10 - Mirissa",
      "Day 10 - whale watching",
      "Day 11 - Galle Fort",
    ],
    dayItinerary: [
      {
        day: 1,
        title: "Arrival → Negombo beach stay",
        places: [
          {
            name: "Negombo Beach",
            image: "./packages/1-3.jpg",
            description:
              "A beautiful beach town near the airport, perfect for relaxation after arrival. Known for its golden beaches, fishing harbor, and Dutch colonial architecture. Great for swimming and enjoying fresh seafood.",
          },
        ],
      },
      {
        day: 2,
        title: "Visit Anuradhapura ancient city",
        places: [
          {
            name: "Ruwanwelisaya",
            image: "./packages/17.jpg",
            description:
              "A magnificent stupa in Anuradhapura, one of the world's tallest ancient structures. This sacred Buddhist monument is said to contain relics of the Buddha and is an important pilgrimage site.",
          },
          {
            name: "Sacred Bo Tree (Jaya Sri Maha Bodhi)",
            image: "./packages/16.jpg",
            description:
              "The oldest historically authenticated tree in the world, grown from a sapling of the Bodhi tree under which Buddha attained enlightenment. A deeply revered site for Buddhists.",
          },
          {
            name: "Mihintale",
            image: "./packages/18.jpg",
            description:
              "The birthplace of Buddhism in Sri Lanka, where Buddhism was first introduced in 247 BC. Climb the rock steps to visit ancient monastic caves, stupas, and enjoy panoramic views of the surrounding plains.",
          },
        ],
      },
      {
        day: 3,
        title: "Explore Polonnaruwa heritage ruins",
        places: [
          {
            name: "Polonnaruwa Ancient City",
            image: "./packages/10-2.jpg",
            description:
              "A UNESCO World Heritage Site showcasing well-preserved ruins of the ancient capital. Explore royal palaces, impressive Buddhist temples, and intricate stone carvings dating back to the 11th century.",
          },
          {
            name: "Parakrama Samudra Lake",
            image: "./packages/19.jpg",
            description:
              "A massive man-made reservoir built by King Parakramabahu, showcasing ancient Sri Lankan engineering. The lake provides irrigation and offers beautiful sunset views.",
          },
        ],
      },
      {
        day: 4,
        title: "Climb Sigiriya Rock Fortress → Visit Dambulla Caves",
        places: [
          {
            name: "Dambulla Cave Temple",
            image: "./places/Dambulla.jpg",
            description:
              "The largest and best-preserved cave temple complex in Sri Lanka, also a UNESCO World Heritage Site. It features five caves containing over 150 Buddha statues and stunning murals covering 2,100 square meters. The temple dates back to the 1st century BC and represents the most important cave temple complex in the country.",
          },
          {
            name: "Sigiriya Rock Fortress",
            image: "./packages/4day.jpg",
            description:
              "Also known as Lion Rock, Sigiriya is an ancient rock fortress and palace ruins located in the northern Matale District. This UNESCO World Heritage Site rises 200 meters above the surrounding plains. It features frescoes, water gardens, and the famous Lion's Gate. The climb to the top offers breathtaking panoramic views of the surrounding countryside.",
          },
        ],
      },
      {
        day: 5,
        title: "Kandy → Temple of Tooth & cultural dance show",
        places: [
          {
            name: "Temple of the Sacred Tooth Relic",
            image: "./packages/2-1.jpg",
            description:
              "One of the most sacred Buddhist temples in the world, housing the tooth relic of Lord Buddha. Located in Kandy, this temple is part of the UNESCO World Heritage Site. The temple complex includes the golden-roofed shrine, museum, and the Royal Palace of Kandy. Daily ceremonies (puja) are held to honor the relic.",
          },
        ],
      },
      {
        day: 6,
        title: "Peradeniya Botanical Garden & spice village",
        places: [
          {
            name: "Peradeniya Botanical Garden",
            image: "./packages/2-3.jpg",
            description:
              "One of the finest tropical gardens in Asia, spanning 147 acres. Features over 4,000 species of plants including the giant Javan fig tree, orchid house, and bamboo collection. The garden offers serene walks along the Mahaweli River with beautifully landscaped lawns and exotic flora.",
          },
        ],
      },
      {
        day: 7,
        title: "Nuwara Eliya tea factory & Gregory Lake",
        places: [
          {
            name: "Tea Factory Tour",
            image: "./packages/4-2.jpg",
            description:
              "Experience the art of Ceylon tea production at a working tea factory. Learn about the tea-making process from plucking to packaging. Sample different varieties of tea while enjoying stunning views of the surrounding tea plantations that carpet the hillsides.",
          },
          {
            name: "Gregory Lake",
            image: "./places/3.jpg",
            description:
              "A picturesque man-made lake built during the British colonial era, perfect for boating, horse riding, and leisurely walks. The lake is surrounded by mountains and offers beautiful sunset views. It's one of the main attractions in the 'Little England' of Sri Lanka.",
          },
          {
            name: "Bomuru Waterfall",
            image: "./places/6.jpg",
            description:
              "A beautiful cascading waterfall located near Nuwara Eliya, surrounded by lush greenery. The falls create a serene atmosphere perfect for photography and nature appreciation.",
          },
        ],
      },
      {
        day: 8,
        title: "Ella → Nine Arch Bridge, Little Adam's Peak",
        places: [
          {
            name: "Nine Arch Bridge",
            image: "./packages/5day.jpg",
            description:
              "A stunning architectural marvel built entirely of stone, bricks, and cement without steel. This 91-meter long bridge stands 24 meters high and spans across a lush valley. The best time to visit is when a train passes over, creating an iconic Sri Lankan moment.",
          },
          {
            name: "Little Adam's Peak",
            image: "./places/5.jpg",
            description:
              "A beautiful mountain peak offering relatively easy hiking with panoramic views of the Ella Gap and surrounding tea plantations. The hike takes about 1-2 hours and rewards visitors with breathtaking sunrise or sunset views. Much easier than the famous Adam's Peak, making it accessible to most visitors.",
          },
        ],
      },
      {
        day: 9,
        title: "Yala Safari adventure",
        places: [
          {
            name: "Yala National Park Safari",
            image: "./packages/7day.jpg",
            description:
              "Yala is Sri Lanka's most visited national park, known for its high density of leopards, elephants, sloth bears, crocodiles, and diverse birdlife. The safari offers the best chance to spot wildlife as animals become more active. The park also features ancient rock inscriptions and beautiful coastal areas.",
          },
        ],
      },
      {
        day: 10,
        title: "Mirissa → Whale watching",
        places: [
          {
            name: "Mirissa Beach",
            image: "./packages/7-2.jpg",
            description:
              "A beautiful crescent-shaped beach known for its golden sands and clear blue waters. Perfect for swimming, sunbathing, and watching spectacular sunsets. The area has excellent restaurants and cafes along the beach.",
          },
          {
            name: "Whale Watching",
            image: "./packages/15.jpg",
            description:
              "Mirissa is one of the best places in the world for blue whale and sperm whale watching. The whale watching season runs from November to April, offering opportunities to see these magnificent creatures in their natural habitat along with dolphins.",
          },
        ],
      },
      {
        day: 11,
        title: "Galle Fort & Bentota beach leisure",
        places: [
          {
            name: "Galle Fort",
            image: "./packages/7-1.jpg",
            description:
              "A UNESCO World Heritage Site, this 16th-century fortified old city was built by Portuguese and later fortified by the Dutch. The fort features colonial architecture, narrow streets, historic churches, mosques, museums, boutique shops, and cafes. It's a living heritage site where history and modern life blend seamlessly.",
          },
        ],
      },
      {
        day: 12,
        title: "Colombo city tour → Departure",
        places: [],
      },
    ],
  },
  {
    id: "14-days",
    days: 14,
    title: "The Ultimate Island Odyssey",
    vehicles: ["Car", "Van"],
    subtitle:
      "Two unforgettable weeks discovering Sri Lanka’s culture, coastlines, and hill country charm.",
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
    gallery: [
      "./packages/1-3.jpg",
      "./packages/17.jpg",
      "./packages/16.jpg",
      "./packages/18.jpg",
      "./packages/20.jpg",
      "./packages/21.jpg",
      "./packages/10-2.jpg",
      "./packages/19.jpg",
      "./places/Dambulla.jpg",
      "./packages/4day.jpg",
      "./packages/2-1.jpg",
      "./packages/2-3.jpg",
      "./packages/4-2.jpg",
      "./places/3.jpg",
      "./packages/22.jpg",
      "./places/6.jpg",
      "./packages/5day.jpg",
      "./places/5.jpg",
      "./packages/7day.jpg",
      "./packages/7-2.jpg",
      "./packages/15.jpg",
      "./packages/7-1.jpg",
      "./packages/14-3.jpg",
      "./packages/14day.jpg",
      "./packages/23.jpg",
      "./packages/1day.jpg",
    ],
    galleryCaptions: [
      "Day 1 - Negambo Beach",
      "Day 2 - Ruwanwelisaya",
      "Day 2 - Sacred Bo Tree",
      "Day 2 - Mihintale",
      "Day 3 - Koneswaram Temple",
      "Day 3 - Nilaveli Beach",
      "Day 4 - Polonnaruwa heritage ruins",
      "Day 4 - Parakrama Samudra Lake",
      "Day 5 - Dambulla Cave Temple",
      "Day 5 - Sigiriya Rock Fortress climb",
      "Day 6 - Temple of Tooth",
      "Day 6 - Peradeniya Garden",
      "Day 7 - Tea factory tour",
      "Day 7 - Gregory Lake",
      "Day 7 - Bomuru Waterfall",
      "Day 8 - Nine Arch Bridge",
      "Day 8 - Little Adam’s Peak",
      "Day 9 - Ravana Falls",
      "Day 10 - Yala National Park Safari",
      "Day 11 - Mirissa",
      "Day 11 - whale watching",
      "Day 12 - Galle Fort",
      "Day 12 - Dutch Museum",
      "Day 13 - Madu River boat safari",
      "Day 13 - Turtle hatchery",
      "Day 14 - Colombo",
    ],
    dayItinerary: [
      {
        day: 1,
        title: "Airport → Negombo beach",
        places: [
          {
            name: "Negombo Beach",
            image: "./packages/1-3.jpg",
            description:
              "A beautiful beach town near the airport, perfect for relaxation after arrival. Known for its golden beaches, fishing harbor, and Dutch colonial architecture. Great for swimming and enjoying fresh seafood.",
          },
        ],
      },
      {
        day: 2,
        title: "Explore Anuradhapura & Mihintale",
        places: [
          {
            name: "Ruwanwelisaya",
            image: "./packages/17.jpg",
            description:
              "A magnificent stupa in Anuradhapura, one of the world's tallest ancient structures. This sacred Buddhist monument is said to contain relics of the Buddha and is an important pilgrimage site.",
          },
          {
            name: "Sacred Bo Tree (Jaya Sri Maha Bodhi)",
            image: "./packages/16.jpg",
            description:
              "The oldest historically authenticated tree in the world, grown from a sapling of the Bodhi tree under which Buddha attained enlightenment. A deeply revered site for Buddhists.",
          },
          {
            name: "Mihintale",
            image: "./packages/18.jpg",
            description:
              "The birthplace of Buddhism in Sri Lanka, where Buddhism was first introduced in 247 BC. Climb the rock steps to visit ancient monastic caves, stupas, and enjoy panoramic views of the surrounding plains.",
          },
        ],
      },
      {
        day: 3,
        title: "Travel to Trincomalee → Visit Koneswaram Temple & Nilaveli Beach",
        places: [
          {
            name: "Koneswaram Temple",
            image: "./packages/20.jpg",
            description:
              "A historic Hindu temple complex perched on Swami Rock, overlooking the Indian Ocean. This ancient temple is dedicated to Lord Shiva and offers stunning views of Trincomalee harbor.",
          },
          {
            name: "Nilaveli Beach",
            image: "./packages/21.jpg",
            description:
              "One of Sri Lanka's most beautiful beaches with pristine white sands and clear turquoise waters. Perfect for swimming, snorkeling, and relaxation. Known for its calm waters and natural beauty.",
          },
        ],
      },
      {
        day: 4,
        title: "Polonnaruwa ancient city exploration",
        places: [
          {
            name: "Polonnaruwa Ancient City",
            image: "./packages/10-2.jpg",
            description:
              "A UNESCO World Heritage Site showcasing well-preserved ruins of the ancient capital. Explore royal palaces, impressive Buddhist temples, and intricate stone carvings dating back to the 11th century.",
          },
          {
            name: "Parakrama Samudra Lake",
            image: "./packages/19.jpg",
            description:
              "A massive man-made reservoir built by King Parakramabahu, showcasing ancient Sri Lankan engineering. The lake provides irrigation and offers beautiful sunset views.",
          },
        ],
      },
      {
        day: 5,
        title: "Climb Sigiriya Rock Fortress & Dambulla Cave Temple",
        places: [
          {
            name: "Dambulla Cave Temple",
            image: "./places/Dambulla.jpg",
            description:
              "The largest and best-preserved cave temple complex in Sri Lanka, also a UNESCO World Heritage Site. It features five caves containing over 150 Buddha statues and stunning murals covering 2,100 square meters. The temple dates back to the 1st century BC and represents the most important cave temple complex in the country.",
          },
          {
            name: "Sigiriya Rock Fortress",
            image: "./packages/4day.jpg",
            description:
              "Also known as Lion Rock, Sigiriya is an ancient rock fortress and palace ruins located in the northern Matale District. This UNESCO World Heritage Site rises 200 meters above the surrounding plains. It features frescoes, water gardens, and the famous Lion's Gate. The climb to the top offers breathtaking panoramic views of the surrounding countryside.",
          },
        ],
      },
      {
        day: 6,
        title: "Kandy → Temple of Tooth & cultural show",
        places: [
          {
            name: "Temple of the Sacred Tooth Relic",
            image: "./packages/2-1.jpg",
            description:
              "One of the most sacred Buddhist temples in the world, housing the tooth relic of Lord Buddha. Located in Kandy, this temple is part of the UNESCO World Heritage Site. The temple complex includes the golden-roofed shrine, museum, and the Royal Palace of Kandy. Daily ceremonies (puja) are held to honor the relic.",
          },
          {
            name: "Peradeniya Botanical Garden",
            image: "./packages/2-3.jpg",
            description:
              "One of the finest tropical gardens in Asia, spanning 147 acres. Features over 4,000 species of plants including the giant Javan fig tree, orchid house, and bamboo collection. The garden offers serene walks along the Mahaweli River with beautifully landscaped lawns and exotic flora.",
          },
        ],
      },
      {
        day: 7,
        title: "Nuwara Eliya → Tea estates & Gregory Lake",
        places: [
          {
            name: "Tea Factory Tour",
            image: "./packages/4-2.jpg",
            description:
              "Experience the art of Ceylon tea production at a working tea factory. Learn about the tea-making process from plucking to packaging. Sample different varieties of tea while enjoying stunning views of the surrounding tea plantations that carpet the hillsides.",
          },
          {
            name: "Gregory Lake",
            image: "./places/3.jpg",
            description:
              "A picturesque man-made lake built during the British colonial era, perfect for boating, horse riding, and leisurely walks. The lake is surrounded by mountains and offers beautiful sunset views. It's one of the main attractions in the 'Little England' of Sri Lanka.",
          },
          {
            name: "Bomuru Waterfall",
            image: "./places/6.jpg",
            description:
              "A beautiful cascading waterfall located near Nuwara Eliya, surrounded by lush greenery. The falls create a serene atmosphere perfect for photography and nature appreciation.",
          },
        ],
      },
      {
        day: 8,
        title: "Scenic train to Ella → Little Adam's Peak",
        places: [
          {
            name: "Little Adam's Peak",
            image: "./places/5.jpg",
            description:
              "A beautiful mountain peak offering relatively easy hiking with panoramic views of the Ella Gap and surrounding tea plantations. The hike takes about 1-2 hours and rewards visitors with breathtaking sunrise or sunset views. Much easier than the famous Adam's Peak, making it accessible to most visitors.",
          },
        ],
      },
      {
        day: 9,
        title: "Ella sightseeing & Ravana Falls",
        places: [
          {
            name: "Ravana Falls",
            image: "./packages/22.jpg",
            description:
              "A beautiful waterfall located in Ella, associated with the legend of King Ravana from the Ramayana epic. The falls cascade down through lush forest, creating a picturesque natural setting.",
          },
        ],
      },
      {
        day: 10,
        title: "Yala National Park Safari",
        places: [
          {
            name: "Yala National Park Safari",
            image: "./packages/7day.jpg",
            description:
              "Yala is Sri Lanka's most visited national park, known for its high density of leopards, elephants, sloth bears, crocodiles, and diverse birdlife. The safari offers the best chance to spot wildlife as animals become more active. The park also features ancient rock inscriptions and beautiful coastal areas.",
          },
        ],
      },
      {
        day: 11,
        title: "Tangalle & Mirissa beach day",
        places: [
          {
            name: "Mirissa Beach",
            image: "./packages/7-2.jpg",
            description:
              "A beautiful crescent-shaped beach known for its golden sands and clear blue waters. Perfect for swimming, sunbathing, and watching spectacular sunsets. The area has excellent restaurants and cafes along the beach.",
          },
          {
            name: "Whale Watching",
            image: "./packages/15.jpg",
            description:
              "Mirissa is one of the best places in the world for blue whale and sperm whale watching. The whale watching season runs from November to April, offering opportunities to see these magnificent creatures in their natural habitat along with dolphins.",
          },
        ],
      },
      {
        day: 12,
        title: "Galle Fort & Dutch Museum",
        places: [
          {
            name: "Galle Fort",
            image: "./packages/7-1.jpg",
            description:
              "A UNESCO World Heritage Site, this 16th-century fortified old city was built by Portuguese and later fortified by the Dutch. The fort features colonial architecture, narrow streets, historic churches, mosques, museums, boutique shops, and cafes. It's a living heritage site where history and modern life blend seamlessly.",
          },
        ],
      },
      {
        day: 13,
        title: "Bentota → Madu River boat safari & turtle hatchery",
        places: [
          {
            name: "Madu River Boat Safari",
            image: "./packages/14-3.jpg",
            description:
              "A scenic boat ride through the mangrove forests of the Madu River. See diverse wildlife, visit cinnamon gardens, fish therapy, and experience the natural beauty of this unique ecosystem.",
          },
          {
            name: "Turtle Hatchery",
            image: "./packages/23.jpg",
            description:
              "A conservation center dedicated to protecting sea turtles. Learn about different turtle species, watch hatchlings, and see adult turtles being cared for. An educational and heartwarming experience.",
          },
        ],
      },
      {
        day: 14,
        title: "Colombo city tour → Airport drop",
        places: [],
      },
    ],
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
    gallery: [
      "./packages/1-3.jpg",
      "./packages/17.jpg",
      "./packages/16.jpg",
      "./packages/18.jpg",
      "./packages/20.jpg",
      "./packages/21.jpg",
      "./packages/10-2.jpg",
      "./packages/19.jpg",
      "./places/Dambulla.jpg",
      "./packages/4day.jpg",
      "./packages/2-1.jpg",
      "./packages/2-3.jpg",
      "./packages/4-2.jpg",
      "./places/3.jpg",
      "./packages/22.jpg",
      "./places/6.jpg",
      "./packages/5day.jpg",
      "./places/5.jpg",
      "./packages/7day.jpg",
      "./packages/7-2.jpg",
      "./packages/15.jpg",
      "./packages/7-1.jpg",
      "./packages/14-3.jpg",
      "./packages/14day.jpg",
      "./packages/23.jpg",
      "./packages/1day.jpg",
    ],
    galleryCaptions: [
      "Day 1 - Negambo Beach",
      "Day 2 - Ruwanwelisaya",
      "Day 2 - Sacred Bo Tree",
      "Day 2 - Mihintale",
      "Day 3 - Koneswaram Temple",
      "Day 3 - Nilaveli Beach",
      "Day 4 - Polonnaruwa heritage ruins",
      "Day 4 - Parakrama Samudra Lake",
      "Day 5 - Dambulla Cave Temple",
      "Day 5 - Sigiriya Rock Fortress climb",
      "Day 6 - Temple of Tooth",
      "Day 6 - Peradeniya Garden",
      "Day 7 - Tea factory tour",
      "Day 7 - Gregory Lake",
      "Day 7 - Bomuru Waterfall",
      "Day 8 - Nine Arch Bridge",
      "Day 8 - Little Adam’s Peak",
      "Day 9 - Ravana Falls",
      "Day 10 - Yala National Park Safari",
      "Day 11 - Mirissa",
      "Day 11 - whale watching",
      "Day 12 - Galle Fort",
      "Day 12 - Dutch Museum",
      "Day 13 - Madu River boat safari",
      "Day 13 - Turtle hatchery",
      "Day 14 - Colombo",
    ],
    dayItinerary: [
      {
        day: 1,
        title: "Arrival → Negombo beach leisure",
        places: [
          {
            name: "Negombo Beach",
            image: "./packages/1-3.jpg",
            description:
              "A beautiful beach town near the airport, perfect for relaxation after arrival. Known for its golden beaches, fishing harbor, and Dutch colonial architecture. Great for swimming and enjoying fresh seafood.",
          },
        ],
      },
      {
        day: 2,
        title: "Anuradhapura ancient city tour",
        places: [
          {
            name: "Ruwanwelisaya",
            image: "./packages/17.jpg",
            description:
              "A magnificent stupa in Anuradhapura, one of the world's tallest ancient structures. This sacred Buddhist monument is said to contain relics of the Buddha and is an important pilgrimage site.",
          },
          {
            name: "Sacred Bo Tree (Jaya Sri Maha Bodhi)",
            image: "./packages/16.jpg",
            description:
              "The oldest historically authenticated tree in the world, grown from a sapling of the Bodhi tree under which Buddha attained enlightenment. A deeply revered site for Buddhists.",
          },
        ],
      },
      {
        day: 3,
        title: "Mihintale & Aukana Buddha statue",
        places: [
          {
            name: "Mihintale",
            image: "./packages/18.jpg",
            description:
              "The birthplace of Buddhism in Sri Lanka, where Buddhism was first introduced in 247 BC. Climb the rock steps to visit ancient monastic caves, stupas, and enjoy panoramic views of the surrounding plains.",
          },
        ],
      },
      {
        day: 4,
        title: "Trincomalee → Koneswaram Temple & Nilaveli Beach",
        places: [
          {
            name: "Koneswaram Temple",
            image: "./packages/20.jpg",
            description:
              "A historic Hindu temple complex perched on Swami Rock, overlooking the Indian Ocean. This ancient temple is dedicated to Lord Shiva and offers stunning views of Trincomalee harbor.",
          },
          {
            name: "Nilaveli Beach",
            image: "./packages/21.jpg",
            description:
              "One of Sri Lanka's most beautiful beaches with pristine white sands and clear turquoise waters. Perfect for swimming, snorkeling, and relaxation. Known for its calm waters and natural beauty.",
          },
        ],
      },
      {
        day: 5,
        title: "Pigeon Island snorkeling",
        places: [
          {
            name: "Pigeon Island",
            image: "./packages/21.jpg",
            description:
              "A national park and snorkeling paradise off the coast of Nilaveli. The crystal-clear waters are perfect for snorkeling and diving, with vibrant coral reefs and diverse marine life.",
          },
        ],
      },
      {
        day: 6,
        title: "Polonnaruwa heritage exploration",
        places: [
          {
            name: "Polonnaruwa Ancient City",
            image: "./packages/10-2.jpg",
            description:
              "A UNESCO World Heritage Site showcasing well-preserved ruins of the ancient capital. Explore royal palaces, impressive Buddhist temples, and intricate stone carvings dating back to the 11th century.",
          },
          {
            name: "Parakrama Samudra Lake",
            image: "./packages/19.jpg",
            description:
              "A massive man-made reservoir built by King Parakramabahu, showcasing ancient Sri Lankan engineering. The lake provides irrigation and offers beautiful sunset views.",
          },
        ],
      },
      {
        day: 7,
        title: "Sigiriya Rock & Dambulla Caves",
        places: [
          {
            name: "Dambulla Cave Temple",
            image: "./places/Dambulla.jpg",
            description:
              "The largest and best-preserved cave temple complex in Sri Lanka, also a UNESCO World Heritage Site. It features five caves containing over 150 Buddha statues and stunning murals covering 2,100 square meters. The temple dates back to the 1st century BC and represents the most important cave temple complex in the country.",
          },
          {
            name: "Sigiriya Rock Fortress",
            image: "./packages/4day.jpg",
            description:
              "Also known as Lion Rock, Sigiriya is an ancient rock fortress and palace ruins located in the northern Matale District. This UNESCO World Heritage Site rises 200 meters above the surrounding plains. It features frescoes, water gardens, and the famous Lion's Gate. The climb to the top offers breathtaking panoramic views of the surrounding countryside.",
          },
        ],
      },
      {
        day: 8,
        title: "Kandy cultural tour",
        places: [
          {
            name: "Temple of the Sacred Tooth Relic",
            image: "./packages/2-1.jpg",
            description:
              "One of the most sacred Buddhist temples in the world, housing the tooth relic of Lord Buddha. Located in Kandy, this temple is part of the UNESCO World Heritage Site. The temple complex includes the golden-roofed shrine, museum, and the Royal Palace of Kandy. Daily ceremonies (puja) are held to honor the relic.",
          },
          {
            name: "Peradeniya Botanical Garden",
            image: "./packages/2-3.jpg",
            description:
              "One of the finest tropical gardens in Asia, spanning 147 acres. Features over 4,000 species of plants including the giant Javan fig tree, orchid house, and bamboo collection. The garden offers serene walks along the Mahaweli River with beautifully landscaped lawns and exotic flora.",
          },
        ],
      },
      {
        day: 9,
        title: "Nuwara Eliya → Tea country experience",
        places: [
          {
            name: "Tea Factory Tour",
            image: "./packages/4-2.jpg",
            description:
              "Experience the art of Ceylon tea production at a working tea factory. Learn about the tea-making process from plucking to packaging. Sample different varieties of tea while enjoying stunning views of the surrounding tea plantations that carpet the hillsides.",
          },
          {
            name: "Gregory Lake",
            image: "./places/3.jpg",
            description:
              "A picturesque man-made lake built during the British colonial era, perfect for boating, horse riding, and leisurely walks. The lake is surrounded by mountains and offers beautiful sunset views. It's one of the main attractions in the 'Little England' of Sri Lanka.",
          },
        ],
      },
      {
        day: 10,
        title: "Train to Ella & sightseeing",
        places: [],
      },
      {
        day: 11,
        title: "Ella → Little Adam's Peak, Nine Arches, and Ravana Falls",
        places: [
          {
            name: "Nine Arch Bridge",
            image: "./packages/5day.jpg",
            description:
              "A stunning architectural marvel built entirely of stone, bricks, and cement without steel. This 91-meter long bridge stands 24 meters high and spans across a lush valley. The best time to visit is when a train passes over, creating an iconic Sri Lankan moment.",
          },
          {
            name: "Little Adam's Peak",
            image: "./places/5.jpg",
            description:
              "A beautiful mountain peak offering relatively easy hiking with panoramic views of the Ella Gap and surrounding tea plantations. The hike takes about 1-2 hours and rewards visitors with breathtaking sunrise or sunset views. Much easier than the famous Adam's Peak, making it accessible to most visitors.",
          },
          {
            name: "Ravana Falls",
            image: "./packages/22.jpg",
            description:
              "A beautiful waterfall located in Ella, associated with the legend of King Ravana from the Ramayana epic. The falls cascade down through lush forest, creating a picturesque natural setting.",
          },
        ],
      },
      {
        day: 12,
        title: "Yala Safari adventure",
        places: [
          {
            name: "Yala National Park Safari",
            image: "./packages/7day.jpg",
            description:
              "Yala is Sri Lanka's most visited national park, known for its high density of leopards, elephants, sloth bears, crocodiles, and diverse birdlife. The safari offers the best chance to spot wildlife as animals become more active. The park also features ancient rock inscriptions and beautiful coastal areas.",
          },
        ],
      },
      {
        day: 13,
        title: "Hambantota & Tangalle beaches",
        places: [],
      },
      {
        day: 14,
        title: "Mirissa → Whale watching",
        places: [
          {
            name: "Mirissa Beach",
            image: "./packages/7-2.jpg",
            description:
              "A beautiful crescent-shaped beach known for its golden sands and clear blue waters. Perfect for swimming, sunbathing, and watching spectacular sunsets. The area has excellent restaurants and cafes along the beach.",
          },
          {
            name: "Whale Watching",
            image: "./packages/15.jpg",
            description:
              "Mirissa is one of the best places in the world for blue whale and sperm whale watching. The whale watching season runs from November to April, offering opportunities to see these magnificent creatures in their natural habitat along with dolphins.",
          },
        ],
      },
      {
        day: 15,
        title: "Galle Fort & Unawatuna beach leisure",
        places: [
          {
            name: "Galle Fort",
            image: "./packages/7-1.jpg",
            description:
              "A UNESCO World Heritage Site, this 16th-century fortified old city was built by Portuguese and later fortified by the Dutch. The fort features colonial architecture, narrow streets, historic churches, mosques, museums, boutique shops, and cafes. It's a living heritage site where history and modern life blend seamlessly.",
          },
        ],
      },
      {
        day: 16,
        title: "Bentota → Madu River boat ride & turtle hatchery",
        places: [
          {
            name: "Madu River Boat Safari",
            image: "./packages/14-3.jpg",
            description:
              "A scenic boat ride through the mangrove forests of the Madu River. See diverse wildlife, visit cinnamon gardens, fish therapy, and experience the natural beauty of this unique ecosystem.",
          },
          {
            name: "Turtle Hatchery",
            image: "./packages/23.jpg",
            description:
              "A conservation center dedicated to protecting sea turtles. Learn about different turtle species, watch hatchlings, and see adult turtles being cared for. An educational and heartwarming experience.",
          },
        ],
      },
      {
        day: 17,
        title: "Colombo city & shopping",
        places: [],
      },
      {
        day: 18,
        title: "Relaxation day or optional village tour",
        places: [],
      },
      {
        day: 19,
        title: "Local culinary experience & souvenir shopping",
        places: [],
      },
      {
        day: 20,
        title: "Departure from Colombo Airport",
        places: [],
      },
    ],
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
    gallery: [
      "./packages/h-1.jpg",
      "./packages/2-2.jpg",
      "./packages/2-1.jpg",
      "./places/1.jpg",
      "./packages/4-2.jpg",
      "./packages/22.jpg",
      "./packages/5day.jpg",
      "./packages/7day.jpg",
      "./packages/14day.jpg",
    ],
    galleryCaptions: [
      "Day 1 - Negombo",
      "Day 2 - Pinnawala Elephant Orphanage",
      "Day 2 - Temple of the Tooth",
      "Day 2 - Kandy Lake",
      "Day 2 - Tea factory",
      "Day 2 - Ravana Falls",
      "Day 2 - Nine Arches Bridge",
      "Day 2 - Yala National Park",
      "Day 2 - Boat ride on Madu River",
    ],
    dayItinerary: [
      {
        day: 1,
        title: "Arrival at Bandaranaike International Airport → Private transfer to Negombo → Romantic beachfront dinner",
        places: [
          {
            name: "Negombo Beach",
            image: "./packages/h-1.jpg",
            description:
              "A beautiful beach town perfect for a romantic honeymoon start. Enjoy a private beachfront dinner with candlelight and ocean views, creating unforgettable memories for couples.",
          },
        ],
      },
      {
        day: 2,
        title: "Travel to Kandy via Pinnawala Elephant Orphanage → Visit Temple of the Tooth → Evening stroll around Kandy Lake",
        places: [
          {
            name: "Pinnawala Elephant Orphanage",
            image: "./packages/2-2.jpg",
            description:
              "The first and largest elephant orphanage in the world, established to care for orphaned and injured elephants. A romantic and heartwarming experience for couples to see these gentle giants together.",
          },
          {
            name: "Temple of the Sacred Tooth Relic",
            image: "./packages/2-1.jpg",
            description:
              "One of the most sacred Buddhist temples in the world, housing the tooth relic of Lord Buddha. A peaceful and spiritual visit perfect for couples seeking meaningful experiences.",
          },
          {
            name: "Kandy Lake",
            image: "./places/1.jpg",
            description:
              "A scenic artificial lake in the heart of Kandy, perfect for a romantic evening stroll. The peaceful ambiance and beautiful temple views create an idyllic setting for couples.",
          },
        ],
      },
      {
        day: 3,
        title: "Scenic train journey from Kandy to Nuwara Eliya → Tea factory visit → Stay in colonial-style honeymoon hotel",
        places: [
          {
            name: "Tea Factory Tour",
            image: "./packages/4-2.jpg",
            description:
              "Experience the art of Ceylon tea production at a working tea factory. The scenic train journey and tea plantation views make this a romantic experience for honeymooners.",
          },
        ],
      },
      {
        day: 4,
        title: "Drive to Ella → Visit Ravana Falls and Nine Arches Bridge → Candle-lit dinner with mountain view",
        places: [
          {
            name: "Ravana Falls",
            image: "./packages/22.jpg",
            description:
              "A beautiful waterfall located in Ella, associated with the legend of King Ravana from the Ramayana epic. The romantic setting and natural beauty make it perfect for honeymoon photos.",
          },
          {
            name: "Nine Arch Bridge",
            image: "./packages/5day.jpg",
            description:
              "A stunning architectural marvel built entirely of stone, bricks, and cement without steel. The scenic views and romantic train moments make this a must-visit for couples.",
          },
        ],
      },
      {
        day: 5,
        title: "Travel to Yala → Private Jeep Safari at Yala National Park",
        places: [
          {
            name: "Yala National Park Safari",
            image: "./packages/7day.jpg",
            description:
              "A private jeep safari experience perfect for couples. Yala is Sri Lanka's most visited national park, known for its high density of leopards, elephants, and diverse wildlife. An adventurous romantic experience.",
          },
        ],
      },
      {
        day: 6,
        title: "Move to Bentota → Boat ride on Madu River → Romantic sunset beach walk",
        places: [
          {
            name: "Madu River Boat Safari",
            image: "./packages/14day.jpg",
            description:
              "A scenic and romantic boat ride through the mangrove forests of the Madu River. Perfect for couples to enjoy together, followed by a romantic sunset beach walk in Bentota.",
          },
        ],
      },
      {
        day: 7,
        title: "Leisure morning → Transfer to Airport for departure",
        places: [],
      },
    ],
  },
];
