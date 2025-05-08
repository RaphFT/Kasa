import React from 'react'
import { Banner } from '../components/banner'
import { Card } from '../components/card'
import data from '../data.json'
import homeBan from '../assets/banners/home-banner.webp'
import './home.scss'

export const Home = () => {
  return (
    <div className="main-container">
      <section>
        <Banner 
          image={homeBan}
          title="Chez vous, partout et ailleurs"
        />
      </section>
      <section className="cards_logement">
        {data.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </div>
  )
} 