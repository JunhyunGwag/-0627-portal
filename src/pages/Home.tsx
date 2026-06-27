import { Link } from 'react-router-dom';
import { Bell, Bookmark, LayoutGrid } from 'lucide-react';

export default function Home() {
  return (
    <div className="gutter" style={{ paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Welcome Section */}
      <section>
        <h2 className="text-display-large" style={{ marginBottom: '8px' }}>5학년 3반 학습포털</h2>
        <p className="text-body">오늘 하루도 활기차게 시작해 볼까요?</p>
      </section>

      {/* Quick Menu Cards */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        
        {/* Notice Card */}
        <Link to="/notice" style={{ display: 'block', backgroundColor: 'var(--bg-layer-default)', padding: '20px', borderRadius: '12px', border: '1px solid var(--stroke-neutral-subtle)', boxShadow: 'var(--shadow-s1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ padding: '10px', backgroundColor: 'var(--seed-color-carrot-100)', borderRadius: '999px', color: 'var(--seed-color-carrot-600)' }}>
              <Bell size={24} />
            </div>
            <h3 className="text-heading-large">최신 공지사항</h3>
          </div>
          <p className="text-body-small">선생님이 남기신 최신 알림장과 중요 안내를 확인하세요.</p>
        </Link>

        {/* Bookmark Card */}
        <Link to="/bookmark" style={{ display: 'block', backgroundColor: 'var(--bg-layer-default)', padding: '20px', borderRadius: '12px', border: '1px solid var(--stroke-neutral-subtle)', boxShadow: 'var(--shadow-s1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ padding: '10px', backgroundColor: 'var(--seed-color-carrot-100)', borderRadius: '999px', color: 'var(--seed-color-carrot-600)' }}>
              <Bookmark size={24} />
            </div>
            <h3 className="text-heading-large">우리반 웹사이트</h3>
          </div>
          <p className="text-body-small">e학습터, 패들렛 등 수업에 필요한 고정 사이트 모음입니다.</p>
        </Link>

        {/* Apps Card */}
        <Link to="/apps" style={{ display: 'block', backgroundColor: 'var(--bg-layer-default)', padding: '20px', borderRadius: '12px', border: '1px solid var(--stroke-neutral-subtle)', boxShadow: 'var(--shadow-s1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ padding: '10px', backgroundColor: 'var(--seed-color-carrot-100)', borderRadius: '999px', color: 'var(--seed-color-carrot-600)' }}>
              <LayoutGrid size={24} />
            </div>
            <h3 className="text-heading-large">학습용 웹앱</h3>
          </div>
          <p className="text-body-small">선생님이 직접 만드신 유익한 학습 게임과 앱들을 만나보세요.</p>
        </Link>

      </section>
    </div>
  );
}
