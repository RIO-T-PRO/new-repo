// types.ts
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
  products?: Product[];
}
