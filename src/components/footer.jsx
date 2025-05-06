import React from 'react'
import '../styles/footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <img src="/logo-footer.png" alt="Kasa logo" className="footer__logo" />
      <div className="footer__copyright">© 2020 Kasa. All{"\n"}rights reserved</div>
    </footer>
  )
} 