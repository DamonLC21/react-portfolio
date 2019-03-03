import React, { Component } from 'react'
import { TweenLite, TweenMax, Elastic, Linear } from "gsap";

export default class ScrollAlert extends Component {

    componentDidMount(){
        document.body.style.overflow = 'hidden';
        let scrollAlert = document.getElementById("alert");
        
        TweenMax.to(scrollAlert, 2, {scaleX: 1, x: -50, delay: 4, ease: Elastic.easeOut.config(1, 0.7)})
        TweenMax.to(scrollAlert, 2, {scale: 1.1, delay: 5.5, ease: Elastic.easeOut.config(1, 0.7)})
        TweenMax.to(scrollAlert, 2, {scale: 1, delay: 6, ease: Elastic.easeOut.config(1, 0.7)})
        TweenMax.to(scrollAlert, 3, {opacity: 0, delay: 6.2, ease: Elastic.easeOut.config(1, 0.7)})
        setTimeout(function(){ document.body.style.overflow = 'visible'; }, 5000);

    }

  render() {
    return (
      <div>
        <div class="scroll-info" id="alert">Scroll to continue</div>
      </div>
    )
  }
}
