"use client";

import { Mail, Users, ClipboardCheck, Lock, DollarSign } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Details',
    description: null,
    icon: <Mail className="w-10 h-10 text-primary-foreground" />,
  },
  {
    number: '02',
    title: 'Connect with a Local Expert Online',
    description: 'Free Consultation',
    icon: <Users className="w-10 h-10 text-primary-foreground" />,
  },
  {
    number: '03',
    title: 'Receive 3 Personalised Travel Quotes',
    description: 'Discuss Further',
    icon: <ClipboardCheck className="w-10 h-10 text-primary-foreground" />,
  },
  {
    number: '04',
    title: 'Secure Your Booking',
    description: null,
    icon: <Lock className="w-10 h-10 text-primary-foreground" />,
  },
  {
    number: '05',
    title: 'Pay on Arrival',
    description: null,
    icon: <DollarSign className="w-10 h-10 text-primary-foreground" />,
  },
];

export default function GetStarted() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-foreground">
          Let's Get Started
        </h2>
        <div className="relative">
          {/* Dotted line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -mt-16">
             <svg width="100%" height="100%" className="overflow-visible">
                <line x1="0" y1="0" x2="100%" y2="0" strokeWidth="2" stroke="hsl(var(--accent))" strokeDasharray="5, 10" strokeLinecap="round" />
            </svg>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start">
            {steps.map((step, index) => (
              <div key={index} className="relative flex md:flex-col items-center w-full md:w-1/5 px-4 mb-12 md:mb-0">
                 {/* Dotted line for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute top-0 left-16 w-px h-full -translate-x-1/2 mt-20">
                    <svg width="100%" height="100%" className="overflow-visible">
                      <line x1="0" y1="0" x2="0" y2="100%" strokeWidth="2" stroke="hsl(var(--accent))" strokeDasharray="5, 10" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
                <div className="flex-shrink-0 flex flex-col items-center text-center mr-6 md:mr-0 md:mb-4">
                  <p className="font-bold text-lg text-accent mb-2">{step.number}</p>
                  <div className="w-32 h-32 rounded-full bg-accent flex items-center justify-center shadow-lg z-10">
                    {step.icon}
                  </div>
                </div>
                <div className="text-left md:text-center mt-4 md:mt-0">
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