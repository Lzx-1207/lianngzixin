import { useRef } from 'react'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-glow" />
      <div className="hero-container container">
        <div className="hero-left">
          <div className="hero-photo-wrapper">
            <div className="hero-photo-ring"></div>
            <div className="hero-photo-ring-2"></div>
            <picture>
              <source srcSet="/images/portrait.webp" type="image/webp" />
              <img
                src="/images/portrait.jpg"
                alt="梁子心"
                className="hero-photo"
                loading="eager"
              />
            </picture>
          </div>
          <div className="hero-scroll-line">
            <span className="hero-scroll-text">SCROLL</span>
            <span className="hero-scroll-bar"></span>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-greeting-tag">
            <span className="hero-greeting-dot"></span>
            你好，我是
          </div>
          <h1 className="hero-name">梁子心</h1>
          <p className="hero-name-eng">LIANG ZIXIN</p>
          <p className="hero-role-line">播音与主持艺术 · 传媒创作者</p>
          <p className="hero-desc">
            西南石油大学在读 · GPA 4.40（1/86）
            <br />
            用声音传递温度，用影像记录时代
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              联系我
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <button onClick={scrollToAbout} className="btn-text-link">
              了解更多
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


