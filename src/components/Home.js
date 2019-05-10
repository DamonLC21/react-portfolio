import React, {Component} from 'react'
import { Container, Row, Col, Media } from 'react-bootstrap'
import { TweenLite, TweenMax, Elastic, Linear } from "gsap";
import TextPlugin from "gsap/TextPlugin"
import '../main.scss'
import '../Sphere.css'

class Home extends Component{

    componentDidMount(){
        let intro = document.getElementById("intro")
        let under = document.getElementById("under-construction")
        TweenLite.to(intro, 3, {text:"Hi, <br/>I'm Damon,<br/>designer and developer.",  ease:Linear.easeNone})
        TweenLite.to(under, 2, {text:"🚧 This Page Is Currently Under Construction 🚧", delay: 3,  ease:Linear.easeNone})
    }


    render(){
        return(
            <React.Fragment>
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
                <h2 id="under-construction"></h2>
            </React.Fragment>
        
        )
    }
}

export default Home;