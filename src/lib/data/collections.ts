export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  featured: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
}

export const collections: Collection[] = [
  {
    id: "summer",
    name: "Summer Collection",
    description: "Breezy, bold, and vibrant fashion wear for sunny days.",
    image: "/summer/summer-collection.jpeg",
    products: [
      {
        id: "classic-dress",
        name: "Classic Dress",
        price: 129,
        image: "/summer/classic-dress.jpeg",
        featured: true,
      },
      {
        id: "beach-hat",
        name: "Beach Hat",
        price: 49,
        image: "/summer/beach-hat.jpeg",
        featured: false,
      },
      {
        id: "summer-sunglasses",
        name: "Summer Sunglasses",
        price: 89,
        image: "/summer/summer-glasses.jpeg",
        featured: true,
      },
      {
        id: "linen-shirt",
        name: "Linen Shirt",
        price: 69,
        image: "/summer/linen-shirt.jpeg",
        featured: false,
      },
    ],
  },
  {
    id: "winter",
    name: "Winter Collection",
    description: "Warm, cozy, and stylish essentials for the season.",
    image: "/winter/winter-collection.jpeg",
    products: [
      {
        id: "modern-jacket",
        name: "Modern Jacket",
        price: 199,
        image: "/winter/modern-jacket.jpeg",
        featured: true,
      },
      {
        id: "wool-scarf",
        name: "Wool Scarf",
        price: 39,
        image: "/winter/wool-scarf.jpeg",
        featured: false,
      },
      {
        id: "leather-gloves",
        name: "Leather Gloves",
        price: 79,
        image: "/winter/leather-gloves.jpeg",
        featured: true,
      },
      {
        id: "beanie",
        name: "Cozy Beanie",
        price: 29,
        image: "/winter/beanie.jpeg",
        featured: false,
      },
    ],
  },
  {
    id: "formal",
    name: "Formal Collection",
    description: "Elegant designs for a bold professional look.",
    image: "/formal/formal-collection.jpeg",
    products: [
      {
        id: "business-suit",
        name: "Business Suit",
        price: 299,
        image:
          "https://images.unsplash.com/photo-1520975918311-7ce3177df4d5?w=800",
        featured: true,
      },
      {
        id: "formal-shoes",
        name: "Formal Shoes",
        price: 249,
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
        featured: true,
      },
      {
        id: "tie-set",
        name: "Tie Set",
        price: 49,
        image:
          "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800",
        featured: false,
      },
      {
        id: "cufflinks",
        name: "Cufflinks",
        price: 59,
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
        featured: false,
      },
    ],
  },
  {
    id: "streetwear",
    name: "Streetwear Collection",
    description: "Casual, trendy, and urban-inspired outfits.",
    image: "/street-wear/street-wear-collection.jpeg",
    products: [
      {
        id: "hoodie",
        name: "Comfy Hoodie",
        price: 89,
        image:
          "https://images.unsplash.com/photo-1520975833759-9e0f9e4b998f?w=800",
        featured: true,
      },
      {
        id: "sneakers",
        name: "Street Sneakers",
        price: 129,
        image:
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800",
        featured: true,
      },
      {
        id: "graphic-tee",
        name: "Graphic T-Shirt",
        price: 49,
        image:
          "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800",
        featured: false,
      },
      {
        id: "baseball-cap",
        name: "Baseball Cap",
        price: 39,
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
        featured: false,
      },
    ],
  },
];
