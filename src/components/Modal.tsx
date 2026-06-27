import './Modal.css';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

export default function Modal({ isOpen, title, content, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="text-heading-large">{title}</h2>
          <button onClick={onClose} className="modal-close-btn">
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          <pre className="text-body-small modal-text-content">{content}</pre>
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="btn-primary" style={{ width: '100%' }}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
