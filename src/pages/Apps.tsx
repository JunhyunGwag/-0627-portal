export default function Apps() {
  return (
    <div className="gutter" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <h2 className="text-heading-large" style={{ marginBottom: '16px' }}>학습용 웹앱 모음</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {/* Sample App 1 */}
        <div className="card card-featured">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <h3 className="text-heading">분수 피자 나누기 게임</h3>
            <span className="chip" style={{ color: 'var(--seed-color-carrot-600)', backgroundColor: 'var(--seed-color-carrot-100)' }}>수학</span>
          </div>
          <p className="text-body-small" style={{ marginBottom: '16px', flex: 1 }}>5학년 1학기 수학 4단원 약분과 통분 복습을 위한 피자 나누기 게임입니다.</p>
          <button className="btn-primary" style={{ width: '100%' }}>
            앱 실행하기
          </button>
        </div>

        {/* Sample App 2 */}
        <div className="card card-featured">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <h3 className="text-heading">영어 단어 플래시카드</h3>
            <span className="chip" style={{ color: 'var(--seed-color-carrot-600)', backgroundColor: 'var(--seed-color-carrot-100)' }}>영어</span>
          </div>
          <p className="text-body-small" style={{ marginBottom: '16px', flex: 1 }}>이번 주에 배운 필수 영단어 20개를 원어민 발음과 함께 외워보세요.</p>
          <button className="btn-primary" style={{ width: '100%' }}>
            앱 실행하기
          </button>
        </div>
      </div>
    </div>
  );
}
