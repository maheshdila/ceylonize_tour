"use client";

import React from 'react';
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
        <h2 className="text-4xl sm:text-5xl font-bold mb-20 text-foreground">
          How It Works
        </h2>
        
        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="relative w-full px-10">
            {/* Dotted Line */}
            <div className="absolute top-1/2 left-0 w-full h-px -mt-10">
               <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                 <line x1="0" y1="50%" x2="100%" y2="50%" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeDasharray="5,5" />
               </svg>
            </div>

            <div className="relative flex justify-between items-start">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center w-1/4">
                  <div className="text-lg font-bold text-muted-foreground mb-4">
                    0{index + 1}
                  </div>
                  <div className="relative w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-lg mb-4 z-10">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  {step.description && (
                    <div className="text-muted-foreground mt-1">
                        {step.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="relative flex flex-col items-center space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center w-full max-w-xs">
                 <div className="text-lg font-bold text-muted-foreground mb-2">
                    0{index + 1}
                  </div>
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center shadow-lg mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                {step.description && (
                    <p className="text-muted-foreground">{step.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
