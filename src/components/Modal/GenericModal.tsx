import { useEffect, useRef } from 'react';
import useOutSideClick from '../../hooks/useOutSideClick';
import './GenericModal.css';

type PropTypes = {
    children: React.ReactNode;
    title: string;
    onClose: () => unknown;
};

const GenericModal: React.FC<PropTypes> = ({ children, title, onClose }) => {
    useEffect(() => {
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', closeOnEscape, false);
        return () => document.removeEventListener('keydown', closeOnEscape, false);
    });

    const modalRef = useRef(null);
    useOutSideClick(modalRef, onClose);

    return (
        <>
            <div className="modal-blur fade-in" />

            <div ref={modalRef} className="modal fade-in">
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

export default GenericModal;
