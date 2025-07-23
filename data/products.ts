export type Product = {
  id: number;
  image: string;
  title: string;
  alt: string;
  price: number;
};

const product: Product[] = [
  {
    id: 1,
    image: "/images/aloe-vera.jpg",
    title: "Aloe Vera",
    alt: "Aloe Vera",
    price: 4.99,
  },
  {
    id: 2,
    image: "/images/bonsai.jpg",
    title: "Bonsai",
    alt: "Bonsai",
    price: 9.99,
  },
  {
    id: 3,
    image: "/images/cactus.jpg",
    title: "Cactus",
    alt: "Cactus",
    price: 2.99,
  },
  {
    id: 4,
    image: "/images/calatheas.jpg",
    title: "Calatheas",
    alt: "Calatheas",
    price: 7.99,
  },
  {
    id: 5,
    image: "/images/fern.jpg",
    title: "Fern",
    alt: "Fern",
    price: 9.99,
  },
  {
    id: 6,
    image: "/images/jade.jpg",
    title: "Jade",
    alt: "Jade",
    price: 13.99,
  },
  {
    id: 7,
    image: "/images/money-plant.jpg",
    title: "Money Plant",
    alt: "Money Plant",
    price: 7.99,
  },
  {
    id: 8,
    image: "/images/monstera.jpg",
    title: "Monstera",
    alt: "Monstera",
    price: 15.99,
  },
  {
    id: 9,
    image: "/images/rubber-plant.jpg",
    title: "Rubber Plant",
    alt: "Rubber Plant",
    price: 4.99,
  },
  {
    id: 10,
    image: "/images/snake-plant.jpg",
    title: "Snake Plant",
    alt: "Snake Plant",
    price: 7.99,
  },
  {
    id: 11,
    image: "/images/spider-plant.jpg",
    title: "Spider Plant",
    alt: "Spider Plat",
    price: 6.99,
  },
  {
    id: 12,
    image: "/images/zzplant.jpg",
    title: "ZZ Plant",
    alt: "ZZ Plant",
    price: 9.99,
  },
];

export default product;
