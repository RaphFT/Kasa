import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'

export const App = () => {
  return (
    <div className="container">
      <Header />
      <main className="layout-body">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
