import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';



const Footer = () => {
  return (
    <div className="Foof">
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">RM-Wardrobe</h5>
            <p>
              want to know more about us try the links in the right.
             <p>you will find a lot of interesting things.</p> 
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Contact us</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">About us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Ask us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">RM-Wardrobe</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Complaints</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="1">
            <img src="./logo.png" width="220" height="170"></img>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> RM-Wardrobe </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;