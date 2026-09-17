import { Product, ProductVariant } from '../data/catalog';

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
  tierTubs?: number; // 1, 2, or 3 tubs bundle
}

export type ViewMode = 'spec' | 'store';

export type CategoryFilter = 
  | 'all'
  | 'best-seller'
  | 'pre-workouts'
  | 'creatine'
  | 'stacks'
  | 'raw-compounds'
  | 'health'
  | 'weight-loss';

export type ActiveModal = 
  | null
  | 'lab-tests'
  | 'about'
  | 'faq'
  | 'refund'
  | 'contact';
