import React from "react";
import "./style.css";
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(props) {
  return (
    <footer className="container-fluid">
        <p className="text-center pt-2 mt-2"><small>German Garcia: 2019 / german dot garcia at dcmsllc dot net / Page built using REACT <FontAwesomeIcon icon={faReact} /> </small></p>
        
    </footer>
  );
}