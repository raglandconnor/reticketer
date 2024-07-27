import React from 'react';

const About = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <h2>How It Works</h2>
        <div className="how-it-works-steps">
          <div className="how-it-works-step">
            <h3>Step 1: Create an Account</h3>
            <p>
              Sign up for a free account to get started. It's quick and easy!
            </p>
          </div>
          <div className="how-it-works-step">
            <h3>Step 2: List Your Tickets</h3>
            <p>
              List the tickets you want to sell. Add details like event, date,
              and price.
            </p>
          </div>
          <div className="how-it-works-step">
            <h3>Step 3: Sell and Get Paid</h3>
            <p>
              Once your tickets sell, you'll receive payment directly to your
              account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
