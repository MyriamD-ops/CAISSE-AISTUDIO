
export enum Category {
  TOUT = 'Tout',
  BAGUES = 'Bagues',
  COLLIERS = 'Colliers',
  IMPRESSION_3D = 'Impression 3D',
  BRACELETS = 'Bracelets',
  LUXE = 'Luxe'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  badge?: string;
  description: string;
  stock: number;
  variants?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export type ViewState = 
  | 'public-home' 
  | 'public-catalog' 
  | 'public-detail' 
  | 'admin-lock' 
  | 'admin-dash' 
  | 'admin-products' 
  | 'admin-product-detail' 
  | 'admin-sale' 
  | 'admin-cart' 
  | 'admin-success';
