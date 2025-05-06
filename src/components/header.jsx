import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/header.scss'

export const Header = () => {
  const location = useLocation()
  return (
    <header className="header">
      <img src="/logo-header-mobile.png" alt="Kasa logo" className="header__logo" />
      <nav className="header__nav">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>ACCUEIL</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>A PROPOS</Link>
      </nav>
    </header>
  )
} 