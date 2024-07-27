import React from 'react';
import SearchQueryNumResults from './components/SearchQueryNumResults';
import { EventListingCard } from './components/EventListingCard';

const Search = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-32">
      <main className="md:w-[720px] lg:w-[860px] xl:w-[920px] 2xl:w-[1200px]">
        <section className="w-full border-b-2 pb-8">
          <SearchQueryNumResults />
        </section>
        <section>
          <div className="p-6 grid md:grid-cols-2 2xl:grid-cols-3 gap-3">
            {/* <div className="h-96 bg-green-500">test</div>
            <div className="h-96 bg-green-500">test</div>
            <div className="h-96 bg-green-500">test</div>
            <div className="h-96 bg-green-500">test</div>
            <div className="h-96 bg-green-500">test</div>
            <div className="h-96 bg-green-500">test</div> */}
            <EventListingCard />
            <EventListingCard />
            <EventListingCard />
            <EventListingCard />
            <EventListingCard />
            <EventListingCard />
            <EventListingCard />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Search;
