import React from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout-body">
        {children}
      </div>
      <Footer />
    </>
  )
} 