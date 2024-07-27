import React from 'react';
import { Button } from '@/components/ui/button';
import './HeroSection.css';
import Link from 'next/link';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Reticketer</h1>
      <p>The Ultimate Ticket Reselling Platform</p>
      <div className="mt-8 scale-125">
        <div>
          <Link href="/search" className="mr-2">
            <Button variant="outline">Search for Tickets</Button>
          </Link>
          <Link href="/sell-tickets">
            <Button variant="outline">Sell Tickets</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
