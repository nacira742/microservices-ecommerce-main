"use client";

import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  LayoutGrid,
  Hand,
  Laptop,
  Smartphone,
  Backpack,
  Watch,
  ShoppingBag,
  Wind,
  Sparkles,
} from "lucide-react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <LayoutGrid className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Watch className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Backpack className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Jackets",
    icon: <Wind className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
  {
    name: "Electronics",
    icon: <Laptop className="w-4 h-4" />,
    slug: "electronics",
  },
  {
    name: "Smartphones",
    icon: <Smartphone className="w-4 h-4" />,
    slug: "smartphones",
  },
  {
    name: "Women Clothes",
    icon: <ShoppingBag className="w-4 h-4" />,
    slug: "women-clothes",
  },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
      {categories.map((category) => (
        <div
          key={category.name}
          onClick={() => handleChange(category.slug)}
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md transition ${
            category.slug === selectedCategory ? "bg-white shadow-sm" : "text-gray-500"
          }`}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;