import React from 'react'
import { Banner } from '../components/banner'
import { Dropdown } from '../components/dropdown'
import aboutBanner from '../assets/banners/about-banner.webp'
import './about.scss'

export const About = () => {
  return (
    <main className="main-container">
      <section>
        <Banner image={aboutBanner} className="banner--about" />
      </section>
      <section className="about__dropdowns">
        <Dropdown title="Fiabilité">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</Dropdown>
        <Dropdown title="Respect">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</Dropdown>
        <Dropdown title="Service">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</Dropdown>
        <Dropdown title="Sécurité">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</Dropdown>
      </section>
    </main>
  )
} 