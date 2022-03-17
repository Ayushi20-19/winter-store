import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Designed mug",
    description: "This is the Description",
    price: "5000",
    categoryName: "gift",
    productImg:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    stars: "4",
    inStock: false,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Theme Party ",
    description: "This is the Description",
    price: "2000",
    categoryName: "dress",
    productImg:
      "https://images.unsplash.com/photo-1554568218-ffd1e72a2151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    stars: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "",
    description: "This is the Description",
    price: "5000",
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
    price: "5000",
    categoryName: "gift",
    productImg:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    stars: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Designed mug",
    description: "This is the Description",
    price: "5000",
    categoryName: "gift",
    productImg:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    stars: "4",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Theme Party ",
    description: "This is the Description",
    price: "2000",
    categoryName: "dress",
    productImg:
      "https://images.unsplash.com/photo-1554568218-ffd1e72a2151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    stars: "5",
    inStock: false,
    fastDelivery: true,
  },
];
