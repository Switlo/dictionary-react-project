import React from "react";
import ReactPlayer from 'react-player';

import './App.css';

export default function ResultTop(props) {

    if(props.result) {
        return (
            <div className="ResultTop">
            <h2>
                {props.result.word}
            </h2>
            <p>{props.result.phonetics[0].text}</p>
                      
            <p className="player-wrapper">
                    <ReactPlayer
                    className="react-player"
                    url={props.result.phonetics[0].audio} controls={true} height={30} width={220}
                    />
            </p>
            </div>
        )
    } else {
        return null;
    }
}