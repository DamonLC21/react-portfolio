import React, {Component} from 'react'
import { Container, Row, Col, Media } from 'react-bootstrap'
import { TweenLite, TweenMax, Elastic, Linear } from "gsap";
import TextPlugin from "gsap/TextPlugin"
import '../main.css'
import '../Sphere.css'

class Home extends Component{

    componentDidMount(){
        let intro = document.getElementById("intro")
        TweenLite.to(intro, 3, {text:"Hi, <br/>I'm Damon,<br/>designer and developer.",  ease:Linear.easeNone})
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
            </div>
        
        )
    }
}

export default Home;