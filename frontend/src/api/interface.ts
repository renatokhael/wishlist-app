export interface ProductDetails {
  name: string;
  description: string;
}

export interface Product {
  code: string;
  name: string;
  available: boolean;
  visible: boolean;
  details: ProductDetails;
  priceInCents: number; // Modificado para number
  salePriceInCents: number; // Modificado para number
  rating: number;
  image: string;
  stockAvailable: boolean;
}
