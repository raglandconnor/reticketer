'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { dummyData } from '@/app/api/items/dummy_data';

const ListingPage = ({ params }) => {
  const listing = dummyData.find((listing) => listing.id === params.listingId);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-32">
      <div className="w-[300px] md:w-[720px] lg:w-[860px] xl:w-[920px] 2xl:w-[1200px]">
        <section className="grid md:grid-cols-3 gap-6 md:gap-0">
          <div className="relative md:col-span-2 w-full h-[300px] md:h-[500px] xl:h-[700px]">
            <Image
              src="/example-event-listing-image.jpeg"
              alt="product listing image"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div>
            <div className="mb-6">
              <h1 className="text-5xl font-semibold">{listing.title}</h1>
              <p className="text-2xl">{`${listing.location.city}, ${listing.location.state}`}</p>
              <p className="text-sm text-muted-foreground">
                {formatDate(listing.date)}
              </p>
              <p className="text-lg font-semibold">${listing.money}</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              facilis. Inventore ut, reiciendis possimus pariatur similique quae
              sapiente repudiandae rerum quisquam consectetur ipsa quia numquam
              nesciunt commodi doloremque, odio quasi?
            </p>
            <div className="mt-4">
              <Button>Purchase Ticket</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ListingPage;
