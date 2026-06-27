import { Link } from 'react-router-dom';
import { Bell, Bookmark, LayoutGrid, Clock, Calendar, Utensils, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = `${time.getFullYear()}년 ${time.getMonth() + 1}월 ${time.getDate()}일`;
  const formattedTime = time.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div className="gutter" style={{ paddingTop: '24px', paddingBottom: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Date & Time Widget */}
      <section className="card" style={{ backgroundColor: 'var(--seed-color-carrot-600)', color: 'white', border: 'none', alignItems: 'center', padding: '32px 16px' }}>
        <p className="text-body" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '8px' }}>{formattedDate}</p>
        <h2 className="text-display-xl" style={{ fontSize: '40px', lineHeight: '48px' }}>{formattedTime}</h2>
        <p className="text-title" style={{ marginTop: '16px' }}>오늘 하루도 활기차게 시작해 볼까요? 😊</p>
      </section>

      {/* Dashboard Widgets */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
        
        {/* Timetable Widget */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Calendar size={20} color="var(--seed-color-carrot-600)" />
            <h3 className="text-heading">오늘의 시간표</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, justifyContent: 'center', alignItems: 'center', color: 'var(--fg-placeholder)' }}>
            <p className="text-body-small">아직 등록된 시간표가 없습니다.</p>
          </div>
        </div>

        {/* Lunch Widget */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Utensils size={20} color="var(--seed-color-carrot-600)" />
            <h3 className="text-heading">오늘의 급식</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, justifyContent: 'center', alignItems: 'center', color: 'var(--fg-placeholder)' }}>
            <p className="text-body-small">급식 정보가 없습니다.</p>
          </div>
        </div>

        {/* Compliment Thermometer Widget */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Heart size={20} color="var(--seed-color-red-700)" />
            <h3 className="text-heading">우리반 칭찬 온도탑</h3>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ width: '100%', height: '24px', backgroundColor: 'var(--bg-layer-fill)', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ width: '35%', height: '100%', backgroundColor: 'var(--seed-color-carrot-600)' }}></div>
            </div>
            <p className="text-caption" style={{ textAlign: 'right', marginTop: '8px' }}>목표 달성까지 65도 남았어요!</p>
          </div>
        </div>
      </section>

      {/* Quick Menu Cards */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '8px' }}>
        <Link to="/notice" className="card card-featured">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ padding: '10px', backgroundColor: 'var(--seed-color-carrot-100)', borderRadius: '999px', color: 'var(--seed-color-carrot-600)' }}>
              <Bell size={24} />
            </div>
            <h3 className="text-heading-large">최신 공지사항</h3>
          </div>
          <p className="text-body-small">선생님이 남기신 최신 알림장과 중요 안내를 확인하세요.</p>
        </Link>

        <Link to="/bookmark" className="card card-featured">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ padding: '10px', backgroundColor: 'var(--seed-color-carrot-100)', borderRadius: '999px', color: 'var(--seed-color-carrot-600)' }}>
              <Bookmark size={24} />
            </div>
            <h3 className="text-heading-large">우리반 웹사이트</h3>
          </div>
          <p className="text-body-small">e학습터, 패들렛 등 수업에 필요한 고정 사이트 모음입니다.</p>
        </Link>

        <Link to="/apps" className="card card-featured">
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
