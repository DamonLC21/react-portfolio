import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import './App.css';
import Animate from './components/Animate.js'
import Home from './components/Home.js'
import Navigation from './components/Navbar'


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="contained">
        <div className="cover"></div>
          <Container className="centered" id="scrollPoint">
            <Home />
          </Container>
          <div className="cover"></div>
          <div className="cover"></div>
        </div>
      </div>
    );
  }
}

export default App;










{/* <div class="tagBall col-md-6">
                <a class="tag" target="_blank" href="#">Developer</a>
                <a class="tag" target="_blank" href="#">JavaScript</a>
                <a class="tag" target="_blank" href="#">HTML5</a>
                <a class="tag" target="_blank" href="#">REST</a>
                <a class="tag" target="_blank" href="#">CSS</a>
                <a class="tag" target="_blank" href="#">Node.js</a>
                <a class="tag" target="_blank" href="#">Heroku</a>
                <a class="tag" target="_blank" href="#">React</a>
                <a class="tag" target="_blank" href="#">Angular6</a>
                <a class="tag" target="_blank" href="#">Express</a>
                <a class="tag" target="_blank" href="#">React-Native</a>
                <a class="tag" target="_blank" href="#">SketchApp</a>
                <a class="tag" target="_blank" href="#">Github</a>
                <a class="tag" target="_blank" href="#">MongoDB</a>
                <a class="tag" target="_blank" href="#">Illustrator</a>
                <a class="tag" target="_blank" href="#">Photoshop</a>
                <a class="tag" target="_blank" href="#">Designer</a>
            </div> */}