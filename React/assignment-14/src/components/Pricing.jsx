import React from 'react'
import "./Style.css"

const Pricing = () => {
  return (
    <section className="colored-section-features" id="pricing">
      <h2 className="section-heading">A Plan for Every Dog's Needs</h2>
      <p className="pricing-para">Simple and affordable price plans for your and your dog.</p>

      <div className="row">
        <div className="pricing-column col-lg-4 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="dog-breed">Chihuahua</h3>
            </div>
            <div className="card-body">
              <h2 className="price-text">Free</h2>
              <p>5 Matches Per Day</p>
              <p>10 Messages Per Day</p>
              <p>Unlimited App Usage</p>
              <button
                className="btn btn-outline-dark btn-lg btn-block signup-button"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="pricing-column col-lg-4 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="dog-breed">Labrador</h3>
            </div>
            <div className="card-body">
              <h2 className="price-text">$49 / mo</h2>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button
                className="btn btn-dark btn-lg btn-block signup-button"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="pricing-column col-lg-4">
          <div className="card">
            <div className="card-header">
              <h3 className="dog-breed">Mastiff</h3>
            </div>
            <div className="card-body">
              <h2 className="price-text">$99 / mo</h2>
              <p>Pirority Listing</p>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button
                className="btn btn-dark btn-lg btn-block signup-button"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing