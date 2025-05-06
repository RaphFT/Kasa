import React from 'react'
import PropTypes from 'prop-types'
import '../styles/card.scss'

export const Card = ({ cover, title, id }) => {
  return (
    <article className="card" key={id}>
      <img src={cover} alt={title} className="card__img" />
      <h2 className="card__title">{title}</h2>
    </article>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
} 