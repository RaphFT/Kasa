import React from 'react'
import PropTypes from 'prop-types'
import './banner.scss'

export const Banner = ({ image, title, className = '' }) => {
  return (
    <div className={`banner ${className}`}>
      <img src={image} alt={title || ''} className="banner__img" loading="eager" width="1240" height="827" fetchPriority="high" />
      <div className="banner__overlay">
        {title && (
          <h1 className="banner__title">
            <span>Chez vous, </span>
            <span>partout et ailleurs</span>
          </h1>
        )}
      </div>
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
} 