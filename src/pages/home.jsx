import React from 'react'
import { Banner } from '../components/banner'
import { Card } from '../components/card'
import data from '../data.json'

export const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '27px' }}>
      <Banner />
      <section className="cards-list">
        {data.map(({ id, cover, title }) => (
          <Card key={id} id={id} cover={cover} title={title} />
        ))}
      </section>
    </div>
  )
} 