import React from "react";
import "./style.css";
import { faHome, faBriefcase, faAddressBook, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
        <FontAwesomeIcon icon={faHome} /> Home
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse m-0" id="navbarSupportedContent">
            <div className="navbar-nav ml-auto">
              <a className="nav-link" href="/about">
              <FontAwesomeIcon icon={faAddressCard} />  About
              </a>
              <a className="nav-link" href="https://www.linkedin.com/in/germangar/">
              <FontAwesomeIcon icon={faLinkedin} />  LinkedIn
              </a>
              <a className="nav-link" href="/portfolio">
              <FontAwesomeIcon icon={faBriefcase} />  Portfolio
              </a>
              <a className="nav-link" href="/contact">
              <FontAwesomeIcon icon={faAddressBook} />  Contact
              </a>
            </div>
        </div>
      </div>
    </nav>
    
  );
}

export default Nav;