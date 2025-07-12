import Image from "next/image";
import Link from "next/link";
import { suggestImage } from "@/ai/flows/suggest-image";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type LocationPageProps = {
  params: {
    name: string;
  };
};

export default async function LocationPage({ params }: LocationPageProps) {
  const locationName = params.name.charAt(0).toUpperCase() + params.name.slice(1);
  let imageUrl = `https://placehold.co/1200x800.png`; // Default placeholder
  let errorMessage: string | null = null;

  try {
    const suggestion = await suggestImage({ location: locationName });
    if (suggestion.imageUrl) {
      // Basic validation for image URL format
      const urlPattern = /^(https|http):\/\/[^\s$.?#].[^\s]*$/;
      if (urlPattern.test(suggestion.imageUrl)) {
        imageUrl = suggestion.imageUrl;
      } else {
         console.warn("AI returned an invalid image URL, using placeholder.");
      }
    }
  } catch (error) {
    console.error("Failed to suggest image:", error);
    errorMessage = "Could not load a suggested image at this time. Please enjoy this placeholder.";
  }
  

  return (
    <div className="relative min-h-screen w-full bg-background overflow-x-hidden">
      <div className="absolute inset-0 z-0 bg-black/60" />
      
      <div className="relative z-20 flex flex-col min-h-screen text-primary-foreground">
        <div className="p-6 sm:p-8 lg:p-12">
            <Header />
        </div>
        
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          <Card className="w-full max-w-5xl bg-card/10 backdrop-blur-md border-border/20 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-4 md:p-6">
                <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`A beautiful view of ${locationName}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                    data-ai-hint={`${params.name} landscape`}
                    unoptimized={true} // Necessary for external, non-whitelisted image URLs from AI
                  />
                </div>
                {errorMessage && (
                  <p className="text-center text-destructive-foreground bg-destructive/50 p-2 rounded-md my-4">{errorMessage}</p>
                )}
                <div className="mt-6 text-center">
                    <h1 className="font-bold text-5xl md:text-7xl text-primary-foreground">
                        {locationName}
                    </h1>
                    <p className="mt-2 text-lg text-primary-foreground/80">
                        Experience the unique charm and beauty of {locationName}.
                    </p>
                </div>
                <div className="mt-8 flex justify-center">
                    <Button asChild variant="outline" className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                        <Link href="/">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
