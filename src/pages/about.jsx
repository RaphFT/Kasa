import React from 'react'
import { Banner } from '../components/banner'
import { Collapse } from '../components/collapse'
import aboutBanner from '../assets/banners/about-banner.webp'
import data from '../data.json'
import './about.scss'

export const About = () => {
  const { aboutList } = data

  return (
    <main className="main-container">
      <section>
        <Banner image={aboutBanner} className="banner--about" />
      </section>
      <section className="about__dropdowns">
        {aboutList.map((item) => (
          <Collapse key={item.title} title={item.title}>
            {item.content}
          </Collapse>
        ))}
      </section>
    </main>
  )
} 