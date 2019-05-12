import React, { Component } from "react";
import { Jumbotron } from "../components/Jumbotron";
import { Container, Row, Col } from 'reactstrap'; 
import "./style.css";
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
                                <Col xs="auto">
                                    <img src={require("../images/giphyApp.jpg")} onClick={()=> window.open("https://germangib.github.io/giphyApi/", "_blank")} style={{cursor: 'pointer'}} alt="giphyApp" />
                                </Col>
                                <Col xs="auto"> 
                                    <img src={require("../images/triviaGame.jpg")} alt="triviaGame" />
                                </Col>
                                <Col xs="auto">
                                    <img src={require("../images/trainScheduler.jpg")} onClick={()=> window.open("https://germangib.github.io/trainScheduler/", "_blank")} style={{cursor: 'pointer'}} alt="trainScheduler" />
                                </Col>
                                <Col xs="auto">
                                    <img src={require("../images/crystal-collection.jpg")} onClick={()=> window.open("https://germangib.github.io/CrystalCollector/", "_blank")} style={{cursor: 'pointer'}} alt="crystal collection" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="auto">
                                    <img src={require("../images/hangMan.jpg")} onClick={()=> window.open("https://germangib.github.io/hangMan/", "_blank")} style={{cursor: 'pointer'}} alt="hangMan" />
                                </Col>
                                <Col xs="auto">
                                    <img src={require("../images/liri_spotify-this.jpg")} onClick={()=> window.open("https://github.com/germangib/LIRI.git", "_blank")} style={{cursor: 'pointer'}} alt="LIRI" />
                                </Col>
                                <Col xs="auto">
                                    <img src={require("../images/friendsFinder.jpg")} onClick={()=> window.open("https://pumpkin-shortcake-31066.herokuapp.com/", "_blank")} style={{cursor: 'pointer'}} alt="Friend Finder" />
                                </Col>
                                <Col xs="auto">
                                    <img src={require("../images/google-books-front.jpg")} onClick={()=> window.open("https://shielded-inlet-79715.herokuapp.com/", "_blank")} style={{cursor: 'pointer'}} alt="google books" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="auto">
                                    <img src={require("../images/bamazon_screen1.jpg")} onClick={()=> window.open("https://github.com/germangib/bamazon.git", "_blank")} style={{cursor: 'pointer'}} alt="Bamazon" />
                                </Col>
                                <Col xs="auto">
                                    <img src={require("../images/scrape_frontPage.jpg")} onClick={()=> window.open("https://sleepy-beyond-15604.herokuapp.com/", "_blank")} style={{cursor: 'pointer'}} alt="Scrape News" />
                                </Col>
                            </Row>
                            <h3 className="text-white jbHeading">Contributor...</h3>
                            <Row>
                                <Col xs="auto">
                                    <img src={require("../images/workr_landingPage.jpg")} onClick={()=> window.open("https://tranquil-journey-10841.herokuapp.com/", "_blank")} style={{cursor: 'pointer'}} alt="Workr Project" />
                                </Col>
                                <Col xs="auto">
                                    <img src={require("../images/EasyEatsHompage.png")} onClick={()=> window.open("https://shrouded-waters-91830.herokuapp.com/", "_blank")} style={{cursor: 'pointer'}} alt="Easy Eats" />
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