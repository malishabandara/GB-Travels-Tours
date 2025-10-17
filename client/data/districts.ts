export interface DistrictPlace {
  name: string;
  image: string;
}

export interface District {
  id: string;
  name: string;
  image: string;
  places: DistrictPlace[];
}

export const districts: District[] = [
  {
    id: "dambulla",
    name: "Dambulla",
    image: "./tour/33.jpg",
    places: [
      { name: "Sigiriya Rock Fortress", image: "./tour/34.jpg" },
      { name: "Dambulla Cave Temple", image: "./tour/14.jpg" },
      { name: "Minneriya National Park", image: "./safari/7.jpg" }
    ],
  },
  {
    id: "kandy",
    name: "Kandy",
    image: "./tour/7.jpg",
    places: [
      { name: "Temple of the Tooth", image: "./tour/12.jpg" },
      { name: "Kandy Lake & View Point", image: "./tour/16.jpg" },
      { name: "Peradeniya Botanical Garden", image: "./tour/11.jpg" }
    ],
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    image: "./tour/31.jpg",
    places: [
      { name: "Gregory Lake", image: "./tour/18.jpg" },
      { name: "Tea Factory & Estates", image: "./tour/6.jpg" },
      { name: "Ramboda Falls", image: "./tour/20.jpg" }
    ],
  },
  {
    id: "ella",
    name: "Ella",
    image: "./tour/40.jpg",
    places: [
      { name: "Nine Arch Bridge", image: "./tour/32.jpg" },
      { name: "Little Adam’s Peak", image: "./tour/38.jpg" },
      { name: "Ravana Falls", image: "./tour/39.jpg" }
    ],
  },
  {
    id: "yala",
    name: "Yala",
    image: "./safari/10.jpg",
    places: [
      { name: "Yala National Park", image: "./safari/5.jpg" },
      { name: "Bundala Bird Sanctuary", image: "./safari/9.jpg" }
    ],
  },
  {
    id: "galle",
    name: "Galle",
    image: "./tour/73.jpg",
    places: [
      { name: "Galle Fort", image: "./tour/70.jpg" },
      { name: "Unawatuna Beach", image: "./tour/69.jpg" },
      { name: "Jungle Beach", image: "./tour/72.jpg" }
    ],
  },
  {
    id: "colombo",
    name: "Colombo",
    image: "./tour/3.jpg",
    places: [
      { name: "Galle Face Green", image: "./tour/1.jpg" },
      { name: "Gangaramaya Temple", image: "./tour/4.jpg" },
      { name: "Independence Square", image: "./tour/5.jpg" }
    ],
  },
  {
    id: "negombo",
    name: "Negombo",
    image: "./tour/2.jpeg",
    places: [
      { name: "Negombo Beach", image: "./tour/8.jpg" },
      { name: "Dutch Canal", image: "./boat/12.jpg" },
      { name: "Fish Market", image: "./tour/9.jpg" }
    ],
  },
];
