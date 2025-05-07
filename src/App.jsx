import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainLayout } from './layouts/main-layout'

export const App = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
)

export default App
