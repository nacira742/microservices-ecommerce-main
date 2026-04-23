import ProductInteraction from "@/components/ProductInteraction";
import { ProductsType } from "@/types";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// IntellijCart - Products
const products: ProductsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit amet consect adipisicing elit.",
    price: 59.9,
    sizes: ["xs", "s", "m", "l", "xl"],
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
    shortDescription: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet consect adipisicing elit.",
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
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
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
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
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
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["40", "42", "43", "44"],
    colors: ["gray", "white"],
    images: { gray: "/products/6g.png", white: "/products/6w.png" },
  },
  {
    id: 7,
    name: "Nike Ultraboost Pulse",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: { gray: "/products/7g.png", pink: "/products/7p.png" },
  },
  {
    id: 8,
    name: "Levi's Classic Denim",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8b.png", green: "/products/8gr.png" },
  },
  {
    id: 9,
    name: "Apple Watch",
    shortDescription:
      "Advanced smartwatch to track your health and daily activities.",
    description:
      "The Apple Watch Series 9 combines sleek design with cutting-edge technology. It allows you to monitor your heart rate, track workouts, receive notifications, and make calls directly from your wrist. Featuring a bright Retina display, water resistance, and all-day battery life, it's the perfect companion for a healthy and connected lifestyle.",
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
    shortDescription:
      "Full-frame mirrorless camera with versatile zoom lens.",
    description:
      "The Canon EOS R6 is a powerful full-frame mirrorless camera featuring advanced autofocus, in-body image stabilization, and exceptional low-light performance. This kit includes a versatile F3.5-5.6 zoom lens, making it suitable for a wide range of photography styles from portraits to landscapes. It supports 4K video recording, dual card slots, and seamless wireless connectivity for both enthusiasts and professionals.",
    price: 2199.99,
    colors: ["Black"],
    images: { Black: "/products/canon-camera.jpg" },
  },
  {
    id: 11,
    name: "Canon EF-S 18-55mm f/3.5-5.6 IS II Lens",
    shortDescription:
      "Standard zoom lens for Canon APS-C DSLRs with image stabilization.",
    description:
      "The Canon EF-S 18-55mm f/3.5-5.6 IS II is a versatile standard zoom lens designed for Canon APS-C format DSLR cameras. Covering wide-angle to short telephoto focal lengths, it is ideal for everyday photography including portraits, landscapes, and street scenes. The built-in Image Stabilizer (IS) allows for up to four stops of shake correction, enabling sharper handheld shots in low-light conditions. Featuring a compact and lightweight design, this lens delivers reliable autofocus performance and is an excellent choice for beginners and enthusiasts alike.",
    price: 199.99,
    colors: ["Black"],
    images: { Black: "/products/n1.jpg" },
  },
  {
    id: 12,
    name: "Canon EOS R5 Camera with RF 85mm Lens",
    shortDescription: "High-end mirrorless camera with a premium portrait lens",
    description:
      "The Canon EOS R5 is a top-tier mirrorless camera featuring a 45MP sensor, 8K video recording, and advanced autofocus system. Paired with the RF 85mm f/1.2 lens, it is ideal for professional portrait photography with stunning background blur and sharp image quality.",
    price: 4500,
    colors: ["Black"],
    images: { Black: "/products/n3.jpg" },
  },
  {
    id: 13,
    name: "Canon EOS R6 Camera with RF Lens",
    shortDescription:
      "Professional mirrorless camera with fast autofocus and excellent low-light performance",
    description:
      "The Canon EOS R6 is a powerful mirrorless camera designed for both photography and video. It features a 20MP full-frame sensor, exceptional low-light performance, and high-speed continuous shooting up to 20 fps. With advanced autofocus and in-body image stabilization, it is perfect for sports, wildlife, and event photography.",
    price: 2000,
    colors: ["Black"],
    images: { Black: "/products/n6.jpg" },
  },
  {
    id: 14,
    name: "Apple iPhone 15 Pro",
    shortDescription:
      "Premium smartphone with advanced camera system and powerful performance",
    description:
      "The iPhone 15 Pro features a sleek titanium design, a powerful A17 Pro chip, and a professional triple-camera system. It offers excellent performance, high-quality photography, and smooth user experience, making it ideal for both everyday use and content creation.",
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
    shortDescription:
      "Ultimate flagship with integrated S Pen and AI-powered pro-grade camera",
    description:
      "The Galaxy S24 Ultra features a durable titanium frame, an expansive 6.8-inch Dynamic AMOLED 2X display, and the Snapdragon 8 Gen 3 for Galaxy.",
    price: 1299.99,
    colors: ["TitaniumBlack", "TitaniumGray"],
    images: {
      TitaniumBlack: "/products/n4.jpg",
      TitaniumGray: "/products/n5.jpg",
    },
  },
  {
    id: 16,
    name: "Apple MacBook Air (M3 Chip)",
    shortDescription:
      "Strikingly thin and fast laptop for work, play, and everything in between",
    description:
      "The MacBook Air with the M3 chip takes the world's most popular laptop to new heights.",
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
    shortDescription:
      "The most powerful Surface Pro combines laptop performance with tablet flexibility",
    description:
      "The Surface Pro 9 gives you the tablet flexibility you want and the laptop performance and battery life you need.",
    price: 999.99,
    colors: ["Sapphire", "Purple"],
    images: {
      Sapphire: "/products/p2.jpg",
      Purple: "/products/p3.jpg",
    },
  },
  {
    id: 18,
    name: "Sony WH-1000XM5 Wireless Headphones",
    shortDescription:
      "Industry-leading noise canceling with exceptional sound quality and comfort",
    description:
      "The Sony WH-1000XM5 headphones redefine distraction-free listening.",
    price: 399.99,
    colors: ["BlackGold"],
    images: { BlackGold: "/products/s1.jpg" },
  },
  {
    id: 19,
    name: "Sony MDR-XB950BT Extra Bass",
    shortDescription:
      "Wireless headphones with deep, powerful bass and high-quality Bluetooth streaming",
    description:
      "The Sony MDR-XB950BT headphones are engineered for bass lovers.",
    price: 199.99,
    colors: ["BlackRed"],
    images: { BlackRed: "/products/s3.jpg" },
  },
  {
    id: 20,
    name: "Sony MDR-ZX110NC Noise Canceling Headphones",
    shortDescription:
      "Affordable over-ear headphones with active noise cancellation and fold-flat design",
    description:
      "The MDR-ZX110NC headphones feature a 12–22,000Hz frequency response.",
    price: 49.99,
    colors: ["Black"],
    images: { Black: "/products/s5.jpg" },
  },
  {
    id: 21,
    name: "Vintage Cottagecore Embroidery Set",
    shortDescription:
      "Elegant cable-knit sweater and high-waisted A-line maxi skirt ensemble",
    description:
      "This charming two-piece set features a cozy cable-knit sweater adorned with delicate floral embroidery.",
    price: 85.0,
    colors: ["cream", "camel"],
    images: {
      cream: "/products/download (2).jpg",
      camel: "/products/download (3).jpg",
    },
  },
  {
    id: 22,
    name: "Ruffled Ribbed Knit & A-Line Skirt Set",
    shortDescription:
      "Sophisticated ribbed sweater with shoulder ruffles and rust-toned maxi skirt",
    description:
      "This set features a slim-fit, ribbed knit turtleneck sweater with feminine ruffle details.",
    price: 78.0,
    colors: ["OatmealRust"],
    images: { "OatmealRust": "/products/download (4).jpg" },
  },
  {
    id: 23,
    name: "Victorian Smocked Blouse & Button-Front Skirt",
    shortDescription:
      "Romantic smocked bodice blouse and button-down linen-blend maxi skirt",
    description:
      "A vintage-inspired ensemble featuring a long-sleeve blouse with intricate smocking at the chest.",
    price: 82.5,
    colors: ["TerracottaTan"],
    images: { "TerracottaTan": "/products/download (5).jpg" },
  },
];

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return {
      title: "Product Not Found",
      description: "This product does not exist",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

const ProductPage = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { color?: string; size?: string };
}) => {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return notFound();

  const selectedColor = (searchParams.color || product.colors[0]) as keyof typeof product.images;
  const selectedSize = searchParams.size || product.sizes?.[0] || "";

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images?.[selectedColor] ||""}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>

      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>

        <h2 className="text-2xl font-semibold">
          ${product.price.toFixed(2)}
        </h2>

        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

export default ProductPage;