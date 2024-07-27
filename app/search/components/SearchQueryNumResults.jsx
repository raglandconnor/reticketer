'use client';
import React, { useState } from 'react';

let displayResults = false;
const SearchQueryNumResults = () => {
  const [eventName, setEventName] = useState('');
  const [locationName, setLocationName]= useState('');
  const [date, setDate]= useState('');

  const click = () =>{
    displayResults = true;
  }
  const eventChange = event =>{
    setEventName(event.target.value)
  }
  const locationChange = event =>{
    setLocationName(event.target.value)
  }
  const dateChange = event =>{
    setDate(event.target.value)
  }

  const [searchQuery, setSearchQuery] = useState('temp search query');
  const [numResults, setNumResults] = useState(93786);
  

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 items-center">
        <input 
          onChange={eventChange} 
          value={eventName} 
          className="border-2 border-black rounded p-2"
          placeholder="Enter event name"
        />
        <input 
          onChange={locationChange} 
          value={locationName} 
          className="border-2 border-black rounded p-2"
          placeholder="Enter location"
        />
        <input 
          onChange={dateChange} 
          value={date} 
          className="border-2 border-black rounded p-2"
          placeholder="Enter date (YYYY-MM-DD)"
        />
        <button 
          onClick={click} 
          className="border-2 border-black rounded p-2"
        >
          Search
        </button>
      </div>

      {displayResults && (
        <div className="mt-4">
          <p className="font-bold text-xl">{searchQuery}</p>
          <p className="text-muted-foreground text-sm">({numResults} results)</p>
        </div>
      )}
    </div>
  );
};

export default SearchQueryNumResults;
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '32px', backgroundColor: '#f4f4f4' }}>
//       <div style={{ display: 'flex', gap: '20px' }}>
//         <Box id="city" title="City" placeholder="Enter city" type="text" />
//         <Box id="dates" title="Dates" placeholder="Select dates" type="date" />
//         <Box id="event" title="Event" placeholder="Enter event name" type="text" />
//       </div>
//     </main>
//   );
// }

// function Box({ id, title, placeholder, type }) {
//   return (
//     <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', width: '200px', textAlign: 'center' }} id={id}>
//       <h2>{title}</h2>
//       <input type={type} placeholder={placeholder} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
//     </div>
//   );
// }
