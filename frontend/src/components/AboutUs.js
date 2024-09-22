import React from 'react';
// import './AboutUs.css';
import './css/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Image with "About Us" heading */}
      <div className="about-us-header">
        <img src={require('../images/aboutus1.jpg')} alt="About Us" className="header-image" />
      </div>

      {/* Section with image on the left and content on the right */}
      <div className="about-us-content">
        <div className="about-us-left">
          <img src=  {require('../images/girls.jpg')} alt="Sparkle and Beauty" className="side-image" />
        </div>
        <div className="about-us-right">
          <h2 className="about-us-heading">Our Story</h2>

          <p>
            Sparkle With Us was born from the dream of two friends passionate about beauty and art, SAKSHI and AKANSHA. After years of experience in the field and many enthusiastic conversations, they decided to join forces and create a space dedicated to refinement and personal care. With a shared vision and a commitment to quality, SAKSHI and AKANSHA opened Sparkle With Us, a salon where every detail is thoughtfully crafted to provide clients with an unforgettable experience. Whether it's hair, makeup, or nails, spa our team of professionals is dedicated to helping you discover and express your unique beauty. At Sparkle With Us, we turn dreams into reality!</p>
        </div>
      </div>

      {/* Section with content on the left and image on the right */}
<div className="about-us-content">
  <div className="about-us-left">
    <h2 className="about-us-heading">The Mission</h2>
    <p>
    At M&D Beauty Lab, our mission is to provide high-quality services in the fields of hair, make-up, and nails, ensuring that every client feels unique and pampered. We are dedicated to bringing out inner beauty through professionalism, innovation, and attention to detail.
    </p>
  </div>
  <div className="about-us-right">
    <img src={require('../images/background3.jpg')} alt="Sparkle and Beauty" className="side-image" />
  </div>
</div>

    </div>
  );
};

export default AboutUs;
