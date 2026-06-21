
const works = [
  {
    id: 1,
    title: '《技能五子棋》爆火，"无意义"才是喜剧的模样',
    source: '红辣椒评论',
    url: 'https://mp.weixin.qq.com/s/fhzovUoNPlGP5QhLDwxulw',
  },
  {
    id: 2,
    title: '《姐姐妹妹抓娃娃》引争议，综艺不能总靠"模仿"',
    source: '红辣椒评论',
    url: 'https://hlj.rednet.cn/nograb/646942/52/15208965.html',
  },
]

export default function WritingWorks() {
  return (
    <section id="writing" className="section writing-section">
      <div className="container">
        <h2 className="section-title">文字作品</h2>
        <p className="section-subtitle">以笔为媒，评论洞察时代脉搏</p>
        <div className="writing-grid">
          {works.map((work) => (
                        <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="writing-card"
            >
              <div className="writing-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <h3 className="writing-card-title">{work.title}</h3>
              <div className="writing-card-source">{work.source}</div>
              <div className="writing-card-footer">
                <span className="writing-card-link">阅读全文 →</span>
              </div>
            </a>
                      ))}
        </div>
      </div>
    </section>
  )
}
