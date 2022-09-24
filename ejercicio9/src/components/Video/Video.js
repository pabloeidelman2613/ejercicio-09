import React, {Component} from 'react';
import video from "../../assets/video/movie.mp4";

export default class Video extends Component{

    render(){
        return(
            <>
                <video width={315} height={315} controls><source src={video} type="video/mp4"/></video>
            </>
        );
    }
}