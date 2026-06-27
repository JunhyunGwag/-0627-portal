import { Outlet, NavLink } from 'react-router-dom';
import { Home as HomeIcon, Bell, Bookmark as BookmarkIcon, LayoutGrid, Settings } from 'lucide-react';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          <h1 className="text-title">5학년 3반 학습포털</h1>
        </div>
        <nav className="top-nav-bar">
          <NavLink to="/" className={({ isActive }: { isActive: boolean }) => `nav-item ${isActive ? 'active' : ''}`} end>
            <span className="nav-text">홈</span>
          </NavLink>
          <NavLink to="/notice" className={({ isActive }: { isActive: boolean }) => `nav-item ${isActive ? 'active' : ''}`}>
            <span className="nav-text">공지사항</span>
          </NavLink>
          <NavLink to="/bookmark" className={({ isActive }: { isActive: boolean }) => `nav-item ${isActive ? 'active' : ''}`}>
            <span className="nav-text">웹사이트</span>
          </NavLink>
          <NavLink to="/apps" className={({ isActive }: { isActive: boolean }) => `nav-item ${isActive ? 'active' : ''}`}>
            <span className="nav-text">학습앱</span>
          </NavLink>
          <NavLink to="/admin" className={({ isActive }: { isActive: boolean }) => `nav-item ${isActive ? 'active' : ''}`}>
            <span className="nav-text">선생님</span>
          </NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
