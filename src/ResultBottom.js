import React from "react";
import Meaning from "./Meaning.js"

import './App.css';

export default function ResultBottom(props) {

    if(props.result) {
        return (
            <div className="ResultBottom">
                                
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