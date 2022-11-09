
// import React, { useState } from 'react';

// import carousel1 from '../../Assets/carousel1.svg';
// import carousel2 from '../../Assets/carousel2.svg';
// import carousel3 from '../../Assets/carousel3.svg';

// export default function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={carousel2}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>3-Bedroom Flat</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={carousel3}
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>2-Bedroom Flat</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={carousel1}
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Duplex</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }