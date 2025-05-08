import React from 'react'
import { Link } from 'react-router-dom'
import './not-found.scss'

export const NotFound = () => {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Oups! La page que vous recherchez n'existe pas.</p>
      <Link to="/" className="not-found__link">Retourner sur la page d'accueil</Link>
    </section>
  )
} 