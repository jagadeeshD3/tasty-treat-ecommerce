import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Food  with Great taste!!
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Dasari Jagadeesh</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 9346980454</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: dasarijagadeesh789@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">About Me</h5>
            
            <div className="newsletter">
              <a href="https://portfoilo-djagadeesh.netlify.app/" target='_blank' rel="noopener noreferrer"><span>Portfoilo</span></a>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              @Dasari Jagadeesh
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              
              <span>
                <Link to="https://github.com/jagadeeshD3">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              

              <span>
                {" "}
                <Link to="https://www.linkedin.com/in/jagadeesh-dasari-b827b3190/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to="https://www.facebook.com/jagadeeah.dasari">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>
              
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
