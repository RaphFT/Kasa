import React from 'react'
import PropTypes from 'prop-types'
import './banner.scss'

export const Banner = ({ image, title }) => {
  return (
    <div className="banner">
      <img src={image} alt={title} className="banner__img" />
      <h1 className="banner__text">{title}</h1>
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
} 