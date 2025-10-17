export interface Vehicle {
  id: string;
  name: string;
  image: string;
  capacityLabel: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "wagon",
    name: "Wagon / Small",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4a64a8847cee49ce80f95cff15fa7a74%2Fd059553219fc41bfa8af7b1a71e6c11d?format=webp&width=800",
    capacityLabel: "1-2",
  },
  {
    id: "sedan",
    name: "Sedan",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4a64a8847cee49ce80f95cff15fa7a74%2F2407888e1cd549c983faf7c0d797fb6d?format=webp&width=800",
    capacityLabel: "1-3",
  },
  {
    id: "van",
    name: "Van",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4a64a8847cee49ce80f95cff15fa7a74%2Fa922a25f6ca5434d8c0f95746b32e99e?format=webp&width=800",
    capacityLabel: "5",
  },
  {
    id: "kdh-flat",
    name: "KDH Flat Roof",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4a64a8847cee49ce80f95cff15fa7a74%2Fef0928f7655047d0a9b1e340b4dfd081?format=webp&width=800",
    capacityLabel: "6",
  },
  {
    id: "kdh-high",
    name: "KDH High Roof",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4a64a8847cee49ce80f95cff15fa7a74%2F8efa75b523334d308c56ba0c4a0db208?format=webp&width=800",
    capacityLabel: "8",
  },
  {
    id: "mini-coach",
    name: "Mini Coach",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4a64a8847cee49ce80f95cff15fa7a74%2F3885a054dbc44eaca97e6eac87f60542?format=webp&width=800",
    capacityLabel: "15",
  },
  {
    id: "ac-bus",
    name: "AC Bus",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4a64a8847cee49ce80f95cff15fa7a74%2F76215297449a4a10adde65528d993e36?format=webp&width=800",
    capacityLabel: "18+",
  },
];
