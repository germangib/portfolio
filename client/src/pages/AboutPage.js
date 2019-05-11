import React, { Component } from "react";
import { Jumbotron } from "../components/Jumbotron";
import "../App.css";

class AboutPage extends Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="text-center jbTextDiv">
                    <h1 className="text-white jbHeading">About...</h1>
                        <div className="container"> 
                            <div className="row">
                                <div className="col-lg-6"> {/* Aside Section */}
                                    <img src={require("../images/profile_pic2.jpg")} alt="Profile" />
                                </div>
                               
                                <div className="col-lg-6" style={{backgroundColor: 'white'}}>
                                    <p style={{fontWeight: 'bold'}}> <br /> <br /> <br /> I am a Software Engineer who has been working as Project Manager for the last 5 years. <br /> 
                                    </p>
                                    <p style={{fontWeight: 'bold'}}>
                                        I have a necessity to create and I find in coding, music and books, a escape to what my current
                                         occupasion restrains in a way. <br />
                                    </p>
                                    <p style={{fontWeight: 'bold'}}>
                                        In this page I will show what I have created during the Bootcamp class and, why not, some other projects I do
                                        when creativity kicks in when I wear my Engineer hat. <br />
                                    </p>
                                </div>
                            
                            </div>
                        
                        
                        </div>
                        
                                                
                    </div>
                </Jumbotron>
           </div>
        )
    }

}

export default AboutPage;