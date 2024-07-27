// // EventListingCard.js
// 'use client';
// import { cn } from '@/lib/utils';
// import Image from 'next/image';
// import PropTypes from 'prop-types';

// export function EventListingCard({ sellerName, eventTitle, eventPrice, eventDate, postedDate }) {
//   return (
//     <div className="w-full group/card">
//       <div
//         className={cn(
//           'cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4',
//           'bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover'
//         )}
//       >
//         <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
//         <div className="flex flex-row items-center space-x-4 z-10">
//           <Image
//             height="100"
//             width="100"
//             alt="Avatar"
//             src="/manu.png" // You might want to replace this with dynamic seller images
//             className="h-10 w-10 rounded-full border-2 object-cover"
//           />
//           <div className="flex flex-col">
//             <p className="font-normal text-base text-gray-50 relative z-10">
//               {sellerName}
//             </p>
//             <p className="text-sm text-gray-400">
//               {eventDate}{' '}
//               <span className="text-xs opacity-75">(Posted: {postedDate})</span>
//             </p>
//           </div>
//         </div>
//         <div className="text content">
//           <div className="flex flex-row items-baseline justify-between">
//             <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
//               {eventTitle}
//             </h1>
//             <p className="text-gray-50">${eventPrice}</p>
//           </div>
//           <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
//             Event Description Lorem ipsum, dolor sit amet consectetur
//             adipisicing elit. Explicabo velit ab, autem
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Define prop types for better type safety
// EventListingCard.propTypes = {
//   sellerName: PropTypes.string.isRequired,
//   eventTitle: PropTypes.string.isRequired,
//   eventPrice: PropTypes.number.isRequired,
//   eventDate: PropTypes.string.isRequired,
//   postedDate: PropTypes.string.isRequired,
// };


// EventListingCard.js
'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import PropTypes from 'prop-types';

export function EventListingCard({ sellerName, eventTitle, eventPrice, eventDate, postedDate }) {
  return (
    <div className="w-full group/card">
      <div
        className={cn(
          'cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4',
          'bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover'
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/manu.png" // You might want to replace this with dynamic seller images
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {sellerName}
            </p>
            <p className="text-sm text-gray-400">
              {eventDate}{' '}
              <span className="text-xs opacity-75">(Posted: {postedDate})</span>
            </p>
          </div>
        </div>
        <div className="text content">
          <div className="flex flex-row items-baseline justify-between">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              {eventTitle}
            </h1>
            <p className="text-gray-50">${eventPrice}</p>
          </div>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Event Description Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Explicabo velit ab, autem
          </p>
        </div>
      </div>
    </div>
  );
}

// Define prop types for better type safety
EventListingCard.propTypes = {
  sellerName: PropTypes.string.isRequired,
  eventTitle: PropTypes.string.isRequired,
  eventPrice: PropTypes.number.isRequired,
  eventDate: PropTypes.string.isRequired,
  postedDate: PropTypes.string.isRequired,
};
