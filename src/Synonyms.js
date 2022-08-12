import React from "react";
import './App.css';

export default function Synonyms(props) {
    
 if (props.synonyms) {
 
    return (
        <div className="Synonyms">
            {props.synonyms.map(function(synonym, index) {
                return (
                    <div key={index}>                      
                       <strong>Synonyms: </strong>{synonym}
                    </div>);    
            })}     
        </div>  );
          
} else {
        return null;
    }
}