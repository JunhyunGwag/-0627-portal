export default function Bookmark() {
  return (
    <div className="gutter" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <h2 className="text-heading-large" style={{ marginBottom: '16px' }}>우리반 웹사이트 모음</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px' }}>
        {/* Sample Bookmark 1 */}
        <a href="https://cls.edunet.net" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'var(--bg-layer-default)', padding: '16px', borderRadius: '8px', border: '1px solid var(--stroke-neutral-subtle)', boxShadow: 'var(--shadow-s1)', textAlign: 'center' }}>
          <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--bg-layer-fill)', borderRadius: '8px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            🎓
          </div>
          <h3 className="text-title">e학습터</h3>
          <p className="text-caption" style={{ marginTop: '4px' }}>온라인 학습 공간</p>
        </a>

        {/* Sample Bookmark 2 */}
        <a href="https://padlet.com" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'var(--bg-layer-default)', padding: '16px', borderRadius: '8px', border: '1px solid var(--stroke-neutral-subtle)', boxShadow: 'var(--shadow-s1)', textAlign: 'center' }}>
          <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--bg-layer-fill)', borderRadius: '8px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            📝
          </div>
          <h3 className="text-title">패들렛</h3>
          <p className="text-caption" style={{ marginTop: '4px' }}>우리반 게시판</p>
        </a>
      </div>
    </div>
  );
}
