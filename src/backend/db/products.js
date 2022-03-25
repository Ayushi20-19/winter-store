import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Designer T-shirt",
    description: "This is the Description",
    price: "500",
    categoryName: "gift",
    productImg:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    stars: "4",
    inStock: false,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "T-shirt ",
    description: "This is the Description",
    price: "200",
    categoryName: "dress",
    productImg:
      "https://images.unsplash.com/photo-1554568218-ffd1e72a2151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    stars: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Random stuff",
    description: "This is the Description",
    price: "70",
    categoryName: "gift",
    productImg:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    stars: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Random stuff",
    description: "This is the Description",
    price: "1000",
    categoryName: "gift",
    productImg:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    stars: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Designer dress",
    description: "This is the Description",
    price: "700",
    categoryName: "gift",
    productImg:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    stars: "4",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Party dress ",
    description: "This is the Description",
    price: "800",
    categoryName: "dress",
    productImg:
      "https://images.unsplash.com/photo-1554568218-ffd1e72a2151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    stars: "5",
    inStock: false,
    fastDelivery: true,
  },
];
