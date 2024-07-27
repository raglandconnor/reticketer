import React from 'react';
import { Button } from '@/components/ui/button';
import './HeroSection.css';
import Link from 'next/link';

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <h1>Reticketer</h1>
        <p>The Ultimate Ticket Reselling Platform</p>
        <div className="hero-btns">
          <Link href="/search" className="mr-2">
            <Button variant="outline">Buy Tickets</Button>
          </Link>
          <Link href="/sell-tickets" className="mr-2">
            <Button variant="outline">Sell Tickets</Button>
          </Link>
          <Link href="/search">
            <Button variant="outline">Learn How It Works</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
