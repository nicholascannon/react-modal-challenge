import { useEffect } from 'react';
import './Modal.css';

type PropTypes = {
    children: React.ReactNode;
    title: string;
    onClose: () => unknown;
};

const Modal: React.FC<PropTypes> = ({ children, title, onClose }) => {
    useEffect(() => {
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', closeOnEscape, false);
        return () => document.removeEventListener('keydown', closeOnEscape, false);
    });

    return (
        <>
            <div className="modal-blur fade-in" />
            <div className="modal fade-in">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="modal-close" onClick={onClose}>
                        <img src="imgs/icons/close.svg" alt="Close Modal" />
                    </button>
                </div>
                <div className="modal-content">{children}</div>
            </div>
        </>
    );
};

export default Modal;
