import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Can't attend an upcoming event?</h1>
      <p>Make your money back! sell your tickets here!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Buy Tickets
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Sell Tickets
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;