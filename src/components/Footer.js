import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";

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
            <MDBCol md="6">
              <h5 className="title">Contact us:</h5>
              <a href="#!">About us</a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#!">Ask us</a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#!">RM-Wardrobe</a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#!">Complaints</a>
            </MDBCol>
            <MDBCol md="1">
              <img src="./photo/logo.png" width="110" height="70"></img>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a> RM-Wardrobe </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
