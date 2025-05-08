import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './header.scss'

export const Header = () => {
  const location = useLocation()
  return (
    <header className="header">
      <img src="/logo-header-desktop.svg" alt="Kasa logo" className="header__logo" width="122" height="47" />
      <nav className="header__nav">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>A Propos</Link>
      </nav>
    </header>
  )
} 