import React from 'react'
import PropTypes from 'prop-types'
import './rating-stars.scss'

const OrangeStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FF6060"/>
  </svg>
)

const GreyStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#E3E3E3"/>
  </svg>
)

export const RatingStars = ({ rating }) => {
  const value = Number(rating)
  return (
    <div className="rating-stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="rating-stars__star">
          {i < value ? <OrangeStar /> : <GreyStar />}
        </span>
      ))}
    </div>
  )
}

RatingStars.propTypes = {
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
} 