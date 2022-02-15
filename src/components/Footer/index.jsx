import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <p className="footer">
        { new Date().getFullYear() } @ Derechos reservados Erlich Rodriguez freelancer
      </p>
    </footer>
  );
}
