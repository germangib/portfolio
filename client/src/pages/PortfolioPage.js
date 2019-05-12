import React, { Component } from "react";
import { Jumbotron } from "../components/Jumbotron";
import { Container, Row, Col } from 'reactstrap'; 
import "../App.css";


class PortfolioPage extends Component {
    
    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="text-center jbTextDiv">
                        <h1 className="text-white jbHeading">German's Portfolio</h1> 
                        <Container>    
                            <Row>
                                <Col>.col-auto
                                    <img src={require("../images/giphyApp.jpg")} alt="giphyApp" />
                                </Col>
                                <Col>.col-auto 
                                    <img src={require("../images/triviaGame.jpg")} alt="triviaGame" />
                                </Col>
                                <Col>.col-auto
                                    <img src={require("../images/trainScheduler.jpg")} alt="trainScheduler" />
                                </Col>
                                <Col>.col-auto
                                    <img src={require("../images/crystal-collection.jpg")} alt="crystal collection" />
                                </Col>
                                <Col>.col-auto
                                    <img src={require("../images/hangMan.jpg")} alt="hangMan" />
                                </Col>
                                <Col>.col-auto
                                    <img src={require("../images/liri_spotify-this.jpg")} alt="LIRI" />
                                </Col>
                                <Col>.col-auto
                                    <img src={require("../images/friendsFinder.jpg")} alt="Friend Finder" />
                                </Col>
                                <Col>.col-auto
                                    <img src={require("../images/google-books-front.jpg")} alt="google books" />
                                </Col>
                                <Col>.col-auto
                                    <img src={require("../images/liri_spotify-this.jpg")} alt="LIRI" />
                                </Col>
                            </Row>
                        </Container>               
                    </div>
                </Jumbotron>
           </div>
        )
    }

}

export default PortfolioPage;