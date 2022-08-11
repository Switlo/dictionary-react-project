import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";


export default function Meaning(props) {
    console.log(props.meaning.definitions[0]);
    return (
        <div className="Meaning">
        <h3>
            {props.meaning.partOfSpeech};
        </h3>
        {props.meaning.definitions.map(function(definition, index) {
            return (
                <div key={index}>
                    <p className="fw-semibold text-primary">
                    {definition.definition}
                    </p>
                    <p>
                        <Examples examples={definition.example} />
                    </p>
                    <p>
                        <Synonyms synonyms={definition.synonyms} />
                    </p>
                </div>
            );
        })}
        </div>
    )
}