import React from 'react'
import './footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <img src="/logo-footer.svg" alt="Kasa logo" className="footer__logo" />
      <p className="footer__text">
        <span>© 2020 Kasa. All</span>
        <span>rights reserved</span>
      </p>
    </footer>
  )
} 