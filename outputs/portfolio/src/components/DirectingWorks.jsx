
const works = [
  {
    id: 1,
    title: '中国共产党人精神谱系讲演大赛',
    role: '节目编导、艺术指导',
    award: '助力化工院拿下一等奖',
    url: 'https://mp.weixin.qq.com/s/WCyTSaFPkQNcofTik14SWw',
  },
  {
    id: 2,
    title: '作品《烽火家书》',
    role: '负责人、主演、节目编导',
    desc: '后多次在各级地区表演',
    url: 'https://mp.weixin.qq.com/s/ouCtXaG8YQeD3A_NZHoUaA',
    url2: 'https://mp.weixin.qq.com/s/ee39vE4DysTCnbxGMcWYqQ',
  },
  {
    id: 3,
    title: '凉山第十届"索玛花开·文旅共促"文艺晚会',
    role: '节目编导、主演',
    desc: '作品获人民网等多家主流媒体报道',
    url: 'https://mp.weixin.qq.com/s/OHOMjGxkcTDRv9R7tRZwDw',
  },
  {
    id: 4,
    title: '西南油气田女职工创新交流活动',
    role: '节目负责人、编导',
    url: 'https://mp.weixin.qq.com/s/8-mvk-ZhN9V96lm7p_jZJQ',
  },
  {
    id: 5,
    title: '第十四届绕口令大赛',
    role: '节目负责人、导演、编剧、主演',
    desc: '作品获开赛以来最高分，获一致好评',
    url: 'https://mp.weixin.qq.com/s/ne50BDwn_yiwRdScycr5pQ',
  },
]

export default function DirectingWorks() {
  return (
    <section id="directing" className="section directing-section">
      <div className="container">
        <h2 className="section-title">编导作品</h2>
        <p className="section-subtitle">从策划到舞台，用编导语言讲述动人故事</p>
        <div className="directing-grid">
          {works.map((work) => (
                        <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="directing-card"
            >
              <div className="dir-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
              <h3 className="dir-card-title">{work.title}</h3>
              <div className="dir-card-role">{work.role}</div>
              {work.award && <div className="dir-card-award">{work.award}</div>}
              {work.desc && <p className="dir-card-desc">{work.desc}</p>}
              <div className="dir-card-footer">
                <span className="dir-card-link">查看详情 →</span>
              </div>
            </a>
                      ))}
        </div>
      </div>
    </section>
  )
}
