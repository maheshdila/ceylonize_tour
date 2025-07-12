"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="https://youdrinkwedrivebucket.s3.ap-southeast-1.amazonaws.com/firebase_version/logo_original.png" alt="Celonize Logo" width={140} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 bg-white/10 backdrop-blur-md rounded-full text-white py-2 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-300 transition-colors duration-300 text-sm lg:text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900/95 backdrop-blur-md text-white border-l-gray-800 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                  <Link href="/" onClick={() => setSheetOpen(false)}>
                     <Image src="https://youdrinkwedrivebucket.s3.ap-southeast-1.amazonaws.com/firebase_version/logo_original.png" alt="Celonize Logo" width={140} height={40} />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)} className="hover:bg-white/10">
                    <X className="h-8 w-8 text-white"/>
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex-grow flex flex-col items-center justify-center gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-2xl font-medium text-white transition-colors hover:text-gray-300"
                      onClick={() => setSheetOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
