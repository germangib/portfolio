import React, { Component } from "react";
import { Jumbotron } from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../App.css";

class LandingPage extends Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="text-center jbTextDiv">
                        <h1 className="text-white jbHeading">German Garcia</h1>
                        <Link to={"/portfolio"}>
                            <button className="btn m-3 jbBtn"><FontAwesomeIcon icon={faBriefcase} /> Portfolio</button>
                        </Link>
                        
                    </div>
                </Jumbotron>
           </div>
        )
    }

}

export default LandingPage;