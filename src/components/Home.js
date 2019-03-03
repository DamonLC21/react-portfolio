import React, {Component} from 'react'
import { Container, Row, Col, Media } from 'react-bootstrap'
import '../App.css'
import '../Sphere.css'

class Home extends Component{


    render(){
        return(
           
                <Media className="centered-media">
                    <img
                    width={100}  
                    className="align-self-center mr-3"
                    alt="thumbnail"  
                    src={require("../Asset 14@3x.png")} id="leftHeading" />
                    <Media.Body>
                        <h1>Hi, <br/>I'm Damon,<br/>designer and developer.</h1>
                    </Media.Body>
                </Media>
        
        )
    }
}

export default Home;