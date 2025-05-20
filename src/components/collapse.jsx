import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './collapse.scss'

export const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
      <button 
        className="collapse__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
        <img 
          src="/arrow-dropdown.svg" 
          alt={isOpen ? "Fermer" : "Ouvrir"} 
          className="collapse__arrow"
        />
      </button>
      {isOpen && (
        <div className="collapse__content">
          {children}
        </div>
      )}
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
} 