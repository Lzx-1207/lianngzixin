export default function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-pattern"></div>
      <div className="container contact-container">
        <div className="contact-content">
          <div className="contact-text">
            <h2 className="contact-title">联系我</h2>
            <p className="contact-desc">
              如果你对作品感兴趣，或想与我合作，欢迎随时联系
            </p>
          </div>

          <div className="contact-info-cards">
            <a href="tel:17389618179" className="contact-info-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="contact-info-label">电话</span>
              <span className="contact-info-value">17389618179</span>
            </a>

            <a href="mailto:17389618179@163.com" className="contact-info-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span className="contact-info-label">邮箱</span>
              <span className="contact-info-value">17389618179@163.com</span>
            </a>

            <div className="contact-info-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
              <span className="contact-info-label">微信</span>
              <span className="contact-info-value">lzx_20051207</span>
            </div>

            <div className="contact-info-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="contact-info-label">所在地</span>
              <span className="contact-info-value">四川成都</span>
            </div>
          </div>

          <div className="contact-footer-bottom">
            <p className="contact-footer-text">
              西南石油大学 · 播音与主持艺术 · 2024级
            </p>
            <p className="contact-copyright">
              &copy; 2026 梁子心 · 个人作品集
            </p>
            <button onClick={scrollToTop} className="back-to-top">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="18 15 12 9 6 15"/>
              </svg>
              返回顶部
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
