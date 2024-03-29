import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MailchimpForm from './MailchimpForm'
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import githubIcon from '../assets/img/github16.svg'
import twitterIcon from '../assets/img/twitter.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/tsaij2" target="_blank"><img src={navIcon1} alt="LinkedIn Icon" /></a>
              <a href="https://github.com/JonnTsai" target="_blank"><img src={githubIcon} alt="GitHub Icon" /></a>
              <a href="#" target="_blank"><img src={twitterIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer