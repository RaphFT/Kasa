import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './gallery.scss'

const ArrowLeft = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 24L10 14L18 4" stroke="#FF6060" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowRight = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 24L18 14L10 4" stroke="#FF6060" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const Gallery = ({ images, alt }) => {
  const [index, setIndex] = useState(0)
  const total = images.length
  if (total === 0) return null

  const prev = () => setIndex(i => (i === 0 ? total - 1 : i - 1))
  const next = () => setIndex(i => (i === total - 1 ? 0 : i + 1))

  return (
    <div className="gallery">
      <img
        src={images[index]}
        alt={alt}
        className="accommodation__image"
        loading="lazy"
      />
      {total > 1 && (
        <>
          <button className="gallery__arrow gallery__arrow--left" onClick={prev} aria-label="Image précédente">
            <ArrowLeft />
          </button>
          <button className="gallery__arrow gallery__arrow--right" onClick={next} aria-label="Image suivante">
            <ArrowRight />
          </button>
          <span className="gallery__index">{index + 1}/{total}</span>
        </>
      )}
    </div>
  )
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  alt: PropTypes.string,
} 