export default function About() {
  const info = {
    name: '梁子心',
    gender: '男',
    age: '20',
    school: '西南石油大学（国家"双一流"建设高校）',
    major: '播音与主持艺术',
    grade: 'GPA 4.40（1/86），综合素质排名年级第2名',
    location: '四川成都',
    email: '17389618179@163.com',
    phone: '17389618179',
    wechat: 'lzx_20051207',
  }

  const certificates = [
    '演出经纪人资格证',
    '普通话一级乙等',
    '计算机二级',
    '红十字救护员证',
    '机动车驾驶证（C2）',
  ]

  const skills = [
    'WPS办公软件',
    '剪映 / Au / canva / Ps',
    'AIGC工具（图文音视频生成）',
    '主持与配音',
    '节目编导',
    '新闻采编',
    '音乐器乐',
  ]

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">关于我</h2>
        <p className="section-subtitle">一个热爱传媒的播音生，用多元实践探索内容创作的边界</p>

        <div className="about-layout">
          <div className="about-avatar-col">
            <div className="about-avatar">
              <span className="avatar-initials">L</span>
              <span className="avatar-ring"></span>
            </div>
            <div className="about-basic-stats">
              <div className="stat-item">
                <span className="stat-value">{info.grade.split('（')[0]}</span>
                <span className="stat-label">专业绩点</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">20岁</span>
                <span className="stat-label">年龄</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">40+</span>
                <span className="stat-label">比赛奖项</span>
              </div>
            </div>
          </div>

          <div className="about-info-col">
            <div className="about-intro">
              <h3 className="about-name">{info.name}</h3>
              <p className="about-school">{info.school}</p>
              <p className="about-major">{info.major} · {info.grade}</p>
              <p className="about-scholarship">获得优秀学生一等奖学金2次</p>
            </div>

            <div className="about-contact">
              <h4>联系方式</h4>
              <div className="contact-grid">
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span>{info.email}</span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>{info.phone}</span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>{info.location}</span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                  <span>微信: {info.wechat}</span>
                </div>
              </div>
            </div>

            <div className="about-certificates">
              <h4>资格证书</h4>
              <div className="cert-tags">
                {certificates.map((c, i) => (
                  <span key={i} className="cert-tag">{c}</span>
                ))}
              </div>
            </div>

            <div className="about-skills">
              <h4>专业技能</h4>
              <div className="skill-tags">
                {skills.map((s, i) => (
                  <span key={i} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



