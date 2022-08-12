import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
      © Coded by&nbsp;
        <a
          href="https://www.linkedin.com/in/svitlana-rudyeva-19156a181/"
          target="_blank" rel="noopener noreferrer"
        >
          Svitlana Rudyeva
        </a>&nbsp;
        
        | Open-sourced code is on&nbsp;
        <a href="https://github.com/Switlo/dictionary-react-project" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>&nbsp;
        and hosted on <a href="https://keen-jelly-5530d0.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a>&nbsp;
        | Photos provided by&nbsp;<a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a>
      </p>
    </div>
  );
}
