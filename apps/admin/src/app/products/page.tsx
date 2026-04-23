import { Product, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Product[]> => {
  return [
    {
      id: 1,
      name: "Adidas CoreFit T-Shirt",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 39.9,
      sizes: ["s", "m", "l", "xl", "xxl"],
      colors: ["gray", "purple", "green"],
      images: {
        gray: "/products/1g.png",
        purple: "/products/1p.png",
        green: "/products/1gr.png",
      },
    },
    {
      id: 2,
      name: "Puma Ultra Warm Zip",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 59.9,
      sizes: ["s", "m", "l", "xl"],
      colors: ["gray", "green"],
      images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    },
    {
      id: 3,
      name: "Nike Air Essentials Pullover",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 69.9,
      sizes: ["s", "m", "l"],
      colors: ["green", "blue", "black"],
      images: {
        green: "/products/3gr.png",
        blue: "/products/3b.png",
        black: "/products/3bl.png",
      },
    },
    {
      id: 4,
      name: "Nike Air Essentials Pullover",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 29.9,
      sizes: ["s", "m", "l"],
      colors: ["white", "pink"],
      images: { white: "/products/4w.png", pink: "/products/4p.png" },
    },
    {
      id: 5,
      name: "Under Armour StormFleece",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 49.9,
      sizes: ["s", "m", "l"],
      colors: ["red", "orange", "black"],
      images: {
        red: "/products/5r.png",
        orange: "/products/5o.png",
        black: "/products/5bl.png",
      },
    },
    {
      id: 6,
      name: "Nike Air Max 270",
      shortDescription:
        "Full-frame mirrorless camera with versatile zoom lens.",
      description:
        "The Canon EOS R6 is a powerful full-frame mirrorless camera.",
      price: 59.9,
      sizes: ["40", "42", "43", "44"],
      colors: ["gray", "white"],
      images: { gray: "/products/6g.png", white: "/products/6w.png" },
    },
    {
      id: 7,
      name: "Nike Ultraboost Pulse",
      shortDescription: "Short description",
      description: "Long description",
      price: 69.9,
      sizes: ["40", "42", "43"],
      colors: ["gray", "pink"],
      images: { gray: "/products/7g.png", pink: "/products/7p.png" },
    },
    {
      id: 8,
      name: "Levi's Classic Denim",
      shortDescription: "Short description",
      description: "Long description",
      price: 59.9,
      sizes: ["s", "m", "l"],
      colors: ["blue", "green"],
      images: { blue: "/products/8b.png", green: "/products/8gr.png" },
    },
    {
      id: 9,
      name: "Apple Watch",
      shortDescription: "Smartwatch",
      description: "Apple Watch Series 9...",
      price: 399.99,
      colors: ["black", "silver", "gray"],
      images: {
        black: "/products/w1b.jpg",
        silver: "/products/w1.jpg",
        gray: "/products/w1g.jpg",
      },
    },
    {
      id: 10,
      name: "Canon EOS R6",
      shortDescription: "Camera",
      description: "Canon EOS R6...",
      price: 2199.99,
      colors: ["Black"],
      images: { Black: "/products/canon-camera.jpg" },
    },
    {
      id: 11,
      name: "Canon EF-S 18-55mm",
      shortDescription: "Lens",
      description: "Canon lens...",
      price: 199.99,
      colors: ["Black"],
      images: { Black: "/products/n1.jpg" },
    },
    {
      id: 12,
      name: "Canon EOS R5",
      shortDescription: "Camera",
      description: "Canon EOS R5...",
      price: 4500,
      colors: ["Black"],
      images: { Black: "/products/n3.jpg" },
    },
    {
      id: 13,
      name: "Canon EOS R6 Camera",
      shortDescription: "Camera",
      description: "Canon EOS R6...",
      price: 2000,
      colors: ["Black"],
      images: { Black: "/products/n6.jpg" },
    },
    {
      id: 14,
      name: "Apple iPhone 15 Pro",
      shortDescription: "iPhone",
      description: "iPhone 15 Pro...",
      price: 999.99,
      colors: ["BlackTitanium", "BlueTitanium", "NaturalTitanium"],
      images: {
        BlackTitanium: "/products/iphone-15.jpg",
        BlueTitanium: "/products/iPhone 15 Pro.jpg",
        NaturalTitanium: "/products/n8.jpg",
      },
    },
    {
      id: 15,
      name: "Samsung Galaxy S24 Ultra",
      shortDescription: "Phone",
      description: "Galaxy S24 Ultra...",
      price: 1299.99,
      colors: ["TitaniumBlack", "TitaniumGray"],
      images: {
        TitaniumBlack: "/products/n4.jpg",
        TitaniumGray: "/products/n5.jpg",
      },
    },
    {
      id: 16,
      name: "Apple MacBook Air (M3)",
      shortDescription: "Laptop",
      description: "MacBook Air M3...",
      price: 1099.0,
      colors: ["PinkCase", "SpaceGray"],
      images: {
        PinkCase: "/products/p1.jpg",
        SpaceGray: "/products/p4.jpg",
      },
    },
    {
      id: 17,
      name: "Microsoft Surface Pro 9",
      shortDescription: "Tablet/Laptop",
      description: "Surface Pro 9...",
      price: 999.99,
      colors: ["Sapphire", "Purple"],
      images: {
        Sapphire: "/products/p2.jpg",
        Purple: "/products/p3.jpg",
      },
    },
    {
      id: 18,
      name: "Sony WH-1000XM5",
      shortDescription: "Headphones",
      description: "Sony WH-1000XM5...",
      price: 399.99,
      colors: ["BlackGold"],
      images: { BlackGold: "/products/s1.jpg" },
    },
    {
      id: 19,
      name: "Sony MDR-XB950BT",
      shortDescription: "Headphones",
      description: "Sony bass headphones...",
      price: 199.99,
      colors: ["BlackRed"],
      images: { BlackRed: "/products/s3.jpg" },
    },
    {
      id: 20,
      name: "Sony MDR-ZX110NC",
      shortDescription: "Headphones",
      description: "Noise canceling...",
      price: 49.99,
      colors: ["Black"],
      images: { Black: "/products/s5.jpg" },
    },
    {
      id: 21,
      name: "Vintage Cottagecore Set",
      shortDescription: "Fashion set",
      description: "Elegant set...",
      price: 85.0,
      colors: ["Cream", "Camel"],
      images: {
        Cream: "/products/download (2).jpg",
        Camel: "/products/download (3).jpg",
      },
    },
    {
      id: 22,
      name: "Ruffled Ribbed Knit Set",
      shortDescription: "Fashion set",
      description: "Ribbed sweater set...",
      price: 78.0,
      colors: ["OatmealRust"],
      images: { OatmealRust: "/products/download (4).jpg" },
    },
    {
      id: 23,
      name: "Victorian Smocked Set",
      shortDescription: "Fashion set",
      description: "Vintage set...",
      price: 82.5,
      colors: ["TerracottaTan"],
      images: { TerracottaTan: "/products/download (5).jpg" },
    },
  ];
};

const PaymentsPage = async () => {
  const data = await getData();

  return (
    <div>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Products</h1>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;