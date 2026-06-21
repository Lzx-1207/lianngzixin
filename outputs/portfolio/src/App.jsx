import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const About = lazy(() => import('./components/About'))
const Internship = lazy(() => import('./components/Internship'))
const AVWorks = lazy(() => import('./components/AVWorks'))
const DirectingWorks = lazy(() => import('./components/DirectingWorks'))
const WritingWorks = lazy(() => import('./components/WritingWorks'))
const ContactFooter = lazy(() => import('./components/ContactFooter'))

import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Internship />
          <AVWorks />
          <DirectingWorks />
          <WritingWorks />
          <ContactFooter />
        </Suspense>
      </main>
    </div>
  )
}

export default App