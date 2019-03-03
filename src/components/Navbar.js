import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

export default class Navigation extends Component {

    constructor(props){
        super(props)
        this.state = {
            open: false,
            home: false,
            about: false,
            skills: false,
            portfolio: false,
            contact: false
        }
    }
    
    componentDidMount(){
        this.openCloseNav;
        this.openNav;
        this.closeNav;
        this.hoverHome;

        window.onscroll = function() {myFunction(), changeX()};
        var openNav = document.getElementById("openNav");
        var sticky = openNav.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                openNav.classList.add("sticky")
            } else {
                openNav.classList.remove("sticky");
            }
        }
        function changeX() {
            if(window.pageYOffset > 947){
                openNav.style.color = "black"
            } else{
                openNav.style.color = "white"
            }

        }
    }
       
    render() {
        
    return (
        <div>
            <div id="mySidenav" class="sidenav">
            <a class="logo" rel="index" href="#"> <img src={require("../Logo@3x.png")}/></a>
                <nav>
                    <a href="#" onMouseEnter={() => this.hoverHome()} onMouseLeave={() => this.hoverHome()}>{this.state.home ? "Home" : <i class="fas fa-home"></i>}</a>
                    <a href="#" onMouseEnter={() => this.hoverAbout()} onMouseLeave={() => this.hoverAbout()}>{this.state.about ? "About" :<i class="far fa-user"></i>}</a>
                    <a href="#" onMouseEnter={() => this.hoverSkills()} onMouseLeave={() => this.hoverSkills()}>{this.state.skills ? "Skills" :<i class="fas fa-chart-pie"></i>}</a>
                    <a href="#" onMouseEnter={() => this.hoverPortfolio()} onMouseLeave={() => this.hoverPortfolio()}>{this.state.portfolio ? "Portfolio" :<i class="far fa-eye"></i>}</a>
                    <a href="#" onMouseEnter={() => this.hoverContact()} onMouseLeave={() => this.hoverContact()}>{this.state.contact ? "Contact" :<i class="far fa-comment"></i>}</a>
                </nav>
            </div>
            <div id="main">
               <span id="openNav" onClick={this.openCloseNav}>&#9776;</span>
            </div>
            <div id="topNav">
            <nav>
                <a href="#"><i class="fas fa-home"></i></a>
                <a href="#"><i class="far fa-user"></i></a>
                <a href="#"><i class="fas fa-chart-pie"></i></a>
                <a href="#" ><i class="far fa-eye"></i></a>
                <a href="#" ><i class="far fa-comment"></i></a>
                </nav>
            </div>
        </div>
    )
  }
  
    openCloseNav = () => {
        if(!this.state.open){
            this.openNav()
            this.setState({open:!this.state.open})
        }
        else{
            this.closeNav()
            this.setState({open:!this.state.open})
        }
    }

    openNav = () => {
        var openNav = document.getElementById("openNav");
        document.getElementById("mySidenav").style.width = "60px";
        document.getElementById("main").style.marginLeft = "60px";
        openNav.innerHTML = "&times;"
    }

    closeNav = () => {
        var openNav = document.getElementById("openNav");
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        openNav.innerHTML = "&#9776;"
    }

    hoverHome = () => {
        this.setState({home: !this.state.home})
    }
    hoverAbout = () => {
        this.setState({about: !this.state.about})
    }
    hoverSkills = () => {
        this.setState({skills: !this.state.skills})
    }
    hoverPortfolio = () => {
        this.setState({portfolio: !this.state.portfolio})
    }
    hoverContact = () => {
        this.setState({contact: !this.state.contact})
    }
}

