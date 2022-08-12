import React from "react";

export default function Examples(props) {
    
 if (props.examples) {
    return (
        <div className="Examples">
            <p>
            <strong>For example: </strong><em>{props.examples}</em>
            </p>
        </div>
    );
} else {
        return null;
    }
}