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
        <a href="#" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        &nbsp;and hosted on <a href="#" target="_blank" rel="noopener noreferrer">Netlify</a>
      </p>
    </div>
  );
}