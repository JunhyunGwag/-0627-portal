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
    if (password === (import.meta as any).env.VITE_ADMIN_PASSWORD) {
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
            className="input-field"
          />
          {error && <p className="text-caption" style={{ color: 'var(--fg-critical)' }}>비밀번호가 올바르지 않습니다. 다시 확인해 주세요.</p>}
          <button type="submit" className="btn-primary">
            확인
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="gutter" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="text-heading-large">선생님 마당</h2>
        <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'var(--seed-color-carrot-600)', cursor: 'pointer', padding: '8px', fontWeight: 500 }}>
          로그아웃
        </button>
      </div>
      <p className="text-body" style={{ marginTop: '12px' }}>대시보드 기능이 곧 추가될 예정입니다.</p>
    </div>
  );
}
