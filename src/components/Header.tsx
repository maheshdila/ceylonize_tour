"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/location/mirissa", label: "Mirissa" },
  { href: "/location/sigiriya", label: "Sigiriya" },
  { href: "/location/colombo", label: "Colombo" },
  { href: "/location/batticaloa", label: "Batticaloa" },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="w-full p-4 sm:p-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-headline text-primary-foreground">
          Celonize
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground/50" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-9 h-9 w-40 lg:w-64 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-white/20 focus:ring-accent"
            />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary-foreground" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-sm text-foreground border-border/50">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-border/50">
                         <Link href="/" className="text-2xl font-bold font-headline text-primary">
                            Celonize
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                            <X className="h-6 w-6 text-foreground"/>
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </div>
                    <nav className="flex-grow flex flex-col items-center justify-center gap-6">
                        {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-2xl font-medium text-foreground transition-colors hover:text-primary"
                            onClick={() => setSheetOpen(false)}
                        >
                            {link.label}
                        </Link>
                        ))}
                    </nav>
                    <div className="p-4 mt-auto">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                            type="search"
                            placeholder="Search..."
                            className="pl-9 h-10 w-full bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                            />
                        </div>
                    </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
