import React from "react";
import Meaning from "./Meaning.js"
import ReactPlayer from 'react-player';

import './App.css';

export default function Result(props) {

    if(props.result) {
        return (
            <div className="Result">
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
                    
            {props.result.meanings.map(function(meaning, index) {
                // return meaning.definitions[0].definition.example;
            return (
                <div key={index}>
                    <Meaning meaning={meaning}/>                    
                </div>
            )
            })}
            
            </div>
        )
    } else {
        return null;
    }
}