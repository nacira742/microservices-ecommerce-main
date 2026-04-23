"use client";

import useCartStore from "@/stores/cartStore";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { ProductType } from "@/types";
import { useState } from "react";
import { toast } from "react-toastify";

// Map color names to actual color codes
const colorMap: Record<string, string> = {
  gray: "#808080",
  purple: "#800080",
  green: "#008000",
  blue: "#0000FF",
  black: "#000000",
  white: "#FFFFFF",
  pink: "#FFC0CB",
  red: "#FF0000",
  orange: "#FFA500",

  default: "#CCCCCC",
  Black: "#000000",
  Silver: "#C0C0C0",
  Gold: "#FFD700",
  BlackTitanium: "#2F2F2F",
  BlueTitanium: "#4A7DB5",
  NaturalTitanium: "#8A8A8A",
  TitaniumBlack: "#1F1F1F",
  TitaniumGray: "#6B6B6B",
  PinkCase: "#FFB6C1",
  SpaceGray: "#5A5A5A",
  Sapphire: "#0F52BA",
  Purple: "#800080",
  BlackGold: "#000000",
  BlackRed: "#000000",
  Cream: "#FFFDD0",
  Camel: "#C19A6B",
  OatmealRust: "#E1B382",
  TerracottaTan: "#E2725B",
};

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes?.[0] || "",
    color: product.colors?.[0] || "",
  });

  const { addToCart } = useCartStore();

  const hasColors = product.colors && product.colors.length > 0;
  const hasSizes = product.sizes && product.sizes.length > 0;

  const getImageSrc = (): string => {
  const images = product.images as Record<string, string>;

  const key = productTypes.color as keyof typeof images;

  if (hasColors && key && images[key]) {
  return images[key];
  }

  if (hasColors && product.colors?.[0]) {
  const colorKey = product.colors[0] as keyof typeof images;

  if (images[colorKey]) {
    return images[colorKey];
  }
}

  return Object.values(images)[0] ?? "";
};

  const imageSrc = getImageSrc();

  const handleProductType = ({
    type,
    value,
  }: {
    type: string;
    value: string;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const getColorCode = (colorName: string) => {
    return colorMap[colorName] || colorName;
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: productTypes.size,
      selectedColor: productTypes.color,
    });

    // 🔥 هذا هو التعديل المهم
    toast.success("Product added to cart");
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-[280px] mx-auto group">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
      </Link>

      <div className="p-3">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
          {product.shortDescription}
        </p>

        {(hasSizes || hasColors) && (
          <div className="flex items-center gap-4 text-xs mt-2">
            {hasSizes && (
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-[10px]">Size</span>
                <select
                  className="ring ring-gray-300 rounded-md px-2 py-1 text-xs"
                  value={productTypes.size}
                  onChange={(e) =>
                    handleProductType({
                      type: "size",
                      value: e.target.value,
                    })
                  }
                >
                  {product.sizes?.map((size) => (
                    <option key={size} value={size}>
                      {size.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {hasColors && (
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-[10px]">Color</span>
                <div className="flex items-center gap-2">
                  {product.colors?.map((color) => (
                    <div
                      key={color}
                      onClick={() =>
                        handleProductType({ type: "color", value: color })
                      }
                      className={`cursor-pointer border ${
                        productTypes.color === color
                          ? "border-gray-400"
                          : "border-gray-200"
                      } rounded-full p-[1.2px]`}
                    >
                      <div
                        className="w-[14px] h-[14px] rounded-full"
                        style={{ backgroundColor: getColorCode(color) }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={handleAddToCart}
            className="ring-1 ring-gray-200 shadow-lg rounded-md px-3 py-1.5 text-xs flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;