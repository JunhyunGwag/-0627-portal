import { useState, useEffect } from 'react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '3700') {
      localStorage.setItem('admin_auth', 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="gutter flex-center" style={{ minHeight: '80vh', flexDirection: 'column' }}>
        <h2 className="text-heading-large" style={{ marginBottom: '24px' }}>관리자 인증</h2>
        <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: `1px solid var(--stroke-neutral-weak)`,
              backgroundColor: 'var(--bg-layer-fill)',
              color: 'var(--fg-neutral)',
              fontSize: '16px'
            }}
          />
          {error && <p className="text-caption" style={{ color: 'var(--seed-color-red-700)' }}>비밀번호가 올바르지 않습니다. 다시 확인해 주세요.</p>}
          <button 
            type="submit"
            style={{
              padding: '16px',
              backgroundColor: 'var(--seed-color-carrot-600)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            확인
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="gutter" style={{ paddingTop: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="text-heading-large">선생님 공간</h2>
        <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'var(--seed-color-carrot-600)', cursor: 'pointer', padding: '8px' }}>
          로그아웃
        </button>
      </div>
      <p className="text-body" style={{ marginTop: '12px' }}>대시보드 기능이 곧 추가될 예정입니다.</p>
    </div>
  );
}
