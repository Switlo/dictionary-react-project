import React from "react";
import Meaning from "./Meaning.js"

import './App.css';

export default function ResultBottom(props) {

    if(props.bottom) {
        return (
            <div className="ResultBottom">
                {props.bottom.meanings.map(function(meaning, index) {
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