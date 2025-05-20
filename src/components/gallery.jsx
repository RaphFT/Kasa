import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './gallery.scss'

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
            <img src="/arrow-left.svg" alt="Flèche gauche" />
          </button>
          <button className="gallery__arrow gallery__arrow--right" onClick={next} aria-label="Image suivante">
            <img src="/arrow-right.svg" alt="Flèche droite" />
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