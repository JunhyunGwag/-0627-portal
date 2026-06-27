export default function Notice() {
  return (
    <div className="gutter" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <h2 className="text-heading-large" style={{ marginBottom: '16px' }}>선생님 공지사항</h2>
      
      <div className="flex-column gap-12" style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Sample Notice 1 (Important) */}
        <div className="card" style={{ border: '1px solid var(--seed-color-carrot-600)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--fg-critical)', fontWeight: 700, fontSize: '12px' }}>[필독]</span>
            <span className="text-caption">2026-06-27</span>
          </div>
          <h3 className="text-heading" style={{ marginBottom: '8px' }}>내일 현장체험학습 안내사항</h3>
          <p className="text-body">도시락, 물통, 돗자리 꼭 챙겨오세요. 8시 50분까지 교실로 모입니다.</p>
        </div>

        {/* Sample Notice 2 */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span className="text-caption" style={{ color: 'var(--seed-color-carrot-600)', fontWeight: 700 }}>일반안내</span>
            <span className="text-caption">2026-06-26</span>
          </div>
          <h3 className="text-heading" style={{ marginBottom: '8px' }}>수학 단원평가 결과지 배부</h3>
          <p className="text-body">부모님 확인 받고 서명받아서 다음 주 월요일까지 제출하세요.</p>
        </div>
      </div>
    </div>
  );
}
