import React from 'react'
import bannerImg from '../assets/banners/home-ban.png'
import '../styles/banner.scss'

export const Banner = () => {
  return (
    <section className="banner">
      <img src={bannerImg} alt="Bannière Kasa" className="banner__img" />
      <div className="banner__overlay" />
      <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
    </section>
  )
} 