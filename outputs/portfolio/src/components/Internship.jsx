import { useEffect, useRef } from 'react'

const works = [
  {
    id: 1,
    title: '咪咕音乐实习视频成果',
    company: '咪咕音乐有限公司',
    role: '演艺活动运营实习生',
    period: '2025.07 - 2025.08',
    desc: '全程参与唐禹哲生日会等线上演艺项目，独立撰写主持稿并策划现场互动；完成咪咕音乐厂牌回归宣传策划与排期制定；独立完成江苏移动活动倒计时视频、咪咕汇获奖感言切片剪辑；参与第四届大学生音乐联赛总决赛策划，对接艺人及执行团队。',
    url: 'https://pan.baidu.com/s/1D4GAYoTehLjF8RyWGMaGCQ?pwd=2026',
  },
  {
    id: 2,
    title: '融媒体播音实习成果',
    company: '临夏州融媒体中心',
    role: '实习播音员',
    period: '2024.08',
    desc: '完成日常新闻播报，参与地方新闻采编流程，提升即兴播音与内容把控能力。通过严谨备稿与精准播音，获得一线实战经验，建立对地方媒体运作的认知。',
    url: 'https://pan.baidu.com/s/1fHB2HSs71EpqrCR_zWvdQA?pwd=2026',
  },
]

export default function Internship() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    const cards = sectionRef.current?.querySelectorAll('.internship-card')
    cards?.forEach(c => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="internship" className="section internship-section">
      <div className="container">
        <h2 className="section-title">实习经历</h2>
        <p className="section-subtitle">在媒体与互联网行业中积累的实战经验</p>
        <div className="internship-grid" ref={sectionRef}>
          {works.map((work) => (
                        <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="internship-card"
            >
              <div className="internship-card-top">
                <div className="inter-card-company">{work.company}</div>
                <div className="inter-card-period">{work.period}</div>
              </div>
              <h3 className="inter-card-title">{work.title}</h3>
              <div className="inter-card-role">{work.role}</div>
              <p className="inter-card-desc">{work.desc}</p>
              <div className="inter-card-footer">
                <span className="inter-card-link">查看作品 →</span>
              </div>
            </a>
                      ))}
        </div>
      </div>
    </section>
  )
}


