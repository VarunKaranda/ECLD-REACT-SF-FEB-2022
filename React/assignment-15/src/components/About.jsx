import React from 'react'
import "./Style.css"

const About = () => {
  return (
      <div>
          <section className="about">

   <div className="image">
      <img src="images/about-img.jpg" alt=""/>
   </div>

   <div className="content">
      <h3 className="about-title">we have best courses for you</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic magnam fugit exercitationem neque, quae laboriosam natus. Ut maxime assumenda facere ea quasi accusamus dolores delectus tempora animi, expedita iste.</p>
      <div className="icons-container">
         <div className="icons">
            <img src="images/about-icon-1.png" alt=""/>
            <h3>350+</h3>
            <span>courses</span>
         </div>
         <div className="icons">
            <img src="images/about-icon-2.png" alt=""/>
            <h3>1200+</h3>
            <span>students</span>
         </div>
         <div className="icons">
            <img src="images/about-icon-3.png" alt=""/>
            <h3>10+</h3>
            <span>awards</span>
         </div>
      </div>
   </div>

</section>


<section className="reviews">

   <h1 className="heading"> our students review </h1>

   <div className="swiper reviews-slider">

      <div className="swiper-wrapper">

         <div className="swiper-slide slide">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
            <img src="images/pic-1.png" alt=""/>
            <h3>john deo</h3>
            <div className="stars">
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star-half-alt"></i>
            </div>
         </div>

         <div className="swiper-slide slide">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
            <img src="images/pic-2.png" alt=""/>
            <h3>john deo</h3>
            <div className="stars">
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star-half-alt"></i>
            </div>
         </div>

         <div className="swiper-slide slide">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
            <img src="images/pic-3.png" alt=""/>
            <h3>john deo</h3>
            <div className="stars">
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star-half-alt"></i>
            </div>
         </div>

         <div className="swiper-slide slide">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
            <img src="images/pic-4.png" alt=""/>
            <h3>john deo</h3>
            <div className="stars">
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star-half-alt"></i>
            </div>
         </div>

         <div className="swiper-slide slide">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
            <img src="images/pic-5.png" alt=""/>
            <h3>john deo</h3>
            <div className="stars">
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star-half-alt"></i>
            </div>
         </div>

         <div className="swiper-slide slide">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
            <img src="images/pic-6.png" alt=""/>
            <h3>john deo</h3>
            <div className="stars">
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star-half-alt"></i>
            </div>
         </div>

      </div>

   </div>

</section>
    </div>
  )
}

export default About