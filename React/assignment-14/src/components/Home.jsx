import React from 'react'
import "./Style.css"

const Home = () => {
  return (
    //  Title
    <>
      <section className="colored-section" id="title">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="big-heading">
                Meet new and interesting dogs nearby.
              </h1>
              <button
                type="button"
                className="btn btn-dark btn-lg download-button"
              >
                <i className="fab fa-apple"></i> Download
              </button>
              <button
                type="button"
                className="btn btn-outline-light btn-lg download-button"
              >
                <i className="fab fa-google-play"></i> Download
              </button>
            </div>
            <div className="col-lg-6">
              <img
                src="../images/img_phone_en.png"
                alt="iphone-mockup"
                className="title-img"
              />
            </div>
          </div>
        </div>
      </section>
      {/* //Features */}
      <section className="colored-section-features" id="features">
        <div className="container-fluid-features">
          <div className="row">
            <div className="feature-box col-lg-4">
              <i className="icon far fa-check-circle fa-5x"></i>
              <h3 className="feature-title">Easy to use.</h3>
              <p>So easy to use, even your dog could do it.</p>
            </div>

            <div className="feature-box col-lg-4">
              <i className="icon fas fa-bullseye fa-5x"></i>
              <h3 className="feature-title">Elite Clientele</h3>
              <p>We have all the dogs, the greatest dogs.</p>
            </div>

            <div className="feature-box col-lg-4">
              <i className="icon fas fa-heart fa-5x"></i>
              <h3 className="feature-title">Guaranteed to work.</h3>
              <p>Find the love of your dog's life or your money back.</p>
            </div>
          </div>
        </div>
      </section>
      {/* //Testimonials */}
      <section className="colored-section" id="testimonials">
        <div
          id="testimonial-carousel"
          className="carousel slide"
          data-ride="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active container-fluid">
              <h2 className="testimonial-text">
                I no longer have to sniff other dogs for love. I've found the
                hottest Corgi on TinDog. Woof.
              </h2>
              <img
                className="testimonial-img"
                src={process.env.PUBLIC_URL + "images/dog-img.jpg"}
                alt="dog-profile"
              />
              <em>Pebbles, New York</em>
            </div>
            <div className="carousel-item container-fluid">
              <h2 className="testimonial-text">
                My dog used to be so lonely, but with TinDog's help, they've
                found the love of their life. I think.
              </h2>
              <img
                className="testimonial-img"
                src="images/lady-img.jpg"
                alt="lady-profile"
              />
              <em>Beverly, Illinois</em>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#testimonial-carousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#testimonial-carousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden"></span>
          </a>
          {/* We can use whatever tag tag we want instead of button tag to act as button. But we should include the role="button" in that tag. For eg. <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-bs-slide="next">*/}
        </div>
      </section>
      {/* Press */}
      <section className="colored-section" id="press">
        <img
          className="press-logo"
          src="../images/TechCrunch.png"
          alt="tc-logo"
        />
        <img className="press-logo" src="../images/tnw.png" alt="tnw-logo" />
        <img
          className="press-logo"
          src="images/bizinsider.png"
          alt="biz-insider-logo"
        />
        <img
          className="press-logo"
          src="../images/mashable.png"
          alt="mashable-logo"
        />
      </section>
    </>
  );
}

export default Home