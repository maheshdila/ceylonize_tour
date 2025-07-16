"use client";

import React from 'react';
import { Mail, Users, ClipboardCheck, Lock } from 'lucide-react';

const steps = [
  {
    title: 'Submit Your Details',
    description: null,
    icon: <Mail className="w-10 h-10 text-primary-foreground" />,
  },
  {
    title: 'Connect with a Local Expert Online',
    description: 'Free Consultation',
    icon: <Users className="w-10 h-10 text-primary-foreground" />,
  },
  {
    title: 'Receive 3 Personalised Travel Quotes',
    description: 'Discuss Further',
    icon: <ClipboardCheck className="w-10 h-10 text-primary-foreground" />,
  },
  {
    title: 'Secure Your Booking',
    description: null,
    icon: <Lock className="w-10 h-10 text-primary-foreground" />,
  },
];

export default function GetStarted() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20 text-foreground">
          Let's Get Started
        </h2>
        <div className="relative">
          {/* Dotted line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full border-t-2 border-dashed border-accent -translate-y-1/2"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-16 md:space-y-0 md:space-x-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center w-full md:w-1/4 relative">
                {/* Dotted line for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute top-0 left-1/2 w-px h-full border-l-2 border-dashed border-accent -translate-x-1/2 mt-24"></div>
                )}
                
                <div className="flex flex-col items-center z-10 bg-background">
                  <div className="text-lg font-bold text-muted-foreground mb-2">
                    0{index + 1}
                  </div>
                  <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center shadow-lg mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  {step.description && (
                      <p className="text-muted-foreground">{step.description}</p>
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
