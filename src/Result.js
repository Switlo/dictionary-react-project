import React from "react";
import Meaning from "./Meaning.js"
// import ReactPlayer from 'react-player';
import './App.css';

export default function Result(props) {

    if(props.result) {
        return (
            <div className="Result">
            <h2>
                {props.result.word}
            </h2>
            <p>{props.result.phonetics[0].text}</p>
            <a href={props.result.phonetics[0].audio} target="_blank" rel="noopener noreferrer">
                Listen
            </a>

            {/* <p className="player-wrapper">
                    <ReactPlayer
                    className="react-player"
                    url={props.result.phonetics[0].audio}
                    />
            </p> */}
           
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