import React from 'react'
import PropTypes from 'prop-types'
import './tag.scss'

export const Tag = ({ label }) => (
  <span className="tag">{label}</span>
)

Tag.propTypes = {
  label: PropTypes.string.isRequired,
} 