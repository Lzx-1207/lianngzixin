
const works = [
  {
    id: 1,
    title: '部分全AI辅助生成的作品',
    category: 'AI生成',
    url: 'https://pan.baidu.com/s/18BtDBCXEfS2LbPuQmLpHRg?pwd=2026',
  },
  {
    id: 2,
    title: '部分音频作品',
    subtitle: '创意音频、有声书、广播剧',
    category: '音频',
    url: 'https://pan.baidu.com/s/1bf8upf43orOOaqWWLxsySw?pwd=2026',
  },
  {
    id: 3,
    title: '部分传统电视节目作品',
    subtitle: '纪录片、微电影',
    category: '视频',
    url: 'https://pan.baidu.com/s/1w_VEJ7EeIYY5oYDrkONJQQ?pwd=2026',
  },
  {
    id: 4,
    title: '部分新媒体尝试作品',
    subtitle: '短视频、短剧、网综',
    category: '新媒体',
    url: 'https://pan.baidu.com/s/1YR5HHTlosmc6g3mdons-tg?pwd=2026',
  },
  {
    id: 5,
    title: '部分出镜与配音作品',
    subtitle: '配音、主持、出镜',
    category: '出镜',
    url: 'https://pan.baidu.com/s/1WtTOVvTO-m2UnhDG0Kjqhg?pwd=2026',
  },
]

export default function AVWorks() {
  return (
    <section id="avworks" className="section av-section">
      <div className="container">
        <h2 className="section-title">音视频作品</h2>
        <p className="section-subtitle">涵盖AI生成、音频、视频、新媒体及出镜配音等多种形式</p>
        <div className="av-grid">
          {works.map((work) => (
                        <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="av-card"
            >
              <div className="av-card-category">{work.category}</div>
              <h3 className="av-card-title">{work.title}</h3>
              {work.subtitle && <p className="av-card-subtitle">{work.subtitle}</p>}
              <div className="av-card-footer">
                <span className="av-card-link">查看作品 →</span>
              </div>
            </a>
                      ))}
        </div>
      </div>
    </section>
  )
}
