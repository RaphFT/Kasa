import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './card.scss'

export const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/accommodation/${id}`} className="card">
      <img 
        src={cover} 
        alt="Photo du logement" 
        className="card__img" 
        loading="lazy"
        width="400"
        height="400"
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
      />
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
} 