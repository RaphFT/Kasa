import React from 'react'
import { Banner } from '../components/banner'
import { Card } from '../components/card'
import data from '../data.json'

export const Home = () => {
  return (
    <main>
      <Banner />
      <section className="cards-list">
        {data.map(({ id, cover, title }) => (
          <Card key={id} id={id} cover={cover} title={title} />
        ))}
      </section>
    </main>
  )
} 