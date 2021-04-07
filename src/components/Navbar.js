import React from 'react';
import "./Navbar.css";
import  { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

  function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener("resize", showButton);
    return(
        <div className="tt">
            <div className="aa">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl">
  <ReactBootStrap.Navbar.Brand href="#home">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/"><img src="./logo.png" width="120px"></img></Link></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
   
  
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
     
    <Link to="/ConnectedHome">
    <ReactBootStrap.Nav.Link href="/ConnectedHome"><h1 className="hh">Home |</h1></ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/Categories">
    <ReactBootStrap.Nav.Link  href="/Categories">
        <h1>Categories |</h1>
      </ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/Register">
    <ReactBootStrap.Nav.Link  href="/Register">
        <h1>Register |</h1>
      </ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/FittingRoom">
    <ReactBootStrap.Nav.Link  href="/FittingRoom">
        <h1>FittingRoom</h1>
      </ReactBootStrap.Nav.Link>
    </Link>
                                                                                                                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/Login">
    <button type="button" class="btn btn-dark btn-lg"><h1>Sign In</h1></button>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
</div>
        </div>
    )
}

export default Navbar;
