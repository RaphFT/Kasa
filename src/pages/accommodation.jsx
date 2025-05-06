import React from 'react'
import { useParams } from 'react-router-dom'

export const Accommodation = () => {
  const { id } = useParams()

  return (
    <section className="accommodation">
      <h1>Fiche logement {id}</h1>
      {/* Contenu à venir */}
    </section>
  )
} 