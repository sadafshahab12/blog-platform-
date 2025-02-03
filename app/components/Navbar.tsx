"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const { isSignedIn, isLoaded } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto ">
        <div className="relative flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex-1 flex items-center ">
            <Link href="/" className="text-2xl font-bold text-white">
              <Image
                src="/logo.png"
                alt="logo"
                width={500}
                height={500}
                className="w-16 h-12 object-cover"
              />
            </Link>
          </div>

          <div
            className={`sm:static absolute top-[64px] ${
              isMobileMenuOpen ? "left-0" : "-left-full"
            } sm:w-auto w-full bg-black z-10  flex sm:flex-row flex-col gap-4 sm:p-0 p-5  transition-all duration-300 ease-in sm:h-auto h-screen`}
          >
            <Link
              href={"/"}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>

            <Link
              href="/blog"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Blogs
            </Link>

            <Link
              href="/contact"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>

            {isLoaded &&
              (isSignedIn ? (
                <UserButton />
              ) : (
                <Link href="/sign-in"   className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium border">
              
                    Sign in
              
                </Link>
              ))}
          </div>

          <div className="sm:hidden block cursor-pointer" onClick={toggleMenu}>
            <HiMenuAlt3 className="w-5 h-5" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
