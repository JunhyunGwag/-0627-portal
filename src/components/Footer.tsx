import { useState } from 'react';
import Modal from './Modal';
import { termsContent } from '../data/terms';
import { privacyContent } from '../data/privacy';
import './Footer.css';

export default function Footer() {
  const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'terms' | 'privacy' | null }>({
    isOpen: false,
    type: null,
  });

  const handleOpen = (type: 'terms' | 'privacy') => {
    setModalState({ isOpen: true, type });
  };

  const handleClose = () => {
    setModalState({ isOpen: false, type: null });
  };

  return (
    <>
      <footer className="app-footer">
        <div className="footer-links">
          <button onClick={() => handleOpen('terms')} className="text-caption footer-link-btn">
            이용약관
          </button>
          <span className="footer-divider">|</span>
          <button onClick={() => handleOpen('privacy')} className="text-caption footer-link-btn" style={{ fontWeight: 700 }}>
            개인정보처리방침
          </button>
        </div>
        
        <div className="footer-info text-caption">
          <p>© 2026 거원초 곽준현. All rights reserved.</p>
          <p>정보관리책임자: 곽준현 교사 (서울거원초등학교)</p>
          <p>문의: 02-000-0000</p>
        </div>
      </footer>

      <Modal
        isOpen={modalState.isOpen}
        title={modalState.type === 'terms' ? '이용약관' : '개인정보처리방침'}
        content={modalState.type === 'terms' ? termsContent : privacyContent}
        onClose={handleClose}
      />
    </>
  );
}
