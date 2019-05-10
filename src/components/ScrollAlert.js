import React, { Component } from 'react'
import { TweenLite, TweenMax, Elastic, Linear } from "gsap";

export default class ScrollAlert extends Component {

    componentDidMount(){
        document.body.style.overflow = 'hidden';
        let scrollAlert = document.getElementById("alert");
        
        TweenMax.to(scrollAlert, 2, {scaleX: 1, x: -50, delay: 5, ease: Elastic.easeOut.config(1, 0.7)})
        TweenMax.to(scrollAlert, 2, {scale: 1.1, delay: 6.5, ease: Elastic.easeOut.config(1, 0.7)})
        TweenMax.to(scrollAlert, 2, {scale: 1, delay: 7, ease: Elastic.easeOut.config(1, 0.7)})
        TweenMax.to(scrollAlert, 3, {opacity: 0, delay: 7.2, ease: Elastic.easeOut.config(1, 0.7)})
        setTimeout(function(){ document.body.style.overflow = 'visible'; }, 5000);

    }

  render() {
    return (
      <React.Fragment>
        <div class="scroll-info" id="alert">Come back soon 😁</div>
      </React.Fragment>
    )
  }
}
