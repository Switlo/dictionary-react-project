import React from "react";
import Meaning from "./Meaning.js"

export default function Result(props) {

    if(props.result) {
        return (
            <div className="Result">
            <h2>
                {props.result.word}
            </h2>
            <p>{props.result.phonetic}</p>

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