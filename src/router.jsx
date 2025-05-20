import React from 'react'
import { 
  BrowserRouter, 
  Routes, 
  Route,
  UNSAFE_NavigationContext as NavigationContext,
  UNSAFE_RouteContext as RouteContext
} from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Accommodation } from './pages/accommodation'
import { NotFound } from './pages/not-found'
import { App } from './App'

// Configuration des flags futurs pour React Router v7
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  },
  basename: import.meta.env.PROD ? '/Kasa' : '/'
}

export const AppRouter = () => (
  <BrowserRouter {...router}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="accommodation/:id" element={<Accommodation />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
) 