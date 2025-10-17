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
    image: "./places/Dambulla.jpg",
    places: [
      { name: "Sigiriya Rock Fortress", image: "./tour/5.jpg" },
      { name: "Dambulla Cave Temple", image: "./tour/23.jpg" },
      { name: "Minneriya National Park", image: "./safari/26.jpg" },
    ],
  },
  {
    id: "kandy",
    name: "Kandy",
    image: "./packages/2day.jpg",
    places: [
      { name: "Temple of the Tooth", image: "./packages/2-1.jpg" },
      { name: "Kandy Lake & View Point", image: "./places/1.jpg" },
      { name: "Peradeniya Botanical Garden", image: "./packages/2-3.jpg" },
    ],
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    image: "./places/2.jpg",
    places: [
      { name: "Gregory Lake", image: "./places/3.jpg" },
      { name: "Tea Factory & Estates", image: "./packages/4-2.jpg" },
      { name: "Ramboda Falls", image: "./places/4.jpg" },
    ],
  },
  {
    id: "ella",
    name: "Ella",
    image: "./packages/5day.jpg",
    places: [
      { name: "Nine Arch Bridge", image: "./packages/5day.jpg" },
      { name: "Little Adam’s Peak", image: "./places/5.jpg" },
      { name: "Ravana Falls", image: "./places/6.jpg" },
    ],
  },
  {
    id: "yala",
    name: "Yala",
    image: "./safari/10.jpg",
    places: [
      { name: "Yala National Park", image: "./safari/5.jpg" },
      { name: "Bundala Bird Sanctuary", image: "./safari/18.jpg" },
    ],
  },
  {
    id: "galle",
    name: "Galle",
    image: "./packages/7-1.jpg",
    places: [
      { name: "Galle Fort", image: "./packages/7-1.jpg" },
      { name: "Unawatuna Beach", image: "./packages/h-3.jpg" },
      { name: "Jungle Beach", image: "./places/7.jpg" },
    ],
  },
  {
    id: "colombo",
    name: "Colombo",
    image: "./packages/1day.jpg",
    places: [
      { name: "Galle Face Green", image: "./places/8.jpg" },
      { name: "Gangaramaya Temple", image: "./places/9.jpg" },
      { name: "Independence Square", image: "./places/10.jpg" },
    ],
  },
  {
    id: "negombo",
    name: "Negombo",
    image: "./places/11.jpeg",
    places: [
      { name: "Negombo Beach", image: "./places/12.jpg" },
      { name: "Dutch Canal", image: "./places/13.jpg" },
      { name: "Fish Market", image: "./places/14.jpg" },
    ],
  },
];
