import { Outlet, NavLink } from 'react-router-dom';
import { Bell, Bookmark as BookmarkIcon, LayoutGrid, Settings } from 'lucide-react';
import './Layout.css';

const Layout = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="text-title">우리반 학습 웹포털</h1>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <nav className="bottom-tab-bar">
        <NavLink to="/notice" className={({ isActive }) => `tab-item ${isActive ? 'active' : ''}`}>
          <Bell size={24} />
          <span className="text-caption">공지사항</span>
        </NavLink>
        <NavLink to="/bookmark" className={({ isActive }) => `tab-item ${isActive ? 'active' : ''}`}>
          <BookmarkIcon size={24} />
          <span className="text-caption">웹사이트</span>
        </NavLink>
        <NavLink to="/apps" className={({ isActive }) => `tab-item ${isActive ? 'active' : ''}`}>
          <LayoutGrid size={24} />
          <span className="text-caption">학습앱</span>
        </NavLink>
        <NavLink to="/admin" className={({ isActive }) => `tab-item ${isActive ? 'active' : ''}`}>
          <Settings size={24} />
          <span className="text-caption">선생님</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Layout;
