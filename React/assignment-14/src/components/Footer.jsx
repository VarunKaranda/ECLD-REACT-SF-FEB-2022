import React from 'react'
import "./Style.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer-section" id="footer">
        <div className="container-fluid-footer">
          <i className="social-icon fab fa-facebook-f"></i>
          <i className="social-icon fab fa-twitter"></i>
          <i className="social-icon fab fa-instagram"></i>
          <i className="social-icon far fa-envelope"></i>
          <p>© Copyright 2021 TinDog</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer