export default function Apps() {
  return (
    <div className="gutter" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <h2 className="text-heading-large" style={{ marginBottom: '16px' }}>학습용 웹앱 모음</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {/* Sample App 1 */}
        <div style={{ backgroundColor: 'var(--bg-layer-default)', padding: '20px', borderRadius: '12px', border: '1px solid var(--stroke-neutral-subtle)', boxShadow: 'var(--shadow-s1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <h3 className="text-heading">분수 피자 나누기 게임</h3>
            <span style={{ backgroundColor: 'var(--seed-color-carrot-100)', color: 'var(--seed-color-carrot-600)', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 700 }}>수학</span>
          </div>
          <p className="text-body-small" style={{ marginBottom: '16px' }}>5학년 1학기 수학 4단원 약분과 통분 복습을 위한 피자 나누기 게임입니다.</p>
          <button style={{ width: '100%', padding: '12px', backgroundColor: 'var(--seed-color-carrot-600)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
            앱 실행하기
          </button>
        </div>

        {/* Sample App 2 */}
        <div style={{ backgroundColor: 'var(--bg-layer-default)', padding: '20px', borderRadius: '12px', border: '1px solid var(--stroke-neutral-subtle)', boxShadow: 'var(--shadow-s1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <h3 className="text-heading">영어 단어 플래시카드</h3>
            <span style={{ backgroundColor: 'var(--seed-color-carrot-100)', color: 'var(--seed-color-carrot-600)', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 700 }}>영어</span>
          </div>
          <p className="text-body-small" style={{ marginBottom: '16px' }}>이번 주에 배운 필수 영단어 20개를 원어민 발음과 함께 외워보세요.</p>
          <button style={{ width: '100%', padding: '12px', backgroundColor: 'var(--seed-color-carrot-600)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
            앱 실행하기
          </button>
        </div>
      </div>
    </div>
  );
}
