import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const locations = [
  {
    name: "Mirissa",
    image: "https://placehold.co/600x400.png",
    hint: "mirissa beach",
  },
  {
    name: "Sigiriya",
    image: "https://placehold.co/600x400.png",
    hint: "sigiriya rock",
  },
  {
    name: "Colombo",
    image: "https://placehold.co/600x400.png",
    hint: "colombo city",
  },
  {
    name: "Batticaloa",
    image: "https://placehold.co/600x400.png",
    hint: "batticaloa lagoon",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background overflow-x-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        data-ai-hint="sri lanka tropical beach"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-10 bg-black/60" />
      
      <div className="relative z-20 flex flex-col min-h-screen text-primary-foreground">
        <Header />
        
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 -mt-16">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter" style={{ color: 'hsl(var(--accent))' }}>
            WELCOME TO SRI LANKA
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
            Discover ancient ruins, lush jungles, and pristine beaches. A journey of a lifetime awaits in the pearl of the Indian Ocean.
          </p>
          <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6 group">
            Explore <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </main>

        <section className="relative z-20 w-full py-12 md:py-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {locations.map((location) => (
                <CarouselItem key={location.name} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Link href={`/location/${location.name.toLowerCase()}`}>
                      <Card className="overflow-hidden group border-none rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <CardContent className="relative p-0 flex aspect-video items-center justify-center">
                          <Image
                            src={location.image}
                            alt={location.name}
                            width={600}
                            height={400}
                            data-ai-hint={location.hint}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <div className="absolute inset-0 flex items-end justify-between p-6">
                            <h3 className="font-headline text-3xl font-bold text-white">
                              {location.name}
                            </h3>
                            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full transform transition-transform duration-300 group-hover:translate-x-1">
                               <ArrowRight className="h-6 w-6 text-white" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16 text-primary-foreground bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30" />
            <CarouselNext className="mr-16 text-primary-foreground bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30" />
          </Carousel>
        </section>
      </div>
    </div>
  );
}
