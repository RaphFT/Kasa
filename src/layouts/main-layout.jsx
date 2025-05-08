import React from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import './main-layout.scss'

export const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
} 