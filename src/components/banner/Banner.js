

import React from 'react'
import './Banner.css';

export default function Banner({ title, description, url, alt }) {
  return (
    <div className="banner">
      <div className="text">
        <h2><strong>{title}</strong></h2>
        <p>{description}</p>
      </div>
      <img className="img-responsive" src={url} alt={alt} />
      <div className="underlay"></div>
    </div>
  );
};



//
// import React, {Component} from 'react';
// import './Banner.css';
// import {TweenMax, Power3} from 'gsap';
//
// export default class Banner extends Component({ title, description, url, alt }) {
//
//   componentDidMount() {
//     TweenMax.fromTo(".banner", .5, {opacity:0, x:0, y:-10}, {opacity:1, x:0, y:0, ease:Power3.easeOut, delay: 0.2} );
//   }
//
//   render() {
//     return (
//       <div className="banner">
//         <div className="text">
//           <h2><strong>{title}</strong></h2>
//           <p>{description}</p>
//         </div>
//         <img className="img-responsive" src={url} alt={alt} />
//         <div className="underlay"></div>
//       </div>
//     )
//   }
// }
