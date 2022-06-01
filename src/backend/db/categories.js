import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Mug",
  },
  {
    _id: uuid(),
    categoryName: "T-shirt",
  },
  {
    _id: uuid(),
    categoryName: "Bagpack",
  },
  {
    _id: uuid(),
    categoryName: "Badges",
  },
  {
    _id: uuid(),
    categoryName: "Coaster",
  },
];
