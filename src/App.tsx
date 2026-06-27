import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Notice from './pages/Notice';
import Bookmark from './pages/Bookmark';
import Apps from './pages/Apps';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/notice" replace />} />
          <Route path="notice" element={<Notice />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="apps" element={<Apps />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
