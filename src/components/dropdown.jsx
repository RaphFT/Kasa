import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './dropdown.scss'

const ArrowBottom = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowTop = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 15L12 9L18 15" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const Dropdown = ({ title, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`dropdown${open ? ' dropdown--open' : ''}`}>
      <button className="dropdown__toggle" onClick={() => setOpen(o => !o)}>
        {title}
        {open ? <ArrowTop /> : <ArrowBottom />}
      </button>
      {open && <div className="dropdown__content">{children}</div>}
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
} 