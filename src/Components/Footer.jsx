import React from "react";
import "./Login.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="mailto:contact@greenvalley.edu">Email</a>
      </div>
      <p className="footer-text">© 2025 Green Valley Public School. All rights reserved.</p>
    </footer>
  );
}

export default Footer;