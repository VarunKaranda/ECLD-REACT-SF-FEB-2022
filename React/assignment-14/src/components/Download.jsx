import React from 'react'
import "./Style.css"

const Download = () => {
  return (
    <section className="colored-section-features" id="cta">
      <div className="container-fluid">
        <h3 className="big-heading">
          Find the True Love of Your Dog's Life Today.
        </h3>
        <button className="btn btn-lg btn-dark download-button" type="button">
          <i className="fab fa-apple"></i> Download
        </button>
        <button className="btn btn-lg btn-light download-button" type="button">
          <i className="fab fa-google-play"></i> Download
        </button>
      </div>
    </section>
  );
}

export default Download