type BookmarkItem = {
  title: string;
  url: string;
  icon: string;
  description: string;
};

type BookmarkCategory = {
  category: string;
  items: BookmarkItem[];
};

const BOOKMARK_DATA: BookmarkCategory[] = [
  {
    category: "자주 찾는 사이트",
    items: [
      { title: "e학습터", url: "https://cls.edunet.net", icon: "🎓", description: "온라인 학습 공간" },
      { title: "패들렛", url: "https://padlet.com", icon: "📝", description: "우리반 게시판" },
      { title: "미리캔버스", url: "https://www.miricanvas.com/", icon: "🎨", description: "디자인 도구" },
    ]
  },
  {
    category: "국어",
    items: [
      { title: "국립국어원", url: "https://www.korean.go.kr/", icon: "📖", description: "표준국어대사전" },
      { title: "맞춤법 검사기", url: "http://speller.cs.pusan.ac.kr/", icon: "✅", description: "한국어 맞춤법 검사" },
    ]
  },
  {
    category: "수학",
    items: [
      { title: "EBS Math", url: "https://www.ebsmath.co.kr/", icon: "🔢", description: "재미있는 수학" },
      { title: "칸아카데미", url: "https://ko.khanacademy.org/", icon: "📐", description: "수학 개념 학습" },
    ]
  },
  {
    category: "사회",
    items: [
      { title: "국가지표체계", url: "https://www.index.go.kr/", icon: "📊", description: "다양한 통계 자료" },
      { title: "국토지리정보원", url: "https://www.ngii.go.kr/", icon: "🗺️", description: "우리나라 지도" },
    ]
  },
  {
    category: "학급자치회",
    items: [
      { title: "멘티미터", url: "https://www.mentimeter.com/", icon: "🙋", description: "실시간 의견 수렴" },
      { title: "띵커벨", url: "https://www.tkbell.co.kr/", icon: "🔔", description: "퀴즈 및 투표" },
    ]
  },
  {
    category: "자투리 시간 사이트",
    items: [
      { title: "한컴 타자연습", url: "https://typing.malangmalang.com/", icon: "⌨️", description: "타자 속도 올리기" },
      { title: "엔트리", url: "https://playentry.org/", icon: "🤖", description: "재미있는 블록 코딩" },
    ]
  }
];

export default function Bookmark() {
  return (
    <div className="gutter" style={{ paddingTop: '24px', paddingBottom: '48px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h2 className="text-heading-large" style={{ marginBottom: '8px' }}>우리반 웹사이트 모음</h2>
        <p className="text-body" style={{ color: 'var(--fg-muted)' }}>수업과 학급 활동에 필요한 유용한 사이트들을 모아두었어요.</p>
      </div>
      
      {BOOKMARK_DATA.map((section, index) => (
        <section key={index}>
          <h3 className="text-heading" style={{ marginBottom: '16px', color: 'var(--seed-color-carrot-700)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '4px', height: '16px', backgroundColor: 'var(--seed-color-carrot-500)', borderRadius: '2px' }}></span>
            {section.category}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
            {section.items.map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" rel="noreferrer" className="card" style={{ alignItems: 'center', textAlign: 'center', textDecoration: 'none', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--seed-color-carrot-100)', borderRadius: '12px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                  {item.icon}
                </div>
                <h4 className="text-title" style={{ color: 'var(--fg-default)' }}>{item.title}</h4>
                <p className="text-caption" style={{ marginTop: '4px', color: 'var(--fg-muted)' }}>{item.description}</p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
