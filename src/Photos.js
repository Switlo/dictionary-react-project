import React from "react";
import "./Dictionary.css";

export default function Photos(props) {
    console.log(props.photos);

    if (props.photos) {
        return (
          <div className="Photos">
            <div className="row">
              {props.photos.map(function (photo, index) {
                return (
                  <div className="col-4" key={index}>
                    <img src={photo.src.landscape} alt="pexels photos" className="img-fluid" />
                  </div>
                );
              })}
            </div>
          </div>
        );
      } else {
        return null;
      }
  }