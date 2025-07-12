"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

const locations = [
  {
    name: "MIRISSA",
    image: "https://placehold.co/144x224.png",
    hint: "mirissa beach",
    href: "/location/mirissa",
  },
  {
    name: "SIGIRIYA",
    image: "https://placehold.co/144x224.png",
    hint: "sigiriya rock",
    href: "/location/sigiriya",
  },
  {
    name: "COLOMBO",
    image: "https://placehold.co/144x224.png",
    hint: "colombo city",
    href: "/location/colombo",
  },
  {
    name: "BATTICALOA",
    image: "https://placehold.co/144x224.png",
    hint: "batticaloa lagoon",
    href: "/location/batticaloa",
  },
];

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);


  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-gray-900">
      <Image
        src="https://placehold.co/1920x1080.png"
        data-ai-hint="sri lanka train tea plantation"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 h-full flex flex-col p-6 sm:p-8 lg:p-12">
        <Header />

        <main className="flex-grow flex flex-col justify-end">
          <div className="container mx-auto w-full flex flex-col md:flex-row items-end justify-between gap-8 pb-8">
            <div className="text-white max-w-xl">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight">
                Welcome <br /> to Sri Lanka
              </h1>
              <p className="mt-4 text-gray-200 max-w-lg text-sm sm:text-base leading-relaxed">
                Discover ancient ruins, lush jungles, and pristine beaches. A journey of a lifetime awaits in the pearl of the Indian Ocean.
              </p>
              <Button size="lg" className="mt-8 bg-white/90 hover:bg-white text-black font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 h-auto">
                Explore
              </Button>
            </div>

            <div className="flex-shrink-0 w-full max-w-md">
               <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
                <CarouselContent className="-ml-4">
                  {locations.map((location, index) => (
                    <CarouselItem key={location.name} className="pl-4 basis-1/3">
                      <div className="p-1">
                        <Link href={location.href}>
                          <Card className={`overflow-hidden transition-all duration-300 border-none bg-transparent shadow-none ${current === index ? 'scale-125' : 'opacity-70 scale-100'}`}>
                            <CardContent className="relative flex aspect-[2/3] items-center justify-center p-0">
                               <Image
                                src={location.image}
                                alt={`${location.name}`}
                                data-ai-hint={location.hint}
                                layout="fill"
                                objectFit="cover"
                                className="z-0 rounded-xl"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 rounded-xl"></div>
                              <div className="relative z-20 h-full flex flex-col justify-end p-4">
                                <h3 className="text-white font-bold text-lg">{location.name}</h3>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-end items-center mt-4 space-x-3">
                    <CarouselPrevious className="static translate-y-0 rounded-full border-white/50 text-white hover:bg-white/20 hover:text-white" />
                    <CarouselNext className="static translate-y-0 rounded-full border-white/50 text-white hover:bg-white/20 hover:text-white" />
                </div>
              </Carousel>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
