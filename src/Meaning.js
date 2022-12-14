import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import './App.css';


export default function Meaning(props) {

      return (
        <div className="Meaning">
          <h4 className="fw-semibold text-primary">{props.meaning.partOfSpeech}</h4>
          <p><strong>Definition: </strong>{props.meaning.definitions[0].definition}</p>
          
          <p>
            <Examples examples={props.meaning.definitions[0].example} />
          </p>
          <p>
            <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
          </p>       
        </div>
            );
}

//     return (
//         <div className="Meaning">
//         <h3>
//             {props.meaning.partOfSpeech}
//         </h3>
//         {props.meaning.definitions.map(function(definition, index) {
//             return (
//                 <div key={index}>
//                     <p className="fw-semibold text-primary">
//                     {definition.definition}
//                     </p>
//                     <p>
//                         <Examples examples={definition.example} />
//                     </p>
//                     <p>
//                         <Synonyms synonyms={definition.synonyms} />
//                     </p>
//                 </div>
//             );
//         })}
//         </div>
//     )
// }