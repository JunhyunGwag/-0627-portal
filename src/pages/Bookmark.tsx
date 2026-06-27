import { useState } from 'react';

type BookmarkItem = {
  title: string;
  url: string;
  icon: string;
  description: string;
  imageUrl?: string;
};

type BookmarkCategory = {
  category: string;
  items: BookmarkItem[];
};

const BOOKMARK_DATA: BookmarkCategory[] = [
  {
    category: "자주 찾는 사이트",
    items: [
      { title: "e학습터", url: "https://cls.edunet.net", icon: "🎓", description: "매일매일 접속하는 우리의 온라인 학습 공간입니다." },
      { title: "패들렛", url: "https://padlet.com", icon: "📝", description: "과제를 제출하고 친구들의 작품을 감상하는 우리반 게시판입니다." },
      { title: "미리캔버스", url: "https://www.miricanvas.com/", icon: "🎨", description: "발표 자료나 포스터를 예쁘게 꾸밀 수 있는 디자인 도구입니다." },
    ]
  },
  {
    category: "국어",
    items: [
      { title: "국립국어원", url: "https://www.korean.go.kr/", icon: "📖", description: "모르는 단어의 뜻을 정확하게 찾아볼 수 있는 표준국어대사전입니다." },
      { title: "맞춤법 검사기", url: "http://speller.cs.pusan.ac.kr/", icon: "✅", description: "내가 쓴 글의 맞춤법이 맞는지 꼼꼼하게 검사해 줍니다." },
    ]
  },
  {
    category: "수학",
    items: [
      { title: "EBS Math", url: "https://www.ebsmath.co.kr/", icon: "🔢", description: "수학 원리를 게임과 영상으로 재미있게 배울 수 있어요." },
      { title: "칸아카데미", url: "https://ko.khanacademy.org/", icon: "📐", description: "단계별로 수학 개념을 확실하게 다질 수 있는 학습 사이트입니다." },
    ]
  },
  {
    category: "사회",
    items: [
      { title: "국가지표체계", url: "https://www.index.go.kr/", icon: "📊", description: "우리나라의 다양한 모습을 보여주는 통계 자료를 찾을 수 있어요." },
      { title: "국토지리정보원", url: "https://www.ngii.go.kr/", icon: "🗺️", description: "우리나라 구석구석을 자세히 볼 수 있는 전자 지도를 제공합니다." },
    ]
  },
  {
    category: "학급자치회",
    items: [
      { title: "멘티미터", url: "https://www.mentimeter.com/", icon: "🙋", description: "반 친구들의 다양한 의견을 실시간으로 모아볼 수 있습니다." },
      { title: "띵커벨", url: "https://www.tkbell.co.kr/", icon: "🔔", description: "다함께 참여하는 재미있는 퀴즈와 투표를 진행할 수 있습니다." },
    ]
  },
  {
    category: "자투리 시간 사이트",
    items: [
      { title: "한컴 타자연습", url: "https://typing.malangmalang.com/", icon: "⌨️", description: "자투리 시간에 재미있게 타자 속도를 올리고 실력을 키워보세요." },
      { title: "엔트리", url: "https://playentry.org/", icon: "🤖", description: "블록을 조립하며 나만의 게임과 애니메이션을 만들어보세요." },
    ]
  }
];

export default function Bookmark() {
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const categories = ['전체', ...BOOKMARK_DATA.map(d => d.category)];

  const filteredData = activeCategory === '전체' 
    ? BOOKMARK_DATA 
    : BOOKMARK_DATA.filter(d => d.category === activeCategory);

  return (
    <div className="gutter" style={{ paddingTop: '32px', paddingBottom: '48px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '8px' }}>
        <h2 className="text-display-m" style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <span>🌻</span> 우리반 웹사이트 모음
        </h2>
        <p className="text-body" style={{ color: 'var(--fg-muted)' }}>수업과 학급 활동에 바로 사용할 수 있는 유용한 사이트들이에요</p>
      </div>
      
      {/* Filter Menu */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
        {categories.map(cat => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 20px',
                borderRadius: '999px',
                border: isActive ? '1px solid transparent' : '1px solid var(--stroke-neutral-weak)',
                backgroundColor: isActive ? 'var(--seed-color-green-400)' : 'var(--bg-layer-default)',
                color: isActive ? 'white' : 'var(--fg-neutral)',
                cursor: 'pointer',
                fontWeight: isActive ? 700 : 500,
                fontSize: '15px',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? '0 4px 12px rgba(87, 212, 162, 0.3)' : '0 2px 4px rgba(0,0,0,0.02)',
              }}
              onMouseOver={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'var(--bg-layer-fill)' }}
              onMouseOut={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'var(--bg-layer-default)' }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {filteredData.flatMap(section => section.items.map((item, idx) => {
          // Generate a consistent placeholder image per site
          const placeholderUrl = `https://picsum.photos/seed/${encodeURIComponent(item.title)}/400/225`;
          
          return (
            <a 
              key={`${section.category}-${idx}`} 
              href={item.url} 
              target="_blank" 
              rel="noreferrer" 
              className="card" 
              style={{ 
                padding: 0, 
                overflow: 'hidden', 
                textDecoration: 'none', 
                transition: 'transform 0.2s, box-shadow 0.2s', 
                cursor: 'pointer', 
                display: 'flex', 
                flexDirection: 'column',
                border: 'none',
                boxShadow: 'var(--shadow-s1)'
              }} 
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-s3)';
              }} 
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-s1)';
              }}
            >
              {/* Thumbnail Area */}
              <div style={{ width: '100%', height: '180px', backgroundColor: 'var(--bg-layer-fill)', position: 'relative' }}>
                <img 
                  src={placeholderUrl} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ 
                  position: 'absolute', 
                  top: '12px', 
                  right: '12px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                  padding: '4px 10px', 
                  borderRadius: '16px', 
                  fontSize: '12px', 
                  fontWeight: 700, 
                  color: 'var(--seed-color-green-400)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  #{section.category.split(' ')[0]}
                </div>
              </div>
              
              {/* Text Content Area */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: 'var(--bg-layer-default)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '24px' }}>{item.icon}</span>
                  <h4 className="text-title" style={{ color: 'var(--fg-neutral)', fontSize: '18px', fontWeight: 700 }}>{item.title}</h4>
                </div>
                <p className="text-body" style={{ color: 'var(--fg-muted)', marginBottom: '20px', flex: 1, fontSize: '14px', lineHeight: '1.6' }}>
                  {item.description}
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 'auto' }}>
                   <span style={{ 
                     color: 'var(--seed-color-green-400)', 
                     fontWeight: 600, 
                     fontSize: '14px', 
                     display: 'flex', 
                     alignItems: 'center', 
                     gap: '4px',
                     transition: 'color 0.2s'
                   }}>
                     사이트 방문하기 &rarr;
                   </span>
                </div>
              </div>
            </a>
          );
        }))}
      </div>
    </div>
  );
}
