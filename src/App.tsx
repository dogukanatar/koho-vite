import { useState } from 'react'
import './App.css'

function App() {
  const appTitle = import.meta.env.VITE_APP_TITLE || 'KOHO Housing'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="app-container">
      <header className="site-header">
        <h1>{appTitle}</h1>
        <nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-button">Menu</button>
          {isMenuOpen && (
            <ul className="nav-menu">
              <li><a href="#search">Search Properties</a></li>
              <li><a href="#featured">Featured Listings</a></li>
              <li><a href="#agents">Find Agents</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          )}
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <h2>Find Your Perfect Home in Korea</h2>
          <div className="search-container">
            <input type="text" placeholder="Search by location..." className="search-input" />
            <button className="search-button">Search</button>
          </div>
        </section>

        <section id="featured" className="featured-section">
          <h2>Featured Properties</h2>
          <div className="property-grid">
            <div className="property-card">
              <img src="https://placehold.co/300x200" alt="Property" />
              <h3>Modern Apartment in Gangnam</h3>
              <p>₩2,500,000/month</p>
              <p>2 Bed • 1 Bath • 75m²</p>
            </div>
            <div className="property-card">
              <img src="https://placehold.co/300x200" alt="Property" />
              <h3>Studio in Hongdae</h3>
              <p>₩1,200,000/month</p>
              <p>1 Bed • 1 Bath • 45m²</p>
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <h2>Why Choose KOHO?</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Verified Listings</h3>
              <p>All properties are verified by our team</p>
            </div>
            <div className="feature">
              <h3>English Support</h3>
              <p>Full English speaking support available</p>
            </div>
            <div className="feature">
              <h3>Easy Process</h3>
              <p>Streamlined rental process for foreigners</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2024 KOHO Housing Platform • <a href="/terms">Terms</a> • <a href="/privacy">Privacy</a></p>
      </footer>
    </div>
  )
}

export default App
