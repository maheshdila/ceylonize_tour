import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Ceylon Explorer',
  description: 'Explore the wonders of Sri Lanka',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
