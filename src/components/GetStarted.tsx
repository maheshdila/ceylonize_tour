"use client";

import React from 'react';
import { Mail, Users, ClipboardCheck, Lock, DollarSign } from 'lucide-react';

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
  {
    title: 'Pay on Arrival',
    description: null,
    icon: <DollarSign className="w-10 h-10 text-primary-foreground" />,
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
          <div className="hidden md:block absolute top-12 left-0 w-full h-px -translate-y-1/2">
             <svg width="100%" height="2" className="overflow-visible">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto" fill="hsl(var(--accent))">
                        <polygon points="0 0, 10 3.5, 0 7" />
                    </marker>
                </defs>
                <line x1="0" y1="1" x2="100%" y2="1" strokeWidth="2" stroke="hsl(var(--accent))" strokeDasharray="5, 10" strokeLinecap="round" markerEnd="url(#arrowhead)" markerStart="url(#arrowhead)"/>
            </svg>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="relative flex items-center w-full md:flex-col md:w-auto md:max-w-[180px] lg:max-w-[200px] mb-12 md:mb-0">
                   {/* Dotted line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute top-12 left-12 w-px h-full -translate-x-1/2 mt-12">
                      <svg width="2" height="100%" className="overflow-visible">
                         <defs>
                           <marker id="arrowhead-mobile" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto-start-reverse" fill="hsl(var(--accent))">
                              <polygon points="0 0, 10 3.5, 0 7" />
                           </marker>
                         </defs>
                        <line x1="1" y1="0" x2="1" y2="100%" strokeWidth="2" stroke="hsl(var(--accent))" strokeDasharray="5, 10" strokeLinecap="round"  markerEnd="url(#arrowhead-mobile)" />
                      </svg>
                    </div>
                  )}
                  
                  <div className="flex-shrink-0 flex flex-col items-center text-center z-10 bg-background">
                    <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center shadow-lg">
                      {step.icon}
                    </div>
                  </div>

                  <div className="flex-grow text-left md:text-center pl-6 md:pl-0 md:pt-4">
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      {step.description && (
                          <p className="text-muted-foreground">{step.description}</p>
                      )}
                  </div>
                </div>

                {index < steps.length - 1 && (
                    <div className="hidden md:flex flex-grow items-center justify-center min-w-[50px] lg:min-w-[100px] z-10 h-px bg-transparent">
                    </div>
                 )}

              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}