"use client";

import { Mail, Users, ClipboardCheck, Trash2 } from 'lucide-react';

const steps = [
  {
    title: 'Submit Your Details',
    description: null,
    icon: <Mail className="w-8 h-8 text-white" />,
  },
  {
    title: 'Connect with a Local Expert Online',
    description: 'Free Consultation',
    icon: <Users className="w-8 h-8 text-white" />,
  },
  {
    title: 'Receive 3 Personalised Travel Quotes',
    description: 'Discuss Further',
    icon: <ClipboardCheck className="w-8 h-8 text-white" />,
  },
  {
    title: 'Secure Your Booking',
    description: null,
    icon: <Trash2 className="w-8 h-8 text-white" />,
  },
];

export default function GetStarted() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-20 text-center text-foreground">
          How It Works
        </h2>
        
        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-[calc(1.75rem+1rem+2.5rem+1.5rem)] left-0 w-full h-px -translate-y-1/2">
              <svg width="100%" height="2px" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
            
            <div className="relative flex justify-between items-start text-center">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center w-1/4 px-2">
                  <div className="text-lg font-bold text-muted-foreground mb-4 h-7 flex items-center justify-center">
                    0{index + 1}
                  </div>
                  <div className="relative w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-lg mb-4 z-10">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground h-14 flex items-center justify-center">{step.title}</h3>
                  {step.description && (
                    <p className="text-muted-foreground mt-1">
                      {step.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="relative flex flex-col items-start space-y-12 pl-4">
            <div className="absolute top-10 left-14 w-px h-[calc(100%-5rem)] -ml-px">
              <svg width="2px" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="0" x2="1" y2="100%" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center w-full z-10">
                <div className="flex-shrink-0 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg z-10">
                  {step.icon}
                </div>

                <div className="flex-grow flex flex-col text-left pl-6">
                   <div className="text-lg font-bold text-muted-foreground">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mt-1">{step.title}</h3>
                  {step.description && (
                    <p className="text-muted-foreground mt-1">{step.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}