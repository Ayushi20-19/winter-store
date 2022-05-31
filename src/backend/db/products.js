import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "The Night's Watch",
    description: "Regular fit 100% Cotton Redwolf branded tees",
    longDescription:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    price: "500",
    categoryName: "T-shirt",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mens-t-shirts/nights-watch-t-shirt-india-1-438x438.png",
    stars: "4",
    inStock: false,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "King In The North",
    description: "Regular fit 100% Cotton Redwolf branded tees",
    longDescription:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    price: "700",
    categoryName: "T-shirt",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mens-t-shirts/game-of-thrones-king-in-the-north-t-shirt-1-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Arya Stark",
    description: "Redwolf branded 58mm laminated plastic badge.",
    longDescription:
      "This design come digitally printed to perfection on a premium quality 58mm badge with a matte finish.",
    price: "159",
    categoryName: "Badges",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/badges/aryaa-stark-winter-is-here-game-of-thrones-badge-india-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "House Targaryen",
    description: "Regular fit 100% Cotton Redwolf branded tees",
    longDescription:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    price: "700",
    categoryName: "T-shirt",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mens-t-shirts/Digital/house-targaryen-t-shirt-india-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Khaleesi",
    description: "Redwolf ceramic 325ml coffee mug",
    longDescription:
      "This artwork will be digitally printed on a premium sized Redwolf ceramic coffee mug. Some of its features are : It's special design , its large easy-to-grip handle, steady base, and hefty 325ml capacity, this mug allows for comfortable sipping and slosh-free use, at home or at the office. Dishwasher & microwave safe, it's easy to clean and for reheating. Holds : 325ml, Inside Mug Colour: White, Dishwasher and Microwave Safe, Easy To Clean.",
    price: "690",
    categoryName: "Mug",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mugs/game-of-thrones-khaleesi-coffee-mug-india-front-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "House Tyrell",
    description: "Redwolf branded 58mm laminated plastic badge.",
    longDescription:
      "This design come digitally printed to perfection on a premium quality 58mm badge with a matte finish.",
    price: "99",
    categoryName: "Badges",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/badges/tyrell-sigil-game-of-thrones-badge-india-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Dracarys",
    description: "Redwolf ceramic 325ml coffee mug",
    longDescription:
      "This artwork will be digitally printed on a premium sized Redwolf ceramic coffee mug. Some of its features are : It's special design , its large easy-to-grip handle, steady base, and hefty 325ml capacity, this mug allows for comfortable sipping and slosh-free use, at home or at the office. Dishwasher & microwave safe, it's easy to clean and for reheating. Holds : 325ml, Inside Mug Colour: White, Dishwasher and Microwave Safe, Easy To Clean.",
    price: "550",
    categoryName: "Mug",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mugs/game-of-thrones-dracarys-mug-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Tyrion Lannister",
    description: "Printed 3.5x3.5inch (9x9 cm) coaster.",
    longDescription:
      "All the designs comes digitally printed to perfection on a 9cm x 9 cm MDF (Medium Density Fibreboard) coaster.",
    price: "290",
    categoryName: "Coaster",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/coasters/game-of-thrones-tyrion-lannister-coaster-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "I drink and I know-things",
    description: "Regular fit 100% Cotton Redwolf branded tees",
    longDescription:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    price: "500",
    categoryName: "T-shirt",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mens-t-shirts/game-of-thrones-tyrion-i-drink-and-i-know-things-black-t-shirt-1-438x438.jpg",
    stars: "4",
    inStock: false,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "The North Remembers",
    description: "Redwolf ceramic 325ml coffee mug.",
    longDescription:
      "This artwork will be digitally printed on a premium sized Redwolf ceramic coffee mug. Some of its features are : It's special design , its large easy-to-grip handle, steady base, and hefty 325ml capacity, this mug allows for comfortable sipping and slosh-free use, at home or at the office. Dishwasher & microwave safe, it's easy to clean and for reheating. Holds : 325ml, Inside Mug Colour: White, Dishwasher and Microwave Safe, Easy To Clean.",
    price: "380",
    categoryName: "Mug",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mugs/game-of-thrones-north-remembers-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: true,
  },

  {
    _id: uuid(),
    title: "Cersei Lannister",
    description: "Redwolf branded 58mm laminated plastic badge.",
    longDescription:
      "This design come digitally printed to perfection on a premium quality 58mm badge with a matte finish.",
    price: "38",
    categoryName: "Badges",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/badges/cersei-lannister-game-of-thrones-badge-india-438x438.jpg",
    stars: "4",
    inStock: true,
    fastDelivery: false,
  },

  {
    _id: uuid(),
    title: "House Sigil Pattern",
    description: "Redwolf ceramic 325ml coffee mug",
    longDescription:
      "This artwork will be digitally printed on a premium sized Redwolf ceramic coffee mug. Some of its features are : It's special design , its large easy-to-grip handle, steady base, and hefty 325ml capacity, this mug allows for comfortable sipping and slosh-free use, at home or at the office. Dishwasher & microwave safe, it's easy to clean and for reheating. Holds : 325ml, Inside Mug Colour: White, Dishwasher and Microwave Safe, Easy To Clean.",
    price: "400",
    categoryName: "Mug",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mugs/game-of-thrones-house-sigil-pattern-coffee-mug-india-front-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "The Throne",
    description: "Redwolf ceramic 325ml coffee mug",
    longDescription:
      "This artwork will be digitally printed on a premium sized Redwolf ceramic coffee mug. Some of its features are : It's special design , its large easy-to-grip handle, steady base, and hefty 325ml capacity, this mug allows for comfortable sipping and slosh-free use, at home or at the office. Dishwasher & microwave safe, it's easy to clean and for reheating. Holds : 325ml, Inside Mug Colour: White, Dishwasher and Microwave Safe, Easy To Clean.",
    price: "300",
    categoryName: "Mug",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mugs/game-of-thrones-the-throne-mug-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Valar Morghulis",
    description: "Redwolf ceramic 325ml coffee mug",
    longDescription:
      "This artwork will be digitally printed on a premium sized Redwolf ceramic coffee mug. Some of its features are : It's special design , its large easy-to-grip handle, steady base, and hefty 325ml capacity, this mug allows for comfortable sipping and slosh-free use, at home or at the office. Dishwasher & microwave safe, it's easy to clean and for reheating. Holds : 325ml, Inside Mug Colour: White, Dishwasher and Microwave Safe, Easy To Clean.",
    price: "200",
    categoryName: "Mug",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mugs/game-of-thrones-valar-morghulis-mug-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Sigil Banner",
    description: "This is the Description",
    longDescription:
      "An original concept by Redwolf - our awesome backpacks come with swappable Skins. Choose from loads of digitally printed designs that can be attached to the same base bag and change your design daily! This 30L backpack comes with adjustable padded shoulder straps, 2 zippered compartments, a padded laptop slot and an easy to use zip to attach the design Skin. Made of extremely light, high quality water resistant fabric to ensure durability and maximum comfort.",
    price: "999",
    categoryName: "Bagpack",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/backpacks/game-of-thrones-sigil-banner-backpack-india-438x438.jpg",
    stars: "4",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Westeros",
    description: "Redwolf ceramic 325ml coffee mug",
    longDescription:
      "This artwork will be digitally printed on a premium sized Redwolf ceramic coffee mug. Some of its features are : It's special design , its large easy-to-grip handle, steady base, and hefty 325ml capacity, this mug allows for comfortable sipping and slosh-free use, at home or at the office. Dishwasher & microwave safe, it's easy to clean and for reheating. Holds : 325ml, Inside Mug Colour: White, Dishwasher and Microwave Safe, Easy To Clean.",
    price: "580",
    categoryName: "Mug",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mugs/game-of-thrones-westeros-mug-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Beyond The Wall",
    description: "Redwolf ceramic 325ml coffee mug",
    longDescription:
      "This artwork will be digitally printed on a premium sized Redwolf ceramic coffee mug. Some of its features are : It's special design , its large easy-to-grip handle, steady base, and hefty 325ml capacity, this mug allows for comfortable sipping and slosh-free use, at home or at the office. Dishwasher & microwave safe, it's easy to clean and for reheating. Holds : 325ml, Inside Mug Colour: White, Dishwasher and Microwave Safe, Easy To Clean.",
    price: "400",
    categoryName: "Mug",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mugs/game-of-thrones-beyond-the-wall-mug-india-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "A Mind Needs Books",
    description: "Redwolf ceramic 325ml coffee mug",
    longDescription:
      "This artwork will be digitally printed on a premium sized Redwolf ceramic coffee mug. Some of its features are : It's special design , its large easy-to-grip handle, steady base, and hefty 325ml capacity, this mug allows for comfortable sipping and slosh-free use, at home or at the office. Dishwasher & microwave safe, it's easy to clean and for reheating. Holds : 325ml, Inside Mug Colour: White, Dishwasher and Microwave Safe, Easy To Clean.",
    price: "500",
    categoryName: "Mug",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mugs/game-of-thrones-mind-needs-books-mug-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "The Hound",
    description: "Printed 3.5x3.5inch (9x9 cm) coaster.",
    longDescription:
      "All the designs comes digitally printed to perfection on a 9cm x 9 cm MDF (Medium Density Fibreboard) coaster.",
    price: "490",
    categoryName: "Coaster",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/coasters/game-of-thrones-the-hound-coaster-438x438.jpg",
    stars: "5",
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Night King",
    description: "Redwolf branded 58mm laminated plastic badge.",
    longDescription:
      "This design come digitally printed to perfection on a premium quality 58mm badge with a matte finish.",
    price: "88",
    categoryName: "Badges",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/badges/long-night-king-winter-is-here-game-of-thrones-badge-india-438x438.jpg",
    stars: "4",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Jon Snow",
    description: "Redwolf branded 58mm laminated plastic badge.",
    longDescription:
      "This design come digitally printed to perfection on a premium quality 58mm badge with a matte finish.",
    price: "199",
    categoryName: "Badges",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/badges/jon-snow-game-of-thrones-badge-india-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Sigil Pattern",
    description: "Redwolf ceramic 325ml coffee mug",
    longDescription:
      "This artwork will be digitally printed on a premium sized Redwolf ceramic coffee mug. Some of its features are : It's special design , its large easy-to-grip handle, steady base, and hefty 325ml capacity, this mug allows for comfortable sipping and slosh-free use, at home or at the office. Dishwasher & microwave safe, it's easy to clean and for reheating. Holds : 325ml, Inside Mug Colour: White, Dishwasher and Microwave Safe, Easy To Clean.",
    price: "450",
    categoryName: "Mug",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mugs/game-of-thrones-sigil-pattern-mug-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Drogon Fire And Blood",
    description: "Regular fit 100% Cotton Redwolf branded tees",
    longDescription:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    price: "500",
    categoryName: "T-shirt",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mens-t-shirts/Digital/drogon-fire-and-blood-t-shirt-india-438x438.png",
    stars: "5",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "The Weirwood Tree",
    description: "Regular fit 100% Cotton Redwolf branded tees",
    longDescription:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    price: "600",
    categoryName: "T-shirt",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/mens-t-shirts/weirwood-tree-t-shirt-india-438x438.jpg",
    stars: "5",
    inStock: true,
    fastDelivery: true,
  },

  {
    _id: uuid(),
    title: "Fire Blood",
    description: "Printed 3.5x3.5inch (9x9 cm) coaster.",
    longDescription:
      "All the designs comes digitally printed to perfection on a 9cm x 9 cm MDF (Medium Density Fibreboard) coaster.",
    price: "190",
    categoryName: "Coaster",
    productImg:
      "https://www.redwolf.in/image/cache/catalog/coasters/game-of-thrones-targaryen-metallic-sigil-coaster-438x438.jpg",
    stars: "5",
    inStock: false,
    fastDelivery: true,
  },
];
