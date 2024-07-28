'use client';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { generateRandomId, insertNewListing } from '@/app/api/items/dummy_data';
import { useRouter } from 'next/navigation';

export function UserAuthForm({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    title: '',
    money: '',
    date: '',
    description: '',
    locationCity: '',
    locationState: '',
    locationCountry: '',
  });

  const router = useRouter();

  const createNewEvent = (randomId) => {
    const reformmatedData = {
      email: formData.email,
      name: formData.name,
      title: formData.title,
      money: formData.money,
      date: formData.date,
      description: formData.description,
      location: {
        city: formData.locationCity,
        state: formData.locationState,
        country: formData.locationCountry,
      },
    };

    insertNewListing(reformmatedData, randomId);
  };

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const randomId = generateRandomId();
    createNewEvent(randomId);

    setTimeout(() => {
      setIsLoading(false);
      router.push(`/listings/${randomId}`);
    }, 3000);
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1 mb-4">
            <p className="pt-2">Contact Information:</p>
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              name="email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={formData.email}
              onChange={handleChange}
            />

            <Label className="sr-only" htmlFor="seller-name">
              Your name
            </Label>
            <Input
              id="seller-name"
              placeholder="Your name"
              type="text"
              name="name"
              autoCapitalize="auto"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={formData.name}
              onChange={handleChange}
            />

            <p className="pt-2">Event details:</p>
            <Label className="sr-only" htmlFor="event-title">
              Event Title
            </Label>
            <Input
              id="event-title"
              placeholder="Event title"
              type="text"
              name="title"
              autoCapitalize="auto"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={formData.title}
              onChange={handleChange}
            />

            <Label className="sr-only" htmlFor="event-title">
              Event Description
            </Label>
            <Input
              id="event-description"
              placeholder="Event description"
              type="text"
              name="description"
              autoCapitalize="auto"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={formData.description}
              onChange={handleChange}
            />

            <Label className="sr-only" htmlFor="ticket-price">
              Event price
            </Label>
            <Input
              id="ticket-price"
              placeholder="Ticket price"
              type="text"
              name="ticketPrice"
              title
              autoCapitalize="auto"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={formData.ticketPrice}
              onChange={handleChange}
            />

            <Label className="sr-only" htmlFor="event-time">
              Event date
            </Label>
            <Input
              id="event-date"
              placeholder="Event date"
              type="text"
              name="date"
              autoCapitalize="auto"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={formData.date}
              onChange={handleChange}
            />

            <p className="pt-2">Location:</p>
            <Label className="sr-only" htmlFor="location-city">
              City
            </Label>
            <Input
              id="location-city"
              placeholder="City"
              type="text"
              name="locationCity"
              autoCapitalize="auto"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={formData.locationCity}
              onChange={handleChange}
            />

            <Label className="sr-only" htmlFor="location-state">
              State
            </Label>
            <Input
              id="location-state"
              placeholder="State"
              type="text"
              name="locationState"
              autoCapitalize="auto"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={formData.locationState}
              onChange={handleChange}
            />

            <Label className="sr-only" htmlFor="location-country">
              Country
            </Label>
            <Input
              id="location-country"
              placeholder="Country"
              type="text"
              name="locationCountry"
              autoCapitalize="auto"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={formData.locationCountry}
              onChange={handleChange}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Post Event Listing
          </Button>
        </div>
      </form>
    </div>
  );
}
