import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './card.scss'

export const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card__img" />
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
} 