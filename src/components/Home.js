import React, {Component} from 'react'
import { Container, Row, Col, Media } from 'react-bootstrap'
import { TweenLite, TweenMax, Elastic, Linear } from "gsap";
import TextPlugin from "gsap/TextPlugin"
import '../App.css'
import '../Sphere.css'

class Home extends Component{

    componentDidMount(){
        document.body.style.overflow = 'hidden';
        let scrollAlert = document.getElementById("alert");
        let intro = document.getElementById("intro")
        
        TweenLite.to(intro, 3, {text:"Hi, <br/>I'm Damon,<br/>designer and developer.",  ease:Linear.easeNone})
        TweenMax.to(scrollAlert, 2, {scaleX: 1, x: -50, delay: 4, ease: Elastic.easeOut.config(1, 0.7)})
        TweenMax.to(scrollAlert, 2, {scale: 1.1, delay: 5.5, ease: Elastic.easeOut.config(1, 0.7)})
        TweenMax.to(scrollAlert, 2, {scale: 1, delay: 6, ease: Elastic.easeOut.config(1, 0.7)})
        TweenMax.to(scrollAlert, 3, {opacity: 0, delay: 6.8, ease: Elastic.easeOut.config(1, 0.7)})
        setTimeout(function(){ document.body.style.overflow = 'visible'; }, 5000);

    }


    render(){
        return(
            <div>
                <Media className="centered-media">
                    <img
                    width={100}  
                    className="align-self-center mr-3"
                    alt="thumbnail"  
                    src={require("../Asset 14@3x.png")} id="leftHeading" />
                    <Media.Body>
                        <h1 id="intro"></h1>
                    </Media.Body>
                </Media>
                <div class="scroll-info" id="alert">Scroll to continue</div>
            </div>
        
        )
    }
}

export default Home;