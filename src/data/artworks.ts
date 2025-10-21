export interface Artwork {
  id: number;
  title: string;
  description: string;
  imageUrls: string[];
  year: string;
  medium: string;
}

export const paintings: Artwork[] = [
  {
    id: 1,
    title: "Urban Symphony",
    description: "A dynamic composition capturing the rhythm and energy of city life through bold brushstrokes and vibrant colors.",
    imageUrls: [
      "https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    year: "2024",
    medium: "Oil on Canvas"
  },
  {
    id: 2,
    title: "Solitude in Blue",
    description: "An introspective piece exploring themes of isolation and contemplation in contemporary society.",
    imageUrls: ["https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&w=800"],
    year: "2023",
    medium: "Acrylic on Canvas"
  },
  {
    id: 3,
    title: "Natural Geometry",
    description: "The intersection of organic forms and mathematical precision, exploring nature's inherent patterns.",
    imageUrls: [
      "https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    year: "2023",
    medium: "Mixed Media"
  },
  {
    id: 4,
    title: "Fragments of Memory",
    description: "A nostalgic exploration of childhood memories rendered through abstract expressionist techniques.",
    imageUrls: ["https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800"],
    year: "2022",
    medium: "Oil on Canvas"
  },
  {
    id: 5,
    title: "Digital Dawn",
    description: "A reflection on our digital age, where technology and humanity converge in unexpected ways.",
    imageUrls: ["https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800"],
    year: "2024",
    medium: "Acrylic and Digital Media"
  },
  {
    id: 6,
    title: "Metamorphosis",
    description: "An exploration of transformation and change, capturing the beauty found in life's transitions.",
    imageUrls: ["https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800"],
    year: "2023",
    medium: "Oil on Canvas"
  }
];

export const prints: Artwork[] = [
  {
    id: 7,
    title: "City Nights Series I",
    description: "Limited edition print capturing the electric atmosphere of urban nightlife through bold contrast and color.",
    imageUrls: [
      "https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    year: "2024",
    medium: "Giclée Print on Paper"
  },
  {
    id: 8,
    title: "Abstract Botanicals",
    description: "A series celebrating the beauty of plant forms through geometric abstraction and careful composition.",
    imageUrls: ["https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=800"],
    year: "2023",
    medium: "Screen Print"
  },
  {
    id: 9,
    title: "Monochrome Dreams",
    description: "An elegant exploration of form and shadow, emphasizing the power of black and white composition.",
    imageUrls: ["https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&w=800"],
    year: "2024",
    medium: "Lithograph"
  },
  {
    id: 10,
    title: "Texture Studies",
    description: "A collection exploring the tactile qualities of different materials and surfaces through printmaking.",
    imageUrls: ["https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800"],
    year: "2023",
    medium: "Etching on Paper"
  }
];