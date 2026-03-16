import React from 'react';
import './Gallery.css';

const images = [
  { src: '/images/gallery-img.jpg', alt: 'Moment 1', caption: 'Exploring new horizons' },
  { src: '/images/gallery-img2.jpg', alt: 'About', caption: 'Dream big' },
  { src: '/images/gallery-img3.jpg', alt: 'Hero', caption: 'Professional outlook' },
  { src: '/images/gallery-img4.jpeg', alt: 'Moment 2', caption: 'A beautiful black out' },
  { src: '/images/gallery-img5.jpeg', alt: 'Spotless Digital', caption: 'Behind the scenes' },
  { src: '/images/gallery-img6.jpg', alt: 'Moment 3', caption: 'Capturing memories' },
  { src: '/images/gallery-img5.jpg', alt: 'Moment 4', caption: 'Good times' },
  { src: '/images/gallery-img7.jpg', alt: 'Moment 5', caption: 'Unforgettable experience' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section section section-alt">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-label">Moments</span>
          <h2 className="section-title">My <span>Gallery</span></h2>
          <p className="section-desc">A collection of moments, projects, and behind-the-scenes memories.</p>
        </div>
        
        <div className="photo-album reveal">
          {images.map((img, idx) => (
            <div key={idx} className={`polaroid polaroid-${idx % 5}`}>
              <div className="polaroid-inner">
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="caption">{img.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
