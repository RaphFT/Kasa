import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './collapse.scss'

export const Collapse = ({ title, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`collapse${open ? ' collapse--open' : ''}`}>
      <button className="collapse__toggle" onClick={() => setOpen(o => !o)}>
        {title}
        <img 
          src="/arrow-dropdown.svg" 
          alt="Flèche" 
          className="collapse__arrow collapse__arrow--desktop" 
        />
        <img 
          src="/arrow-dropdown-small.svg" 
          alt="Flèche" 
          className="collapse__arrow collapse__arrow--mobile" 
        />
      </button>
      {open && <div className="collapse__content">{children}</div>}
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
} 