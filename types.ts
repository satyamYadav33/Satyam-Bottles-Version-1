
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  category: string;
  material: string;
  capacity: string;
  color: string;
  image: string;
  rating: number;
  reviews: number;
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}
