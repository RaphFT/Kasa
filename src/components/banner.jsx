import React from 'react'
import PropTypes from 'prop-types'
import './banner.scss'

export const Banner = ({ image, title }) => {
  return (
    <div className="banner">
      <img src={image} alt={title} className="banner__img" loading="eager" />
      <div className="banner__overlay">
        <h1 className="banner__title">
          <span>Chez vous, </span>
          <span>partout et ailleurs</span>
        </h1>
      </div>
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
} 