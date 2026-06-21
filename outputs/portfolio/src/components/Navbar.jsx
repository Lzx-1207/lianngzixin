import { useState, useEffect, useCallback } from 'react'

const NAV_ITEMS = [
  { label: '首页', href: '#hero' },
  { label: '关于', href: '#about' },
  { label: '实习经历', href: '#internship' },
  { label: '音视频作品', href: '#avworks' },
  { label: '编导作品', href: '#directing' },
  { label: '文字作品', href: '#writing' },
  { label: '联系', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero')
      const threshold = hero ? hero.offsetHeight * 0.6 : 200
      setScrolled(window.scrollY > threshold)

      const sections = NAV_ITEMS.map(item => item.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive('#' + sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-logo">梁子心</a>

        {/* Desktop links */}
        <div className="navbar-links">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${active === item.href ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-cta">联系我</a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="菜单"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${active === item.href ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
