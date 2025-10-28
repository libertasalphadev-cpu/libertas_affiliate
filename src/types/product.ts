export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  featured: boolean;
  productManagerId?: string;
  commission?: number;
}

export interface AffiliateLink {
  productId: string;
  affiliateId: string;
  customUrl: string;
  clicks: number;
  sales: number;
}
