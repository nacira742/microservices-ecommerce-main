"use client";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import ProfileButton from "./ProfileButton";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      
      {/* LEFT */}
      <Link href="/" className="flex items-center gap-2">
        <img src="/logon.png" alt="IntellijCart" className="h-16 w-16 object-contain" />
        <span className="text-2xl font-bold text-green-800">
          Intellij<span className="text-amber-500">Cart</span>
        </span>
      </Link>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <SearchBar />

        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>

        <Bell className="w-4 h-4 text-gray-600" />

        <ShoppingCartIcon />

        {/* AUTH */}
        {!isSignedIn ? (
          <>
            <SignInButton />
          </>
        ) : (
          <ProfileButton/>
        )}
      </div>
    </nav>
  );
};

export default Navbar;