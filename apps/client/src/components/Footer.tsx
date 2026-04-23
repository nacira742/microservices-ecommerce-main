import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 bg-[#1F4D3A] text-gray-200 p-8 rounded-lg">
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        <div className="flex flex-col gap-4 items-center md:items-start md:w-1/4">
          <Link href="/" className="flex items-center gap-2">
            <img src={"/logon.png"} alt="IntellijCart" className="h-16 w-16 object-contain" />
            <span className="text-2xl font-bold text-white">
              Intellij<span className="text-amber-500">Cart</span>
            </span>
          </Link>
          <p className="text-sm text-gray-200">
            Your smart online store. <br />
            Best products at best prices with fast delivery.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
            <p className="text-sm text-amber-50">Links</p>
            <Link href="/">Homepage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
          </div>

          <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
            <p className="text-sm text-amber-50">Links</p>
            <Link href="/">All Products</Link>
            <Link href="/">New Arrivals</Link>
            <Link href="/">Best Sellers</Link>
            <Link href="/">Sale</Link>
          </div>

          <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
            <p className="text-sm text-amber-50">Links</p>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Affiliate Program</Link>
         </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-400 text-sm">
        © 2026 IntellijCart. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;