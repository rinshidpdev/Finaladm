// import React, { useState, useEffect, useRef } from 'react';
// import cl1 from '../../assets/client1.png';
// import cl2 from '../../assets/client2.png';
// import cl3 from '../../assets/client3.png';
// import cl4 from '../../assets/client4.png';
// import cl5 from '../../assets/client5.png';
// import cl6 from '../../assets/client6.png';
// import cl7 from '../../assets/client7.png';
// import cl8 from '../../assets/client8.png';
// import cl9 from '../../assets/client9.png';
// import cl10 from '../../assets/client10.png';
// import cl11 from '../../assets/client11.png';


// const Clients = () => {
//   const allClients = [
//     { id: 1, name: 'Berkeley', logo: cl1 },
//     { id: 2, name: 'Bin Hendi', logo: cl2 },
//     { id: 3, name: 'Al Fattan', logo: cl3 },
//     { id: 4, name: 'Al Ghurair', logo: cl4 },
   
//     { id: 6, name: 'Client 6', logo: cl5 },
//     { id: 6, name: 'Client 6', logo: cl6 },
//     { id: 6, name: 'Client 6', logo: cl7 },
//     { id: 6, name: 'Client 6', logo: cl8 },
//     { id: 6, name: 'Client 6', logo: cl9 },
//     { id: 6, name: 'Client 6', logo: cl10 },
//     { id: 6, name: 'Client 6', logo: cl11 },
//   ];

//   const [expanded, setExpanded] = useState(false);
//   const sliderRef = useRef(null);
//   const scrollIntervalRef = useRef(null);

//   const handleViewAllClients = () => {
//     setExpanded(!expanded);
//   };

//   useEffect(() => {
//     if (!expanded && sliderRef.current) {
//       let position = 0;
//       const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

//       const scroll = () => {
//         if (!sliderRef.current) return;
//         position += 1.5;
//         if (position >= maxScroll) {
//           position = 0;
//         }
//         sliderRef.current.scrollTo({
//           left: position,
//           behavior: 'smooth',
//         });
//       };

//       scrollIntervalRef.current = setInterval(scroll, 30);

//       return () => clearInterval(scrollIntervalRef.current);
//     }
//   }, [expanded]);

//   const displayedClients = expanded ? allClients : allClients.slice(0, 5);

//   return (
//     <div
//       className="clients-container"
//       style={{
       
//         padding: '40px 15px',
//         overflow: 'hidden',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}
//     >
//       {!expanded ? (
//         <div
//           ref={sliderRef}
//           className="clients-carousel"
//           style={{
//             display: 'flex',
//             gap: '16px',
//             width: '100%',
//             maxWidth: '1200px',
//             overflowX: 'hidden',
//             marginBottom: '30px',
//             padding: '5px',
//           }}
//         >
//           {[...allClients, ...allClients].map((client, index) => (
//             <div
//               key={`${client.id}-${index}`}
//               className="client-box"
//               style={{
//                 minWidth: '130px',
//                 height: '70px',
              
//                 borderRadius: '8px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 padding: '8px',
//                 flexShrink: 0,
//               }}
//             >
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
//               />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div
//           className="clients-grid"
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
//             gap: '16px',
//             width: '100%',
//             maxWidth: '1000px',
//             marginBottom: '30px',
//           }}
//         >
//           {displayedClients.map((client) => (
//             <div
//               key={client.id}
//               className="client-box"
//               style={{
//                 height: '60px',
               
//                 borderRadius: '8px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 padding: '8px',
//               }}
//             >
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       <button
//         style={{
//           display: 'none', // keep hidden unless needed
          
//           border: '1px solid #fff',
//           color: '#fff',
//           padding: '8px 20px',
//           cursor: 'pointer',
//           fontSize: '14px',
//           borderRadius: '5px',
//         }}
//         onClick={handleViewAllClients}
//       >
//         {expanded ? 'View Less' : 'View All Clients'}
//       </button>
//     </div>
//   );
// };

// export default Clients;

import React, { useEffect, useRef } from 'react';
import cl1 from '../../assets/client1.png';
import cl2 from '../../assets/client2.png';
import cl3 from '../../assets/client3.png';
import cl4 from '../../assets/client4.png';
import cl5 from '../../assets/client5.png';
import cl6 from '../../assets/client6.png';
import cl7 from '../../assets/client7.png';
import cl8 from '../../assets/client8.png';
import cl9 from '../../assets/client9.png';
import cl10 from '../../assets/client10.png';
import cl11 from '../../assets/client11.png';

const allClients = [
  { id: 1, name: 'Berkeley', logo: cl1 },
  { id: 2, name: 'Bin Hendi', logo: cl2 },
  { id: 3, name: 'Al Fattan', logo: cl3 },
  { id: 4, name: 'Al Ghurair', logo: cl4 },
  { id: 5, name: 'Client 5', logo: cl5 },
  { id: 6, name: 'Client 6', logo: cl6 },
  { id: 7, name: 'Client 7', logo: cl7 },
  { id: 8, name: 'Client 8', logo: cl8 },
  { id: 9, name: 'Client 9', logo: cl9 },
  { id: 10, name: 'Client 10', logo: cl10 },
  { id: 11, name: 'Client 11', logo: cl11 },
];

// Helper to split logos into three nearly even arrays
const splitRows = (clients) => {
  const n = clients.length;
  const perRow = Math.ceil(n / 3);
  return [
    clients.slice(0, perRow),
    clients.slice(perRow, 2 * perRow),
    clients.slice(2 * perRow),
  ];
};

const Clients = () => {
  const rows = splitRows(allClients);
  const marqueeRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const speeds = [0.7, 0.5, 0.9]; // pixels per frame for each row
    const directions = [-1, 1, -1]; // -1 = left to right, 1 = right to left

    const animFrames = [];

    marqueeRefs.forEach((ref, i) => {
      let pos = 0;
      const track = ref.current;
      if (!track) return;

      // Duplicate content for seamless scroll
      if (!track.dataset.duplicated) {
        const children = Array.from(track.children);
        children.forEach(child => {
          const clone = child.cloneNode(true);
          track.appendChild(clone);
        });
        track.dataset.duplicated = 'true';
      }

      const step = () => {
        const lengthToScroll = track.scrollWidth / 2; // half width equals one set of logos
        pos += directions[i] * speeds[i];
        if (directions[i] === -1 && pos <= -lengthToScroll) pos = 0;
        if (directions[i] === 1 && pos >= 0) pos = -lengthToScroll;

        track.style.transform = `translateX(${pos}px)`;
        animFrames[i] = requestAnimationFrame(step);
      };

      animFrames[i] = requestAnimationFrame(step);
    });

    return () => {
      animFrames.forEach(id => cancelAnimationFrame(id));
    };

  }, [marqueeRefs, rows]);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 1200,
        margin: '50px auto',
        padding: '0 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        alignItems: 'center',
        
      }}
    >
      {rows.map((clients, rowIdx) => (
        <div
          key={rowIdx}
          style={{
            width: '100%',
            overflow: 'hidden',
            minHeight: 86,
          }}
        >
          <div
            ref={marqueeRefs[rowIdx]}
            style={{
              display: 'flex',
              gap: 16,
              willChange: 'transform',
            }}
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={client.id + '-' + i}
                style={{
                  minWidth: 130,
                  height: 70,
                  borderRadius: 8,
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 8,
                  flexShrink: 0,
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', userSelect: 'none' }}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clients;
