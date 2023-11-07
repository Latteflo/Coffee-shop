// individual product information
export type ProductType = {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string; 
    rating?: number;      
    reviewCount?: number;
  };
  

// items in the shopping cart
export type CartItemType = ProductType & {
  quantity: number
}
