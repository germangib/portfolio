import React, { Component } from "react";
import Masonry from 'react-masonry-component';

class ProjectCard extends Component {
    render(){ 
        return (
            <Masonry columns={3} bricks={[ 
                {uri:'../../public/images/triviaGame.jpg'}, 
                {uri: '../../public/images/trainScheduler.jpg'},
                {uri:'../../public/images/GiphyApp.jpg'}, 
                {uri: '../../public/images/crystalCollection.jpg'},
                {uri:'../../public/images/hangMan.jpg'} 
                
                ]}>

            </Masonry>
        );

    }
}

export default ProjectCard;