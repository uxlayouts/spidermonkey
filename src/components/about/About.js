import React, {Component} from 'react'
//import {TweenMax, Power3} from 'gsap'
import Banner from '../banner/Banner'
import stream from './stream.jpg'

export default class About extends Component{
  componentDidMount() {

    //TweenMax.fromTo("#header ul li", .5, {opacity:0, x:0, y:-10}, {opacity:1, x:0, y:0, ease:Power3.easeOut, delay: 0.2} );
    //TweenMax.fromTo("#header ul li", .5, {opacity:0, x:0, y:-10}, {opacity:1, x:0, y:0, ease:Power3.easeOut, delay: 0.2} );
  }
  render() {
    return (
        <div>

          <Banner title="It's not just your name" description="When I traveled I learned the fear before a crime and the thrill of success." url={stream} alt="The Custom Alt" />

          <div className="container-fluid padding-top-4 padding-bottom-4">

            <h2><strong>About</strong></h2>

            <br />

            <p>It's not just your name, sir. It's your father's name. And it's all that's left of him. Don't destroy it.</p>
            <p>The first time I stole so that I wouldn't starve, yes. I lost many assumptions about the simple nature of right and wrong. And when I traveled I learned the fear before a crime and the thrill of success. But I never became one of them.</p>
            <p>Your anger gives you great power. But if you Iet it, it will destroy you as it almost did me.</p>
            <p>Never underestimate Gotham City. People get mugged coming home from work every day of the week. Sometimes things just go bad.</p>
            <p>Death does not wait for you to be ready! Death is not considerate of fair! And make no mistake, here you face death. Tiger. Jujitsu. Panther. You're skilled. But this is not a dance. And you are afraid. But not of me. Tell us Mr. Wayne, what do you fear?</p>
            <p>When a forest grows too wild, a purging fire is inevitable and natural. Tomorrow the world will watch in horror as its greatest city destroys itself. The movement back to harmony will be unstoppable this time.</p>

        </div>
      </div>
    )
  }
}
