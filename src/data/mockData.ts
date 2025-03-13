export interface ProductCreateInput {
  name: string;
  price: number;
  currency: string;
  description: string;
  stockQuantity: number;
  imageUrl: string;
  deliveryTime: string;
  height: number;
  width: number;
  depth: number;
  category: string;
}

export const mockData: ProductCreateInput[] = [
  {
    name: "Dining Table",
    price: 299.99,
    currency: "USD",
    description:
      "A solid wooden dining table with 4 seats, perfect for any dining room.",
    stockQuantity: 20,
    imageUrl: "public/images/ottoman.png",
    deliveryTime: "10 working days",
    height: 75.0,
    width: 160.0,
    depth: 90.0,
    category: "Dining",
  },
  {
    name: "Office Chair",
    price: 149.99,
    currency: "USD",
    description:
      "Comfortable ergonomic office chair with lumbar support and adjustable arms.",
    stockQuantity: 50,
    imageUrl: "public/images/ottoman.png",
    deliveryTime: "5 working days",
    height: 120.0,
    width: 60.0,
    depth: 60.0,
    category: "Office",
  },
  {
    name: "Bed",
    price: 799.99,
    currency: "USD",
    description:
      "Spacious king size bed with a high-quality memory foam mattress.",
    stockQuantity: 15,
    imageUrl: "public/images/ottoman.png",
    deliveryTime: "15 working days",
    height: 45.0,
    width: 200.0,
    depth: 210.0,
    category: "Bedroom",
  },
  {
    name: "Modern Sofa",
    price: 599.99,
    currency: "USD",
    description:
      "A modern sofa with soft fabric upholstery, ideal for living rooms.",
    stockQuantity: 30,
    imageUrl: "public/images/ottoman.png",
    deliveryTime: "7 working days",
    height: 80.0,
    width: 200.0,
    depth: 90.0,
    category: "Living Room",
  },
  {
    name: "Wooden Bookshelf",
    price: 120.0,
    currency: "USD",
    description:
      "A sturdy wooden bookshelf that fits any home office or living room.",
    stockQuantity: 40,
    imageUrl: "public/images/ottoman.png",
    deliveryTime: "7 working days",
    height: 180.0,
    width: 80.0,
    depth: 30.0,
    category: "Office",
  },
  {
    name: "Coffee Table",
    price: 180.0,
    currency: "USD",
    description: "A sleek glass coffee table with a metal frame.",
    stockQuantity: 25,
    imageUrl: "public/images/ottoman.png",
    deliveryTime: "5 working days",
    height: 40.0,
    width: 100.0,
    depth: 60.0,
    category: "Living Room",
  },
];
